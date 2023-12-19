<template>
  <div class="products">
    <div
      class="d-flex flex-column justify-content-center align-items-center mb-3"
    >
      <h5>Products</h5>
      <h2>Networking</h2>
    </div>
    <img
      class="w-100 banner"
      :src="require('@/assets/images/products/networking/banner.jpg')"
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
                :src="require('@/assets/images/products/networking/icon.png')"
                alt=""
              />
              <span>{{ item.name }}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="col-12 col-md-5 logo">
        <img :src="require('@/assets/images/products/Networking.png')" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    const products = [
      {
        name: "UnManage Switch",
      },
      {
        name: "L2 Manage Switch",
      },
      {
        name: "L3 Manage Switch",
      },
      {
        name: "Fixed Stackable Switch",
      },
      {
        name: "Modular Switch (Enterprise-Class Midsize)",
      },
      {
        name: "Cloud-Manage Switch",
      },
      {
        name: "Router",
      },
      {
        name: "Wireless Router",
      },
      {
        name: "VPN Router",
      },
      {
        name: "Cloud Edge Router",
      },
      {
        name: "Banch Router (Combine SD-WAN)",
      },
      {
        name: "Access Point",
      },
      {
        name: "Wireless Controller",
      },
      {
        name: "Cloud Manage Wireless Controller",
      },
      {
        name: "Load Balancer",
      },
    ];

    return { products };
  },
};
</script>

<style>
.products {
  padding: 30px 15%;
}

.products h5 {
  background: #7fb773;
  display: inline-block;
  padding: 5px 15px;
  color: #fff;
  border-radius: 7px;
}

.products img {
  filter: brightness(0.7);
}

.products-list {
  margin-top: 60px;
}

.products-list .product {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 15px;
}

.products-list .product img {
  width: 30px;
}

.products-list .product span {
  font-size: 20px;
}

.products-list .logo img {
  width: 100%;
  margin-top: 40px;
}

@media (max-width: 1630px) {
  .products {
    padding: 30px 9%;
  }
}

@media (max-width: 1200px) {
  .products {
    padding: 30px 3%;
  }

  .products-list .product img {
    width: 20px;
  }

  .products-list .product span {
    font-size: 15px;
  }
}

@media (max-width: 576px) {
  .products img.banner {
    height: 300px;
    object-fit: cover;
  }
  .products-list {
    margin-top: 10px;
  }
}
</style>
