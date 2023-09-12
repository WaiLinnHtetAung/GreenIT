<template>
    <div class="info ">
        <img :src="require('@/assets/images/git.jpg')" alt="">
        <div class="content">
            <span class="name">Green IT</span> is leading Information Technology Company, found in 2015, is not only Technical
            Services & Solutions provider but also supply the most qualified enterprise Networking
            devices to all sizes of Business across Myanmar and Singapore.
            <div class="divider"></div>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
    .info {
        padding: 50px 10% 90px;
        margin: 30px 15%;
        box-shadow: 2px 2px 6px #b1d7b4;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .info img {
        width: 300px;
        margin-left: -90px;
    }

    .info .content {
        font-size: 24px;
        line-height: 50px;
        margin-top: 20px;
    }

    .info .content .name {
        font-weight: bold;
        color: #287e3d;
        font-size: 28px;
    }

    .content .divider {
        height: 3px;
        width: 100px;
        background: #ffc090;
        margin-top: 15px;
    }

    @media (max-width:1630px) {
        .info {
            padding: 40px 9% 70px;
            margin: 30px 9%;
            box-shadow: 2px 2px 6px #b1d7b4;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
    
        .info img {
            width: 300px;
            margin-left: -90px;
        }
    
        .info .content {
            font-size: 20px;
            line-height: 50px;
            margin-top: 20px;
        }
    
        .info .content .name {
            font-size: 28px;
        }
    
        .content .divider {
            height: 3px;
            width: 100px;
            background: #ffc090;
            margin-top: 15px;
        }
    }

    @media (max-width: 1200px) {
        .info {
            padding: 40px 3% 70px;
            margin: 30px 3%;
            box-shadow: 2px 2px 6px #b1d7b4;
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-wrap: wrap;
        }
    
        .info img {
            width: 400px;
            margin-left: -90px;
        }
    
        .info .content {
            font-size: 18px;
            line-height: 40px;
            margin-top: 20px;
        }
    
        .info .content .name {
            font-size: 24px;
        }
    
        .content .divider {
            height: 3px;
            width: 100px;
            background: #ffc090;
            margin-top: 15px;
        }
    }

    @media (max-width:600px) {
        .info {
            padding: 40px 5% 70px;
            margin: 30px 5%;
        }
    }
</style>
