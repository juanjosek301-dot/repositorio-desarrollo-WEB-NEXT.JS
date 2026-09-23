import { Product } from "../models/Product"


export const PRODUCTS: Array<Product>= []
export const ACTIVE_PRODUCTS:Array<Product> = []

//arrow function 
export const addProduct = (product:Product)=>{

    PRODUCTS.push(product)
    const {isActive} = product //DEstructuracion de un json. (product.isActibe)
    if (isActive) {
        ACTIVE_PRODUCTS.push(product)
    }
}

export const findProductById = (id:string)=>{
    return PRODUCTS.find((x)=>x.id==id)
    //let product=undefined
    //PRODUCTS.forEach((x)=>{
        //if (x.id==id) {
           //product=x
        //}
    //})
    //return product
}