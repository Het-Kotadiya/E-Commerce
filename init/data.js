const productData = [
    {
        title: "Cotton Casual T-Shirt",
        desc: "Comfortable and breathable casual t-shirt made from high-quality cotton.",
        img: "https://images.unsplash.com/photo-1480455624313-e29b44bbfde1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dHNoaXJ0JTIwbWVufGVufDB8MHwwfHx8MA%3D%3D",
        categories: ["Casual Wear", "T-Shirts"],
        size: ["S", "M", "L"],
        color: ["White", "Black", "Blue"],
        price: 19.99,
        inStock: true,
        createdAt: "2024-01-20T12:00:00.000Z",
        updatedAt: "2024-01-20T12:05:00.000Z"
    },
    {
        title: "Slim Fit Denim Jeans",
        desc: "Stylish and slim-fit denim jeans for a trendy look.",
        img: "https://images.unsplash.com/photo-1560243563-062bfc001d68?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fGglMjZtJTIwamVhbnN8ZW58MHwwfDB8fHww",
        categories: ["Denim", "Jeans"],
        size: ["28", "30", "32", "34"],
        color: ["Blue", "Black"],
        price: 49.99,
        inStock: true,
        createdAt: "2024-01-20T12:10:00.000Z",
        updatedAt: "2024-01-20T12:15:00.000Z"
    },
    {
        title: "Classic Leather Jacket",
        desc: "Timeless leather jacket with a classic design for a rugged yet sophisticated look.",
        img: "https://images.unsplash.com/photo-1489286696299-aa7486820bd5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGVhdGhlciUyMGphY2tldHxlbnwwfDB8MHx8fDA%3D",
        categories: ["Outerwear", "Jackets"],
        size: ["M", "L", "XL"],
        color: ["Brown", "Black"],
        price: 89.99,
        inStock: true,
        createdAt: "2024-01-20T12:20:00.000Z",
        updatedAt: "2024-01-20T12:25:00.000Z"
    },
    {
        title: "Sporty Running Shoes",
        desc: "Lightweight and comfortable running shoes for an active lifestyle.",
        img: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c3BvcnQlMjBzaG9lc3xlbnwwfDB8MHx8fDA%3D",
        categories: ["Athletic Shoes", "Running Shoes"],
        size: ["7", "8", "9", "10"],
        color: ["Red", "Black"],
        price: 59.99,
        inStock: true,
        createdAt: "2024-01-20T12:30:00.000Z",
        updatedAt: "2024-01-20T12:35:00.000Z"
    },
    {
        title: "Formal Slim-Fit Suit",
        desc: "Elegant and modern slim-fit suit for formal occasions.",
        img: "https://images.unsplash.com/photo-1515736076039-a3ca66043b27?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2xpbSUyMGZpdCUyMHN1aXR8ZW58MHwwfDB8fHww",
        categories: ["Formal Wear", "Suits"],
        size: ["40R", "42R", "44R"],
        color: ["Navy", "Charcoal"],
        price: 129.99,
        inStock: true,
        createdAt: "2024-01-20T12:40:00.000Z",
        updatedAt: "2024-01-20T12:45:00.000Z"
    },
    {
        title: "Cozy Knit Sweater",
        desc: "Warm and cozy knit sweater for chilly weather.",
        img: "https://images.unsplash.com/photo-1612207956624-0091b244181c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGtuaXQlMjBzd2VhdGVyfGVufDB8MHwwfHx8MA%3D%3D",
        categories: ["Winter Wear", "Sweaters"],
        size: ["S", "M", "L"],
        color: ["Gray", "Burgundy"],
        price: 39.99,
        inStock: true,
        createdAt: "2024-01-20T12:50:00.000Z",
        updatedAt: "2024-01-20T12:55:00.000Z"
    },
    {
        title: "Casual Linen Shorts",
        desc: "Breathable and comfortable linen shorts for a relaxed look.",
        img: "https://images.unsplash.com/photo-1505515512423-7f370c79c5ef?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWVuJTIwc2hvcnRzfGVufDB8MHwwfHx8MA%3D%3D",
        categories: ["Casual Wear", "Shorts"],
        size: ["30", "32", "34"],
        color: ["Khaki", "Navy"],
        price: 29.99,
        inStock: true,
        createdAt: "2024-01-20T13:00:00.000Z",
        updatedAt: "2024-01-20T13:05:00.000Z"
    },
    {
        title: "Vintage Floral Dress",
        desc: "Charming vintage floral dress for a feminine and stylish look.",
        img: "https://images.unsplash.com/photo-1499939667766-4afceb292d05?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZmxvcmFsJTIwZHJlc3N8ZW58MHwwfDB8fHww",
        categories: ["Dresses", "Vintage"],
        size: ["XS", "S", "M"],
        color: ["Floral Pattern"],
        price: 69.99,
        inStock: true,
        createdAt: "2024-01-20T13:10:00.000Z",
        updatedAt: "2024-01-20T13:15:00.000Z"
    },
    {
        title: "Classic Denim Jacket",
        desc: "Timeless denim jacket for men",
        img: "https://images.unsplash.com/photo-1537465978529-d23b17165b3b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZGVuaW0lMjBqYWNrZXR8ZW58MHwwfDB8fHww",
        categories: ["Jackets", "Men's Fashion"],
        size: ["S", "M", "L", "XL"],
        color: ["Blue"],
        price: 49.99,
        inStock: true,
        createdAt: "2024-01-20T12:00:00Z",
        updatedAt: "2024-01-20T12:00:00Z"
    },
    {
        title: "Elegant Blouse",
        desc: "Sophisticated blouse for women",
        img: "https://images.unsplash.com/photo-1589734750443-06dbd51c0447?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmxvdXNlfGVufDB8MHwwfHx8MA%3D%3D",
        categories: ["Tops", "Women's Fashion"],
        size: ["XS", "S", "M", "L"],
        color: ["White", "Black"],
        price: 34.99,
        inStock: true,
        createdAt: "2024-01-20T12:05:00Z",
        updatedAt: "2024-01-20T12:05:00Z"
    },
    {
        title: "Graphic T-Shirt",
        desc: "Fun graphic t-shirt for boys",
        img: "https://images.unsplash.com/photo-1483380011777-35c78117be19?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDZ8fGNhcnRvb24lMjB0c2hpcnR8ZW58MHwwfDB8fHww",
        categories: ["T-Shirts", "Boys' Apparel"],
        size: ["4-6", "8-10", "12-14"],
        color: ["Red", "Blue"],
        price: 14.99,
        inStock: true,
        createdAt: "2024-01-20T12:10:00Z",
        updatedAt: "2024-01-20T12:10:00Z"
    },
    {
        title: "Floral Sundress",
        desc: "Adorable floral sundress for girls",
        img: "https://images.unsplash.com/photo-1665375457737-dd963819a575?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZmxvcmFsJTIwc3VuJTIwZHJlc3N8ZW58MHwwfDB8fHww",
        categories: ["Dresses", "Girls' Fashion"],
        size: ["6-8", "10-12", "14-16"],
        color: ["Pink", "Yellow"],
        price: 29.99,
        inStock: true,
        createdAt: "2024-01-20T12:15:00Z",
        updatedAt: "2024-01-20T12:15:00Z"
    },
    {
        title: "Sporty Joggers",
        desc: "Comfortable joggers for an active lifestyle",
        img: "https://images.unsplash.com/photo-1580906853305-5702e648164e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8am9nZ2Vyc3xlbnwwfDB8MHx8fDA%3D",
        categories: ["Athletic Wear", "Men's Bottoms"],
        size: ["S", "M", "L", "XL"],
        color: ["Black", "Gray"],
        price: 39.99,
        inStock: true,
        createdAt: "2024-01-20T12:20:00Z",
        updatedAt: "2024-01-20T12:20:00Z"
    },
    {
        title: "Casual Sneakers",
        desc: "Stylish and comfortable sneakers for women",
        img: "https://images.unsplash.com/photo-1695073621086-aa692bc32a3d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2FzdWFsJTIwc25lYWtlcnN8ZW58MHwwfDB8fHww",
        categories: ["Footwear", "Women's Shoes"],
        size: ["6", "7", "8", "9"],
        color: ["White", "Rose Gold"],
        price: 59.99,
        inStock: true,
        createdAt: "2024-01-20T12:25:00Z",
        updatedAt: "2024-01-20T12:25:00Z"
    },
    {
        title: "Hooded Sweatshirt",
        desc: "Cozy hooded sweatshirt for boys",
        img: "https://images.unsplash.com/photo-1484663548870-2aa675ba38fb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c3dlYXRzaGlydHxlbnwwfDB8MHx8fDA%3D",
        categories: ["Sweatshirts", "Boys' Apparel"],
        size: ["4-6", "8-10", "12-14"],
        color: ["Blue", "Green"],
        price: 24.99,
        inStock: true,
        createdAt: "2024-01-20T12:30:00Z",
        updatedAt: "2024-01-20T12:30:00Z"
    },
    {
        title: "Denim Skirt",
        desc: "Trendy denim skirt for girls",
        img: "https://images.unsplash.com/photo-1593756287137-df3c9b0bd731?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHNraXJ0fGVufDB8MHwwfHx8MA%3D%3D",
        categories: ["Skirts", "Girls' Fashion"],
        size: ["6-8", "10-12", "14-16"],
        color: ["Denim Blue"],
        price: 19.99,
        inStock: true,
        createdAt: "2024-01-20T12:35:00Z",
        updatedAt: "2024-01-20T12:35:00Z"
    },
    {
        title: "Formal Suit",
        desc: "Classic formal suit for men",
        img: "https://images.unsplash.com/photo-1508243529287-e21914733111?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGZvcm1hbCUyMHN1aXR8ZW58MHwwfDB8fHww",
        categories: ["Suits", "Men's Fashion"],
        size: ["S", "M", "L", "XL"],
        color: ["Black", "Navy"],
        price: 99.99,
        inStock: true,
        createdAt: "2024-01-20T12:40:00Z",
        updatedAt: "2024-01-20T12:40:00Z"
    },
    {
        title: "Winter Coat",
        desc: "Warm winter coat for women",
        img: "https://images.unsplash.com/photo-1548950939-629ecb4d7101?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d2ludGVyJTIwY29hdHxlbnwwfDB8MHx8fDA%3D",
        categories: ["Outerwear", "Women's Fashion"],
        size: ["XS", "S", "M", "L"],
        color: ["Red", "Brown"],
        price: 79.99,
        inStock: true,
        createdAt: "2024-01-20T12:45:00Z",
        updatedAt: "2024-01-20T12:45:00Z"
    },
    {
        title: "Camouflage Pants",
        desc: "Cool camouflage pants for boys",
        img: "https://images.unsplash.com/photo-1534984316778-4491ec217ecf?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Q2Ftb3VmbGFnZSUyMHBhbnRzfGVufDB8MHwwfHx8MA%3D%3D",
        categories: ["Pants", "Boys' Apparel"],
        size: ["4-6", "8-10", "12-14"],
        color: ["Green", "Brown"],
        price: 29.99,
        inStock: true,
        createdAt: "2024-01-20T12:50:00Z",
        updatedAt: "2024-01-20T12:50:00Z"
    },
    {
        title: "Ruffled Blouse",
        desc: "Charming ruffled blouse for girls",
        img: "https://images.unsplash.com/photo-1564257631407-4deb1f99d992?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8UnVmZmxlZCUyMEJsb3VzZXxlbnwwfDB8MHx8fDA%3D",
        categories: ["Tops", "Girls' Fashion"],
        size: ["6-8", "10-12", "14-16"],
        color: ["Pink", "White"],
        price: 34.99,
        inStock: true,
        createdAt: "2024-01-20T12:55:00Z",
        updatedAt: "2024-01-20T12:55:00Z"
    },
    {
        title: "Graphic Tee",
        desc: "Casual graphic tee for men",
        img: "https://images.unsplash.com/photo-1482618606784-2ca7968c062e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHByaW50ZWQlMjB0c2hpcnR8ZW58MHwwfDB8fHww",
        categories: ["T-Shirts", "Men's Fashion"],
        size: ["S", "M", "L", "XL"],
        color: ["Gray", "Black"],
        price: 19.99,
        inStock: true,
        createdAt: "2024-01-20T13:00:00Z",
        updatedAt: "2024-01-20T13:00:00Z"
    },
    {
        title: "High-Waisted Jeans",
        desc: "Trendy high-waisted jeans for a stylish look",
        img: "https://images.pexels.com/photos/9558246/pexels-photo-9558246.jpeg?auto=compress&cs=tinysrgb&w=600",
        categories: ["Jeans", "Bottoms"],
        size: ["XS", "S", "M", "L"],
        color: ["Blue", "Black"],
        price: 64.99,
        inStock: true,
        createdAt: "2024-01-22T13:05:00Z",
        updatedAt: "2024-01-22T13:05:00Z"
    },
    {
        title: "Varsity Jacket",
        desc: "Sporty varsity jacket for a cool and casual look",
        img: "https://images.unsplash.com/photo-1561748138-35c7c69cf3bf?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHZhcnNpdHklMjBqYWNrZXR8ZW58MHwwfDB8fHww",
        categories: ["Jackets", "Fashion"],
        size: ["S", "M", "L", "XL"],
        color: ["Navy", "Red"],
        price: 54.99,
        inStock: true,
        createdAt: "2024-01-22T13:10:00Z",
        updatedAt: "2024-01-22T13:10:00Z"
    },
    {
        title: "Sequin Dress",
        desc: "Sparkly sequin dress for a glamorous night out",
        img: "https://images.unsplash.com/photo-1595156210483-560123baba96?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGRyZXNzfGVufDB8MHwwfHx8MA%3D%3D",
        categories: ["Dresses", "Fashion"],
        size: ["6-8", "10-12", "14-16"],
        color: ["Silver", "Gold"],
        price: 89.99,
        inStock: true,
        createdAt: "2024-01-22T13:15:00Z",
        updatedAt: "2024-01-22T13:15:00Z"
    },
    {
        title: "Leather Biker Jacket",
        desc: "Edgy leather biker jacket for a bold style",
        img: "https://images.unsplash.com/photo-1542018751212-595220ec6db7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmlkZSUyMGphY2tldHxlbnwwfDB8MHx8fDA%3D",
        categories: ["Jackets", "Fashion"],
        size: ["S", "M", "L", "XL"],
        color: ["Black"],
        price: 99.99,
        inStock: true,
        createdAt: "2024-01-22T13:20:00Z",
        updatedAt: "2024-01-22T13:20:00Z"
    },
    {
        title: "Boho Maxi Dress",
        desc: "Bohemian-style maxi dress for a free-spirited look",
        img: "https://images.pexels.com/photos/6387638/pexels-photo-6387638.jpeg?auto=compress&cs=tinysrgb&w=600",
        categories: ["Dresses", "Fashion"],
        size: ["XS", "S", "M", "L"],
        color: ["Floral", "Blue"],
        price: 74.99,
        inStock: true,
        createdAt: "2024-01-22T13:25:00Z",
        updatedAt: "2024-01-22T13:25:00Z"
    }

];

module.exports = { data: productData };