import supabase from '$lib/db/db';
import type { PageServerLoad } from './$types';

export const load = (async () => {
    let res=await supabase.from("posts").select("*")
    console.log(res)
    return{
        res:res.data
    }
}) satisfies PageServerLoad;