<template>
  <section class="bg_custom text-center pb-5">
           <div class="mx-auto border_custom "></div>
          <h5 class="fw-bold display-5 pt-5">Music Is Life</h5>
          <hr class="w-25 mx-auto  m-4 textSecodary" >
          <div class="mx-5 px-5">
          <span class="textSecodary ">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem aut est ipsum incidunt beatae corrupti, hic magni non aperiam illo, ipsa provident eligendi quia eveniet maiores pariatur quod quasi quibusdam?</span>
          </div>
      </section>
</template>

<script>
export default {
    name:'FirstMainSection'

}
</script>

<style lang="scss" scoped>
/* importo regole scss per la customizzazione del testo e dei bottoni */
@import "@/assets/scss/commons.scss";
.border_custom {
 width: 300px;
 height: 10px;
 background-color: $buttonColor;
}

</style>

