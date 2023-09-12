<template>
    <!-- Navbar -->
    <v-app-bar app  height="100" :color="navbarColor" class="navbar" id="top-navbar" style="overflow: visible;">

        <!-- Navbar title -->
        <div id="logo" class="pointer">
            <img :src="logo" @click="navigate('/')" />
        </div>
        
        <!-- Toggle button for mobile -->
        <v-app-bar-nav-icon @click="drawer = !drawer"  id="mobile-menu"></v-app-bar-nav-icon>

        <div class="menu-items">
            <div class="menu">
                <div><router-link class="main-menu" :class="{active: currentRoute == '/'}" to="/">Home</router-link></div>
            </div>
            
            <div class="menu ">
                <div>
                    <router-link class="main-menu" :class="{active: currentRoute.slice(0,19) == '/services-solutions'}" to="/services-solutions" style="display:flex; gap:7px; padding: 3.5px 10px;"><span>Services</span> <i class="fa-solid fa-sort-down"></i></router-link>
                </div>
                <div class="mega-menu">
                    <div class="supply-service">
                        <div class="supply">
                            <h2>Supply</h2>
                            <div class="link">
                                <router-link to="#"><span>Computing</span></router-link>
                                <router-link to="#"><span>Networking</span></router-link>
                                <router-link to="#"><span>Security</span></router-link>
                                <router-link to="#"><span>Collaboration</span></router-link>
                                <router-link to="#"><span>Software</span></router-link>
                            </div>
                        </div>
                        <div class="service">
                            <h2>Service</h2>
                            <div class="service-item">
                                <div class="item pointer" @click="goRoute('data-center')">
                                    <img :src="require('@/assets/images/icon/DataCenter.png')" alt="">
                                    <div>Data Center Services</div>
                                </div>
                                <div class="item pointer"  @click="goRoute('infracture')">
                                    <img :src="require('@/assets/images/icon/Infra.png')" alt="">
                                    <div>Infrastructure Services</div>
                                </div>
                                <div class="item pointer"   @click="goRoute('server')">
                                    <img :src="require('@/assets/images/icon/ServerStorage.png')" alt="">
                                    <div>Server & Storage Services</div>
                                </div>
                                <div class="item pointer"   @click="goRoute('server-rental')">
                                    <img :src="require('@/assets/images/icon/ServerRental.png')" alt="">
                                    <div>Server Rental Services</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="solution">
                        <div class="img">
                            <img :src="require('@/assets/images/icon/solution_icon.png')" alt="">
                        </div>
                        <div class="solution-info">
                            <h2>Solutions</h2>
                            <div class="solution-link">
                                <router-link to="/services-solutions/data-center"><span>Data Center Services & Solutions</span></router-link>
                                <router-link to="/services-solutions/virtualization"><span>Virtualization Services & Solutions</span></router-link>
                                <router-link to="/services-solutions/cloud-solution"><span>Cloud & Hybrid Cloud Solutions</span></router-link>
                                <router-link to="/services-solutions/security"><span>Network Security & Solutions</span></router-link>
                                <router-link to="/services-solutions/wireless-solution"><span>Wireless Network Solutions</span></router-link>
                                <router-link to="/services-solutions/remote-monitor-solution"><span>Remote Monitoring & Management Solutions</span></router-link>
                                <router-link to="/services-solutions/bandwidth-solution"><span>Bandwidth & WAN Acceleration Management</span></router-link>
                                <router-link to="/services-solutions" class="view-all"><span>View All</span></router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="menu">
                <div>
                    <router-link class="main-menu" :class="{active: currentRoute == '/company'}" to="/#" style="display:flex; gap:7px; padding: 3.5px 10px;"><span>Company</span> <i class="fa-solid fa-sort-down "></i></router-link>
                </div>
                <div class="mega-menu company-mega-menu">
                    <div class="company-links">
                        <div class="company-quote ">
                            <span>Yours</span>
                            <h1>IT Partner</h1>
                        </div>
                        <div class=" company-info-link">
                            <router-link to="#"><span>Blog</span></router-link>
                            <router-link to="#"><span>Careers</span></router-link>
                            <router-link to="/about-us"><span>About us</span></router-link>
                            <router-link to="#"><span>Team</span></router-link>
                            <router-link to="#"><span>Partners</span></router-link>
                        </div>
                    </div>
                    <div class=" company-partners">
                        <h2>Platform Partnerships</h2>
                        <div class="logo">
                            <img :src="require('@/assets/images/logo/cisco.png')" alt="">
                            <img :src="require('@/assets/images/logo/dell_emc.png')" alt="">
                        </div>
                        <div class="logo">
                            <img :src="require('@/assets/images/logo/fortinet.png')" alt="">
                            <img :src="require('@/assets/images/logo/hpe.png')" alt="">
                        </div>
                    </div>
                </div>
            </div>
            <div class="menu">
                <div>
                    <router-link class="main-menu" :class="{active: currentRoute == '/products'}" to="/#" style="display:flex; gap:7px; padding: 3.5px 10px;"><span>Products</span> <i class="fa-solid fa-sort-down "></i></router-link>
                </div>
                <div class="mega-menu products-mega-menu">
                    <div class="products-link">
                        <router-link to="#" @click="currentProduct = 'networking'"><span :class="{'active-product': currentProduct === 'networking'}">Networking</span></router-link>
                        <router-link to="#" @click="currentProduct = 'computing'"><span :class="{'active-product': currentProduct === 'computing'}">Computing</span></router-link>
                        <router-link to="#" @click="currentProduct = 'security'"><span :class="{'active-product': currentProduct === 'security'}">Security</span></router-link>
                        <router-link to="#" @click="currentProduct = 'collaboration'"><span :class="{'active-product': currentProduct === 'collaboration'}">Collaboration</span></router-link>
                        <!-- <router-link to="#" @click="currentProduct = 'software'"><span :class="{'active-product': currentProduct === 'software'}">Software</span></router-link> -->
                    </div>
                    <div class="products-info" v-if="currentProduct === 'networking'">
                        <Networking></Networking>
                    </div>
                    <div class="products-info" v-if="currentProduct === 'computing'">
                        <Computing></Computing>
                    </div>
                    <div class="products-info" v-if="currentProduct === 'security'">
                        <Security></Security>
                    </div>
                    <div class="products-info" v-if="currentProduct === 'collaboration'">
                        <Collaboration></Collaboration>
                    </div>
                    <div class="products-info" v-if="currentProduct === 'software'">
                        <Software></Software>
                    </div>
                </div>
            </div>
            <div class="menu">
                <div><router-link class="main-menu" to="#">Case Studies</router-link></div>
            </div>
            <div class="menu">
                <div><router-link class="main-menu" to="/promotion" :class="{active : currentRoute == '/promotion'}">Promotion</router-link></div>
            </div>
        </div>

        <div class="contact">
            <div class="contact-menu">
                <div><router-link class="main-menu" to="#">Client Support <v-icon>mdi-arrow-right</v-icon></router-link></div>
                <div class="ph-no">+959 880 441 215</div>
            </div>
            <div class="contact-us">
                <router-link to="#">Contact Us</router-link>
            </div>
        </div>

    </v-app-bar>



    <!-- Sidebar (Drawer) for mobile -->
    <v-navigation-drawer app v-model="drawer" :color="navbarColor" id="drawer" temporary>
        <v-list>
            <v-list-item @click="navigate('/')">
                <v-list-item-title>Home</v-list-item-title>
            </v-list-item>

            <v-list-group value="Services">
                <template v-slot:activator="{ props }">
                    <v-list-item
                    v-bind="props"
                    title="Services"
                    ></v-list-item>
                </template>
        
                <v-list-group value="Supply">
                    <template v-slot:activator="{ props }">
                    <v-list-item
                        v-bind="props"
                        title="Supply"
                    ></v-list-item>
                    </template>
        
                    <v-list-item @click="navigate('/')">
                        <v-list-item-title>Computing</v-list-item-title>
                    </v-list-item>
                    <v-list-item @click="navigate('/')">
                        <v-list-item-title>Networking</v-list-item-title>
                    </v-list-item>
                    <v-list-item @click="navigate('/')">
                        <v-list-item-title>Security</v-list-item-title>
                    </v-list-item>
                    <v-list-item @click="navigate('/')">
                        <v-list-item-title>Collaboration</v-list-item-title>
                    </v-list-item>
                    <v-list-item @click="navigate('/')">
                        <v-list-item-title>Software</v-list-item-title>
                    </v-list-item>
                </v-list-group>

                <v-list-group value="Service">
                    <template v-slot:activator="{ props }">
                    <v-list-item
                        v-bind="props"
                        title="Service"
                    ></v-list-item>
                    </template>
        
                    <v-list-item @click="navigate('/services-solutions/data-center')">
                        <v-list-item-title>Data Center Service</v-list-item-title>
                    </v-list-item>
                    <v-list-item @click="navigate('/services-solutions/infracture')">
                        <v-list-item-title>Infrastructure Service</v-list-item-title>
                    </v-list-item>
                    <v-list-item @click="navigate('/services-solutions/server')">
                        <v-list-item-title>Server & Storage Service</v-list-item-title>
                    </v-list-item>
                    <v-list-item @click="navigate('/services-solutions/server-rental')">
                        <v-list-item-title>Server Rental Service</v-list-item-title>
                    </v-list-item>
                </v-list-group>

                <v-list-group value="Solutions">
                    <template v-slot:activator="{ props }">
                    <v-list-item
                        v-bind="props"
                        title="Solutions"
                    ></v-list-item>
                    </template>
        
                    <v-list-item @click="navigate('/services-solutions/data-center')">
                        <v-list-item-title>Data Center Services & Solutions</v-list-item-title>
                    </v-list-item>
                    <v-list-item @click="navigate('/services-solutions/virtualization')">
                        <v-list-item-title>Virtualization Services & Solutions</v-list-item-title>
                    </v-list-item>
                    <v-list-item @click="navigate('/services-solutions/cloud-solution')">
                        <v-list-item-title>Cloud & Hybrid Cloud Solutions</v-list-item-title>
                    </v-list-item>
                    <v-list-item @click="navigate('/services-solutions/security')">
                        <v-list-item-title>Network Security & Solutions</v-list-item-title>
                    </v-list-item>
                    <v-list-item @click="navigate('/services-solutions/wireless-solution')">
                        <v-list-item-title>Wireless Network Solutions</v-list-item-title>
                    </v-list-item>
                    <v-list-item @click="navigate('/services-solutions/remote-monitor-solution')">
                        <v-list-item-title>Remote Monitoring & Management Solutions</v-list-item-title>
                    </v-list-item>
                    <v-list-item @click="navigate('/services-solutions/bandwidth-solution')">
                        <v-list-item-title>Bandwidth & WAN Acceleration Management</v-list-item-title>
                    </v-list-item>
                    <v-list-item @click="navigate('/services-solutions')">
                        <v-list-item-title>View All</v-list-item-title>
                    </v-list-item>
                </v-list-group>
            </v-list-group>

            <v-list-group value="Company">
                <template v-slot:activator="{ props }">
                    <v-list-item
                    v-bind="props"
                    title="Company"
                    ></v-list-item>
                </template>
    
                <v-list-item @click="navigate('/')">
                    <v-list-item-title>Blog</v-list-item-title>
                </v-list-item>
                <v-list-item @click="navigate('/')">
                    <v-list-item-title>About Us</v-list-item-title>
                </v-list-item>
                <v-list-item @click="navigate('/')">
                    <v-list-item-title>Team</v-list-item-title>
                </v-list-item>
                <v-list-item @click="navigate('/')">
                    <v-list-item-title>Partners & Certifications</v-list-item-title>
                </v-list-item>
    
            </v-list-group>

            <v-list-group value="Products">
                <template v-slot:activator="{ props }">
                    <v-list-item
                    v-bind="props"
                    title="Products"
                    ></v-list-item>
                </template>
        
                <v-list-group value="Networking">
                    <template v-slot:activator="{ props }">
                    <v-list-item
                        v-bind="props"
                        title="Networking"
                    ></v-list-item>
                    </template>
        
                    <v-list-item @click="navigate('/')">
                        <v-list-item-title>Computing</v-list-item-title>
                    </v-list-item>
                </v-list-group>

                <v-list-group value="Computing">
                    <template v-slot:activator="{ props }">
                    <v-list-item
                        v-bind="props"
                        title="Computing"
                    ></v-list-item>
                    </template>
        
                    <v-list-item @click="navigate('/services-solutions/data-center')">
                        <v-list-item-title>Data Center Service</v-list-item-title>
                    </v-list-item>
                </v-list-group>

                <v-list-group value="Security">
                    <template v-slot:activator="{ props }">
                    <v-list-item
                        v-bind="props"
                        title="Security"
                    ></v-list-item>
                    </template>
        
                    <v-list-item @click="navigate('/services-solutions/data-center')">
                        <v-list-item-title>Data Center Services & Solutions</v-list-item-title>
                    </v-list-item>
                    
                </v-list-group>
            </v-list-group>


            <v-list-item @click="navigate('/')">
                <v-list-item-title>Case Studies</v-list-item-title>
            </v-list-item>

            <v-list-item @click="navigate('/promotion')">
                <v-list-item-title>Promotion</v-list-item-title>
            </v-list-item>

            <v-list-item @click="navigate('/')">
                <v-list-item-title>Contact Us</v-list-item-title>
            </v-list-item>

        </v-list>


    </v-navigation-drawer>

  
