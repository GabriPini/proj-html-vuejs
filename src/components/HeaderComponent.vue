<template>
 <header class="bg_custom">
  <nav class="navbar navbar-dark bg-transparent">
   <div class="container-fluid d-flex align-items-center">
    <img src="@/assets/img/avada-music-logo.png" alt="" />
    <button
     class="navbar-toggler"
     type="button"
     data-bs-toggle="collapse"
     data-bs-target="#navbarToggleExternalContent"
     aria-controls="navbarToggleExternalContent"
     aria-expanded="false"
     aria-label="Toggle navigation"
    >
     <span class="navbar-toggler-icon"></span>
    </button>
   </div>
  </nav>
  <div class="collapse" id="navbarToggleExternalContent">
   <div class="bg_nav p-4">
    <img class="nav_menu_logo" src="@/assets/img/avada-music-logo.png" alt="" />
    <div class="text-center link_menu">
     <h5 class="pt-5"><a href="#" class="text_active">Home</a></h5>
     <h5><a href="#" class="text_disabled">Meet The Band</a></h5>
     <h5><a href="#" class="text_disabled">Live Dates</a></h5>
     <h5><a href="#" class="text_disabled">Latest News</a></h5>
     <h5><a href="#" class="text_disabled">Albums</a></h5>
     <h5><a href="#" class="text_disabled">Fans</a></h5>
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
   <a class="btn text-light border btn-sm p-2 px-4 m-1" href="#" role="button">
    LIVE DATES
   </a>
  </div>
  <div class="mx-auto mt_custom border_custom"></div>
 </header>
</template>

<script>
export default {
 name: "HeaderComponent",
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables.scss";
.bg_custom {
 background-image: url("@/assets/img/home_slider.jpg");
 background-size: cover;
 background-position: center;
}

.bg_nav {
 background-color: $headerBgColor;
}

.btn_custom {
 background-color: $buttonColor;
 color: white;
}

.nav_menu_logo {
 height: 40px;
}

.link_menu {
 h5 {
  padding: 10px;
  a {
   text-decoration: none;
  }
 }
}

.text_disabled {
 color: $textSecondaryColor;
}

.text_active {
 color: white;
}

.border_custom {
 width: 300px;
 height: 10px;
 background-color: $buttonColor;
}
.mt_custom {
 margin-top: 100px;
}
</style>

