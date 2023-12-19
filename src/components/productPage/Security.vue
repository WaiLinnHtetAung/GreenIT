<template>
  <div class="products security">
    <div
      class="d-flex flex-column justify-content-center align-items-center mb-3"
    >
      <h5>Products</h5>
      <h2>Security</h2>
    </div>
    <img
      class="w-100 banner"
      :src="require('@/assets/images/products/security/banner.jpg')"
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
                :src="require('@/assets/images/products/security/icon.png')"
                alt=""
              />
              <span>{{ item.name }}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="col-12 col-md-5 logo">
        <img :src="require('@/assets/images/products/Security.png')" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    const products = [
      {
        name: "Next-Generation Firewall",
      },
      {
        name: "Virtual Next-Generation Firewall",
      },
      {
        name: "Web Application Firewall",
      },
      {
        name: "Ruggedized Network Firewalls",
      },
      {
        name: "Cloud-Native Firewall",
      },
      {
        name: "Secure SD-Wan",
      },
      {
        name: "DDOS Attack Protection",
      },
      {
        name: "Mail Security Firewall",
      },
    ];

    return { products };
  },
};
</script>

<style scoped>
/** computing style are same and in networking.vue file */

.security .logo img {
  margin-top: 0px;
}
</style>
