<template>
  <div class="products collaboration">
    <div
      class="d-flex flex-column justify-content-center align-items-center mb-3"
    >
      <h5>Products</h5>
      <h2>Collaboration</h2>
    </div>
    <img
      class="w-100 banner"
      :src="require('@/assets/images/products/collaboration/banner.jpg')"
      alt=""
    />

    <div class="row products-list">
      <div class="col-12 col-md-7">
        <div class="products-list m-5 m-sm-0">
          <div class="row">
            <div
              class="col-12 col-sm-6 product"
              v-for="(item, i) in products"
              :key="i"
            >
              <img
                :src="
                  require('@/assets/images/products/collaboration/icon.png')
                "
                alt=""
              />
              <span>{{ item.name }}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="col-12 col-md-5 logo">
        <img
          :src="require('@/assets/images/products/Collaboration.png')"
          alt=""
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    const products = [
      {
        name: "Video Conferencing",
      },
      {
        name: "Meeting Room Conferencing Camera",
      },
      {
        name: "Interactive Display & Whiteboard",
      },
      {
        name: "Camera & Speakerphone",
      },
      {
        name: "Personal Solution & Webcams",
      },
      {
        name: "Wireless Presentation System",
      },
      {
        name: "IP Conference Phone",
      },
      {
        name: "USB/Bluetooth Speakerphone",
      },
      {
        name: "Wireless Earbuds",
      },
      {
        name: "Bluetooth Headsets",
      },
    ];

    return { products };
  },
};
</script>

<style scoped>
/** computing style are same and in networking.vue file */

.collaboration .logo img {
  margin-top: 0px;
}
</style>
