/*
  # Initial Sanctum Database Schema

  1. New Tables
    - `profiles`
      - `id` (uuid, references auth.users)
      - `email` (text)
      - `full_name` (text)
      - `phone` (text, optional)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)
    
    - `orders`
      - `id` (uuid, primary key)
      - `user_id` (uuid, references profiles)
      - `package_type` (text) - 'light_water_air', 'full_screen', 'full_screen_lab'
      - `price` (integer) - price in pence
      - `status` (text) - 'pending_payment', 'pending_info', 'processing', 'completed', 'cancelled'
      - `stripe_payment_id` (text, optional)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)
    
    - `property_assessments`
      - `id` (uuid, primary key)
      - `order_id` (uuid, references orders)
      - `user_id` (uuid, references profiles)
      - `property_address` (text)
      - `property_postcode` (text)
      - `property_type` (text)
      - `bedrooms` (integer)
      - `preferred_assessment_date` (date)
      - `additional_notes` (text, optional)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)
    
    - `sample_report_requests`
      - `id` (uuid, primary key)
      - `email` (text)
      - `full_name` (text, optional)
      - `sent_at` (timestamp, optional)
      - `created_at` (timestamp)

  2. Security
    - Enable RLS on all tables
    - Add policies for authenticated users to access their own data
    - Add policy for sample report requests (public insert only)
*/

-- Create profiles table
CREATE TABLE IF NOT EXISTS profiles (
  id uuid PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email text NOT NULL,
  full_name text,
  phone text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own profile"
  ON profiles FOR SELECT
  TO authenticated
  USING (auth.uid() = id);

CREATE POLICY "Users can update own profile"
  ON profiles FOR UPDATE
  TO authenticated
  USING (auth.uid() = id)
  WITH CHECK (auth.uid() = id);

CREATE POLICY "Users can insert own profile"
  ON profiles FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = id);

-- Create orders table
CREATE TABLE IF NOT EXISTS orders (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES profiles(id) ON DELETE CASCADE NOT NULL,
  package_type text NOT NULL CHECK (package_type IN ('light_water_air', 'full_screen', 'full_screen_lab')),
  price integer NOT NULL,
  status text DEFAULT 'pending_payment' CHECK (status IN ('pending_payment', 'pending_info', 'processing', 'completed', 'cancelled')),
  stripe_payment_id text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE orders ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own orders"
  ON orders FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can create own orders"
  ON orders FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own orders"
  ON orders FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

-- Create property_assessments table
CREATE TABLE IF NOT EXISTS property_assessments (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  order_id uuid REFERENCES orders(id) ON DELETE CASCADE NOT NULL,
  user_id uuid REFERENCES profiles(id) ON DELETE CASCADE NOT NULL,
  property_address text NOT NULL,
  property_postcode text NOT NULL,
  property_type text NOT NULL,
  bedrooms integer NOT NULL,
  preferred_assessment_date date NOT NULL,
  additional_notes text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE property_assessments ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own assessments"
  ON property_assessments FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can create own assessments"
  ON property_assessments FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own assessments"
  ON property_assessments FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

-- Create sample_report_requests table
CREATE TABLE IF NOT EXISTS sample_report_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text NOT NULL,
  full_name text,
  sent_at timestamptz,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE sample_report_requests ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can request sample report"
  ON sample_report_requests FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_orders_user_id ON orders(user_id);
CREATE INDEX IF NOT EXISTS idx_orders_status ON orders(status);
CREATE INDEX IF NOT EXISTS idx_property_assessments_order_id ON property_assessments(order_id);
CREATE INDEX IF NOT EXISTS idx_property_assessments_user_id ON property_assessments(user_id);
CREATE INDEX IF NOT EXISTS idx_sample_report_requests_email ON sample_report_requests(email);

-- Create function to automatically update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create triggers for updated_at
CREATE TRIGGER update_profiles_updated_at
  BEFORE UPDATE ON profiles
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_orders_updated_at
  BEFORE UPDATE ON orders
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_property_assessments_updated_at
  BEFORE UPDATE ON property_assessments
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();
