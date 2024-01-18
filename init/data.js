const productData = [
    {
        title: "Smartphone X",
        description: "High-performance smartphone with a 6.5-inch display, 128GB storage, and dual-camera setup.",
        image: { url: "https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=600" },
        price: 699.99,
        category: "Electronics"
    },
    {
        title: "Laptop Pro",
        description: "Powerful 15.6-inch laptop with Intel Core i7 processor, 16GB RAM, and dedicated graphics for gaming and productivity.",
        image: { url: "https://images.pexels.com/photos/1006293/pexels-photo-1006293.jpeg?auto=compress&cs=tinysrgb&w=600" },
        price: 1299.99,
        category: "Electronics"
    },
    {
        title: "Fitness Tracker",
        description: "Water-resistant fitness tracker with heart rate monitor, sleep tracking, and GPS functionality.",
        image: { url: "https://images.pexels.com/photos/4498483/pexels-photo-4498483.jpeg?auto=compress&cs=tinysrgb&w=600" },
        price: 79.99,
        category: "Fitness"
    },
    {
        title: "Coffee Maker Deluxe",
        description: "Stainless steel coffee maker with programmable timer, 12-cup capacity, and built-in grinder.",
        image: { url: "https://images.pexels.com/photos/2775827/pexels-photo-2775827.jpeg?auto=compress&cs=tinysrgb&w=600" },
        price: 129.99,
        category: "Kitchen Appliances"
    },
    {
        title: "Smart TV 4K",
        description: "55-inch smart TV with 4K UHD resolution, HDR support, and built-in streaming apps.",
        image: { url: "https://images.pexels.com/photos/2775827/pexels-photo-2775827.jpeg?auto=compress&cs=tinysrgb&w=600" },
        price: 799.99,
        category: "Electronics"
    },
    {
        title: "Wireless Earbuds",
        description: "True wireless earbuds with noise-canceling technology, touch controls, and long battery life.",
        image: { url: "https://images.pexels.com/photos/3780681/pexels-photo-3780681.jpeg?auto=compress&cs=tinysrgb&w=600" },
        price: 129.99,
        category: "Audio"
    },
    {
        title: "Digital Camera",
        description: "Mirrorless camera with 24MP sensor, 4K video recording, and a variety of shooting modes.",
        image: { url: "https://images.pexels.com/photos/986733/pexels-photo-986733.jpeg?auto=compress&cs=tinysrgb&w=600" },
        price: 899.99,
        category: "Photography"
    },
    {
        title: "Home Security System",
        description: "Smart home security system with cameras, motion detectors, and mobile app integration.",
        image: { url: "https://images.pexels.com/photos/430208/pexels-photo-430208.jpeg?auto=compress&cs=tinysrgb&w=600" },
        price: 349.99,
        category: "Smart Home"
    },
    {
        title: "Electric Blender",
        description: "High-powered blender with multiple speed settings, stainless steel blades, and easy-to-clean design.",
        image: { url: "https://images.pexels.com/photos/8845666/pexels-photo-8845666.jpeg?auto=compress&cs=tinysrgb&w=600" },
        price: 49.99,
        category: "Kitchen Appliances"
    },

    {
        title: "Gaming Laptop",
        description: "Gaming laptop with RGB backlit keyboard, NVIDIA GeForce RTX graphics, and 144Hz refresh rate display.",
        image: { url: "https://images.pexels.com/photos/303383/pexels-photo-303383.jpeg?auto=compress&cs=tinysrgb&w=600" },
        price: 1499.99,
        category: "Gaming"
    },
    {
        title: "Smart Thermostat",
        description: "Programmable smart thermostat with Wi-Fi connectivity for remote control and energy savings.",
        image: { url: "https://images.unsplash.com/photo-1636569608385-58efc32690ea?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dGhlcm1vc3RhdHxlbnwwfDB8MHx8fDA%3D" },
        price: 129.99,
        category: "Smart Home"
    },
    {
        title: "Portable Bluetooth Speaker",
        description: "Compact Bluetooth speaker with waterproof design, 10-hour battery life, and 360-degree sound.",
        image: { url: "https://images.pexels.com/photos/1706694/pexels-photo-1706694.jpeg?auto=compress&cs=tinysrgb&w=600" },
        price: 69.99,
        category: "Audio"
    },
    {
        title: "Robot Vacuum Cleaner",
        description: "Smart robot vacuum with mapping technology, scheduled cleaning, and automatic charging.",
        image: { url: "https://images.pexels.com/photos/844874/pexels-photo-844874.jpeg?auto=compress&cs=tinysrgb&w=600" },
        price: 249.99,
        category: "Home Appliances"
    },
    {
        title: "Wireless Charging Pad",
        description: "Qi-compatible wireless charging pad for smartphones, with LED indicator and fast charging support.",
        image: { url: "https://images.pexels.com/photos/7742584/pexels-photo-7742584.jpeg?auto=compress&cs=tinysrgb&w=600" },
        price: 29.99,
        category: "Accessories"
    },
    {
        title: "Power Bank",
        description: "High-capacity power bank with USB-C and Quick Charge 3.0 support, suitable for smartphones and tablets.",
        image: { url: "https://images.pexels.com/photos/3915760/pexels-photo-3915760.jpeg?auto=compress&cs=tinysrgb&w=600" },
        price: 49.99,
        category: "Accessories"
    },
    {
        title: "Compact Refrigerator",
        description: "Small refrigerator with adjustable shelves, freezer compartment, and energy-efficient design.",
        image: { url: "https://images.pexels.com/photos/6508357/pexels-photo-6508357.jpeg?auto=compress&cs=tinysrgb&w=600" },
        price: 149.99,
        category: "Appliances"
    },
    {
        title: "Wireless Gaming Mouse",
        description: "Wireless gaming mouse with customizable RGB lighting, high-precision sensor, and programmable buttons.",
        image: { url: "https://images.pexels.com/photos/2115256/pexels-photo-2115256.jpeg?auto=compress&cs=tinysrgb&w=600" },
        price: 79.99,
        category: "Gaming"
    },
    {
        title: "Smart Doorbell",
        description: "Video doorbell with HD camera, two-way audio, and motion detection for enhanced home security.",
        image: { url: "https://images.unsplash.com/photo-1494707266269-60cc8f9b46c6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZG9vciUyMGJlbGx8ZW58MHwwfDB8fHww" },
        price: 199.99,
        category: "Smart Home"
    },
    {
        title: "Cordless Drill",
        description: "Powerful cordless drill with variable speed settings, drill bits, and ergonomic design for easy handling.",
        image: { url: "https://images.unsplash.com/photo-1572981779307-38b8cabb2407?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZHJpbGx8ZW58MHwwfDB8fHww" },
        price: 79.99,
        category: "Tools"
    },
    {
        title: "Air Purifier",
        description: "HEPA air purifier with multiple filtration layers, air quality sensor, and quiet operation.",
        image: { url: "https://images.unsplash.com/photo-1436473849883-bb3464c23e93?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWlyJTIwcHVyaWZpZXJ8ZW58MHwwfDB8fHww" },
        price: 159.99,
        category: "Home Essentials"
    },
    {
        title: "Portable Projector",
        description: "Compact portable projector with HD resolution, built-in speakers, and multiple connectivity options.",
        image: { url: "https://images.unsplash.com/photo-1535016120720-40c646be5580?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvamVjdG9yfGVufDB8MHwwfHx8MA%3D%3D" },
        price: 249.99,
        category: "Electronics"
    },
    {
        title: "Rice Cooker",
        description: "Automatic rice cooker with non-stick inner pot, multiple cooking modes, and keep-warm function.",
        image: { url: "https://images.unsplash.com/photo-1599182345361-9542815e73f6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmljZSUyMGNvb2tlcnxlbnwwfDB8MHx8fDA%3D" },
        price: 49.99,
        category: "Kitchen Appliances"
    },
    {
        title: "Ergonomic Office Chair",
        description: "Adjustable ergonomic office chair with lumbar support, mesh back, and swivel base.",
        image: { url: "https://images.unsplash.com/photo-1572521165329-b197f9ea3da6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8b2ZmaWNlJTIwY2hhaXJ8ZW58MHwwfDB8fHww" },
        price: 199.99,
        category: "Furniture"
    },
    {
        title: "Wireless Router",
        description: "High-speed wireless router with dual-band technology, MU-MIMO support, and parental controls.",
        image: { url: "https://images.unsplash.com/photo-1516044734145-07ca8eef8731?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cm91dGVyfGVufDB8MHwwfHx8MA%3D%3D" },
        price: 99.99,
        category: "Networking"
    },
    {
        title: "Smart Light Bulbs",
        description: "Set of smart LED light bulbs with color-changing capability, remote control, and voice assistant integration.",
        image: { url: "https://images.unsplash.com/photo-1506218399165-936c45441c4b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c21hcnQlMjBsaWdodCUyMGJ1bGJ8ZW58MHwwfDB8fHww" },
        price: 39.99,
        category: "Smart Home"
    },
    {
        title: "Electric Toothbrush",
        description: "Rechargeable electric toothbrush with multiple brushing modes, timer, and pressure sensor.",
        image: { url: "https://images.unsplash.com/photo-1559592892-19db4235d786?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRvb3RoYnJ1c2h8ZW58MHwwfDB8fHww" },
        price: 69.99,
        category: "Personal Care"
    },
    {
        title: "Indoor Plants Set",
        description: "Set of three low-maintenance indoor plants in decorative pots for a touch of greenery at home.",
        image: { url: "https://images.unsplash.com/photo-1604762524889-3e2fcc145683?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW5kb29yJTIwcGxhbnRzfGVufDB8MHwwfHx8MA%3D%3D" },
        price: 39.99,
        category: "Home Decor"
    },
    {
        title: "Car Dash Cam",
        description: "Full HD dash cam with wide-angle lens, loop recording, and G-sensor for capturing driving incidents.",
        image: { url: "https://images.pexels.com/photos/5701622/pexels-photo-5701622.jpeg?auto=compress&cs=tinysrgb&w=600" },
        price: 89.99,
        category: "Automotive"
    },
    {
        title: "Portable Ice Maker",
        description: "Compact portable ice maker with fast ice production, multiple cube sizes, and easy-to-use controls.",
        image: { url: "https://images.unsplash.com/photo-1607673882902-8f42c1ef183f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGljZSUyMGN1YmV8ZW58MHwwfDB8fHww" },
        price: 129.99,
        category: "Kitchen Appliances"
    },
    {
        title: "Outdoor Camping Tent",
        description: "Spacious 4-person camping tent with waterproof material, ventilation windows, and easy setup.",
        image: { url: "https://images.unsplash.com/photo-1508873696983-2dfd5898f08b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FtcGluZyUyMHRlbnR8ZW58MHwwfDB8fHww" },
        price: 149.99,
        category: "Outdoor Recreation"
    },
    {
        title: "Digital Weight Scale",
        description: "Digital scale with LCD display, high precision sensors, and sleek tempered glass design.",
        image: { url: "https://images.pexels.com/photos/6550832/pexels-photo-6550832.jpeg?auto=compress&cs=tinysrgb&w=600" },
        price: 29.99,
        category: "Personal Care"
    },
    {
        title: "Wireless Charging Desk Lamp",
        description: "Desk lamp with built-in wireless charger, adjustable brightness levels, and USB port for additional charging.",
        image: { url: "https://images.unsplash.com/photo-1601642964568-1917224f4e4d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZGVzayUyMGxhbXB8ZW58MHwwfDB8fHww" },
        price: 49.99,
        category: "Home Office"
    },
    {
        title: "Smart Refrigerator",
        description: "Refrigerator with touchscreen display, built-in cameras, and smart home integration for convenience.",
        image: { url: "https://images.unsplash.com/photo-1536353284924-9220c464e262?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmVmcmlnZXJhdG9yfGVufDB8MHwwfHx8MA%3D%3D" },
        price: 1499.99,
        category: "Appliances"
    },
    {
        title: "Bluetooth Noise-Canceling Headphones",
        description: "Over-ear headphones with Bluetooth connectivity, active noise-canceling, and comfortable ear cushions.",
        image: { url: "https://plus.unsplash.com/premium_photo-1679513691641-9aedddc94f96?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGhlYWRwaG9uZXxlbnwwfDB8MHx8fDA%3D" },
        price: 149.99,
        category: "Audio"
    },
    {
        title: "Smart Vacuum Cleaner",
        description: "Robot vacuum cleaner with smart mapping, app control, and voice assistant compatibility.",
        image: { url: "https://images.unsplash.com/photo-1558317374-067fb5f30001?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dmFjdXVtJTIwY2xlYW5lcnxlbnwwfDB8MHx8fDA%3D" },
        price: 349.99,
        category: "Home Appliances"
    },
    {
        title: "Wireless Gaming Keyboard",
        description: "Wireless mechanical gaming keyboard with RGB backlighting, programmable keys, and ergonomic design.",
        image: { url: "https://images.unsplash.com/photo-1697022976761-67a1b0955cff?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fGdhbWluZyUyMGtleWJvYXJkc3xlbnwwfDB8MHx8fDA%3D" },
        price: 129.99,
        category: "Gaming"
    },
    {
        title: "Digital Drawing Tablet",
        description: "Graphics tablet with pressure-sensitive pen, customizable shortcut keys, and high-resolution display.",
        image: { url: "https://images.unsplash.com/photo-1526430752879-b9eb53fbd772?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Z3JhcGhpY3MlMjB0YWJsZXR8ZW58MHwwfDB8fHww" },
        price: 199.99,
        category: "Art and Design"
    },
    {
        title: "Solar-Powered Outdoor Lights",
        description: "Set of solar-powered outdoor lights with motion sensor, waterproof design, and easy installation.",
        image: { url: "https://images.unsplash.com/photo-1558693836-83d8cf52c2ba?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c29sYXIlMjBsaWdodHxlbnwwfDB8MHx8fDA%3D" },
        price: 59.99,
        category: "Outdoor Decor"
    },
    {
        title: "Smart Lock",
        description: "Keyless smart lock with fingerprint recognition, app control, and activity log for home security.",
        image: { url: "https://images.unsplash.com/photo-1558002038-1055907df827?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c21hcnQlMjBsb2NrfGVufDB8MHwwfHx8MA%3D%3D" },
        price: 129.99,
        category: "Smart Home"
    },
    {
        title: "Smartwatch",
        description: "The latest smartwatch with a vibrant AMOLED display, GPS, and advanced health tracking features.",
        image: {
            url: "https://images.unsplash.com/photo-1434494185108-42dff1310549?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHNhbXJ0JTIwd2F0Y2h8ZW58MHwwfDB8fHww",
        },
        price: 249.99,
        category: "Wearable Technology",
    },
    {
        title: "Organic Cotton T-Shirt",
        description: "Comfortable and eco-friendly organic cotton T-shirt with a stylish design.",
        image: {
            url: "https://images.unsplash.com/photo-1620799140188-3b2a02fd9a77?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dHNoaXJ0fGVufDB8MHwwfHx8MA%3D%3D",
        },
        price: 19.99,
        category: "Clothing",
    },
    {
        title: "DJI Mavic Air 2 Drone",
        description: "Compact and powerful drone with 4K camera, obstacle avoidance, and intelligent shooting modes.",
        image: {
            url: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZHJvbmV8ZW58MHwwfDB8fHww",
        },
        price: 899.99,
        category: "Electronics",
    },
    {
        title: "French Press Coffee Maker",
        description: "Stainless steel French press for brewing rich and flavorful coffee at home.",
        image: {
            url: "https://images.unsplash.com/photo-1432107294469-414527cb5c65?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29mZmUlMjBtYWtlcnxlbnwwfDB8MHx8fDA%3D",
        },
        price: 29.99,
        category: "Kitchen Appliances",
    },
    {
        title: "Wireless Bluetooth Earbuds",
        description: "High-fidelity wireless earbuds with noise-canceling technology for an immersive audio experience.",
        image: {
            url: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZWFyYnVkc3xlbnwwfDB8MHx8fDA%3D",
        },
        price: 79.99,
        category: "Audio",
    },
    {
        title: "Outdoor Camping Tent",
        description: "Spacious and weather-resistant camping tent for outdoor adventures.",
        image: {
            url: "https://images.unsplash.com/photo-1597226012661-ee865b212f51?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y2FtcGluZyUyMHRlbnR8ZW58MHwwfDB8fHww",
        },
        price: 149.99,
        category: "Outdoor Gear",
    },
    {
        title: "Bluetooth Portable Speaker",
        description: "Compact and powerful Bluetooth speaker with long battery life, perfect for on-the-go music.",
        image: {
            url: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cG9ydGFibGUlMjBzcGVha2VyfGVufDB8MHwwfHx8MA%3D%3D",
        },
        price: 49.99,
        category: "Audio",
    },
    {
        title: "Fitness Tracker",
        description: "Water-resistant fitness tracker with heart rate monitoring and sleep tracking features.",
        image: {
            url: "https://images.unsplash.com/photo-1620213391117-0d169a917221?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Zml0bmVzcyUyMHRyYWNrZXJ8ZW58MHwwfDB8fHww",
        },
        price: 59.99,
        category: "Wearable Technology",
    },
    {
        title: "Gaming Laptop",
        description: "High-performance gaming laptop with a dedicated graphics card for smooth gaming experiences.",
        image: {
            url: "https://images.unsplash.com/photo-1605134513573-384dcf99a44c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGdhbWluZyUyMGxhcHRvcHxlbnwwfDB8MHx8fDA%3D",
        },
        price: 1599.99,
        category: "Gaming",
    },
    {
        title: "Electric Scooter",
        description: "Foldable electric scooter with a powerful motor for convenient and eco-friendly urban commuting.",
        image: {
            url: "https://images.unsplash.com/photo-1617906647113-0b8b7f262c6c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZWxlY3RyaWMlMjBzY29vdGVyfGVufDB8MHwwfHx8MA%3D%3D",
        },
        price: 499.99,
        category: "Personal Transportation",
    },
    {
        title: "Premium Wool Blend Coat",
        description: "Elegant and warm premium wool blend coat with a tailored fit. Perfect for chilly winter days.",
        image: {
            url: "https://images.unsplash.com/photo-1516648064-ee10acfa64db?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d29vbCUyMGNvYXR8ZW58MHwwfDB8fHww",
        },
        price: 189.99,
        category: "Clothing",
    },
    {
        title: "Handcrafted Leather Boots",
        description: "Handcrafted leather boots with intricate stitching and a comfortable sole. Stylish and durable for any occasion.",
        image: {
            url: "https://images.unsplash.com/photo-1494955464529-790512c65305?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGxlYXRoZXIlMjBib290c3xlbnwwfDB8MHx8fDA%3D",
        },
        price: 129.99,
        category: "Shoes",
    },
    {
        title: "Chic Floral Print Dress",
        description: "Chic floral print dress with a flattering silhouette. Ideal for casual outings or semi-formal events.",
        image: {
            url: "https://images.unsplash.com/photo-1512633611077-51bf3c872a0b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGRyZXNzfGVufDB8MHwwfHx8MA%3D%3D",
        },
        price: 79.99,
        category: "Clothing",
    },
    {
        title: "Classic Leather Handbag",
        description: "Timeless classic leather handbag with multiple compartments and a stylish design. Perfect for everyday use.",
        image: {
            url: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGxlYXRoZXIlMjBoYW5kYmFnfGVufDB8MHwwfHx8MA%3D%3D",
        },
        price: 149.99,
        category: "Fashion Accessories",
    },
    {
        title: "Modern Slim Fit Jeans",
        description: "Modern slim fit jeans with a trendy distressed look. Comfortable and versatile for casual wear.",
        image: {
            url: "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8amVhbnN8ZW58MHwwfDB8fHww",
        },
        price: 59.99,
        category: "Clothing",
    },
    {
        title: "Sporty Running Sneakers",
        description: "Sporty running sneakers with advanced cushioning technology. Ideal for workouts and daily activities.",
        image: {
            url: "https://images.unsplash.com/photo-1579446650032-86effeeb3389?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cnVubmluZyUyMHNuZWFrZXJzfGVufDB8MHwwfHx8MA%3D%3D",
        },
        price: 79.99,
        category: "Shoes",
    },
    {
        title: "Cozy Cable Knit Sweater",
        description: "Cozy cable knit sweater with a classic design. Perfect for staying warm in cold weather.",
        image: {
            url: "https://images.unsplash.com/photo-1491245257527-395e9c480145?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8a25pdCUyMHN3ZWF0ZXJ8ZW58MHwwfDB8fHww ",
        },
        price: 39.99,
        category: "Clothing",
    },
    {
        title: "Casual Slip-On Loafers",
        description: "Casual slip-on loafers with a stylish and comfortable design. Perfect for everyday casual wear.",
        image: {
            url: "https://images.unsplash.com/photo-1576792741377-eb0f4f6d1a47?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bG9hZmVyc3xlbnwwfDB8MHx8fDA%3D",
        },
        price: 69.99,
        category: "Shoes",
    },
    {
        title: "Fashionable Aviator Sunglasses",
        description: "Fashionable aviator sunglasses with UV protection. Enhance your style with this trendy accessory.",
        image: {
            url: "https://images.unsplash.com/photo-1502767089025-6572583495f9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3VuZ2xhc3N8ZW58MHwwfDB8fHww",
        },
        price: 29.99,
        category: "Fashion Accessories",
    },
    {
        title: "Stylish Plaid Scarf",
        description: "Stylish plaid scarf made from soft and warm fabric. A perfect accessory to elevate your winter look.",
        image: {
            url: "https://plus.unsplash.com/premium_photo-1673286712645-9600beaa4a92?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c2NhcmZ8ZW58MHwwfDB8fHww",
        },
        price: 24.99,
        category: "Fashion Accessories",
    },
    {
        title: "High-Performance Running Shoes",
        description: "Experience ultimate comfort and support with these high-performance running shoes. Designed for runners seeking top-notch quality and style.",
        image: {
            url: "https://images.unsplash.com/photo-1469395446868-fb6a048d5ca3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cnVubmluZyUyMHNob2VzfGVufDB8MHwwfHx8MA%3D%3D",
        },
        price: 109.99,
        category: "Shoes",
    },
    {
        title: "Casual Leather Sneakers",
        description: "Step out in style with these casual leather sneakers. The perfect blend of comfort and fashion, ideal for everyday wear.",
        image: {
            url: "https://images.unsplash.com/photo-1514385295299-4f4327e50847?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bGVhdGhlciUyMHNuZWFrZXJzfGVufDB8MHwwfHx8MA%3D%3D",
        },
        price: 79.99,
        category: "Shoes",
    },
    {
        title: "Classic Oxford Dress Shoes",
        description: "Elevate your formal attire with these classic Oxford dress shoes. Crafted with precision for a sophisticated and timeless look.",
        image: {
            url: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGxlYXRoZXIlMjBzbmVha2Vyc3xlbnwwfDB8MHx8fDA%3D",
        },
        price: 129.99,
        category: "Shoes",
    },
    {
        title: "Fashionable Chelsea Boots",
        description: "Stay on-trend with these fashionable Chelsea boots. Versatile and stylish, perfect for both casual and semi-formal occasions.",
        image: {
            url: "https://images.unsplash.com/photo-1608629601270-a0007becead3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2hlbHNlYSUyMGJvb3RzfGVufDB8MHwwfHx8MA%3D%3D",
        },
        price: 89.99,
        category: "Shoes",
    },
    {
        title: "Adventure Hiking Boots",
        description: "Conquer the outdoors with these adventure hiking boots. Durable, waterproof, and designed for rugged terrains.",
        image: {
            url: "https://images.unsplash.com/photo-1575987116913-e96e7d490b8a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGhpa2luZyUyMGJvb3RzfGVufDB8MHwwfHx8MA%3D%3D",
        },
        price: 149.99,
        category: "Shoes",
    },
    {
        title: "Summer Espadrille Sandals",
        description: "Step into summer with these espadrille sandals. Lightweight and breathable, perfect for warm weather and beach days.",
        image: {
            url: "https://images.unsplash.com/photo-1618274158630-bc47a614b3a5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHNhbmRhbHN8ZW58MHwwfDB8fHww",
        },
        price: 54.99,
        category: "Shoes",
    },
    {
        title: "Sleek Leather Ankle Boots",
        description: "Add a touch of sophistication to your wardrobe with these sleek leather ankle boots. Versatile and stylish for any occasion.",
        image: {
            url: "https://images.unsplash.com/photo-1481729379561-01e43a3e1ed4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fGFua2xlJTIwYm9vdHN8ZW58MHwwfDB8fHww",
        },
        price: 119.99,
        category: "Shoes",
    },
    {
        title: "Urban Street Sneakers",
        description: "Embrace urban style with these street sneakers. Trendy design and comfortable fit, perfect for a casual and edgy look.",
        image: {
            url: "https://images.unsplash.com/photo-1552346154-21d32810aba3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c25lYWtlcnN8ZW58MHwwfDB8fHww",
        },
        price: 74.99,
        category: "Shoes",
    },
    {
        title: "Trendy Platform Sandals",
        description: "Make a statement with these trendy platform sandals. Elevate your style with a touch of fashion-forward flair.",
        image: {
            url: "https://images.unsplash.com/photo-1594259928748-8f644696f9c9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNhbmRhbHN8ZW58MHwwfDB8fHww",
        },
        price: 89.99,
        category: "Shoes",
    },
];

module.exports = { data: productData };