import { Carousel } from "flowbite-react"

import {ChevronLeftIcon,ChevronRightIcon} from "@heroicons/react/24/outline"



export default function HeroSection ()
{

    return (
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <Carousel className="relative bg-orange-200 h-auto  py-12" slide={false}
                        leftControl={ <ChevronLeftIcon className=" absolute -bottom-4 -right-[1100px] h-12 w-12 p-2 text-orange-600 bg-transparent border-orange-600  hover:text-white hover:bg-orange-600 border  "></ChevronLeftIcon>}
                        rightControl={ <ChevronRightIcon className="absolute -bottom-4 right-8 h-12 w-12 p-2 text-orange-600 bg-transparent border-orange-600  hover:text-white hover:bg-orange-600 border"></ChevronRightIcon>}
                        indicators={false} >
                        
                        
                                <HeroSectionCard name="JWC Wires & Cables" description="We manufacture a wide range of wires from Flexible Wires, Hookup Wires, CCTV Wires Co-axial Cable, Shielded Cable, to Multicore Unshielded & Multicore Shielded Cables…." />
                            
                        
                    </Carousel>
            </div>
      )  
}


function HeroSectionCard({name,description}:{name:string,description:string})
{
    return (
          <div className="grid grid-row-1 grid-cols-4 grid-flow-row items-center mx-4 p-2   h-auto">
            <img className="h-56 w-64 bg-white mt-auto" src="https://firebasestorage.googleapis.com/v0/b/mamun-public.appspot.com/o/jwclogo.png?alt=media&token=120110d3-ec71-435a-9d40-c5c870bb3cb2" alt="" />
            <div className="relative flex flex-col items-start w-auto h-auto  p-12 col-span-3">
                <h1 className="mb-8 text-5xl underline decoration-2 underline-offset-8 ">{name}</h1>
                <h5 className="mb-6 text-2xl">{description}</h5>
                <a href="#" className=" mb-8 text-lg underline decoration-2 underline-offset-8">Explore</a>
                <a href="#" className="absolute bottom-1 left-1/3 flex justify-center items-center w-60 px-8 py-4 text-md font-medium text-center text-white bg-orange-600 hover:bg-orange-800 focus:ring-4 focus:outline-none">
                    Order Now
                  
                </a>
            </div> 
          </div>

    )
}

