<template>
 <div class="">
  <div class="footer_top bg_custom d-flex p-5 justify-content-between align-items-center">
   <img src="@/assets/img/logo_footer.png" alt="" />
   <div class="link_menu ">
    <a href="#home" class="text_active">Home</a>
    <a href="#Meet" class="text_disabled">Meet The Band</a>
    <a href="#liveDates" class="text_disabled">Live Dates</a>
    <a href="#news" class="text_disabled">Latest News</a>
    <a href="#" class="text_disabled">Albums</a>
    <a href="#Fans" class="text_disabled">Fans</a>
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
export default {
 name: "FooterComponent",
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/commons.scss";

.link_menu {
  a {
    padding: 10px;
    font-size: 13px;
   text-decoration: none;
  }
 }
 a:hover, .icon:hover{
      color: white;
 }

.text_disabled {
 color: $textSecondaryColor;
}

.text_active {
 color: white;
}

.footer_bottom {
  color: $textSecondaryColor;
  span {
    font-size: 9px;
  }
}

.icon{
  color: $textSecondaryColor;
  background-color: $secondaryBgColor;
  padding: 10px;
  width: 15px;
  height: 15px;
}


</style>

