import { fetchHomeData, fetchItemsData } from "@/requests/requests";
import { useAppContext } from "@/store/store";
import { Carousel } from "@material-tailwind/react";
import { useContext, useEffect } from "react";

type HeroType = {
    id: string;
    name: string;
    url:string;
}

export default function Hero() {
    //const { globalState, globalDispatch } = useContext(Context);
    const { state, setState } = useAppContext();

   

  return (
    <div className="bg-orange-200 rounded-xl">
      <div className="mx-auto max-w-7xl py-1 sm:px-1 sm:py-4 lg:px-1">
        <div className="relative isolate overflow-hidden bg-orange-200 px-6 pt-16 sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
          <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
            <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">
              JWC Wires & Cables
            </h2>
            <p className="mt-6 text-lg leading-8 text-black text-justify">
              We manufacture a wide range of wires from Flexible Wires, Hookup
              Wires, CCTV Wires Co-axial Cable, Shielded Cable, to Multicore
              Unshielded & Multicore Shielded Cables....
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
              <a
                href="#contact"
                className="rounded-md px-3.5 bg-orange-600 hover:bg-orange-800 py-2.5 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                Get in Touch!
              </a>
              <a
                href="#about"
                className="text-sm font-semibold leading-6 text-black"
              >
                Explore <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
          <div id="carousel" className="relative mt-16 lg:mt-8">
            <Carousel className="rounded-xl">
                {state.homedata.map((_item: any) => (
                     <img
                     key={_item.id}
                     src={_item.url}
                     alt={_item.name}
                     className="object-cover w-full h-64 sm:h-72 md:h-80 lg:h-96"
                   />
                ))}
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
}
