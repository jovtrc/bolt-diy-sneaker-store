import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://cwuyjizfgxkuxoerbuns.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN3dXlqaXpmZ3hrdXhvZXJidW5zIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDA5NTQxODYsImV4cCI6MjA1NjUzMDE4Nn0.K9iRSCBUaGrFLVsLGNBmTwyawuhdbPQS8ZsoaZ5zSG8';

export const supabase = createClient(supabaseUrl, supabaseKey);