</template>

<script>
import Software from './products/Software'
import Collaboration from './products/Collaboration'
import Security from './products/Security'
import Computing from './products/Computing'
import Networking from './products/Networking'
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';

export default {
  components: {
    Software,
    Collaboration,
    Security,
    Computing, Networking },
    setup() {
        const drawer = ref(false);
        const router = useRouter();
        const isMobile = computed(() => window.innerWidth < 600);
        const currentRoute = ref('');
        const currentProduct = ref('networking');
        
        const navigate = (route) => {
            router.push(route);
            drawer.value = false; // Close the drawer after navigation (for mobile)
        };

        router.afterEach(to => {
            currentRoute.value = to.path;
        })

        const goRoute = (id) => {
           router.push('/services-solutions/'+id)
        }

        
        const navbarColor = '#fff'; 
        let logo = require('@/assets/images/logo.png');


        return {isMobile, navigate, navbarColor, drawer, logo, currentRoute, goRoute, currentProduct}
    }
}



</script>

<style>

    @media (min-width: 5000px) and (max-width:6000px) {
        #top-navbar {
            padding: 0 6% !important;
        }
    }

    @media (min-width: 4000px) and (max-width:5000px) {
        #top-navbar {
            padding: 0 7% !important;
        }
    }

    @media (min-width: 3000px) and (max-width:4000px) {
        #top-navbar {
            padding: 0 9% !important;
        }
    }

    @media (min-width: 2500px) and (max-width:3000px) {
        #top-navbar {
            padding: 0 11% !important;
        }
    }

    @media (min-width: 2000px) and (max-width:2500px) {
        #top-navbar {
            padding: 0 13% !important;
        }

    }
    
    #top-navbar {
        padding: 0 15%;
        max-width: 1920px !important;
        margin: 0 auto !important;
        left: auto !important;
    }

    #top-navbar > div {
        justify-content: space-between !important;
    }

    #mobile-menu {
        display: none;
    }

    #logo img {
        width: 150px;
        height: 120px;
        padding: 20px 0px 0px;
        object-fit: contain;
    }


    .menu-items {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .menu {
        display: flex;
        justify-content: start;
        align-items: center;
        gap: 10px;
        padding: 1px 3px;
        transition: .4s;
        height: 100px;
    }

    .menu a {
        padding: 8px 10px 8px;
        border-radius: 7px;
        font-size: 16px;
        font-weight: bold;
    }

    .menu:hover .main-menu {
        background: var(--main-color);
        color:#fff;
    }

    .menu:hover .main-menu .fa-sort-down {
        color: #80e29a;
    }

    .contact {
        display: flex;
        align-items: center;
        gap: 15px;
    }

    .contact .contact-menu {
        display: flex;
        flex-direction: column;
        gap: 0;
    }

    .contact .contact-menu div {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .contact .contact-menu div a {
        background: #f7f6dc;
        font-size: 13px;
        padding: 2px 20px;
        border-radius: 5px;
        transition: .3s;
        font-weight: bold;
    }

    .contact .contact-menu div i {
        font-size: 16px;
        color: #ffc090;
        margin-left: 10px;
        transition: .3s;
    }

    .contact .contact-menu div:hover a, .contact .contact-menu div:hover i {
        color: #287e3d;
    }

    .contact .contact-menu .ph-no {
        font-weight: bold;
        font-size: 19px;
    }

    .contact .contact-us {
        background-color: #287e3d;
        color: #fff;
        padding: 13px 20px;
        border-radius: 5px;
        transition: .3s;
        margin-left: 10px;
    }

    .contact .contact-us:hover {
        background-color: #ffc090;
    }

    /* -------- mega menu ------------*/
    .menu .mega-menu{
        position: absolute;
        top: 100%;
        left: 0;
        width: 152% !important;
        transform: translateY(0) translateX(-14%);
        background-color: #fff;
        color: #000;
        display: flex;
        height: 450px;
        opacity: 0;
        visibility: hidden;
    }

    .supply-service {
        display: flex;
        gap: 150px;
        width: 55%;
        background-color: #f7f6dc;
        padding: 60px 0 0px 15%;
    }

    .supply h2 {
        margin-bottom: 10px;
        font-weight: bold;
    }

    .supply .link {
        display: flex;
        flex-direction: column;
        margin-left: -8px;
        position: relative;
    }

    .supply .link a {
        position: relative;
    }

    .supply .link a span {
        position: relative;
        font-size: 15px;
    }

    .supply .link a span::before {
        content: "";
        position: absolute;
        bottom: -5px;
        left: 0;
        width: 0;
        height: 3px;
        background-color: #287e3d;
        transition: width .3s ease;
    }

    .supply .link a span:hover::before {
        width: 100%;
    }

    .service-item {
        display: flex;
        flex-wrap: wrap;
    }

    .service h2 {
        margin-bottom: 30px;
    }

    .service-item .item {
        width: 35%;
        margin: 0 10px 10px 0;
        border: 2px solid #ffc090;
        padding: 5px 5px 5px 20px;
        border-radius: 10px;
        transition: .3s;
    }

    .service-item .item:hover {
        transform: translateY(-3px)
    }

    .service-item .item img {
        width: 50px;
        margin-bottom: 10px;
    }

    .service-item .item div {
        font-size: 14px;
    }

    .mega-menu .solution {
        display: flex;
       
    }

    .mega-menu .solution .img {
        width: 120px;
        height: 120px;
        border-radius: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #fff;
        margin-left: -60px;
        margin-top: 30px;
        float: left;
    }

    .mega-menu .solution .img img {
        width: 100px;
    }

    .mega-menu .solution .solution-info {
        margin: 50px 0 0 80px;
        display: flex;
        flex-direction: column;
    }

    .solution .solution-info h2 {
        margin-bottom: 10px;
    }

    .solution .solution-link {
        display: flex;
        flex-direction: column;
        margin-left: -10px;
    }

    .solution .solution-link a {
        transition: .3s;
        transform: translateX(-3px);
    }

    .solution .solution-link a span {
        font-size: 15px;
        position: relative;
    }

    .solution .solution-link a span::before {
        content: "";
        position: absolute;
        bottom: -3px;
        left: 0;
        width: 0;
        height: 3px;
        background-color: #287e3d;
        transition: width .3s ease;
    }

    .solution .solution-link a span:hover::before {
        width: 100%;
    }

    .solution .solution-link .view-all {
        color: #287e3d;
        font-weight: bold;
    }

    .menu:hover .mega-menu {
        opacity: 1;
        visibility: visible;
    }

    .active {
        background-color: #287e3d;
        color: #fff;
    }


    /* ----------company ---------*/
    .mega-menu.company-mega-menu {
        height: 350px;
    }

    .company-links {
        display: flex;
        width: 55%;
        background-color: #f7f6dc;
        padding: 60px 0 0px 15%;
    }

    .company-links .company-quote {
        width: 50%;
    }

    .company-quote span {
        font-weight: bold;
    }

    .company-quote h1 {
        font-size: 35px;
    }

    .company-info-link {
        display: flex;
        flex-direction: column;
    }

    .company-info-link a {
        position: relative;
    }

    .company-info-link a span {
        position: relative;
        font-weight: bold;
        font-size: 20px;
    }

    .company-info-link a span::before {
        content: "";
        position: absolute;
        bottom: -3px;
        left: 0;
        width: 0;
        height: 3px;
        background-color: #287e3d;
        transition: width .3s ease;
    }

    .company-info-link a span:hover::before {
        width: 100%;
    }


    .company-partners {
        display: flex;
        flex-direction: column;
        padding: 20px 0 20px 40px;
        width: 45% !important;
    }

    .company-partners h2 {
        margin: 40px 0px;
        font-size: 30px;
        font-weight: bolder;
    }

    .company-partners .logo {
        display: flex;
        flex-wrap: wrap;
        gap: 80px;
    }

    .company-partners img {
        width: 120px;
        object-fit: contain;
        margin-bottom: 20px;
    }

    /* ---- products ------ */
    .mega-menu.products-mega-menu {
        height: 330px;
        border-top: 1px solid #aca8a8;
    }

    .products-link {
        display: flex;
        flex-direction: column;
        width: 25%;
        background-color: #f7f6dc;
        padding: 30px 0 0px 15%;
    }

    .products-link a {
        font-size: 14px;
        margin-bottom: -10px;
    }

    .products-link span {
        position: relative;
    }

    .products-link span::before {
        content: " ";
        position: absolute;
        bottom: -4px;
        width: 0;
        left: 0;
        height: 3px;
        background: #287e3d;
        transition: .3s ease;
    }

    .products-link span:hover::before {
        width: 100%;
    }

    .products-link span.active-product::before{
        content: " ";
        position: absolute;
        bottom: -4px;
        width: 100%;
        height: 3px;
        background: #287e3d;
    }

    .products-info {
        width: 75%;
        display: flex;
    }

    .products-info .products {
        width: 45%;
        display: flex;
        padding: 30px 2% 10px;
        gap: 60px;
    }

    .products-info .products .product-left div, .products-info .product-right div {
        font-size: 14px;
        margin-bottom: 3px;
    }

    .products-info .products-vendor {
        width: 55%;
        padding: 30px 15% 0px 5%;
        display: flex;
        flex-direction: column;
        gap: 20px;
        flex-wrap: wrap;
        border-left: 1px solid #88887f;
    }

    .products-info .products-vendor .logo {
        display: flex;
        gap: 40px;
    }

    .products-info .products-vendor img {
        width: 100px;
        height: 100px;
        object-fit: contain;
    }


@media (max-width:1630px) {
    #top-navbar {
        padding: 0 9%;
        height: 85px;
    }

    #logo img {
        width: 110px;
        height: 80px;
        padding: 0;
        object-fit: cover;
    }

    .menu {
        padding: 12px 0px;
        height: 90px;
    }

    /* -------- mega menu ------------*/

    .menu .mega-menu{
        position: absolute;
        top: 83%;
        left: 0;
        width: 122% !important;
        transform: translateY(0) translateX(-9%);
        background-color: #fff;
        color: #000;
        display: flex;
        height: 370px;
        opacity: 0;
        visibility: hidden;
    }

    .supply-service {
        display: flex;
        gap: 80px;
        width: 60%;
        padding: 30px 0 0px 15%;
    }

    .supply h2 {
        margin-bottom: 10px;
        font-size: 20px;
    }

    .supply .link {
        display: flex;
        flex-direction: column;
        margin-left: -8px;
    }

    .supply .link a span{
        font-size: 14px;
    }

    .service h2 {
        margin-bottom: 20px;
        font-size: 20px;
    }

    .service-item .item {
        width: 35%;
        margin: 0 10px 10px 0;
        border: 2px solid #ffc090;
        padding: 5px 5px 0px 10px;
        border-radius: 10px;
    }

    .service-item .item img {
        width: 35px;
        margin-bottom: 10px;
    }

    .service-item .item div {
        font-size: 12px;
    }

    .mega-menu .solution {
        display: flex;
       
    }

    .mega-menu .solution .img {
        width: 100px;
        height: 100px;
        border-radius: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #fff;
        margin-left: -60px;
        margin-top: 30px;
        float: left;
    }

    .mega-menu .solution .img img {
        width: 80px;
    }

    .mega-menu .solution .solution-info {
        margin: 30px 0 0 60px;
    }

    .solution .solution-info h2 {
        margin-bottom: 10px;
        font-size: 20px;
    }

    .solution .solution-link {
        display: flex;
        flex-direction: column;
        margin-left: -10px;
    }

    .solution .solution-link a span {
        font-size: 14px;
    }

    .solution .solution-link .view-all {
        color: #287e3d;
        font-weight: bold;
    }

    .menu a {
        padding: 8px 10px 6px;
        border-radius: 7px;
        font-size: 14px;
    }

    /* ----------company ---------*/

    .mega-menu.company-mega-menu {
        height: 300px;
    }

    .company-links {
        width: 55%;
        padding: 50px 0 0px 13%;
    }

    .company-links .company-quote {
        width: 50%;
    }


    .company-quote h1 {
        font-size: 28px;
    }

    .company-info-link a span{
        font-weight: normal;
        font-size: 16px;
    }


    .company-partners {
        display: flex;
        flex-direction: column;
        padding: 20px 0 20px 40px;
        width: 45% !important;
    }

    .company-partners h2 {
        margin: 40px 0px;
        font-size: 28px;
        font-weight: bold;
    }

    .company-partners .logo {
        display: flex;
        flex-wrap: wrap;
        gap: 80px;
    }

    .company-partners img {
        width: 100px;
        object-fit: contain;
        margin-bottom: 20px;
    }

    /* --- porduct menu --- */
    .mega-menu.products-mega-menu {
        height: 300px;
    }

    .products-link {
        padding: 30px 0 0px 9%;
    }

    .products-info .products {
        width: 60%;
        padding: 30px 2% 10px;
        gap: 60px;
    }

    .products-info .products .product-left div, .products-info .product-right div {
        font-size: 13px;
        margin-bottom: 3px;
    }

    .products-info .products-vendor {
        width: 40%;
        padding: 30px 9% 0px 2%;
        gap: 20px;
    }

}

