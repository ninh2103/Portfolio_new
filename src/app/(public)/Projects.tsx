import { HoverEffect } from "@/components/ui/card-hover-effect";
import { cartData } from "@/lib/data/cart-data";

export default function Projects() {
  return (
    <div className="relative w-full overflow-clip">
      <h1 className="text-2xl md:text-5xl lg:text-4xl font-bold text-center text-black dark:text-white relative z-2 font-sans mb-20">
        Projects Personal
      </h1>
      <div className="max-w-5xl mx-auto px-8">
        <HoverEffect items={cartData} />
      </div>
    </div>
  );
}
