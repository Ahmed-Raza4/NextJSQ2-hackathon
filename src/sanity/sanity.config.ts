import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { schemas } from "./schema/index";



export const sanityConfig = defineConfig({
    name: "default",
    title: "Q2-hackathon-Api",
    dataset: "production",
    projectId: "4r1hnck5",
    plugins: [
        structureTool(),
        visionTool()
    ],
    basePath: "/studio",
    schema:{
        types: schemas
    }
})

