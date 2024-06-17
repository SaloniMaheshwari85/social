<script lang="ts">
    import type { PageData } from './$types';
    
    
    export let data: PageData;
    let allposts:any=data.res
</script>
<div class="px-2 md:px-20">
    <div class="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:gap-8">
       {#each allposts as item}
        <div >
            <img src={item.image} class="h-40 w-40 rounded-lg" alt="">
            <h1>{item.title}</h1>
        </div>
       {/each}
      </div>
</div>