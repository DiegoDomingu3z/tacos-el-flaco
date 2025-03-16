export default {
    name: "business",
    title: "Business",
    type: "document",
    fields: [

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
                                    { title: "Monday", value: "monday" },
                                    { title: "Tuesday", value: "tuesday" },
                                    { title: "Wednesday", value: "wednesday" },
                                    { title: "Thursday", value: "thursday" },
                                    { title: "Friday", value: "friday" },
                                    { title: "Saturday", value: "saturday" },
                                    { title: "Sunday", value: "sunday" },
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
    ]
}