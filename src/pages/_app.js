import Head from "next/head";
import "../styles/global.css";
import { GoogleTagManager } from '@next/third-parties/google'
export default function App({ Component, pageProps }) {

    return (
        <>
            <Head>
                <title>Tacos El Flaco - Best Tacos in Boise</title>
                <meta name="description" content="Enjoy the best tacos in Boise at Tacos El Flaco. Fresh, authentic, and delicious Mexican food!" />
                <meta name="keywords" content="tacos, Boise, Mexican food, best tacos, street tacos" />
                <meta name="author" content="Tacos El Flaco" />
                <meta property="og:title" content="Tacos El Flaco - Best Tacos in Boise" />
                <meta property="og:description" content="Come try our amazing street tacos in Boise! Authentic Mexican flavors await." />
                <meta property="og:image" content="/fonts/logo.jpg" />
                <meta property="og:url" content="https://www.tacoselflaco.com" />
            </Head>
            <GoogleTagManager gtmId="G-H9FMB17PGY" />
            <Component {...pageProps} />;
        </>
    )

}
