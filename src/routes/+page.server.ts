import supabase from "$lib/db/db";

export const load = async () => {
    let res=await supabase.from("posts").select("*")
    console.log(res)
    return{
        res:res.data
    }
};
