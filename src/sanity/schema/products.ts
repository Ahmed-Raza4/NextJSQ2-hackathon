// create schema for products


type RuleType = {
    required: () => RuleType
}

export const productsSchema = {
    name: "products",
    title: "All Products",
    type: "document",
    fields: [
        {
            name: "name",
            title: "Product Name",
            type: "string",
            validation: (Rule: RuleType) => Rule.required()
        },
        {
            name: "description",
            title: "Product Description",
            type: "text",
            validation: (Rule: RuleType) => Rule.required()
        },
        {   
            name: "price",
            title: "Price",
            type: "number",
            validation: (Rule: RuleType) => Rule.required()
        },
        {
            name: "image",
            title: "Product Image",
            type: "image",
            validation: (Rule: RuleType) => Rule.required()
        },
        {
            name: "slug",
            title: "Slug",
            type: "slug",
            options: {
                source: "name",
                maxLength: 96
            },
            validation: (Rule: RuleType) => Rule.required()
        },
        {
            name: "category",
            title: "Product Category",
            type: "string",
            options: {
                list:[
                    {title: "men's shoes", value: "men's shoes"},
                    {title: "women's shoes", value: "women's shoes"},
                    {title: "kid's shoes", value: "kid's shoes"},
                    {title: "gersery", value: "gersery"},
                    {title: "top", value: "top"},
                    {title: "shorts", value: "shorts"},
                    {Title: "jacket", value: "jacket"}
                ]
            },
            validation: (Rule: RuleType) => Rule.required()
        },
        {
            name: "color",
            title: "Color",
            type: "string",
            options:{
                list:[
                    {title: "1 color", value: "1 color"},
                    {title: "2 colors", value: "2 colors"},
                    {title: "3 colors", value: "3 colors"},
                    {title: "4 colors", value: "4 colors"}
                ]
            }
        },
        {
            name: "stock",
            title: "Stock",
            type: "number",
            validation: (Rule: RuleType) => Rule.required()
        }
    ]
}