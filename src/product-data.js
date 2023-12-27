const products = [
    {
        id: 1,
        name: "Shoes",
        productTipe: "Running shoes",
        price: 50,
        rating: 4,
        image:"https://s2.r29static.com/bin/entry/ebd/0,675,2000,1050/x,80/1929471/image.jpg",
        description:
        "Nike Air is our iconic innovation that uses pressurized air in a durable, flexible membrane"
    },
    {
     id: 2,
     name: "Macbook",
        productTipe: "Apple Macbook",
        price: 1200,
        rating: 5,
        image:"https://www.eagletechnology.com.ar/wp-content/uploads/2021/01/apple-macbook-air-2020-133-pantalla-retina-intel-i3-8gb-256ssd.jpg",
        description:
        "The latest generation of Apple MacBooks, released in june 2023, is available in two models: the 13-inch MacBook Air and the 14-and 16-inch MacBook Pro. Both models are powered by the new M3 chip, manufactured with 3-nanometer technology and a new GPU architecture.",
    },
    {
     id:3,
        name: "Iphone",
            productTipe: "Apple Iphone",
            price: 1000,
            rating: 5,
            image:"https://www.apple.com/newsroom/images/product/iphone/geo/Apple-iPhone-14-iPhone-14-Plus-hero-220907-geo.jpg.og.jpg?202310101605",
            description:
            "The iPhone 14 Pro and iPhone 13 Pro Max are professional-grade devices with an all-new Super Retina XDR display with ProMotion featuring an adaptive refresh rate up to 120Hz, making the touch experience faster and more responsive.",
        },
        {
            id:4,
               name: "Ipad",
                   productTipe: "Apple Ipad",
                   price: 970,
                   rating: 5,
                   image:"https://www.macstation.com.ar/img/productos/2458-1.jpg",
                   description:
                   "The new iPad mini features an all-screen design, the A15 Bionic chip, Center Stage, 5G, and more. Available in four gorgeous finishes.",   

    },
    {
        id:5,
           name: "Apple Watch",
               productTipe: "Apple Watch",
               price: 500,
               rating: 5,
               image:"https://www.apple.com/newsroom/images/live-action/wwdc-2023/standard/watchos-10/Apple-WWDC23-watchOS-10-5up-230605.jpg.og.jpg?202310110234",
               description:
               "Apple Watch Series 7 delivers significant improvements — from our largest and most advanced display, to enhanced durability and faster charging — making the world’s best smartwatch better than ever before.",
    },
    {
        id:6,
           name: "Airpods",
               productTipe: "Apple Airpods",
               price: 300,
               rating: 5,
               image:"https://i.pcmag.com/imagery/roundups/05jwogOdvDP6fhvzGNqwJh7-3.fit_lim.size_850x490.v1696945912.jpg",
               description:
               "AirPods 3 feature a new design, delivering a magical experience with breakthrough technology and a new contoured shape that is designed to fit securely in the ear for all-day comfort.",
    },
    {
        id:7,
           name: "Sony",
               productTipe: "Sony Sound Systems",
               price: 600,
               rating: 5,
               image:"https://http2.mlstatic.com/D_NQ_NP_986699-MLA73192786105_122023-O.webp",
               description:
               "Sony sound systems are an excellent choice for those looking for a powerful and versatile audio system.",
    },
    {
        id:8,
           name: "Nitro.pe Car",
               productTipe: "Nitro.pe Car Audio Systems",
               price: 2500,
               rating: 5,
               image:"https://www.nitro.pe/images/2016/julio/consejos_montar_car_audio.jpg",
               description:
               "Nitro.pe car audio systems are characterized by their quality and performance. The speakers are made with hight-quality materials and offer clear and powerful sound.",
    },
    {
        id:9,
           name: "PlayStations 5",
               productTipe: "PlayStation 5 Gaming Console",
               price: 2000,
               rating: 5,
               image:"https://www.clarin.com/img/2021/09/24/EAVLRNeRm_360x240__1.jpg",
               description:
                "The lates generation of sony gaming consoles, the PlayStation 5, was released in 2020. The console offers a number of significant improvements over its predecessor, the PlayStation 4, includind: A more powerful porcessor: AMD Zen 2 custom 8-core,16 thread processor, which offers up to 10 times faster performance than the PlayStation 4.",
    },
    {
        id:10,
           name: "Solar Kit",
               productTipe: "Litio 15 kWh off-Grid Solar Kit",
               price: 30000,
               rating: 5,
               image:"https://i.ebayimg.com/images/g/xAEAAOSw9EtjwD68/s-l1600.jpg",
               description:
               "The kit is designed to produce 15 kWh of energy per day, which is enough to power a small home or business. The solar panels are 350 watts and are designed to operate in harsh weather conditions.",   
    },
    {
        id:11,
           name: "Ipad",
               productTipe: "Apple Ipad",
               price: 990,
               rating: 5,
               image:" https://www.ventasrosario.com.ar/wp-content/uploads/2022/11/Apple-iPad-10th-Generation_01_default.png",
               description:
               "The new iPad features the powerful A13 Bionic chip, support for Apple Pencil (1st generation) and Smart Keyboard, the intuitive iPadOS 15, and twice the storage of the previous generation.",
    },
    {
        id:12,
           name: "Jet Ski",
               productTipe: "Yamaha WaveRunner",
               price: 18000,
               rating: 5,
               image:"https://www.autobild.es/sites/navi.axelspringer.es/public/media/image/2015/09/461285-moto-agua-mansory.jpg",
               description:
               "The Yamaha WaveRunner is a personal watercraft (PWC) that is manufactured by Yamaha Motor Corporation. The first WaveRunner was introduced in 1986 and has since become one of the most popular PWCs on the market, is available in a variety of models, each with its own unique features and capabilities.",
    },
    {
        id:13,
           name: "FDM 3D Printer",
               productTipe: "Creality Ender-3 V2 Neo Autolevel FDM 3D Printer",
               price: 950,
               rating: 5,
               image:"https://http2.mlstatic.com/D_NQ_NP_646294-MLA53313738634_012023-O.webp",
               description:
               "The Creality Ender-3 V2 Neo Autolevel FDM 3D Printer is a popular entry level 3D printer that offers a good value for money. The printer comes with a number of features that make it ideal for beginners, including an automatic bed leveling, a dual-drive Bowden extruder, and an open-frame design.",
    },
    {
        id:14,
           name: "Smart Fridges",
               productTipe: "Smart Fridges with Touchscreens",
               price: 3000,
               rating: 5,
               image:"https://www.electrodomesticoslanave.es/wp-content/uploads/2022/07/14994255829252.jpg ",
                description:
                "Smart fridges with touchscreens are the latest trend in kitchen appliances. They are designed to make cooking easier and more convenient by allowing users to access recipes, watch videos, and even order groceries from the fridge, Smart fridges can connect to other smart devices, such as thermostats, voice assistants, and smart light.",
    },
    {
        id:15,
           name: "Smart Washers",
               productTipe: "Smart Fridges with Touchscreens",
               price: 3500,
               rating: 5,
               image:" https://img.global.news.samsung.com/latin/wp-content/uploads/2020/07/QRATOR_LAVADORA-FB-e1597706552591.jpg",
                description:
                "Smart washers are appliances that connect to the internet and allow users to control them remotely through a mobile app or voice assistant. These washers often include a range of additional features, such as automatic load detection,cycle recommendations, and connectivity with other smart devices, include: Remote control: Users can control the washer from anywhere, such as from their smartphone or tablet.",
    },
    {
        id:16,
           name: "Smart Dishwashers",
               productTipe: "Smart Dishwashers with Touchscreens",
               price: 1800,
               rating: 5,
               image:"https://i.blogs.es/3db9af/guia-de-compra-lavavajillas-smart/1366_2000.jpeg",
                description:
                "Smart dishwashers are appliances that connect to the internet and can be controlled remotely using a smartphone, tablet, or voice assistant "
    },
    {
        id:17,
           name: "Smart appliances",
               productTipe: "Smart home appliances",
               price: 8000,
               rating: 5,
               image:" https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/media/image/2023/01/electrodomesticos-2930880.jpg?tf=3840x",
                description:
                "Smart home appiances are devices that connect to the internet and can be controlled remotely using a smartphone, tablet, or voice assistant.",
    },
    {
    id: 18,
    name: "Smart TV",
    productType: "Sony 4K Smart TVs",
    price: 2000,
    rating: 5,
    image: "https://img.youtube.com/vi/jATwo4MLdFg/hqdefault.jpg",
    description:
    "Sony 4K Smart TVs are a great option for consumers looking for a state-of-the-art viewing experience. These TVs offer sharp, detailed images with a resolution of 3840 x 2160 pixeles.",
},
{
    id: 19,
    name: "3D Printing & Design",
    productType: "3D Printing & Design Services",
    price: 5000,
    rating: 5,
    image: "https://www.compartirpalabramaestra.org/sites/default/files/field/image/hologramas-en-3d-un-paso-hacia-el-futuro-de-la-educacion.jpg",
    description:
    "3D printing is a process of making three dimensional solid objects from a digital file. The creation of a 3D printed object is achieved using additive processes. In an additive process an object is created by laying down successive layers of material until the entire object is created.",
},
{
    id: 20,
    name: "futurDrone",
    productType: "Professional Drone with interchangeable camera from Yuneec",
    price: 6900,
    rating: 5,
    image: "https://futurdrone.com/magaz/wp-content/uploads/2022/06/Dron-Profesional-YUneec-H520E-006.jpg",
    description:
    "The Yuneec H520E is a professional drone with interchangeable camera that can be used for a variety of applications, including aerial photography, videography, and surveying. The drone is equipped with a 4K camera that can be swapped out for a thermal imaging camera, a 360-degree camera, or a high-resolution camera.",
},

      
]
export default products;
