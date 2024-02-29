<!-- <template>
  <div class="home container">
   

    <div class="container-fluid">
    <div class="row">
        <div class="col" id="homeHeading">
            <h1 id="heading1" class="display-4">WELCOME TO</h1>
            <h1 id="heading2" class="display-1">OTAKU OASIS</h1>
        </div>
    </div>
</div>
<div id="homeCircle">
</div>
    <div class="container-fluid">
    <div class="row">
        <div class="col-md-5" id="para1">
            <p>Discover your anime obsession with our exclusive t-shirt store!
                Dive into a realm of iconic characters and captivating designs.
                From bold graphics to subtle nods, our collection boasts the
                perfect tee for every anime enthusiast. Elevate your wardrobe with
                style that speaks volumes about your favorite series, 
                all in the comfort of a quality shirt.
            </p>
        </div>
    </div>
    </div>
<div id="homeImg">
  <img src="https://i.ibb.co/vq9mDPW/home2-removebg-preview.png" class="img-fluid">
</div>
    
<div>
<button id="buttonHome">Explore</button>

</div>
  </div>
</template> -->
<template>
  <div class="home container">
    <div class="row mt-5">
      <div class="col mt-5">
        <div id="homeHeading">
          <div>
            <h1 id="heading1" class="display-4">WELCOME TO</h1>
            <h1 id="heading2" class="display-1">OTAKU OASIS</h1>
          </div>
          <div>
            <p>Discover your anime obsession with our exclusive t-shirt store!
                Dive into a realm of iconic characters and captivating designs.
                From bold graphics to subtle nods, our collection boasts the
                perfect tee for every anime enthusiast. Elevate your wardrobe with
                style that speaks volumes about your favorite series, 
                all in the comfort of a quality shirt.
              </p>
              <div class="d-flex justify-content-center">
                <router-link to="/products">
                  <button id="buttonHome" class="align-item-center">Explore</button>
                </router-link>
              </div>
          </div>
        </div>
      </div>
      <div class="col mt-5">
        <img src="https://i.ibb.co/vq9mDPW/home2-removebg-preview.png" id="homeImg">
      </div>
    </div>

    <div>
    </div>
    
  </div>
</template>
<script>
// @ is an alias to /src


export default {
 
}
</script>

<style>

#buttonHome {
  /* position:absolute; */
  /* width:100px; */
    background-color: rgb(39, 142, 86); /*Green background color*/
    color: white; /*White text color*/
    padding: 10px 20px; /*Padding around the text*/
    border: none; /*Remove default button border*/
    border-radius: 20px; /*Rounded corners*/
    /* font-size: 16px; Font size */
    cursor: pointer; /*Cursor style */
    transition: background-color 0.3s ease; /*Smooth transition for background color*/
    /* margin-top:350px; */
    /* margin-left:-390px; */
}

#buttonHome:hover {
  background-color: rgb(35, 211, 105); /* Darker green on hover */
}

/* #homeCircle { */
  /* position:absolute; */
    /* width: 520px; Adjust the width and height to change the size of the circle */
    /* margin-left:1138px; */
    /* height: 630px; */
    /* border-radius: 50%; This creates the round shape */
    /* background-color:rgb(217,217,217); Set the background color to grey */
/* } */
/* #homeHeading{
  position:absolute;
  margin-left: -455px;
  margin-top:36px
} */
/* #para1{
  position:absolute;
  margin-left:-15px;
  margin-top:230px;
} */
#homeImg{
  /* position:absolute;
  margin-left:1200px;
  margin-top:22px; */
  width: 300px;
}
</style>
