import { Carousel } from "flowbite-react"

import { ArrowLeftIcon,ArrowRightIcon } from "@heroicons/react/24/outline"

export default function ProdsCarousel ()
{

    return (
       
        <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 bg-white ">
        <Carousel slide={false}
        leftControl={ <ArrowLeftIcon className=" h-9 w-9 bg-red-500"></ArrowLeftIcon>}
        rightControl={ <ArrowRightIcon className="h-9 w-9 bg-red-500"></ArrowRightIcon>}
        >
           
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
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mx-16">
            <img className="rounded-t-lg h-40 w-full" src="https://firebasestorage.googleapis.com/v0/b/mamun-public.appspot.com/o/jwclogo.png?alt=media&token=120110d3-ec71-435a-9d40-c5c870bb3cb2" alt="" />
            <div className="p-5">
                <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">{name}</h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{description}</p>
                <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Read more
                    <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </a>
            </div>
        </div>

    )
}