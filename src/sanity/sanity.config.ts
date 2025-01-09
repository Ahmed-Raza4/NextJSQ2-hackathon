import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { schemas } from "./schema/index";


export const sanityConfig = defineConfig({
    name: "default",
    title: "ecommerce-nike-shoes",
    dataset: "production",
    projectId: "6nav2rml",
    plugins: [
        structureTool(),
        visionTool()
    ],
    basePath: "/studio",
    schema:{
        types: schemas
    }
})

