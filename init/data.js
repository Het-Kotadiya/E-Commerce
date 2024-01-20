const productData = [
    {
        title: "Cotton Casual T-Shirt",
        desc: "Comfortable and breathable casual t-shirt made from high-quality cotton.",
        img: "https://images.unsplash.com/photo-1495554626159-905646f110da?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dHNoaXJ0JTIwbW9kZWx8ZW58MHwwfDB8fHww",
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
        img: "https://images.unsplash.com/photo-1507297448044-a99b358cd06e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZGVuaW0lMjBqZWFuc3xlbnwwfDB8MHx8fDA%3D",
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
];

module.exports = { data: productData };