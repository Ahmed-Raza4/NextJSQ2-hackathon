import { groq } from "next-sanity";
import sanityClient from "./sanity.client";

export async function getProducts(){
    return await sanityClient.fetch(
        groq`*[_type == "product"]{
        _id, productName, description, price, "image": image.asset->url, category, stock, "slug": slug.current}`
    )
}
export async function get4Products(){
    return await sanityClient.fetch(
        groq`*[_type == "product"][0...4]{
        _id, productName, description, price, "image": image.asset->url, category, stock, "slug": slug.current}`
    )
}