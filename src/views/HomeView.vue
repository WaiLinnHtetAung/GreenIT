<template>
    <div class="home">
      <Carousel></Carousel>
      <MainPageClientSwiper></MainPageClientSwiper>
      <Rating></Rating>
      <YoutubeVideos></YoutubeVideos>
      <Strength></Strength>
      <Service></Service>
      <Industry></Industry>
      <SuccessStory></SuccessStory>
      <Promotion></Promotion>
      <!-- <CompanyInfo></CompanyInfo> -->
      <Partners></Partners>
      <RecognizeByBest></RecognizeByBest>
      <AboutUs></AboutUs>
    </div>
    <!-- <ContactMe></ContactMe> -->
    <!-- <CompanySuccess></CompanySuccess> -->
</template>

<script>
import Promotion from '../components/Promotion'
import AboutUs from '../components/AboutUs'
import RecognizeByBest from '../components/RecognizeByBest'
import Partners from '../components/Partners'
import CompanyInfo from '../components/CompanyInfo'
import SuccessStory from '../components/SuccessStory'
import Industry from '../components/Industry'
import Service from '../components/Service'
import Strength from '../components/Strength'
import YoutubeVideos from '../components/YoutubeVideos'
import Rating from '../components/Rating'
import MainPageClientSwiper from '../components/MainPageClientSwiper'
import Carousel from '../components/Carousel'
import { onMounted } from 'vue'
export default {
  components: {
    Promotion,
    AboutUs,
    RecognizeByBest,
    Partners,
    CompanyInfo,
    SuccessStory,
    Industry,
    Service,
    Strength,
    YoutubeVideos,
    Rating,
    MainPageClientSwiper,
    Carousel,
  },

  setup() {
    onMounted(() => {
      window.scrollTo(0,0)
    })
  }
};
</script>

<style>

</style>

