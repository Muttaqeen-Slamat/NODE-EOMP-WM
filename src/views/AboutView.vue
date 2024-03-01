<template>
  <div class="about container-fluid">
    <div class="row">
      <div class="col-md-6 offset-md-3">
        <div>
          <h1 id="aboutHeading" class="display-4 text-center">ABOUT</h1>
        </div>
        <div>
          <h5 id="aboutHeading2" class="display-7">What is our business goal</h5>
          <p>Our business goal is to provide our customers with the best quality products that they will be both satisfied with the look of our clothing as well as the quality of the products that we provide.</p>
        </div>
        <div>
          <h5 id="aboutHeading3" class="display-7">What is our business mission</h5>
          <p>Ultimately our business goal is to go global and establish different branches all over South Africa so that people from all over the country can have access to our excellent clothing.</p>
        </div>
        <div>
          <h5 id="aboutHeading4" class="display-7">What is our business vision</h5>
          <p>Our business vision is to empower other developers and to inspire them. To show others that if they want to start their own business from the ground up then they could even if they have no assistance.</p>
        </div>
      </div>
      <div class="col-md-6 order-md-2 d-flex justify-content-center">
        <div class="text-center">
          <img id="homeGirl" src="https://i.ibb.co/q5KNX7N/animegirl-removebg-preview.png" class="img-fluid bigger-image">
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
}
</script>
<style>
.bigger-image {
  max-width: 100%; /* Ensure the image is always responsive */
  height: auto; /* Automatically adjust the height based on the width */
  max-height: 400px; /* Set a maximum height for the image */
  position: absolute;
  left: 50%; /* Move the image 50% to the left */
  transform: translateX(-50%); /* Translate the image -50% of its own width to the left to center it */
}
</style>