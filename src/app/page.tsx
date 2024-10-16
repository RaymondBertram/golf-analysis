import Sidebar from "@/components/sidebar/sidebar.component";
import { createClient } from '@supabase/supabase-js'
import Image from "next/image";

export default function Home() {
  const supabase = createClient(process.env.SUPABASE_URL!, process.env.SUPABASE_ANON_KEY!);
  // console.log('supabase', supabase);

  // which structure?
  /*
    1. Write seperate file for client service
    2. Structure the concept into small pages
    3. Homepage should contain basic information
  */

  return (
    <div className="flex justify-center">
      <h1>Title</h1>
    </div>
  );
}
