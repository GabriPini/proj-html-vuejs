<template>
  <main class="">
      <FirstMainSection/>
      <SecondtMainSection/>
      <ThirdMainSection/>
      <FourthMainSection/>
      <FifthMainSection/>
      <SixMainSection/>
      <section class="bg_custom2">2</section>
      <section class="bg_custom3">3</section>
      <section class="cit">4</section>
      <section class="bg_custom2">5</section>
      <section class="bg_custom3">6</section>
    
  </main>
</template>

<script>
import FirstMainSection from './FirstMainSection.vue'
import SecondtMainSection from './SecondtMainSection.vue'
import ThirdMainSection from './ThirdMainSection.vue'
import FourthMainSection from './FourthMainSection.vue'
import FifthMainSection from './FifthMainSection.vue'
import SixMainSection from './SixMainSection.vue'
export default {
 components: { 
     FirstMainSection ,
    SecondtMainSection,
    ThirdMainSection,
    FourthMainSection,
    FifthMainSection,
    SixMainSection

    
    },
    name:'MainComponent'

}
</script>


<style lang="scss" scoped>
@import "@/assets/scss/commons.scss";
main{
    color: white;
}

.cit{
    background-image: url("@/assets/img/home-testimonial-parallax.jpg");
    background-position: center;
    height: 500px;
}



</style>