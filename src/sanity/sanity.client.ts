import { createClient, type ClientConfig } from "next-sanity";

const sanityClient : ClientConfig ={
    projectId: "6nav2rml",
    dataset: "production",
    useCdn: false,
    apiVersion: "2025-07-01"
}

export default createClient(sanityClient)