@media (max-width: 1200px) {
    #top-navbar {
        padding: 0 3%;
        height: 85px;
    }
}

@media (max-width: 1080px) {

    #top-navbar {
        padding: 0 1%;
        height: 85px;
    }

    #logo img {
        width: 100px;
        height: 90px;
        padding: 5px 0px 0px;
    }


    .menu-items {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .menu {
        display: flex;
        justify-content: start;
        align-items: center;
        gap: 5px;
        padding: 1px 3px;
        transition: .4s;
        height: 100px;
    }

    .menu a {
        padding: 8px 5px 8px;
        border-radius: 7px;
        font-size: 14px;
        font-weight: bold;
    }

    .contact {
        display: flex;
        align-items: center;
        gap: 15px;
    }

    .contact .contact-menu {
        display: flex;
        flex-direction: column;
        gap: 0;
    }

    .contact .contact-menu div {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .contact .contact-menu div a {
        background: #f7f6dc;
        font-size: 12px;
        padding: 2px 10px;
        border-radius: 5px;
        transition: .3s;
        font-weight: bold;
    }

    .contact .contact-menu div i {
        font-size: 14px;
        color: #ffc090;
        margin-left: 5px;
        transition: .3s;
    }

    .contact .contact-menu .ph-no {
        font-weight: bold;
        font-size: 15px;
    }

    .contact .contact-us {
        background-color: #287e3d;
        padding: 10px 18px;
        border-radius: 5px;
        transition: .3s;
        margin-left: 10px;
    }

    /* -------- mega menu ------------*/
    .menu .mega-menu{
        position: absolute;
        top: 100%;
        left: 0;
        width: 152% !important;
        transform: translateY(0) translateX(-14%);
        color: #000;
        display: flex;
        height: 400px;
        margin-top: -13px;
    }

    .supply-service {
        display: flex;
        gap: 40px;
        width: 55%;
        background-color: #f7f6dc;
        padding: 60px 0 0px 17%;
    }

    .supply h2 {
        margin-bottom: 10px;
    }

    .supply .link {
        display: flex;
        flex-direction: column;
        margin-left: -8px;
    }

    .supply .link a span{
        font-size: 13px;
    }
   
    .service h2 {
        margin-bottom: 30px;
    }

    .service-item .item {
        width: 40%;
        margin: 0 10px 10px 0;
        border: 2px solid #ffc090;
        padding: 5px 5px 5px 20px;
        border-radius: 10px;
        transition: .3s;
    }

    .service-item .item:hover {
        transform: translateY(-3px)
    }

    .service-item .item img {
        width: 30px;
        margin-bottom: 10px;
    }

    .service-item .item div {
        font-size: 14px;
    }

    .mega-menu .solution {
        display: flex;
       
    }

    .mega-menu .solution .img {
        width: 120px;
        height: 120px;
        border-radius: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #fff;
        margin-left: -60px;
        margin-top: 30px;
        float: left;
    }

    .mega-menu .solution .img img {
        width: 100px;
    }

    .mega-menu .solution .solution-info {
        margin: 50px 0 0 15px;
        display: flex;
        flex-direction: column;
    }

    .solution .solution-info h2 {
        margin-bottom: 10px;
    }

    .solution .solution-link {
        display: flex;
        flex-direction: column;
        margin-left: -10px;
    }

    .solution .solution-link a span {
        font-size: 12px;
    }

    .solution .solution-link .view-all {
        color: #287e3d;
        font-weight: bold;
    }

    .menu:hover .mega-menu {
        opacity: 1;
        visibility: visible;
    }

    .active {
        background-color: #287e3d;
        color: #fff;
    }


    /* ----------company ---------*/

    .company-links {
        display: flex;
        width: 55%;
        background-color: #f7f6dc;
        padding: 60px 0 0px 18%;
    }

    .company-links .company-quote {
        width: 50%;
    }

    .company-quote span {
        font-weight: bold;
    }

    .company-quote h1 {
        font-size: 40px;
    }

    .company-info-link a span{
        font-weight: bold;
        font-size: 16px;
        transition: .3s;
    }

    .company-info-link a:hover {
        color: #287e3d;
    }

    .company-partners {
        display: flex;
        flex-direction: column;
        padding: 20px 0 20px 10px;
        width: 45% !important;
    }

    .company-partners h2 {
        margin: 40px 0px;
        font-size: 20px;
        font-weight: bolder;
    }

    .company-partners .logo {
        display: flex;
        flex-wrap: wrap;
        gap: 50px;
    }

    .company-partners img {
        width: 100px;
        object-fit: contain;
        margin-bottom: 20px;
    }

    /* ---- products ------ */
    .mega-menu.products-mega-menu {
        height: 300px;
    }

    .products-link {
        width: 25%;
        padding: 30px 0 0px 15%;
    }

    .products-link a {
        font-size: 12px;
        margin-bottom: -10px;
    }

    .products-info {
        width: 75%;
    }

    .products-info .products {
        width: 45%;
        padding: 30px 2% 10px;
        gap: 40px;
    }

    .products-info .products .product-left div, .products-info .product-right div {
        font-size: 12px;
        margin-bottom: 3px;
    }

    .products-info .products-vendor {
        width: 55%;
        padding: 30px 3% 0px;
        gap: 20px;
    }

    .products-info .products-vendor .logo {
        gap: 40px;
    }

    .products-info .products-vendor img {
        width: 100px;
        height: 100px;
    }
}

@media (max-width: 910px) {

    #top-navbar {
        padding: 0 1%;
        height: 85px;
    }

    #logo img {
        width: 80px;
        height: 70px;
        padding: 5px 0px 0px;
    }


    .menu-items {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .menu {
        display: flex;
        justify-content: start;
        align-items: center;
        gap: 1px;
        padding: 1px 0px;
        transition: .4s;
        height: 100px;
    }

    .menu a {
        padding: 8px 5px 8px;
        border-radius: 7px;
        font-size: 13px;
        font-weight: bold;
    }

    .contact {
        display: flex;
        align-items: center;
        gap: 15px;
    }

    .contact .contact-menu {
        display: flex;
        flex-direction: column;
        gap: 0;
    }

    .contact .contact-menu div {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .contact .contact-menu div a {
        background: #f7f6dc;
        font-size: 10px;
        padding: 2px 10px;
        border-radius: 5px;
        transition: .3s;
        font-weight: bold;
    }

    .contact .contact-menu div i {
        font-size: 14px;
        color: #ffc090;
        margin-left: 5px;
        transition: .3s;
    }

    .contact .contact-menu .ph-no {
        font-weight: bold;
        font-size: 12px;
    }

    .contact .contact-us {
        background-color: #287e3d;
        padding: 10px 5px;
        border-radius: 5px;
        transition: .3s;
        margin-left: 1px;
        font-size: 11px;
    }

    /* -------- mega menu ------------*/
    .menu .mega-menu{
        position: absolute;
        top: 100%;
        left: 0;
        width: 152% !important;
        transform: translateY(0) translateX(-14%);
        color: #000;
        display: flex;
        height: 400px;
        margin-top: -13px;
    }

    .supply-service {
        display: flex;
        gap: 30px;
        width: 53%;
        background-color: #f7f6dc;
        padding: 60px 0 0px 17%;
    }

    .supply h2 {
        margin-bottom: 10px;
    }

    .supply .link {
        display: flex;
        flex-direction: column;
        margin-left: -8px;
    }

    .supply .link a span{
        font-size: 13px;
    }
   
    .service h2 {
        margin-bottom: 30px;
    }

    .service-item .item {
        width: 40%;
        margin: 0 10px 10px 0;
        border: 2px solid #ffc090;
        padding: 5px 5px 5px 20px;
        border-radius: 10px;
        transition: .3s;
    }

    .service-item .item:hover {
        transform: translateY(-3px)
    }

    .service-item .item img {
        width: 30px;
        margin-bottom: 10px;
    }

    .service-item .item div {
        font-size: 14px;
    }

    .mega-menu .solution {
        display: flex;
       
    }

    .mega-menu .solution .img {
        width: 100px;
        height: 100px;
        border-radius: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #fff;
        margin-left: -60px;
        margin-top: 30px;
        float: left;
    }

    .mega-menu .solution .img img {
        width: 90px;
    }

    .mega-menu .solution .solution-info {
        margin: 50px 0 0 3px;
        display: flex;
        flex-direction: column;
    }

    .solution .solution-info h2 {
        margin-bottom: 10px;
    }

    .solution .solution-link {
        display: flex;
        flex-direction: column;
        margin-left: -10px;
    }

    /* ---- products ------ */
    .mega-menu.products-mega-menu {
        height: 260px;
    }

    .products-link {
        width: 25%;
        padding: 30px 0 0px 15%;
    }

    .products-link a {
        font-size: 11px;
        margin-bottom: -10px;
    }

    .products-info {
        width: 75%;
    }

    .products-info .products {
        width: 50%;
        padding: 30px 2% 10px;
        gap: 10px;
    }

    .products-info .products .product-left div, .products-info .product-right div {
        font-size: 11px;
        margin-bottom: 3px;
    }

    .products-info .products-vendor {
        width: 50%;
        padding: 30px 1% 0px;
        gap: 20px;
    }

    .products-info .products-vendor .logo {
        gap: 40px;
    }

    .products-info .products-vendor img {
        width: 75px;
        height: 75px;
    }

}

@media (max-width: 768px) {
    #top-navbar {
        padding: 0 3%;
        height: 85px;
    }

    #logo img {
        width: 110px;
        height: 80px;
        padding: 0;
        object-fit: cover;
    }

    #mobile-menu {
        display: block;
        font-size: 28px;
        margin-bottom: 10px;
    }

    #menu, .menu-items, .contact {
        display: none;
    }

    #drawer {
        width: 300px !important;
        margin-top: -15px;
    }
}

@media (max-width: 528px) {
    #top-navbar {
        padding: 0 1%;
        height: 85px;
    }

    #logo img {
        width: 100px;
        height: 80px;
        padding: 0;
        object-fit: cover;
    }

    #drawer {
        width: 250px !important;
        margin-top: -15px;
    }
}

@media (max-width: 390px) {
    #drawer {
        width: 320px !important;
        margin-top: -15px;
    }
}

</style>
