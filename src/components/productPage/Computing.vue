<template>
  <div class="products computing">
    <div
      class="d-flex flex-column justify-content-center align-items-center mb-3"
    >
      <h5>Products</h5>
      <h2>Computing</h2>
    </div>
    <img
      class="w-100 banner"
      :src="require('@/assets/images/products/computing/banner.jpg')"
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
                :src="require('@/assets/images/products/computing/icon.png')"
                alt=""
              />
              <span>{{ item.name }}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="col-12 col-md-5 logo">
        <img :src="require('@/assets/images/products/Computing.png')" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    const products = [
      {
        name: "Rack Server",
      },
      {
        name: "Tower Server",
      },
      {
        name: "Modular Server",
      },
      {
        name: "Rugged Server",
      },
      {
        name: "Blade Server",
      },
      {
        name: "High-performance SAN Storage Server",
      },
      {
        name: "Network Attached Storage Server",
      },
      {
        name: "Direct Attached Storage Server",
      },
      {
        name: "Server Equipment and Accessories",
      },
    ];

    return { products };
  },
};
</script>

<style scoped>
/** computing style are same and in networking.vue file */

.computing .banner {
  height: 500px;
  object-fit: cover;
}

.computing .logo img {
  width: 100%;
  margin-top: 0px;
}

@media (max-width: 600px) {
  .computing .banner {
    height: 400px;
  }
}
</style>
