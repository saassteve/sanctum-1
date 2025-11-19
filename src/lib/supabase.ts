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
  role: 'customer' | 'admin';
  created_at: string;
  updated_at: string;
};

export type Order = {
  id: string;
  user_id: string;
  package_type: 'light_water_air' | 'full_screen' | 'full_screen_lab';
  price: number;
  status: 'pending_payment' | 'pending_info' | 'processing' | 'completed' | 'cancelled';
  stage: 'submitted' | 'scheduled' | 'assessment_in_progress' | 'lab_analysis' | 'report_generation' | 'completed';
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
  property_age: string | null;
  construction_type: string | null;
  heating_system: string | null;
  water_supply: string | null;
  building_concerns: string | null;
  health_priorities: string | null;
  occupancy_status: string | null;
  access_instructions: string | null;
  contact_phone: string | null;
  alternative_contact: string | null;
  created_at: string;
  updated_at: string;
};

export type Report = {
  id: string;
  order_id: string;
  user_id: string;
  report_url: string | null;
  report_type: 'preliminary' | 'final';
  sanctum_score: number | null;
  summary: string | null;
  uploaded_at: string;
  uploaded_by: string | null;
  created_at: string;
};

export type ReportMetric = {
  id: string;
  report_id: string;
  category: 'air_quality' | 'water_quality' | 'emf' | 'light' | 'materials';
  score: number | null;
  status: 'excellent' | 'good' | 'fair' | 'poor' | 'critical';
  key_findings: string | null;
  created_at: string;
};

export type SampleReportRequest = {
  id: string;
  email: string;
  full_name: string | null;
  sent_at: string | null;
  created_at: string;
};
