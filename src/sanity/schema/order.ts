import { defineType } from "sanity"

export const order = defineType({
    name: "order",
    title: "Order",
    type: "document",
    fields: [
        {
            name: "firstName",
            title: "First Name",
            validation: (rule) => rule.required(),
            type: "string"
        },
        {
            name: "lastName",
            title: "Last Name",
            validation: (rule) => rule.required(),
            type: "string",
        },
        {
            name: "address1",
            title: "Address 1",
            validation: (rule) => rule.required(),
            type: "string",
        },
        {
            name: "address2",
            title: "Address 2",
            type: "string",
        },
        {
            name: "address3",
            title: "Address 3",
            type: "string",
        },
        {
            name: "postalCode",
            title: "Postal Code",
            type: "string",
            validation: (rule) => rule.required()
        },
        {
            name: "city",
            title: "City",
            type: "string",
            validation: (rule) => rule.required()
        },
        {
            name: "country",
            title: "Country",
            type: "string",
            validation: (rule) => rule.required()
        },
        {
            name: "email",
            title: "Email",
            type: "string",
            validation: (rule) => rule.required()
        },
        {
            name: "phone",
            title: "Phone",
            type: "string",
            validation: (rule) => rule.required()
        },
        {
            name: "consent",
            title: "Consent",
            type: "boolean",
            validation: (rule) => rule.required()
        },
        {
            name: "cartData",
            title: "Cart Data",
            type: "array",
            of: [{ type: "reference", to: [{ type: "product" }] }],
            validation: (rule) => rule.required(),
        },
        {
            name: "total",
            title: "Total",
            type: "number",
            validation: (rule) => rule.required()
        },
        {
            name: "orderStatus",
            title: "Order Status",
            type: "string",
            options: {
                list: [
                    { title: "Pending", value: "pending" },
                    { title: "Dispatched", value: "dispatched" },
                    { title: "Completed", value: "completed" },
                ],
                layout: "radio",
            },
            initialValue: "Pending"
        },
        {
            name: 'orderNumber',
            title: 'Order Number',
            type: 'number',
        },
        {
            name: 'orderDate',
            title: 'Order Date',
            type: 'datetime',
        }

    ]
})