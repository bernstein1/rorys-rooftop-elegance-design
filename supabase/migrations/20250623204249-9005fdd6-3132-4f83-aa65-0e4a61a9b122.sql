-- Enable Row Level Security on the "Contact Us" table
ALTER TABLE public."Contact Us" ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert a contact message
CREATE POLICY "Allow public insert for contact messages"
ON public."Contact Us" FOR INSERT WITH CHECK (true);

-- Prevent public users from reading messages
CREATE POLICY "Deny public read access to contact messages"
ON public."Contact Us" FOR SELECT USING (false);
