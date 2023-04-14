import { Carousel } from "flowbite-react"

import {ChevronLeftIcon,ChevronRightIcon} from "@heroicons/react/24/outline"

const aboutUsPoints =[ 
    {line:1, point:"To manufacture and deliver quality products efficiently, in a professional and flexible environment, on time and at the right cost to our customers, while driving to become a world-class organization."},
    {line:2, point:"Provide products and services of the highest possible standards, to satisfy our customer needs, expectations of quality, safety, reliability and service."},
    {line:3, point:"Accomplish quality objectives by establishing, implementing and maintaining a documented effective Quality Assurance System."},
]

export default function OurServices ()
{

    return (
            <div className="mx-auto w-full p-4 py-6 max-w-screen-xl">
                
                  <OurServicesCard name="About Us" description={aboutUsPoints}></OurServicesCard>

            </div>
      )  
}


function OurServicesCard({name,description}:{name:string,description:any})
{
    return (
          <div className="grid grid-row-1 grid-cols-2 grid-flow-row items-center h-auto mx-8">
            <img className="h-64 w-96 p-12 " src="https://firebasestorage.googleapis.com/v0/b/mamun-public.appspot.com/o/jwclogo.png?alt=media&token=120110d3-ec71-435a-9d40-c5c870bb3cb2" alt="" />
            <div className="relative flex flex-col items-start w-auto h-auto  p-12">
                <h1 className="mb-2 text-5xl">{name}</h1><hr className="w-20 h-0.5 bg-black mb-8"/>
                <h5 className="mb-6 text-md">
                    {
                    aboutUsPoints.map((point)=><li key={point.line}>{point.point}</li>)
                    }
                </h5>
              
              
            </div> 
          </div>

    )
}

