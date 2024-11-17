import { createClient } from "@/utils/supabase/client";

interface Inspo {
    id: number;
    image: string;
    title: string;
    text: string;
    image_source: string;
    image_source_link: string;
}

export default async function getInspo(): Promise<Inspo[] | null> {
    const supabase = await createClient();
    const { data: inspo, error } = await supabase
        .from("inspo")
        .select()
        .order("id", { ascending: true });

    if (error) {
        console.error("Error fetching inspo:", error);
        return null;
    }

    return inspo as Inspo[];
}
