<script>
import PlainText from "$lib/components/PlainText.svelte"

let content = "ouh yeah"
</script>

<div class="flex flex-col items-center bg-stone-300 rounded-3xl w-[50%] p-8">
    <div class="text-center mb-[40px]" >
        <PlainText bind:content={content} />

    </div>
</div>