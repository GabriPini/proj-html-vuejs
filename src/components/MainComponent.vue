<template>
  <main class="">
      <!-- Main Scomposto in 6 componenti cosi da porteli gestire e modificare singolarmente con piu facilità -->
      <FirstMainSection id="Meet"/>
      <SecondMainSection id="news"/>
      <ThirdMainSection />
      <FourthMainSection id="Fans"/>
      <FifthMainSection id="liveDates"/>
      <SixMainSection />
  </main>
</template>

<script>
import FirstMainSection from './FirstMainSection.vue'
import SecondMainSection from './SecondMainSection.vue'
import ThirdMainSection from './ThirdMainSection.vue'
import FourthMainSection from './FourthMainSection.vue'
import FifthMainSection from './FifthMainSection.vue'
import SixMainSection from './SixMainSection.vue'
export default {
 components: { 
     FirstMainSection ,
    SecondMainSection,
    ThirdMainSection,
    FourthMainSection,
    FifthMainSection,
    SixMainSection

    
    },
    name:'MainComponent'

}
</script>


<style lang="scss" scoped>
main{
    color: white;
}





</style>