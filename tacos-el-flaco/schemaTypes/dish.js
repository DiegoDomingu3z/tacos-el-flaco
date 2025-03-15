export default {
    name: 'dish',
    title: 'Dish',
    type: 'document',
    fields: [
        {
            name: "eng_name",
            type: "string",
            title: "Name of Dish (English)",
            validation: (Rule) => Rule.required()
        },
        {
            name: "es_name",
            type: "string",
            title: "Name of Dish (Spanish)"
        },
        {
            name: "eng_description",
            type: "string",
            title: "Description (English)",
            validation: (Rule) => Rule.max(200),
        },
        {
            name: "es_description",
            type: "string",
            title: "Description (Spanish)"
        },
        {
            name: "price",
            type: "number",
            title: "Default Price of the Dish",
            description: "Used when the dish has a single price.",
            hidden: ({ parent }) => parent?.sizes?.length > 0, // Hide if sizes exist
            validation: (Rule) => Rule.required()
        },
        {
            name: "sizes",
            type: "array",
            title: "Dish Sizes (Optional)",
            description: "Define different sizes with their own prices if applicable.",
            of: [
                {
                    type: "object",
                    fields: [
                        {
                            name: "eng_size",
                            type: "string",
                            title: "Size (English)",
                            validation: (Rule) => Rule.required()
                        },
                        {
                            name: "es_size",
                            type: "string",
                            title: "Size (Spanish)",
                            validation: (Rule) => Rule.required()
                        },
                        {
                            name: "price",
                            type: "number",
                            title: "Price for this Size",
                            validation: (Rule) => Rule.required()
                        }
                    ]
                }
            ]
        },
        {
            name: "image",
            type: "image",
            title: "Image of the Dish",
        },
        {
            name: "category",
            type: "reference",
            title: "Menu Category",
            to: [{ type: "menu-category" }],
            validation: (Rule) => Rule.required(),
        }
    ],
};