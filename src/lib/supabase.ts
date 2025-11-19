import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type Profile = {
  id: string;
  email: string;
  full_name: string | null;
  phone: string | null;
  created_at: string;
  updated_at: string;
};

export type Order = {
  id: string;
  user_id: string;
  package_type: 'light_water_air' | 'full_screen' | 'full_screen_lab';
  price: number;
  status: 'pending_payment' | 'pending_info' | 'processing' | 'completed' | 'cancelled';
  stripe_payment_id: string | null;
  created_at: string;
  updated_at: string;
};

export type PropertyAssessment = {
  id: string;
  order_id: string;
  user_id: string;
  property_address: string;
  property_postcode: string;
  property_type: string;
  bedrooms: number;
  preferred_assessment_date: string;
  additional_notes: string | null;
  created_at: string;
  updated_at: string;
};

export type SampleReportRequest = {
  id: string;
  email: string;
  full_name: string | null;
  sent_at: string | null;
  created_at: string;
};
