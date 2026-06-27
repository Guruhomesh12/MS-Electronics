import { Hero } from "@/components/sections/Hero";
import { Products } from "@/components/sections/Products";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { ManufacturingProcess } from "@/components/sections/ManufacturingProcess";
import { Industries } from "@/components/sections/Industries";
import { Quality } from "@/components/sections/Quality";
import { Configurator } from "@/components/sections/Configurator";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <Products />
      <WhyChooseUs />
      <ManufacturingProcess />
      <Industries />
      <Quality />
      <Configurator />
    </div>
  );
}
