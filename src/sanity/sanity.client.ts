import { createClient, type ClientConfig } from "next-sanity";

const sanityClient : ClientConfig ={
    projectId: "4r1hnck5",
    dataset: "production",
    useCdn: false,
    apiVersion: "2025-01-19",
    token: "sk4vxkO9QaaD4KT0EkFI7AdxD8vmC8ftzuwYX9Roq906vmOi8N8NLdAKwd5csftyYWg9olUfRulQGse5x7hIDIrZkFEs5eP8dzCahM2MOtulnQsoBC4XtDvIOt68ZDbMwYchtOuoYl6mUSD7CbwuKLwNRemOqwxC9u1R5CPkIWlnaIoYNwAh",
}

export default createClient(sanityClient)
