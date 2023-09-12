<template>
    <div class="service-detail">
        <img class="banner" :src="service.banner_img" alt="">

        <div class="content">
            <div class="title">
                <img class="icon" :src="service.img" alt="">
                <h2>{{service.title}}</h2>
            </div>
            <div class="body">
                <img :src="service.preview_img" alt="">
                <div class="content-section">
                    <p v-html="service.p"></p>

                    <div class="sub-title-container">
                        <div class="sub-title">
                            <h2>{{ service.sub_title_1 }}</h2>
                            <div class="list">
                                <div v-for="(item,i) in service.list_one" :key="i"><i class="fa-solid fa-check-double me-5"></i><span>{{ item }}</span></div>
                            </div>
                        </div>

                        <div class="sub-title">
                            <h2>{{ service.sub_title_2 }}</h2>
                            <div class="list">
                                <div v-for="(item,i) in service.list_two" :key="i"><i class="fa-solid fa-check-double me-5"></i><span>{{ item }}</span></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { onMounted, onUpdated, ref } from 'vue'
import { useStore } from 'vuex';
    export default {
        props: ['slug'],
        setup(props) {
            const store = useStore();
            let service = ref('');
            onMounted(() => {
                window.scrollTo(0,0);
                store.dispatch('getService', props.slug);
                service.value = store.state.service;
            })

            onUpdated(() => {
                store.dispatch('getService', props.slug);
                service.value = store.state.service;
            })

            return {service}
        }

    }
</script>

<style scoped>

    .service-detail {
        margin-bottom: 30px;
    }

    .service-detail .banner {
        filter: brightness(.7);
    }
    .service-detail img {
        width: 100%;
        height: 450px;
        object-fit: cover;
    }

    .service-detail .content {
        padding: 30px 15%;
        margin-top: 30px;
    }

    .content .title {
        display: flex;
        align-items: center;
        gap: 20px;
        margin-bottom: 30px;
    }
    .content .title h2 {
        font-size: 40px;
        margin-top: 10px;
    }

    .service-detail .content .icon {
        width: 60px;
        height: 60px;
        object-fit: cover;
    }

    .content .body {
        display: flex;
        flex-direction: row-reverse;
        gap: 10px;
        align-items: center;
    }

    .content .body img {
        width: 40%;
        height: 300px;
        object-fit: cover;
    }

    .content .body .content-section p {
        margin-bottom: 30px;
        font-size: 18px;
    }

    .sub-title-container .sub-title {
        margin-bottom: 20px;
    }

    .sub-title h2 {
        margin-bottom: 15px;
    }
 
    .sub-title .list div {
        margin-bottom: 10px;
    }

    .sub-title .list i {
        color: #287e3d;
    }


    @media (max-width:1630px) {
        .service-detail {
            margin-bottom: 30px;
        }
        .service-detail img {
            height: 380px;
            margin-top: -15px;
        }
    
        .service-detail .content {
            padding: 30px 9%;
            margin-top: 30px;
        }
    
        .content .title {
            display: flex;
            align-items: center;
            gap: 20px;
            margin-bottom: 30px;
        }
        .content .title h2 {
            font-size: 35px;
            margin-top: 10px;
        }
    
        .service-detail .content .icon {
            width: 50px;
            height: 50px;
        }
    
        .content .body {
            display: flex;
            flex-direction: row-reverse;
            gap: 10px;
            align-items: center;
        }
    
        .content .body img {
            width: 40%;
            height: 300px;
            object-fit: cover;
        }
    
        .content .body .content-section p {
            margin-bottom: 30px;
            font-size: 15px;
        }
    
        .sub-title-container .sub-title {
            margin-bottom: 20px;
        }
    
        .sub-title h2 {
            margin-bottom: 15px;
            font-size: 22px;
        }
     
        .sub-title .list div {
            margin-bottom: 10px;
        }
    
        .sub-title .list i {
            color: #287e3d;
        }
    }

    @media (max-width: 1320px) {
        .content .body img {
            width: 50%;
            height: 300px;
            object-fit: cover;
        }
    }

    @media (max-width: 990px) {

        .service-detail img {
            width: 100%;
            height: 300px;
            object-fit: cover;
            filter: brightness(.7);
        }

        .content .body {
            display: flex;
            flex-direction: column-reverse;
            gap: 10px;
            align-items: center;
        }
    
        .content .body img {
            width: 80%;
            height: 300px;
            object-fit: cover;
            margin-top: 30px;
        }

        .content .title h2 {
            font-size: 28px;
            margin-top: 10px;
        }
    }

    @media (max-width: 768px) {
        .service-detail img {
            width: 100%;
            height: 200px;
            object-fit: cover;
            filter: brightness(.7);
        }
    }

    @media (max-width: 500px) {

        .service-detail .banner {
            width: 100%;
            height: 150px;
        }
        .content .title h2 {
            font-size: 24px;
            margin-top: 10px;
        }

        .service-detail .content .icon {
            width: 50px;
            height: 50px;
            object-fit: cover;
        }

        .sub-title h2 {
            margin-bottom: 15px;
            font-size: 20px;
        }

    }

    @media (max-width: 390px) {

        .service-detail .banner {
            height: 140px !important;
            margin-top: -15px;
        }
        .content .title h2 {
            font-size: 20px;
            margin-top: 10px;
        }

        .service-detail .content .icon {
            width: 40px;
            height: 40px;
            object-fit: cover;
        }

        .sub-title h2 {
            margin-bottom: 15px;
            font-size: 18px;
        }
    }
    
</style>
