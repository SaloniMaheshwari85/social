<script>
    import Hero from "$lib/hero.svelte";
export let data;
let allposts=data.res
</script>
{JSON.stringify(allposts)}
<Hero/>

