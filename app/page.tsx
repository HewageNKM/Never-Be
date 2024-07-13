import Header from "@/components/sections/Header";
import Popular from "@/components/sections/Popular";
import Arrival from "@/components/sections/Arrival";
import Footer from "@/components/sections/Footer";
import Hero from "@/components/sections/Hero";

export default function Home() {
    return (
        <main className="w-full overflow-clip relative h-full px-4 py-4">
            <Header/>
            <Hero/>
            <Popular/>
            <Arrival/>
            <Footer/>
        </main>
    );
}
