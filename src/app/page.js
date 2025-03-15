
import { LanguageProvider } from "@/context/LanguegeContext";
import HomePage from "@/pages/homepage";
export default function Home() {

  return (
    <div className=" min-h-screen gap-16 ">
      <LanguageProvider>
        <HomePage />
      </LanguageProvider>
    </div>
  );
}
