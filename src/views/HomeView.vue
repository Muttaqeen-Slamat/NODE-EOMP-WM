<template>
  <div class="home container">
    <div class="row mt-5">
      <div class="col-md-6 mt-5">
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
      <div class="col-md-6 mt-5">
        <img src="https://i.ibb.co/vq9mDPW/home2-removebg-preview.png" id="homeImg" class="img-fluid">
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style>
#buttonHome {
  background-color: rgb(39, 142, 86);
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

#buttonHome:hover {
  background-color: rgb(35, 211, 105);
}

#homeImg {
  max-width: 100%;
}

@media (max-width: 768px) {
  #homeImg {
    order: -1;
    margin-top: 20px;
  }
}
</style>
