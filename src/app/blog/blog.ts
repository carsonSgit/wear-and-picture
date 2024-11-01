import { createClient } from "@/utils/supabase/client";

interface Blog {
    id: number;
    image: string;
    title: string;
    text: string;
}

export default async function getBlogs(): Promise<Blog[] | null> {
    const supabase = await createClient();
    const { data: blogs, error } = await supabase.from("blogs").select();

    if (error) {
        console.error("Error fetching blogs:", error);
        return null;
    }


    return blogs as Blog[];
}
