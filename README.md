import { createClient } from '@supabase/supabase-js';
const supabaseUrl = "https://xybxmetzpngkoqnnfqip.supabase.co";
const supabaseKey = "sb_publishable__Ew3BfG2XAnzWiOUBGMIjw_mUK5T1J3";
export const supabase = createClient(supabaseUrl, supabaseKey);
