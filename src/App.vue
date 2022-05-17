<template>
 <div id="app">
  <HeaderComponent :linkList="linkList"/>
  <MainComponent />
  <FooterComponent :linkList="linkList"/>
 </div>
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent.vue";
import MainComponent from '@/components/MainComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';
export default {
 name: "app",
 components: {
   HeaderComponent,
  MainComponent,
  FooterComponent

 },
  data: function () {
  return {
    /* Lista delle voci dell menu di headere e footer */
   linkList: [
    {
    text: 'Home',
    href: '#home',
    class:'text_active'
    },
     {
    text: 'Meet The Band',
    href: '#Meet',
    class:'text_disabled'
    },
     {
    text: 'Live Dates',
    href: '#liveDates',
    class:'text_disabled'
    },
     {
    text: 'Latest News',
    href: '#news',
    class:'text_disabled'
    },
     {
    text: 'Albums',
    href: '#',
    class:'text_disabled'
    },
     {
    text: 'Fans',
    href: '#Fans',
    class:'text_disabled'
    },

   ],
  };
 },
};
</script>

<style lang="scss">
@import "@/assets/scss/style.scss";
@import "@/assets/scss/variables.scss";
</style>
