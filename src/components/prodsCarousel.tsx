import { Carousel } from "flowbite-react"

import {ChevronLeftIcon,ChevronRightIcon} from "@heroicons/react/24/outline"



export default function ProdsCarousel ()
{

    return (
       
        <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 bg-white ">
         <span className="text-orange-400 text-2xl">Shop By Products</span>   
         <Carousel slide={false}
         leftControl={ <ChevronLeftIcon className=" h-10 w-10  text-white bg-orange-600 border border-orange-600  hover:text-orange-600 hover:bg-white"></ChevronLeftIcon>}
         rightControl={ <ChevronRightIcon className=" h-10 w-10  text-white bg-orange-600 border border-orange-600  hover:text-orange-600 hover:bg-white"></ChevronRightIcon>}
         indicators={false} >
           
                <div className="flex h-full items-center justify-center gap-6 p-6">
                  <ShopByProductCard name="test1" description="test1" />
                  <ShopByProductCard name="test2" description="test2"/>
                  <ShopByProductCard name="test3" description="test3"/>
                </div>
                <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
                 Slide 2
                </div>
                <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
                 Slide 3
                </div>
            
         </Carousel>
      </div>
      )  
}


function ShopByProductCard({name,description}:{name:string,description:string})
{
    return (
        <div className="max-w-md bg-white border border-gray-200  shadow dark:bg-gray-800 dark:border-gray-700 mx-16">
            <img className="rounded-t-lg h-40 w-full" src="https://firebasestorage.googleapis.com/v0/b/mamun-public.appspot.com/o/jwclogo.png?alt=media&token=120110d3-ec71-435a-9d40-c5c870bb3cb2" alt="" />
            <div className="p-5">
                <h5 className="mb-2 text-lg font-bold tracking-tight underline decoration-orange-600 text-gray-900 dark:text-white">{name}</h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{description}</p>
                <a href="#" className="flex justify-center items-center px-3 py-2 text-sm font-medium text-center text-white bg-orange-600 hover:bg-orange-800 focus:ring-4 focus:outline-none dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ">
                    Order Now
                  
                </a>
            </div>
        </div>

    )
}

