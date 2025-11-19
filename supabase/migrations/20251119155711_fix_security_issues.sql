/*
  # Fix Security and Performance Issues

  1. Foreign Key Indexes
    - Add missing index for reports.uploaded_by foreign key
  
  2. RLS Performance Optimization
    - Update all RLS policies to use (select auth.uid()) instead of auth.uid()
    - This prevents re-evaluation for each row and improves performance
  
  3. Multiple Permissive Policies Consolidation
    - Consolidate multiple SELECT/UPDATE policies into single policies with OR conditions
    - This simplifies policy evaluation and improves performance
  
  4. Unused Indexes Cleanup
    - Drop unused indexes that aren't being utilized
  
  5. Function Search Path Fix
    - Update update_updated_at_column function with secure search_path
*/

-- Add missing foreign key index
CREATE INDEX IF NOT EXISTS idx_reports_uploaded_by ON reports(uploaded_by);

-- Drop existing RLS policies that need optimization
DROP POLICY IF EXISTS "Users can view own profile" ON profiles;
DROP POLICY IF EXISTS "Users can update own profile" ON profiles;
DROP POLICY IF EXISTS "Users can insert own profile" ON profiles;
DROP POLICY IF EXISTS "Users can view own orders" ON orders;
DROP POLICY IF EXISTS "Users can create own orders" ON orders;
DROP POLICY IF EXISTS "Users can update own orders" ON orders;
DROP POLICY IF EXISTS "Admins can view all orders" ON orders;
DROP POLICY IF EXISTS "Admins can update all orders" ON orders;
DROP POLICY IF EXISTS "Users can view own assessments" ON property_assessments;
DROP POLICY IF EXISTS "Users can create own assessments" ON property_assessments;
DROP POLICY IF EXISTS "Users can update own assessments" ON property_assessments;
DROP POLICY IF EXISTS "Admins can view all property assessments" ON property_assessments;
DROP POLICY IF EXISTS "Admins can update all property assessments" ON property_assessments;
DROP POLICY IF EXISTS "Users can view own reports" ON reports;
DROP POLICY IF EXISTS "Admins can view all reports" ON reports;
DROP POLICY IF EXISTS "Admins can insert reports" ON reports;
DROP POLICY IF EXISTS "Admins can update reports" ON reports;
DROP POLICY IF EXISTS "Admins can delete reports" ON reports;
DROP POLICY IF EXISTS "Users can view own report metrics" ON report_metrics;
DROP POLICY IF EXISTS "Admins can view all report metrics" ON report_metrics;
DROP POLICY IF EXISTS "Admins can manage report metrics" ON report_metrics;

-- Recreate optimized RLS policies for profiles
CREATE POLICY "Users can view own profile"
  ON profiles FOR SELECT
  TO authenticated
  USING ((select auth.uid()) = id);

CREATE POLICY "Users can update own profile"
  ON profiles FOR UPDATE
  TO authenticated
  USING ((select auth.uid()) = id)
  WITH CHECK ((select auth.uid()) = id);

CREATE POLICY "Users can insert own profile"
  ON profiles FOR INSERT
  TO authenticated
  WITH CHECK ((select auth.uid()) = id);

-- Recreate consolidated optimized RLS policies for orders
CREATE POLICY "Users and admins can view orders"
  ON orders FOR SELECT
  TO authenticated
  USING (
    (select auth.uid()) = user_id
    OR EXISTS (
      SELECT 1 FROM profiles
      WHERE profiles.id = (select auth.uid())
      AND profiles.role = 'admin'
    )
  );

CREATE POLICY "Users can create own orders"
  ON orders FOR INSERT
  TO authenticated
  WITH CHECK ((select auth.uid()) = user_id);

CREATE POLICY "Users and admins can update orders"
  ON orders FOR UPDATE
  TO authenticated
  USING (
    (select auth.uid()) = user_id
    OR EXISTS (
      SELECT 1 FROM profiles
      WHERE profiles.id = (select auth.uid())
      AND profiles.role = 'admin'
    )
  )
  WITH CHECK (
    (select auth.uid()) = user_id
    OR EXISTS (
      SELECT 1 FROM profiles
      WHERE profiles.id = (select auth.uid())
      AND profiles.role = 'admin'
    )
  );

-- Recreate consolidated optimized RLS policies for property_assessments
CREATE POLICY "Users and admins can view assessments"
  ON property_assessments FOR SELECT
  TO authenticated
  USING (
    (select auth.uid()) = user_id
    OR EXISTS (
      SELECT 1 FROM profiles
      WHERE profiles.id = (select auth.uid())
      AND profiles.role = 'admin'
    )
  );

