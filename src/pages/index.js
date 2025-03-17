
import Banner from '@/components/banner';
import Header from '@/components/header';
import Language from '@/components/languege';
import Footer from '@/components/footer';
import { getBusinessInfo, getMenuFromSanity, getSiteSettings } from '@/services/sanityClient';
import Menu from '@/components/menu';

export default function Home({ menu, siteSettings, businessInfo }) {
    return (
        <div className=" min-h-screen gap-16 ">
            <div>
                <header className="bg-white py-2 shadow-md slide-down sticky top-0 z-50">
                    <Header siteSettings={siteSettings} menu={menu} />
                </header>
                <main className="">
                    <Banner siteSettings={siteSettings} />
                    <div className="md:p-8 md:px-20 flex-col gap-[32px]">
                        <Menu menu={menu} />
                    </div>
                    <div className="fixed bottom-4 right-4 bg-white shadow-lg rounded-lg p-4 flex gap-[24px] flex-wrap items-center justify-center">
                        <Language />

                    </div>
                </main>

                {/* Floating Footer */}
                <footer>
                    <Footer siteSettings={siteSettings} businessInfo={businessInfo} />
                </footer>
            </div>
        </div>


    );
}




export async function getServerSideProps() {
    const menu = await getMenuFromSanity()
    const siteSettings = await getSiteSettings()
    const businessInfo = await getBusinessInfo()
    console.log(businessInfo, "YUH")
    return { props: { menu, siteSettings, businessInfo } }
}