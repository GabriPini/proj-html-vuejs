<template>
 <header class="bg_custom mt_custom" id="home">
  <nav id="nav" class="navbar navbar-dark">
   <div class="container-fluid d-flex align-items-center">
    <img
     class="ps-4 nav_menu_logo"
     src="@/assets/img/avada-music-logo.png"
     alt=""
    />
    <button
     class="navbar-toggler border-0 collapsed"
     type="button"
     data-bs-toggle="collapse"
     data-bs-target="#navbarToggleExternalContent"
     aria-controls="navbarToggleExternalContent"
     aria-expanded="false"
     aria-label="Toggle navigation"
     @click="ChangeBg()"
    >
     <span  class="close text-light">X</span>
     <span  class="navbar-toggler-icon"></span>
    </button>
   </div>
  </nav>
  <div class="collapse" id="navbarToggleExternalContent">
   <div class="bg_nav p-4 ">
   
    
    <div class="text-center link_menu">
     <LinkComponent :linkList="linkList" class="d-flex flex-column "/>
    </div>
   </div>
  </div>

  <div class="text-center pt-5 mt-5">
   <h1 class="display-1 fw-bold">Untold Stories</h1>
   <em>There is an untold story behind every favorite song.</em>
  </div>

  <div class="text-center p-5 pe-5">
   <a class="btn btn_custom btn-sm p-2 px-4 m-1" href="#" role="button">
    LATEST ALBUM</a
   >
   <a class="btn border btn-sm p-2 px-4 m-1" href="#" role="button">
    LIVE DATES
   </a>
  </div>
 </header>
</template>

<script>
import LinkComponent from '@/components/LinkComponent.vue';
export default {
 name: "HeaderComponent",
 components:{
     LinkComponent
 },
 methods:{

     ChangeBg(){
           const element = document.getElementById("nav");
           element.classList.toggle("bg_nav");
     }
 },

 props:["linkList"]

};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables.scss";
@import "@/assets/scss/links.scss";

.navbar-toggler > .close {
     display: inline;
}
 
.navbar-toggler.collapsed > .close, .navbar-toggler:not(.collapsed) > .navbar-toggler-icon {
    display: none;
}


.navbar .navbar-toggler:focus{
color: transparent;

}



.bg_custom {
 background-image: url("@/assets/img/home_slider.jpg");
 background-size: cover;
 background-position: center;
 color: $textMainColor;
}




.bg_nav {
 background-color: $headerBgColor;
}

.btn_custom {
 background-color: $buttonColor;
}
.btn {
 color: white;
}
.btn:hover {
 background-color: white;
 color: black;
}

.nav_menu_logo {
 height: 40px;
}


.mt_custom {
 padding-bottom: 100px;
}
</style>

