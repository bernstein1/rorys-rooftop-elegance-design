
// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

// Use environment variables if available, otherwise fall back to hardcoded values for development
const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL || 'https://mhxaakaeqwefnmguthet.supabase.co';
const SUPABASE_PUBLISHABLE_KEY = import.meta.env.VITE_SUPABASE_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1oeGFha2FlcXdlZm5tZ3V0aGV0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk5MzM1MTUsImV4cCI6MjA2NTUwOTUxNX0.L-mn5kKXLdjve2VZLqzPSSqMdGw216FBvF2rHA6BswA';

if (!SUPABASE_URL || !SUPABASE_PUBLISHABLE_KEY) {
  throw new Error('Supabase environment variables are not set');
}

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);
