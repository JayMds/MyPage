<script>
import PlainText from "../PlainText.svelte";
import Image from "$lib/components/Image.svelte";
export let resume

let metier = "Concepteur Développeur d'Application"
let resume_pic = '/images/resume_pic_400x450.webp'
</script>

<div class="flex flex-col items-center bg-black rounded-3xl p-8">

   <Image
           class="block bg-white rounded-3xl "
           maxWidth="384"
           maxHeight="384"
           quality="1"
           bind:src={resume_pic}
           alt="Photo Mendes Jean Claude"
   />

   <div class="text text-white text-center mb-[40px]" >

      <div class="font-extrabold text-5xl my-4">
         <PlainText bind:content={resume.nom} />
         <br>
         <PlainText bind:content={resume.prenom} />
      </div>

      <div class="font-extrabold text-3xl my-4">
         <PlainText bind:content={metier} />
      </div>

      <div>
         <PlainText bind:content={resume.mail} />
      </div>
      <div>
         <PlainText bind:content={resume.tel} />
      </div>
      <div>
         <PlainText bind:content={resume.git} />
      </div>
      <div>
         <PlainText bind:content={resume.linkedin} />
      </div>
   </div>

</div>