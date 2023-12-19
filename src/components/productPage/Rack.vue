<template>
  <div class="products rack">
    <div
      class="d-flex flex-column justify-content-center align-items-center mb-3"
    >
      <h5>Products</h5>
      <h2>Rack and Online UPS</h2>
    </div>
    <img
      class="w-100 banner"
      :src="require('@/assets/images/products/rack/banner.jpg')"
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
                :src="require('@/assets/images/products/rack/icon.png')"
                alt=""
              />
              <span>{{ item.name }}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="col-12 col-md-5 logo">
        <img :src="require('@/assets/images/products/Rack.png')" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    const products = [
      {
        name: "Network Rack Cabinet",
      },
      {
        name: "Server Rack Cabinet",
      },
      {
        name: "Open Racks",
      },
      {
        name: "Wall-Mounted Cabinets",
      },
      {
        name: "KVM Switches Console",
      },
      {
        name: "Online UPS",
      },
      {
        name: "Power Distribution Unit",
      },
      {
        name: "Cabinet Rack Accessories",
      },
    ];

    return { products };
  },
};
</script>

<style scoped>
/** computing style are same and in networking.vue file */

.rack .logo img {
  width: 100%;
  margin-top: 0px;
}
</style>
