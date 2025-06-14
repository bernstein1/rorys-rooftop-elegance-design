
-- Enable Row Level Security on the "Email Collection" table
ALTER TABLE public."Email Collection" ENABLE ROW LEVEL SECURITY;

-- Create a policy to allow anyone to add their email to the list.
-- This is necessary for your "Stay Informed" form to work.
CREATE POLICY "Allow public insert for email collection"
ON public."Email Collection" FOR INSERT WITH CHECK (true);

-- Create a policy to deny anyone from reading the list of emails.
-- This protects your users' data. You will still be able to see the data in your Supabase dashboard.
CREATE POLICY "Deny public read access to emails"
ON public."Email Collection" FOR SELECT USING (false);
