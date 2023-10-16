<template>
    <div class="product">
        <h2>Computing Products</h2>

        <ul>
            <li>Rack Server</li>
            <li>Tower Server</li>
            <li>Modular Server</li>
            <li>Rugged Server</li>
            <li>Blade Server</li>
            <li>High-performance SAN Storage Server</li>
            <li>Network Attached Storage Server</li>
            <li>Direct Attached Storage Server</li>
            <li>Server Equipment and Accessories</li>
        </ul>

        <div class="mobile-products-img">
            <img :src="require('@/assets/images/products/Computing.png')" alt="">
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
