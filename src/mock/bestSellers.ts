// types.ts
export interface bestSellersType {
    title: string;
    category: string;
    image: string;
    rate: number;
    weight: number;
    unit: string;
    price: number;
    sale_price?: number;
    label: string;
    sold: number;
    total: number;
}

// products.ts
// products.ts
export const bestSellers: bestSellersType[] = [
    {
        title: "Seeds of Change Organic Quinoa, Brown, & Red Rice",
        category: "Grains",
        image: "/assets/images/products/paper.png",
        rate: 4.2,
        weight: 500,
        unit: "gram",
        price: 3.20,
        sale_price: 2.88,
        label: "Save 10%",
        sold: 110,
        total: 150,
    },
    {
        title: "All Natural Italian-Style Chicken Meatballs",
        category: "Meat",
        image: "/assets/images/products/hamburger.png",
        rate: 4.7,
        weight: 400,
        unit: "gram",
        price: 5.50,
        sale_price: 4.95,
        label: "Save 10%",
        sold: 98,
        total: 130,
    },
    {
        title: "Angie's Boomchickapop Sweet & Salty Kettle Corn",
        category: "Snacks",
        image: "/assets/images/products/pizza.png",
        rate: 3.9,
        weight: 300,
        unit: "gram",
        price: 2.00,
        label: "Save 25%",
        sold: 55,
        total: 100,
    },
    {
        title: "Foster Farms Takeout Crispy Classic Buffalo Wings",
        category: "Poultry",
        image: "/assets/images/products/cabbage.png",
        rate: 4.5,
        weight: 450,
        unit: "gram",
        price: 6.00,
        sale_price: 5.10,
        label: "Save 15%",
        sold: 30,
        total: 120,
    },
    {
        title: "Seeds of Change Organic Quinoa",
        category: "Grains",
        image: "/assets/images/products/tanjerin.png",
        rate: 4.0,
        weight: 500,
        unit: "gram",
        price: 3.00,
        sale_price: 2.40,
        label: "Save 20%",
        sold: 10,
        total: 100,
    },
    {
        title: "Organic Vegetables Pack",
        category: "Vegetables",
        image: "/assets/images/products/cucumber.png",
        rate: 4.8,
        weight: 1000,
        unit: "gram",
        price: 4.50,
        label: "Save 20%",
        sold: 25,
        total: 140,
    },
];
