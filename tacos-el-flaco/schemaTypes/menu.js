export default {
    name: "menu-category",
    title: "Menu Category",
    type: "document",
    fields: [
        {
            name: "title",
            type: "string",
            title: "Category Name",
            validation: (Rule) => Rule.required()
        },
        {
            name: "order",
            type: "number",
            title: "Sort Order",
            description: "Lower numbers appear first.",
            validation: (Rule) => Rule.required().min(1),
        }
    ],
    orderings: [
        {
            title: "Sort Order (Ascending)",
            name: "orderAsc",
            by: [{ field: "order", direction: "asc" }]
        }
    ]
};