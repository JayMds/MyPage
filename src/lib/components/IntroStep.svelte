<script>
    import * as Card from "$lib/components/ui/card";
    import PlainText from './PlainText.svelte';
    import RichText from './RichText.svelte';
    import {goto} from "$app/navigation";

    export let contenu;
    export let hardLink;
    function navLink() {
        hardLink ? goto(hardLink) : null
    }
</script>

<button on:click={navLink} tabindex="0" class="group transition-colors">
    <Card.Root class="group-hover:shadow-xl transition-shadow">

<!--    Header    -->
        <Card.Header>
            <Card.Title class=" transition-colors">
                <PlainText bind:content={contenu.label} />
            </Card.Title>
            <Card.Description>
                <PlainText bind:content={contenu.title} />
            </Card.Description>
        </Card.Header>
<!--    Contenu    -->
        <Card.Content>
            <div class="relative mb-8 rounded-md">
                <slot/>
            </div>
            <RichText bind:content={contenu.description} />
        </Card.Content>
<!--    Footer    -->
        <Card.Footer>
        </Card.Footer>

    </Card.Root>
</button>

