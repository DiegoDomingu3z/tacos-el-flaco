export default {
    name: "business",
    title: "Business",
    type: "document",
    __experimental_actions: ["update", "publish"], // Disable "create" and "delete"
    fields: [
        {
            name: 'mainLogo',
            title: 'Link Logo',
            type: 'image',
            options: { hotspot: true }
        },
        {
            name: 'street',
            title: 'Address Street',
            type: 'string',
            validation: Rule => Rule.required()
        },
        {
            name: 'city',
            title: 'City',
            type: 'string',
            validation: Rule => Rule.required()
        },
        {
            name: 'state',
            title: 'State',
            type: 'string',
            validation: Rule => Rule.required()
        },
        {
            name: 'zip_code',
            title: 'Zip Code',
            type: 'string',
            validation: Rule => Rule.required()
        },
        {
            name: "hours",
            title: "Business Hours",
            type: "array",
            of: [
                {
                    type: "object",
                    fields: [
                        {
                            name: "day",
                            title: "Day",
                            type: "string",
                            options: {
                                list: [
                                    { title: "Monday", value: "Monday" },
                                    { title: "Tuesday", value: "Tuesday" },
                                    { title: "Wednesday", value: "Wednesday" },
                                    { title: "Thursday", value: "Thursday" },
                                    { title: "Friday", value: "Friday" },
                                    { title: "Saturday", value: "Saturday" },
                                    { title: "Sunday", value: "Sunday" },
                                ],
                            },
                        },
                        {
                            name: "isClosed",
                            title: "Closed?",
                            type: "boolean",
                            description: "Check this if the business is closed on this day.",
                            initialValue: false
                        },
                        {
                            name: "openTime",
                            title: "Open Time",
                            type: "string",
                            validation: (Rule) => Rule.custom((value, context) =>
                                context.parent.isClosed ? true : value ? true : "Open time is required"
                            ),
                        },
                        {
                            name: "closeTime",
                            title: "Close Time",
                            type: "string",
                            validation: (Rule) => Rule.custom((value, context) =>
                                context.parent.isClosed ? true : value ? true : "Close time is required"
                            ),
                        },
                    ],
                    preview: {
                        select: {
                            title: "day",
                            subtitle: "openTime",
                        },
                        prepare({ title, subtitle }) {
                            return {
                                title,
                                subtitle: `Opens at ${subtitle}`,
                            };
                        },
                    },
                },
            ],
        },
    ],
};