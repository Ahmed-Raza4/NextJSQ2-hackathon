import { groq } from "next-sanity";
import sanityClient from "./sanity.client";

export async function getProducts(){
    return await sanityClient.fetch(
        groq`*[_type == "products"]{
        name, description, price, "image": image.asset->url, category, stock, "slug": slug.current}`
    )
}