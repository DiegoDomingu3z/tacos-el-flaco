// Adjust the path as needed

import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
    projectId: '163neu8n',
    dataset: 'production',
    useCdn: false, // set to `false` to bypass the edge cache
    apiVersion: '2025-02-06',
})

export async function getMenuFromSanity(context) {
    try {
        const menu = await client.fetch(`
            *[_type == "menu-category"] | order(order asc){
                _id,
                title,
                image,
                "dishes": *[_type == "dish" && references(^._id)]{
                    _id,
                    eng_name,
                    es_name,
                    eng_description,
                    es_description,
                    price,
                    sizes,
                    image
                }
            }`);
        console.log("Fetched menu data from Sanity:", menu);
        return menu;
    } catch (error) {
        console.error("Error fetching menu from Sanity:", error);
        return null;
    }
}

export async function getSiteSettings() {
    try {
        const siteSettings = await client.fetch(`
            *[_type == "siteSettings"][0]{
                logo,
                phoneNumber,
                email,
                banner,
                instagramUrl,
                facebookUrl
            }
        `);
        return siteSettings;
    } catch (error) {
        console.error('Error fetching site settings:', error);
        return null;
    }
}

export async function getBusinessInfo() {
    try {
        console.log("RUNNING")
        const businessInfo = await client.
            fetch(`
            *[_type == "business"][0]
            `)
        return businessInfo
    } catch (error) {
        console.error('Error fetching site settings:', error);
        return null;
    }
}

const builder = imageUrlBuilder(client);

export function urlFor(source) {
    return builder.image(source).url();
}
