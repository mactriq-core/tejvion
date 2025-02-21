import AboutUs from "@/components/pages/home/aboutus";
import Hero from "@/components/pages/home/hero";
import Offering from "@/components/pages/home/offering";
import ServicesSection from "@/components/pages/home/services";
import WhyUs from "@/components/pages/home/whyus";
import Footer from "@/components/ui/footer";
import Header from "@/components/ui/header";

export default function Home() {
  return (
    <div className="">
      <div className="w-full border border-b-1">
      <Header />
      </div>
      <main className="flex flex-col">
        <Hero/>
        <WhyUs/>
        <Offering/>
        <AboutUs/>
        <ServicesSection/>
        
      </main>
      <Footer/>
    </div>
  );
}
