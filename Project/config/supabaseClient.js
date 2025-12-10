const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = 'https://lzrlwykwshqdrtjgbhea.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx6cmx3eWt3c2hxZHJ0amdiaGVhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjUzNTUwMDksImV4cCI6MjA4MDkzMTAwOX0.rbLCHhko5jNLkb_kvIO4fPXYUMthG7Sn2Ar133LDdBc'; // <-- Dán key mới vào đây

const supabase = createClient(supabaseUrl, supabaseKey);

module.exports = { supabase };