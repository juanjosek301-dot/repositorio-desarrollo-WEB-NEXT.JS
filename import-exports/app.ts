import { addProduct, PRODUCTS, findProductById } from "./controllers/products.controller";


addProduct({id:"1", name:"mango", description:"", isActive:true, price:6000})
console.log(PRODUCTS)

const product = findProductById("1");

if (product) {
    const { name, price } = product;
    const description = product["description"] || "N/A"
    console.log(name, price, product.id, description);
}
