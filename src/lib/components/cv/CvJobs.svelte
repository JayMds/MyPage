<script>
import PlainText from "$lib/components/PlainText.svelte"
import RichText from "$lib/components/RichText.svelte";

let content = "Au sein d'une équipe pluridisciplinaire composée d'un DBA, d'un CTO et de développeurs Delphi, j'ai participé à plusieurs projets clients et internes dans le secteur de la mutuelle santé. Mes missions incluent :\n" +
    "Conception et développement : Création d'une application de prise de rendez-vous (physiques et en visioconférence) basée sur Jitsi et FullCalendar.js, avec une stack PHP, HTML, Bootstrap CSS et Ajax.\n" +
    "Développement d'applications : Conception de tunnels de souscription en ligne, incluant des fonctionnalités de devis et d'adhésion, basés sur SvelteKit (front-end) et Slim4 (Web Services), et intégrant la solution Yousign.\n" +
    "API et sécurité : Développement d'API en PHP avec une attention particulière portée à la cybersécurité, basées sur le framework Slim4.\n" +
    "Fonctionnalités et maintenance : Développement de nouvelles fonctionnalités et maintenance continue pour les applications d'Espaces Adhérents, Courtiers et Professionnels Résolution de tickets clients (+131 tickets résolus).\n" +
    "Automatisation et CI/CD : Mise en place de tests unitaires, end-to-end et HTTP automatisés, ainsi que des scripts CI/CD pour le build et la livraison.\n" +
    "Analyse de données : Production de templates Power BI, scripts CRON, requêtes SQL et statistiques pour le reporting et l’analyse de données.\n" +
    "Mise en place d’un backend Supabase auto-hébergé via des containers Docker.\n" +
    "."
</script>

<div class="flex flex-col items-center bg-stone-300 rounded-3xl p-8">
    <div class="text-center mb-[40px]" >
        <RichText bind:content={content} />
    </div>
</div>