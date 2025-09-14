import { Typography, Button, IconButton } from "@material-tailwind/react";
import Contact from "./contact-us";

const CURRENT_YEAR = new Date().getFullYear();

export function Footer() {
  return (
    <>
    <Contact />
    <footer className="pb-5 p-10 md:pt-10 bg-green-950 text-gray-100 text-center">
      <div className="container flex flex-col mx-auto">
        Copyright &copy; {CURRENT_YEAR} Rebuild School - All Rights Reserved
      </div>
    </footer>
    </>
    
  );
}

export default Footer;
