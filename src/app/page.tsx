import { createClient } from '@supabase/supabase-js'

export default function Home() {
  const supabase = createClient(process.env.SUPABASE_URL!, process.env.SUPABASE_ANON_KEY!);


  return (
    <div className="flex justify-center">
      <h1>Title</h1>
    </div>
  );
}
