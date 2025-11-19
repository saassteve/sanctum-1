/*
  # Add Reports and Admin System

  1. New Tables
    - `reports`
      - `id` (uuid, primary key)
      - `order_id` (uuid, references orders)
      - `user_id` (uuid, references profiles)
      - `report_url` (text) - URL to PDF report
      - `report_type` (text) - 'preliminary', 'final'
      - `sanctum_score` (integer) - Overall score 0-100
      - `summary` (text) - Executive summary
      - `uploaded_at` (timestamp)
      - `uploaded_by` (uuid, references profiles) - Admin who uploaded
      - `created_at` (timestamp)
    
    - `report_metrics`
      - `id` (uuid, primary key)
      - `report_id` (uuid, references reports)
      - `category` (text) - 'air_quality', 'water_quality', 'emf', 'light', 'materials'
      - `score` (integer) - Category score 0-100
      - `status` (text) - 'excellent', 'good', 'fair', 'poor', 'critical'
      - `key_findings` (text)
      - `created_at` (timestamp)
    
  2. Updates to existing tables
    - Add `role` column to profiles ('customer', 'admin')
    - Add `stage` column to orders to track progress
    - Add more fields to property_assessments
  
  3. Security
    - Enable RLS on new tables
    - Customers can view their own reports
    - Only admins can upload/manage reports
    - Add admin-only policies
*/

-- Add role to profiles
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'profiles' AND column_name = 'role'
  ) THEN
    ALTER TABLE profiles ADD COLUMN role text DEFAULT 'customer' CHECK (role IN ('customer', 'admin'));
  END IF;
END $$;

-- Add stage to orders
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'orders' AND column_name = 'stage'
  ) THEN
    ALTER TABLE orders ADD COLUMN stage text DEFAULT 'submitted' CHECK (stage IN ('submitted', 'scheduled', 'assessment_in_progress', 'lab_analysis', 'report_generation', 'completed'));
  END IF;
END $$;

-- Add more fields to property_assessments
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'property_assessments' AND column_name = 'property_age'
  ) THEN
    ALTER TABLE property_assessments ADD COLUMN property_age text;
    ALTER TABLE property_assessments ADD COLUMN construction_type text;
    ALTER TABLE property_assessments ADD COLUMN heating_system text;
    ALTER TABLE property_assessments ADD COLUMN water_supply text;
    ALTER TABLE property_assessments ADD COLUMN building_concerns text;
    ALTER TABLE property_assessments ADD COLUMN health_priorities text;
    ALTER TABLE property_assessments ADD COLUMN occupancy_status text;
    ALTER TABLE property_assessments ADD COLUMN access_instructions text;
    ALTER TABLE property_assessments ADD COLUMN contact_phone text;
    ALTER TABLE property_assessments ADD COLUMN alternative_contact text;
  END IF;
END $$;

-- Create reports table
CREATE TABLE IF NOT EXISTS reports (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  order_id uuid REFERENCES orders(id) ON DELETE CASCADE NOT NULL,
  user_id uuid REFERENCES profiles(id) ON DELETE CASCADE NOT NULL,
  report_url text,
  report_type text DEFAULT 'final' CHECK (report_type IN ('preliminary', 'final')),
  sanctum_score integer CHECK (sanctum_score >= 0 AND sanctum_score <= 100),
  summary text,
  uploaded_at timestamptz DEFAULT now(),
  uploaded_by uuid REFERENCES profiles(id),
  created_at timestamptz DEFAULT now()
);

ALTER TABLE reports ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own reports"
  ON reports FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Admins can view all reports"
  ON reports FOR SELECT
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM profiles
      WHERE profiles.id = auth.uid()
      AND profiles.role = 'admin'
    )
  );

CREATE POLICY "Admins can insert reports"
  ON reports FOR INSERT
  TO authenticated
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM profiles
      WHERE profiles.id = auth.uid()
      AND profiles.role = 'admin'
    )
  );

CREATE POLICY "Admins can update reports"
  ON reports FOR UPDATE
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM profiles
      WHERE profiles.id = auth.uid()
      AND profiles.role = 'admin'
    )
  )
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM profiles
      WHERE profiles.id = auth.uid()
      AND profiles.role = 'admin'
    )
  );

CREATE POLICY "Admins can delete reports"
  ON reports FOR DELETE
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM profiles
      WHERE profiles.id = auth.uid()
      AND profiles.role = 'admin'
    )
  );

-- Create report_metrics table
CREATE TABLE IF NOT EXISTS report_metrics (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  report_id uuid REFERENCES reports(id) ON DELETE CASCADE NOT NULL,
  category text NOT NULL CHECK (category IN ('air_quality', 'water_quality', 'emf', 'light', 'materials')),
  score integer CHECK (score >= 0 AND score <= 100),
  status text CHECK (status IN ('excellent', 'good', 'fair', 'poor', 'critical')),
  key_findings text,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE report_metrics ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own report metrics"
  ON report_metrics FOR SELECT
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM reports
      WHERE reports.id = report_metrics.report_id
      AND reports.user_id = auth.uid()
    )
  );

CREATE POLICY "Admins can view all report metrics"
  ON report_metrics FOR SELECT
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM profiles
      WHERE profiles.id = auth.uid()
      AND profiles.role = 'admin'
    )
  );

CREATE POLICY "Admins can manage report metrics"
  ON report_metrics FOR ALL
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM profiles
      WHERE profiles.id = auth.uid()
      AND profiles.role = 'admin'
    )
  )
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM profiles
      WHERE profiles.id = auth.uid()
      AND profiles.role = 'admin'
    )
  );

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_reports_order_id ON reports(order_id);
CREATE INDEX IF NOT EXISTS idx_reports_user_id ON reports(user_id);
CREATE INDEX IF NOT EXISTS idx_report_metrics_report_id ON report_metrics(report_id);
CREATE INDEX IF NOT EXISTS idx_profiles_role ON profiles(role);
CREATE INDEX IF NOT EXISTS idx_orders_stage ON orders(stage);

-- Update orders policies to allow admins to view all orders
CREATE POLICY "Admins can view all orders"
  ON orders FOR SELECT
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM profiles
      WHERE profiles.id = auth.uid()
      AND profiles.role = 'admin'
    )
  );

CREATE POLICY "Admins can update all orders"
  ON orders FOR UPDATE
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM profiles
      WHERE profiles.id = auth.uid()
      AND profiles.role = 'admin'
    )
  )
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM profiles
      WHERE profiles.id = auth.uid()
      AND profiles.role = 'admin'
    )
  );

-- Allow admins to view all property assessments
CREATE POLICY "Admins can view all property assessments"
  ON property_assessments FOR SELECT
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM profiles
      WHERE profiles.id = auth.uid()
      AND profiles.role = 'admin'
    )
  );

CREATE POLICY "Admins can update all property assessments"
  ON property_assessments FOR UPDATE
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM profiles
      WHERE profiles.id = auth.uid()
      AND profiles.role = 'admin'
    )
  )
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM profiles
      WHERE profiles.id = auth.uid()
      AND profiles.role = 'admin'
    )
  );
