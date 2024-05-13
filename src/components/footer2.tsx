import { EnvelopeIcon, PhoneIcon, MapPinIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import { Typography } from "@material-tailwind/react";
 
const LINKS = [
  {
    title: "Get in Touch",
    items: [
        {
            text: "Jai Wires & Cables\n F-30/31 Meghdhoot Ind. Est.,\n Opp.Luthriya House, Waliv Phata,\n Vasai(E), Palghar 401208",
            href: "#",
            icon: MapPinIcon,
            type: "address"

        },
        {
            text: "info@jwcindia.com",
            href: "mailto:info@jwcindia.com",
            icon: EnvelopeIcon,
            type: "email"
        },{
            text: "+91 9820126970", 
            href: "tel:+919820126970",
            icon: PhoneIcon,
            type: "phone"
        },
        {
          text: "+91 9820764384", 
          href: "tel:+919820764384",
          icon: PhoneIcon,
          type: "phone"
      }
      ],
  },
  {
    title: "Quick Links",
    items: [
        {
            text: "Home",
            href: "/#",
            icon: ArrowRightIcon,
            type: "link"
        },
        {
            text: "About",
            href: "/#about",
            icon: ArrowRightIcon,
            type: "link"
        },
        {
            text: "Products",
            href: "/products",
            icon: ArrowRightIcon,
            type: "link"
        },
        {
            text: "Enquiry",
            href: "/#enquire",
            icon: ArrowRightIcon,
            type: "link"
        },
        {
          text: "Contact",
          href: "/contact",
          icon: ArrowRightIcon,
          type: "link"
      }
    ],
  },
];
 
const currentYear = new Date().getFullYear();
 
export default function Footer2() {
  return (
    <footer id="contact" className="relative w-full bg-orange-300">
      <div className="mx-auto w-full px-8">
      
        <div className=" grid grid-cols-1 justify-between gap-1 md:grid-cols-2">
        <div>
        <Typography
              variant="small"

              className="mb-3 py-2 text-orange-600 font-semibold"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}                >
                  Reach Us!
                </Typography>
        <div className="relative pb-[42%] md:pb-5">
        
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d241.80953976803514!2d72.86394477286053!3d19.40594246060004!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7af2fffffffff%3A0x9880dfbda869ee76!2sJai%20Wires%20And%20Cables!5e0!3m2!1sen!2sin!4v1690375053137!5m2!1sen!2sin"
          className="absolute top-0 left-0 w-auto h-auto"
          frameBorder="0"
          style={{ border: "0" }}
          allowFullScreen
        ></iframe>
        
      </div>
        </div>
        
        
          <div className="grid grid-cols-2 justify-between gap-1">
            {LINKS.map(({ title, items }) => (
              <ul key={title}>
                <Typography
                  variant="small"

                  className="py-2 mb-2 text-orange-600 font-semibold"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}                >
                  {title}
                </Typography>
                {items.map((link) => (
                  <li key={link.text}>
                    {link.type === "address" ? (
                      <div  className="py-1.5 flex flex-1">
                      <span aria-hidden="true"><link.icon className="h-5 flex-none" aria-hidden="true" /></span>
                      <Typography
                          as="a"
                          href={link.href}
                          className="px-1 font-medium transition-colors hover:text-orange-600"
                          placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}                       ><span dangerouslySetInnerHTML={{ __html: link.text.replace(/\n/g, '<br/>') }} /></Typography>
                      </div>
                    ) : (
                      <div  className="py-1.5 flex flex-1">
                    <span aria-hidden="true"><link.icon className="h-5 flex-none" aria-hidden="true" /></span>
                    <Typography
                            as="a"
                            href={link.href}

                            className="px-1 font-medium transition-colors hover:text-orange-600"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}                    >
                      {link.text}
                    </Typography>
                    </div>
                    )}
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
        <div className="flex w-full flex-col items-center justify-center border-t border-orange-600 py-1 md:flex-row md:justify-between">
          <Typography
            variant="small"
            className="mb-4 text-center font-normal text-blue-gray-900 md:mb-0"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}          >
            &copy; {currentYear} <a href="https://jwcindia.com/">Jai Wires and Cables</a>. All
            Rights Reserved.
          </Typography>
         
        </div>
      </div>
    </footer>
  );
}