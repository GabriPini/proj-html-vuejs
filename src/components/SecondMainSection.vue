<template>
 <section class="bg_custom2 text-center pb-5">
  <h5 class="fw-bold display-5 pt-5">Latest Band News</h5>
  <hr class="w-25 mx-auto m-4 textSecodary" />
  <div class="mx-5 px-5">
   <span class="textSecodary"
    >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem aut est ipsum
    incidunt beatae corrupti, hic magni non aperiam illo, ipsa provident
    eligendi quia eveniet maiores pariatur quod quasi quibusdam?</span
   >
  </div>
  <div class="contaier text-dark mt-5 ">
  <div class=" mx-5 d-flex text-light px-5 justify-content-center gap-4 ">
    <div class="d-flex flex-wrap col-8 gap-4">
        <div class="col-12">
            <div class="card bg_custom" >
              <img src="@/assets/img/blog_music_techo.jpg" class="card-img-top h_150 " alt="">
              <div class="hoverCard  align-items-center justify-content-center" >Technology and music</div>
              <div class="card-body ">
                <h5 class="card-title">Technology and music</h5>
                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              </div>
            </div>
        </div>
        <div class="d-flex flex-wrap gap-4">
        <div class="col_6">
          <div class="card bg_custom">
            <img src="@/assets/img/blog-post3.jpg" class="card-img-top h_200" alt="">
            <div class="hoverCard  align-items-center justify-content-center" >While my guitras gently weeps</div>
            <div class="card-body">
              <h5 class="card-title">While my guitras gently weeps</h5>
              <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
            </div>
          </div>
        </div>
      <div class="col_6">
        <div class="card bg_custom">
          <img src="@/assets/img/blog-post4.jpg" class="card-img-top h_200" alt="">
          <div class="hoverCard  align-items-center justify-content-center" >It just sounds better</div>
          <div class="card-body">
            <h5 class="card-title">It just sounds better</h5>
            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
          </div>
        </div>
      </div>

        </div>

      <div class="col-12">
        <div class="card bg_custom">
          <img src="@/assets/img/blog_flavor_rock.jpg" class="card-img-top  h_150" alt="">
          <div class="hoverCard  align-items-center justify-content-center" >The flavor of rock</div>
          <div class="card-body">
            <h5 class="card-title">The flavor of rock</h5>
            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          </div>
        </div>
      </div>
  </div>

    <div class="d-flex flex-wrap align-items-end align-content-between col-4 ">
      <div class="col-12 ">
        <div class="card bg_custom ">
        <img src="@/assets/img/blog-post1.jpg" class="card-img-top h_200" alt="">
        <div class="hoverCard  align-items-center justify-content-center" >Taking it back to the old school</div>
        <div class="card-body">
        <h5 class="card-title">Taking it back to the old schoo</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>

   <div class="col-12">
    <div class="card bg_custom ">
      <img src="@/assets/img/blog-post2.jpg" class="card-img-top h_200" alt="">
      <div class="hoverCard  align-items-center justify-content-center" >Sharing the stage with a legend</div>
      <div class="card-body">
        <h5 class="card-title">Sharing the stage with a legend</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>

 </div> 
  
   
</div>
</div>
 <div class="">
    
   
 </div>

 </section>
</template>

<script>
export default {
 name: "SecondMainSection",
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/commons.scss";
/* Card */
.card-title{
  font-weight: bold;
  text-align: start;
  color: $textColor;
}

.card-text{
  text-align: start;
  color: $textSecondaryColor;
}

.col_6{
  width:calc(50% - 0.8rem) ;
}
img{
  position: relative;
}

.hoverCard{
position: absolute;
background-color: #eb4b53ba;
height: 100%;
width: 100%;
font-size: 20px;
display: none;

}
.card:hover {
  .hoverCard{
    align-content: center;
    justify-content: center;
    display: flex;
  }
}


.h_200{
  height: 340px;
  object-fit: cover;
  object-position:top ;
  
}

.h_150{
  height: 150px;
    object-fit: cover;
  object-position:center ;
  
}



</style>

