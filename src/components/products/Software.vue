<template>
    <div class="products">
        <div class="product-left">
            <div>Operating Systems</div>
            <div>Application Software</div>
            <div>Virtualization </div>
            <div>Cloud Services</div>
            <div>Endpoint Security</div>
        </div>
        <div class="product-right">
            <div>Windows, Windows Server, Red Hat Enterprise Linux</div>
            <div>Microsoft SQL Server, Exchange Server, Office 365, Adobe, 
                Autodesk, Google Workspace, Dropbox
                Solarwinds, Veeam, LogMeIn, ZOOM, Cloudflare</div>
            <div>VMware, Red Hat, Nutanix, SUSE </div>
            <div>Azure, AWS, Google Cloud, Alibaba Cloud, IBM Cloud</div>
            <div>Fortinet, Symantec, Trend Micro, SOPHOS, Kaspersky, 
                Bitdefender, McAfee, ESET, BullGuard, Acronis, Fireeye
                Splunk, Radware, Rapid7, Algosec, SecureAge</div>
        </div>
    </div>
    <div class="products-vendor">
        <div class="logo">
            <img :src="require('@/assets/images/logo/cisco.png')" alt="">
            <img :src="require('@/assets/images/logo/dell_emc.png')" alt="">
        </div>
        <div class="logo">
            <img :src="require('@/assets/images/logo/fortinet.png')" alt="">
            <img :src="require('@/assets/images/logo/hpe.png')" alt="">
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>
