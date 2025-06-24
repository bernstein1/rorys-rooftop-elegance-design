
-- Drop the existing problematic table
DROP TABLE IF EXISTS public."Contact Us";

-- Create a new, clean contact_messages table with proper structure
CREATE TABLE public.contact_messages (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE public.contact_messages ENABLE ROW LEVEL SECURITY;

-- Create a simple policy that allows anyone to insert contact messages
CREATE POLICY "Allow public contact form submissions"
ON public.contact_messages
FOR INSERT 
WITH CHECK (true);

-- Prevent public reading of messages (only admins can read via dashboard)
CREATE POLICY "Deny public read access to contact messages"
ON public.contact_messages
FOR SELECT
USING (false);
