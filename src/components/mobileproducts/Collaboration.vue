<template>
    <div class="product">
        <h2>Collaboration Products</h2>

        <ul>
            <li>Video Conferencing</li>
            <li>Meeting Room Conferencing Camera</li>
            <li>Interactive Display & Whiteboard</li>
            <li>Camera & Speakerphone</li>
            <li>Personal Solution & Webcams</li>
            <li>Wireless Presentation System</li>
            <li>IP Conference Phone</li>
            <li>USB/Bluetooth Speakerphone</li>
            <li>Wireless Earbuds</li>
            <li>Bluetooth Headsets</li>
        </ul>

        <div class="mobile-products-img">
            <img :src="require('@/assets/images/products/Collaboration.png')" alt="">
        </div>
    </div>
</template>

<script>
    export default {
       
    }
</script>

<style scoped>
   .mobile-products-img img {
    width: 80%;
   }
</style>
