import { Typography } from "@material-tailwind/react";
import Link from "next/link";
 
const LINKS = [
  {
    title: "Address",
    items: ["Gala No. F 30 / 31, Meghdoot Estate,", 
    "Sativali Road, Waliv Phata,", 
    "Opp Luthria House, Vasai (East),Dist.", 
    "Thane 401 208."],
  }
];
 
const currentYear = new Date().getFullYear();
 
export default function Footer() {
  return (
    <footer className="relative w-full bg-orange-300 rounded-xl mb-5">
      <div className="mx-auto w-full max-w-7xl px-8">
        <div className="grid grid-cols-1 justify-between gap-4 md:grid-cols-2">
          <Typography variant="h5" className="mb-6">
          Jai Wires and Cables India
          </Typography>
          <div className="grid grid-cols-1 justify-between gap-4">
            {LINKS.map(({ title, items }) => (
              <ul key={title}>
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="mb-3 font-medium opacity-40"
                >
                  {title}
                </Typography>
                {items.map((link) => (
                  <li key={link}>
                    <Typography
                      as="a"
                      href="#"
                      color="gray"
                      className="py-1.5 font-normal transition-colors hover:text-blue-gray-900"
                    >
                      {link}
                    </Typography>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
        <div className="mt-12 flex w-full flex-col items-center justify-center border-t border-blue-gray-50 py-4 md:flex-row md:justify-between">
          <Typography
            variant="small"
            className="mb-4 text-center font-normal text-blue-gray-900 md:mb-0"
          >
            &copy; {currentYear} <Link href="/">Jai Wires and Cables India</Link>. All
            Rights Reserved.
          </Typography>
        </div>
      </div>
    </footer>
  );
}