CREATE POLICY "Users can create own assessments"
  ON property_assessments FOR INSERT
  TO authenticated
  WITH CHECK ((select auth.uid()) = user_id);

CREATE POLICY "Users and admins can update assessments"
  ON property_assessments FOR UPDATE
  TO authenticated
  USING (
    (select auth.uid()) = user_id
    OR EXISTS (
      SELECT 1 FROM profiles
      WHERE profiles.id = (select auth.uid())
      AND profiles.role = 'admin'
    )
  )
  WITH CHECK (
    (select auth.uid()) = user_id
    OR EXISTS (
      SELECT 1 FROM profiles
      WHERE profiles.id = (select auth.uid())
      AND profiles.role = 'admin'
    )
  );

-- Recreate consolidated optimized RLS policies for reports
CREATE POLICY "Users and admins can view reports"
  ON reports FOR SELECT
  TO authenticated
  USING (
    (select auth.uid()) = user_id
    OR EXISTS (
      SELECT 1 FROM profiles
      WHERE profiles.id = (select auth.uid())
      AND profiles.role = 'admin'
    )
  );

CREATE POLICY "Admins can insert reports"
  ON reports FOR INSERT
  TO authenticated
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM profiles
      WHERE profiles.id = (select auth.uid())
      AND profiles.role = 'admin'
    )
  );

CREATE POLICY "Admins can update reports"
  ON reports FOR UPDATE
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM profiles
      WHERE profiles.id = (select auth.uid())
      AND profiles.role = 'admin'
    )
  )
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM profiles
      WHERE profiles.id = (select auth.uid())
      AND profiles.role = 'admin'
    )
  );

CREATE POLICY "Admins can delete reports"
  ON reports FOR DELETE
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM profiles
      WHERE profiles.id = (select auth.uid())
      AND profiles.role = 'admin'
    )
  );

-- Recreate consolidated optimized RLS policies for report_metrics
CREATE POLICY "Users and admins can view report metrics"
  ON report_metrics FOR SELECT
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM reports
      WHERE reports.id = report_metrics.report_id
      AND reports.user_id = (select auth.uid())
    )
    OR EXISTS (
      SELECT 1 FROM profiles
      WHERE profiles.id = (select auth.uid())
      AND profiles.role = 'admin'
    )
  );

CREATE POLICY "Admins can manage report metrics"
  ON report_metrics FOR INSERT
  TO authenticated
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM profiles
      WHERE profiles.id = (select auth.uid())
      AND profiles.role = 'admin'
    )
  );

CREATE POLICY "Admins can update report metrics"
  ON report_metrics FOR UPDATE
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM profiles
      WHERE profiles.id = (select auth.uid())
      AND profiles.role = 'admin'
    )
  )
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM profiles
      WHERE profiles.id = (select auth.uid())
      AND profiles.role = 'admin'
    )
  );

CREATE POLICY "Admins can delete report metrics"
  ON report_metrics FOR DELETE
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM profiles
      WHERE profiles.id = (select auth.uid())
      AND profiles.role = 'admin'
    )
  );

-- Drop unused indexes
DROP INDEX IF EXISTS idx_report_metrics_report_id;
DROP INDEX IF EXISTS idx_profiles_role;
DROP INDEX IF EXISTS idx_orders_stage;
DROP INDEX IF EXISTS idx_orders_status;
DROP INDEX IF EXISTS idx_property_assessments_user_id;
DROP INDEX IF EXISTS idx_sample_report_requests_email;
DROP INDEX IF EXISTS idx_reports_order_id;

-- Recreate only the indexes that are actually needed for foreign keys and common queries
CREATE INDEX IF NOT EXISTS idx_reports_order_id ON reports(order_id);
CREATE INDEX IF NOT EXISTS idx_reports_user_id ON reports(user_id);
CREATE INDEX IF NOT EXISTS idx_report_metrics_report_id ON report_metrics(report_id);
CREATE INDEX IF NOT EXISTS idx_orders_user_id ON orders(user_id);
CREATE INDEX IF NOT EXISTS idx_property_assessments_order_id ON property_assessments(order_id);

-- Fix function search path
DROP FUNCTION IF EXISTS update_updated_at_column() CASCADE;

CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public, pg_temp
AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$;

-- Recreate triggers if they existed
DO $$
BEGIN
  IF EXISTS (SELECT 1 FROM information_schema.tables WHERE table_name = 'profiles') THEN
    DROP TRIGGER IF EXISTS update_profiles_updated_at ON profiles;
    CREATE TRIGGER update_profiles_updated_at
      BEFORE UPDATE ON profiles
      FOR EACH ROW
      EXECUTE FUNCTION update_updated_at_column();
  END IF;
END $$;
