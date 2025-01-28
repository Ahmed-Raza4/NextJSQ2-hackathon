import { createClient, type ClientConfig } from "next-sanity";

const sanityClient : ClientConfig ={
    projectId: "4r1hnck5",
    dataset: "production",
    useCdn: false,
    apiVersion: "2025-01-19",
}

export default createClient(sanityClient)
