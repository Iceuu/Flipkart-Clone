

import { createClient } from "@supabase/supabase-js";

// Create a single supabase client for interacting with your database
const supabase = createClient(
    "https://vtbhtqkedrofacytmmfi.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ0Ymh0cWtlZHJvZmFjeXRtbWZpIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTY0MDczNzAsImV4cCI6MjAxMTk4MzM3MH0.e1n4qa4WN2IV7XbytWKXYGi5aXXx7hsVSqRj5w56Y2I"
);

export default supabase;
