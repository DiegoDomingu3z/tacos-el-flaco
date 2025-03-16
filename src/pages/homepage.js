import { getMenu, getMenuFromSanity, getSiteSettings } from "@/services/sanityClient";
import Banner from "@/components/banner";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Language from "@/components/languege";
import Menu from "@/components/menu";

const HomePage = async () => {
    const siteSettings = await getSiteSettings();
    const menu = await getMenuFromSanity()
    return (
        <div>
            <header className="bg-white py-2 shadow-md slide-down sticky top-0 z-50">
                <Header siteSettings={siteSettings} />
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
                <Footer siteSettings={siteSettings} />
            </footer>
        </div>
    );
}

export default HomePage;