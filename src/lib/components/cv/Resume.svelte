<script>
import PlainText from "../PlainText.svelte";
export let resume

</script>

<div>
   <PlainText bind:content={resume.nom} /><br>
   <PlainText bind:content={resume.prenom} /><br>
   <PlainText bind:content={resume.mail} /><br>
   <PlainText bind:content={resume.tel} /><br>
</div>