<template>
 <div class="">
  <div class="footer_top bg_custom d-flex p-5 justify-content-between align-items-center">
   <img src="@/assets/img/logo_footer.png" alt="" />
   <div class="link_menu ">

    <LinkComponent :linkList="linkList" class="fs_10"/>
   </div>
  </div>

  <div class="footer_bottom bg_custom2 d-flex p-4 justify-content-between align-items-center">
     <span class="px-4">	&copy; Copyright 2012 - 2020 | AVADA THEME BY THEMEFUSION | ALL RIGHTS RESERVED | POWERED BY WORDPRESS</span>
     <div class="px-4 d-flex justify-content-between align-items-center gap-4 ">
       <a href=""><font-awesome-icon icon="fa-brands fa-facebook-f" class="icon" /></a>
       <a href=""><font-awesome-icon icon="fa-brands fa-twitter" class="icon"/></a>
       <a href=""><font-awesome-icon icon="fa-brands fa-instagram" class="icon"/></a>
       <a href=""><font-awesome-icon icon="fa-brands fa-youtube" class="icon" /></a>

     </div>
  </div>
 </div>
</template>

<script>
import LinkComponent from '@/components/LinkComponent.vue';
export default {
 components: { LinkComponent },
 name: "FooterComponent",

props:["linkList"]

};


</script>

<style lang="scss" scoped>
@import "@/assets/scss/commons.scss";
@import "@/assets/scss/links.scss";

.footer_bottom {
  color: $textSecondaryColor;
  span {
    font-size: 9px;
  }
}

.fs_10{
font-size: 10px;
}

.icon{
  color: $textSecondaryColor;
  background-color: $secondaryBgColor;
  padding: 10px;
  width: 15px;
  height: 15px;
}


</style>

