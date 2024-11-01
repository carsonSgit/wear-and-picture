import { createClient } from "@/utils/supabase/client";

export default async function getBlogs() {
    const supabase = await createClient();
    const { data: blogs } = await supabase.from("blogs").select();

    console.log("Logging blogs...");
    console.log(blogs);
    console.log("Supabase...");
    console.log(supabase);
}