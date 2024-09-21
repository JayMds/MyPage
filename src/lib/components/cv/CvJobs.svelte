<script>
import RichText from "$lib/components/RichText.svelte";

export let content
</script>
<div class="flex flex-col items-center bg-stone-300 rounded-3xl p-8">
    <div class=" text-justify mb-[40px] text-sm" >
        <RichText bind:content={content} />
    </div>
</div>