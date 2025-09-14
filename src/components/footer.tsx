import { Typography, Button, IconButton } from "@material-tailwind/react";

const CURRENT_YEAR = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="pb-5 p-10 md:pt-10 bg-gray-800 text-gray-100 text-center">
      <div className="container flex flex-col mx-auto">
        Copyright &copy; {CURRENT_YEAR} Feed The People - All Rights Reserved
      </div>
    </footer>
  );
}

export default Footer;
