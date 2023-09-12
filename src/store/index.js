import { createStore } from 'vuex'

export default createStore({
    state: {
        service: null,
        services: [{
                title: 'Data Center Services & Solutions',
                slug: 'data-center',
                p: `Our expertise Solution in Data Center. Includes the design, build, ownership and
                operation of Efficiency, Availability, Scalability & Security`,
                sub_title_1: `Data center IT Solution`,
                list_one: ['Advanced Networking', 'Computing', 'Storage Equipment', 'Power System', 'Generator & Online UPS', 'Rack & Structure Cabling'],
                sub_title_2: `Data Center Physical Security Solution`,
                list_two: ['Fire Alarm & Fire Suppression System', 'IP CCTV & Access Control System', 'Management & Monitoring System'],
                img: require('@/assets/images/icon/DataCenter.png'),
                banner_img: require('@/assets/images/dc_solution.jpg'),
                preview_img: require('@/assets/images/dc1.jpg')
            },
            {
                title: 'Virtualization Services & Solutions',
                slug: 'virtualization',
                p: `Virtualization is the process of creating a virtual version of a server or
                computer system using software rather than hardware. It enables multiple
                operating systems to run simultaneously on a single machine.
                We, Green IT provides the solution for the customer who wants to change or
                adapt a company’s infrastructure to virtualization with Hi-end products both
                Hardware and Software to ensure that get a high level of performance
                workload and support the growing number of organization in the future.
                `,
                sub_title_1: `Virtualization Solution`,
                list_one: ['Application Virtualization', 'Desktop Virtualization', 'Hardware Virtualization', 'Network Virtualization', 'Operating System (OS) Virtualization', 'Server Virtualization', 'Storage Virtualization'],
                sub_title_2: null,
                list_two: null,
                img: require('@/assets/images/icon/vmware.png'),
                banner_img: require('@/assets/images/vmware-banner.png'),
                preview_img: require('@/assets/images/vmware.jpg')
            },
            {
                title: 'Cloud & Hybrid Cloud Solutions',
                slug: 'cloud-solution',
                p: `Cloud computing is the delivery of IT services over the internet. <br>
                Cloud computing is constantly evolving, which is why we have a dedicated technical team who
                research and test the latest and best cloud solutions available. By hosting your existing systems and
                applications in the cloud, you minimize the risk of data loss and improve your ability to work
                remotely.
                <br>
                By partnering with some of the world’s leading cloud solution providers, we can help you maximize
                your cloud solutions and infrastructure, scaling them to meet your business’s needs.
                `,
                sub_title_1: `Green IT optimizes`,
                list_one: ['Amazon Web Services', 'Microsoft Azure', 'Office 365', 'Google', 'Alibaba Cloud'],
                sub_title_2: null,
                list_two: null,
                img: require('@/assets/images/icon/cloud.png'),
                banner_img: require('@/assets/images/cloud-banner.png'),
                preview_img: require('@/assets/images/cloud.jpg')
            },
            {
                title: 'Infrastructure Services & Solutions',
                slug: 'infracture',
                p: `Green IT delivers a full set of services to keep your IT Infrastructure reliable with on-going
                Infrastructure administration, continuous monitoring and prompt troubleshooting. We are also
                ready to plan, implement and manage changes in your IT environment to support the
                uninterrupted flow of your business operations.
                `,
                sub_title_1: `These services are designed to help your organization`,
                list_one: ['IT Infrastructure Consulting', 'Infrastructure Management', 'Wide Infrastructure Services', 'Advance Networking Services', 'Cloud Infrastructure Services', 'Data center Management', 'Virtual Desktop Infrastructure Services', 'Site Survey Services'],
                sub_title_2: null,
                list_two: null,
                img: require('@/assets/images/icon/Infra.png'),
                banner_img: require('@/assets/images/infra_banner.jpg'),
                preview_img: require('@/assets/images/infra1.jpeg')
            },
            {
                title: 'Security Services & Solution',
                slug: 'security',
                p: `Network and security are the pillars of the current digital world. Businesses across the globe
                are rapidly scaling up their processes to keep up with the changing customer demands and
                technological landscape.
                Our highly experienced and certified security team can assist with
                your current challenges or we can deliver an end-to-end security
                practice as a managed service.`,
                sub_title_1: `We, Green IT offers comprehensive security service revolving around:
                `,
                list_one: ['Next Generation Firewall and Advanced Threat Management', 'Zero-Day Malware detection and prevention', 'Security policy implementation', 'Application Threat Protection', 'Backup and Disaster Recovery', 'Web Security', 'Endpoint Protection'],
                sub_title_2: null,
                list_two: null,
                img: require('@/assets/images/icon/security.png'),
                banner_img: require('@/assets/images/security_banner.jpg'),
                preview_img: require('@/assets/images/security1.jpg')
            },
            {
                title: 'Wireless Network Solutions',
                slug: 'wireless-solution',
                p: `Wireless links two or more devices over a short distance using a wireless distribution method,
                usually providing a connection through an access point for internet access. Allow users to move
                around within a local coverage area, and still remain connected to the network.
                <br>
                We, Green IT can assist you and at every stage with our endto-end solutions.
                Our technical and support teams will then guide you through
                the network design, installation and post-deployment.
                `,
                sub_title_1: null,
                list_one: ['Controller', 'Controller-less', 'Cloud-managed options', 'Point to Point', 'Point to Multi-Point options'],
                sub_title_2: null,
                list_two: null,
                img: require('@/assets/images/icon/wireless.png'),
                banner_img: require('@/assets/images/wireless-banner.jpg'),
                preview_img: require('@/assets/images/wireless.jpg')
            },
            {
                title: 'Remote Monitoring & Management Solutions',
                slug: 'remote-monitor-solution',
                p: `Remote Monitoring & Management can help businesses gain insight into the performance, health, and status 
                of their various IT assets.They can also help IT
                professionals discover new assets, detect issues and
                resolve them remotely. With properly maintained remote
                monitoring, businesses will improve both network
                performance and network security.
                
                `,
                sub_title_1: null,
                list_one: ['Monitor IT assets including endpoints, computers, and applications', 'Monitor network performance, security and availability', 'Discover and track IT-related issues', 'Allow remote administrators to access endpoints'],
                sub_title_2: null,
                list_two: null,
                img: require('@/assets/images/icon/remote-monitor.png'),
                banner_img: require('@/assets/images/remote-monitor-banner.png'),
                preview_img: require('@/assets/images/remote-monitor.png')
            },
            {
                title: 'Bandwidth & WAN acceleration Management',
                slug: 'bandwidth-solution',
                p: null,
                sub_title_1: `WAN acceleration use cases include the following: `,
                list_one: [
                    'improving response times for business applications over WAN links and mobile connections;',
                    'optimizing traffic from data center to data center for faster storage replication;',
                    'improving enterprise investment in bandwidth; and',
                    'moving traffic across hybrid WANs that include public cloud connectivity to access cloud applications.'
                ],
                sub_title_2: null,
                list_two: [
                    'Limiting bandwidth for data transfers',
                    'Reserving bandwidth for specific services',
                    'Data Flow Monitoring',
                    'Managing User Policies',
                    'WAN Link Clustering'
                ],
                img: require('@/assets/images/icon/bandwidth.png'),
                banner_img: require('@/assets/images/bandwidth-banner.png'),
                preview_img: require('@/assets/images/bandwidth.jpg')
            },
            {
                title: 'Endpoint Protection & Management Solutions',
                slug: 'endpoint-protection-solution',
                p: `Various
                cybersecurity solutions can be installed on and monitor these devices to protect them against cyber
                threats regardless of where they are located on or off of the corporate network. 
                <br>
                We, Green IT ready to help you to reduce the risk of attacks and prevent them from happening.
                `,
                sub_title_1: `Endpoint protection involves`,
                list_one: [
                    'monitoring and protecting endpoints against cyber threats',
                    'Protected endpoints include desktops, laptops, smartphones, tablet computers other devices',
                    'improving enterprise investment in bandwidth; and',
                    'moving traffic across hybrid WANs that include public cloud connectivity to access cloud applications.'
                ],
                sub_title_2: null,
                list_two: null,
                img: require('@/assets/images/icon/end-protection.png'),
                banner_img: require('@/assets/images/end-protection-banner.jpg'),
                preview_img: require('@/assets/images/end-protection.jpg')
            },
            {
                title: 'Conferencing Solutions',
                slug: 'conferencing-solution',
                p: `Video conferencing solutions allow your team to meet and collaborate more effectively, increasing
                productivity, saving you time and money, and allowing your business to grow. Strengthen valued
                relationships with partners, suppliers, internal teams, remote workers, investors, and customers
                through a unified experience.
                <br><br>
                Working with a number of leading video conferencing vendors, our experienced team will ensure
                that you benefit from the introduction of a video solution that meets your needs both now and in
                the future.
                `,
                sub_title_1: null,
                list_one: null,
                sub_title_2: null,
                list_two: null,
                img: require('@/assets/images/icon/conferencing.png'),
                banner_img: require('@/assets/images/conferencing-banner.jpg'),
                preview_img: require('@/assets/images/conferencing.jpg')
            },
            {
                title: 'VOIP Solutions',
                slug: 'voip',
                p: `Make and receive calls from anywhere. VoIP powers the modern workforce with flexible, reliable,
                high-quality voice communications.
                We always keep our focus on offering a hassle-free solution to our customers. Simplify your
                communications with us. As a fully managed IT service provider, Green IT can provide VoIP
                service from consultation all the way through to implementation of your phone service by
                partnering with the most industry leading VOIP Solutions Vendors.`,
                sub_title_1: null,
                list_one: null,
                sub_title_2: null,
                list_two: null,
                img: require('@/assets/images/icon/voip.png'),
                banner_img: require('@/assets/images/voip_banner.jpeg'),
                preview_img: require('@/assets/images/voip1.jpg')
            },
            {
                title: 'Server Solutions',
                slug: 'server',
                p: `Our Server solutions offer a comprehensive, innovative portfolio designed to address your evolving
                needs and deliver greater value to your business.`,
                sub_title_1: `We supply all type of servers by partnering with the following vendors and provide solutions:
                `,
                list_one: ['Workgroup/Domain Server', 'File/Print/DHCP/DNS Server', 'Backup Server', 'Web Server', 'Voice Server', 'Email Server', 'Application Server', 'Terminal Server', 'Small Business Server', 'Storage Server', 'VPN Server', 'E-Commerce Server', 'Database Server'],
                sub_title_2: null,
                list_two: null,
                img: require('@/assets/images/icon/ServerStorage.png'),
                banner_img: require('@/assets/images/server_banner.jpg'),
                preview_img: require('@/assets/images/server1.jpeg')
            },
            {
                title: 'Storage Solutions',
                slug: 'storage-solution',
                p: `We, Green IT offer a wide range of Storages Solutions that address all your Storage needs, right
                from Designing to Implementation to Support, etc.We provide Storage implementation,
                consolidation, management, virtualization & Data protection.
                <br><br>
                We supply well known brand of Storages, various type of Services & Solutions for SME - Medium and
                Enterprise business.
                `,
                sub_title_1: `Type of storage, kind of services and solutions we provided:
                `,
                list_one: [
                    'Direct Attach Storage Solutions',
                    'Network Attach Storage Solutions',
                    'SAN Storage Services & Solutions',
                ],
                sub_title_2: null,
                list_two: null,
                img: require('@/assets/images/icon/storage.png'),
                banner_img: require('@/assets/images/storage-banner.jpg'),
                preview_img: require('@/assets/images/storage.jpg')
            },
            {
                title: 'Power Backup Solutions',
                slug: 'power-backup',
                p: `Power Backup Solution is became inevitable part of today's IT need of any businesses. We provide
                Power Management Solutions for mission critical applications where power quality and reliability are
                essential. We work with the leading manufacturers to provide UPS Systems, IPS Systems and 48V DC
                Systems for applications such as IT, Data Centre, Industrial, Medical and Telecoms.
                
                <br><br>
                Whether you are a small business or a multi-national company we have both the products and
                services the experience to provide solutions you can trust.
                `,
                sub_title_1: null,
                list_one: null,
                sub_title_2: null,
                list_two: null,
                img: require('@/assets/images/icon/power.png'),
                banner_img: require('@/assets/images/power-banner.jpg'),
                preview_img: require('@/assets/images/power.jpg')
            },
            {
                title: 'Rack & Racking Solutions',
                slug: 'rack-solution',
                p: `Green IT provide complete racking services & solutions, and offer wide selection of network
                server wall mount racks with high quality and reasonable price. Feel free to contact us for
                help or specialized needs.
                `,
                sub_title_1: `Available racks and racking solutions offered by Green IT:
                `,
                list_one: [
                    'Server Rack, Network Rack, Open Frame, Enclosure',
                    'Rack Shelves & Cable Management Arm',
                    'Rack components & Mounting Hardware accessories'
                ],
                sub_title_2: null,
                list_two: null,
                img: require('@/assets/images/icon/rack-solution.png'),
                banner_img: require('@/assets/images/rack-solution-banner.jpg'),
                preview_img: require('@/assets/images/rack-solution.jpg')
            },
            {
                title: 'KVM & KMM Solutions',
                slug: 'kvm-kmm',
                p: `Simplify administration, reduce cable clutter and minimize server downtime with KVM & KMM
                solutions offered by Green IT. From a single console, you can perform large-scale updates and manage
                up to 1,024 local and remote servers running various operating systems. And with compact designs,
                you can conserve valuable rack space in your data center.
                <br><br>
                We, Green IT proud to offer KVM/KMM Products and Solutions from the following vendors. 
                `,
                sub_title_1: null,
                list_one: null,
                sub_title_2: null,
                list_two: null,
                img: require('@/assets/images/icon/kvm.png'),
                banner_img: require('@/assets/images/kvm-banner.avif'),
                preview_img: require('@/assets/images/kvm.png')
            },
            {
                title: 'Server Rental Service',
                slug: 'server-rental',
                p: `Server Rental is sub-directory of Green IT Co.,Ltd. We are a preferred rental partner and have over 6 years experience working with most popular IT Vendors and their customers.We can cater for any sized rental requirement, whatever you need`,
                sub_title_1: `
                Server Rental is sub-directory of Green IT Co.,Ltd. Our rental service offer:
                `,
                list_one: ['Server', 'Storage', 'NAS', 'Router', 'Switch', 'Firewall', 'Wireless AP & Wireless Controller'],
                sub_title_2: null,
                list_two: null,
                img: require('@/assets/images/icon/ServerRental.png'),
                banner_img: require('@/assets/images/server_rental_banner.jpg'),
                preview_img: require('@/assets/images/server_rental1.jpg')
            },
        ]
    },
    getters: {
        getServices(state) {
            return state.services;
        }
    },
    mutations: {
        setService: (state, service) => state.service = service,
    },
    actions: {
        getService: (context, slug) => {
            let service = context.state.services.find((service) => service.slug == slug);

            context.commit('setService', service)
        }
    },
    modules: {}
})