<template>
  <v-app class="top-app">
    <!-- Navbar -->
    <Navbar />

    <!-- Main content -->
    <v-main>
      <router-view/>
    </v-main>
    <!-- <AboutUs></AboutUs> -->
    <Footer />
  </v-app>
</template>

<script>
import AboutUs from './components/AboutUs'
import Navbar from "@/components/Navbar.vue";
import Footer from '@/components/Footer.vue'
export default {
  components: {
    AboutUs,
    Navbar,Footer
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overflow-x: hidden !important;
  
}

.top-app {
  max-width: 1920px;
  margin: 0 auto;
}

a {
  text-decoration: none;
  color: inherit;
}

</style>
