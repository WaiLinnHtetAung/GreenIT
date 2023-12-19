<template>
  <div class="products">
    <div
      class="d-flex flex-column justify-content-center align-items-center mb-3"
    >
      <h5>Products</h5>
      <h2>Software</h2>
    </div>
    <img
      class="w-100 banner"
      :src="require('@/assets/images/products/software/banner.png')"
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
              <div class="d-flex flex-column gap-1">
                <div>
                  <img
                    :src="require('@/assets/images/products/software/icon.png')"
                    alt=""
                  />
                  <span class="ms-2">{{ item.name }}</span>
                </div>
                <div class="ps-5">
                  <ul>
                    <li v-for="(software, i) in item.items" :key="i">
                      {{ software.name }}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-12 col-md-5 logo">
        <img :src="require('@/assets/images/products/Software.png')" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    const products = [
      {
        name: "Endpoint Security",
        items: [
          {
            name: "Fortinet",
          },
          {
            name: "Symantec",
          },
          {
            name: "Trend Micro",
          },
          {
            name: "SOPHOS",
          },
          {
            name: "Kaspersky",
          },
          {
            name: "Bitdefender",
          },
          {
            name: "McAfee",
          },
          {
            name: "Acronis",
          },
          {
            name: "Fireeye",
          },
        ],
      },

      {
        name: "Application Software",
        items: [
          {
            name: "Microsoft",
          },
          {
            name: "Adobe",
          },
          {
            name: "Red Hat Enterprise Linux",
          },
          {
            name: "Autodesk",
          },
          {
            name: "Google Workspace",
          },
          {
            name: "Dropbox",
          },
          {
            name: "Solarwinds",
          },
          {
            name: "Veeam",
          },
          {
            name: "ZOOM",
          },
          {
            name: "Cloudflare",
          },
        ],
      },
      {
        name: "Operation Systems and Cloud",
        items: [
          {
            name: "Windows",
          },
          {
            name: "Windows Server",
          },
          {
            name: "Red Hat Enterprise Linux",
          },
          {
            name: "Azure",
          },
          {
            name: "AWS",
          },
          {
            name: "Google Cloud",
          },
          {
            name: "Alibaba Cloud",
          },
        ],
      },

      {
        name: "Virtualization",
        items: [
          {
            name: "VMware",
          },
          {
            name: "Red Hat",
          },
          {
            name: "Nutanix",
          },
          {
            name: "Microsoft",
          },
        ],
      },
    ];

    return { products };
  },
};
</script>

<style scoped>
/** computing style are same and in networking.vue file */

.products span {
  font-size: 24px;
}
ul li {
  font-size: 18px;
  margin-bottom: 5px;
}

.products-list .product {
  align-items: start;
}

@media (max-width: 1200px) {
  .products-list .product span {
    font-size: 20px;
  }
}
</style>
