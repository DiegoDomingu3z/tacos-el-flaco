export default {
    name: 'siteSettings',
    title: 'Site Settings',
    type: 'document',
    __experimental_actions: ['update', 'publish'], // Disables 'create' & 'delete'
    fields: [
        {
            name: 'logo',
            title: 'Website Logo',
            type: 'image',
            options: { hotspot: true }
        },
        {
            name: 'phoneNumber',
            title: 'Phone Number',
            type: 'string',
            validation: Rule => Rule.required().regex(/^\+?[1-9]\d{1,14}$/, {
                name: 'phone number',
                invert: false
            }).error('Enter a valid phone number')
        },
        {
            name: 'email',
            title: 'Email',
            type: 'string',
            validation: Rule => Rule.required().email().error('Enter a valid email address')
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
            name: 'full_address',
            title: 'Full Address',
            type: 'string',
            readOnly: true,
            description: "Automatically generated full address",
            options: { isHighlighted: true },
            initialValue: (document) =>
                `${document.street}, ${document.city}, ${document.state} ${document.zip_code}`
        },
        {
            name: 'banner',
            title: 'Website Banner',
            type: 'image',
            options: { hotspot: true }
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
        {
            name: 'instagramUrl',
            title: 'Instagram URL',
            type: 'url',
            validation: Rule => Rule.uri({ scheme: ['http', 'https'] }).error('Enter a valid Instagram URL')
        },
        {
            name: 'facebookUrl',
            title: 'Facebook URL',
            type: 'url',
            validation: Rule => Rule.uri({ scheme: ['http', 'https'] }).error('Enter a valid Facebook URL')
        }
    ]
};