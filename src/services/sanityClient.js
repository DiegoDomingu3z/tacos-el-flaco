// Adjust the path as needed

import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export async function getSiteSettings() {
    try {
        const response = await fetch(
            'https://163neu8n.api.sanity.io/v2025-03-14/data/query/production?query=*%5B_type+%3D%3D+%22siteSettings%22%5D%5B0%5D',
            { next: { revalidate: 60 } } // Cache response for 60 seconds
        );
        const data = await response.json();
        return data.result; // The actual data from Sanity
    } catch (error) {
        console.error('Error fetching site settings:', error);
        return null;
    }
}

export async function getMenu() {
    try {
        const response = await fetch(
            'https://163neu8n.api.sanity.io/v2025-03-15/data/query/production?query=*%5B_type+%3D%3D+%22menu-category%22%5D+%7C+order%28order+asc%29%7B%0A++_id%2C%0A++title%2C%0A++image%2C%0A++%22dishes%22%3A+*%5B_type+%3D%3D+%22dish%22+%26%26+references%28%5E._id%29%5D%7B%0A++++_id%2C%0A++++eng_name%2C%0A++++es_name%2C%0A++++eng_description%2C%0A++++es_description%2C%0A++++price%2C%0A++++sizes%2C%0A++++image%0A++%7D%0A%7D'
        )
        const data = await response.json()
        console.log("MENU: ", data.result)
        return data.result
    } catch (error) {
        console.error('Error fetching menu: ', error)
        return null
    }
}

const sanityClient = createClient({
    projectId: '163neu8n',
    dataset: 'production',
    useCdn: false,
    apiVersion: '2025-03-14',
});

const builder = imageUrlBuilder(sanityClient);

export function urlFor(source) {
    return builder.image(source).url();
}

export default sanityClient;