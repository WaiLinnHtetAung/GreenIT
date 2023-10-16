<template>
    <div class="promotion" v-if="promotions.length > 0">
        <div class="content">
            <div class="img">
                <div v-for="(promo, index) in promotions" :key="index">
                    <img v-if="currentLogo === promo.title" data-aos="fade-right" :src="promo.img_url" alt="">
                </div>
            </div>
        </div>
        <div class="menu">
            <div class="item" @click="currentLogo = promo.title" :class="{'active-item': currentLogo === promo.title}" v-for="(promo,index) in promotions" :key="index">
                <img :src="promo.logo_url" alt="">
            </div>
        </div>
    </div>

    <div v-if="promotions.length < 1">
        <PageLoading></PageLoading>
      </div>
</template>

<script>
import PageLoading from '../components/PageLoading'
import getPromotions from '@/composables/getPromotions';
import { onMounted, ref } from 'vue'
    export default {
  components: { PageLoading },
        setup() {
            const {promotions, errors, load} = getPromotions();
            const logoNames = ref([]);
            const currentIndex = ref(0);
            const currentLogo = ref('');

            const slider = () => {
                if(logoNames.value.length > 0) {
                    if(currentIndex.value < logoNames.value.length - 1) {
                        currentIndex.value++;
                    } else {
                        currentIndex.value = 0;
                    }

                    currentLogo.value = logoNames.value[currentIndex.value];
                }
            };


            onMounted(async() => {
                await load();

                if(promotions.value.length > 0) {
                    logoNames.value = promotions.value.map(pro => pro.title);
                    currentLogo.value = logoNames.value[0];

                    setInterval(slider, 3000);

                }

            });

            return {promotions, currentLogo}
        }
    }
</script>

<style scoped>
    .promotion {
        padding: 30px 15%;
    }

    .promotion .content {
        display: flex;
        justify-content: center;
    }

    .promotion .content .img {
        width: 800px;
    }

    .promotion .img img {
        width: 100%;
        object-fit: contain;
    }

    .promotion .menu {
        width: 800px;
        margin: 40px auto 20px;
    }

    .promotion .menu .item {
        width: 100px;
        height: 100px;
        margin-right: 20px;
        transition: .5s ease;
        border-radius: 7px;
        cursor: pointer;
    }

    .promotion .menu .item.active-item {
        transform: translateY(-10px);
        box-shadow: 2px 2px 10px rgb(184, 182, 182);

    }

    .promotion .menu .item img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        background: transparent;
    }

    .promotion .menu .item.item.active-item img {
        filter: brightness(1);
    }

    @media (max-width: 1630px) {
        .promotion {
            padding: 30px 9%;
        }
    }

    @media (max-width: 1200px) {
        .promotion {
            padding: 30px 3%;
        }
    }

    @media (max-width: 800px) {
        .promotion .menu .item {
            width: 75px;
            height: 75px;
            margin-right: 20px;
        }
    }

    @media (max-width: 400px) {
        .promotion .menu .item {
            width: 65px;
            height: 65px;
            margin-right: 20px;
        }
    }
</style>
