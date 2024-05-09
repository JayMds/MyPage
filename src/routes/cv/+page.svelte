<script>
    import Footer from '$lib/components/Footer.svelte';
    import PlainText from '$lib/components/PlainText.svelte';
    import RichText from '$lib/components/RichText.svelte';
    import LoginMenu from '$lib/components/LoginMenu.svelte';
    import PrimaryButton from '$lib/components/PrimaryButton.svelte';
    import { fetchJSON } from '$lib/util';
    import { currentUser, isEditing } from '$lib/stores.js';
    import WebsiteHeader from '$lib/components/WebsiteHeader.svelte';
    import Resume from "$lib/components/cv/Resume.svelte";
    import {OWNER_DATA} from "$lib/constants.js";
    export let data;
    const PAGE_TITLE = 'Curriculum Vitae'
    let resume_section
    let showUserMenu = false,
        title,
        imprint;

    // --------------------------------------------------------------------------
    // DEFAULT PAGE CONTENT - AJDUST TO YOUR NEEDS
    // --------------------------------------------------------------------------

    function initOrReset() {
        $currentUser = data.currentUser;
        title = data.page?.title || PAGE_TITLE;
        imprint =
            data.page?.imprint ||
            [
                ['Ken Experiences GmbH', 'Mozartstraße 56', '4020 Linz, Austria'].join('<br/>'),
                [
                    'Managing Director: DI Michael Aufreiter',
                    'Register No: FN 408728x',
                    'Court: Linz',
                    'VAT ID: ATU68395257',
                    'Nigo'
                ].join('<br/>')
            ]
                .map(text => `<p>${text}</p>`)
                .join('\n');
        resume_section = OWNER_DATA
        $isEditing = false
    }

    initOrReset();

    function toggleEdit() {
        $isEditing = true;
        showUserMenu = false;
    }



    async function savePage() {
        if (!$currentUser) return alert('Sorry, you are not authorized.');
        try {
            fetchJSON('POST', '/api/save-page', {
                pageId: 'imprint',
                page: {
                    title,
                    imprint
                }
            });
            $isEditing = false;
        } catch (err) {
            console.error(err);
            alert('There was an error. Please try again.');
        }
    }
</script>

<svelte:head>
    <title>Curriculum Vitae</title>
</svelte:head>

<WebsiteHeader bind:showUserMenu on:cancel={initOrReset} on:save={savePage}>
    <PrimaryButton on:click={toggleEdit}>Edit page</PrimaryButton>
    <LoginMenu />
</WebsiteHeader>

<div class="py-12 sm:py-24">
    <div class="max-w-screen-md mx-auto px-6 md:text-xl">
        <h1 class="text-4xl md:text-7xl font-bold pb-8">
            <PlainText bind:content={title} />
        </h1>
        <div class="prose md:prose-xl pb-12 sm:pb-24">
            <Resume bind:resume={resume_section}/>

            <RichText multiLine bind:content={imprint} />
        </div>
    </div>
</div>

<Footer counter="/imprint" />
