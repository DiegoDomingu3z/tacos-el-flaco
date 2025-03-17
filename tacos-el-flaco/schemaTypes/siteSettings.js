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
            name: 'banner',
            title: 'Website Banner',
            type: 'image',
            options: { hotspot: true }
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