import React from "react";
import {
  Navbar as MTNavbar,
  Collapse,
  Button,
} from "@material-tailwind/react";


export function Navbar() {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen((cur) => !cur);

 

  return (
    <MTNavbar
      shadow={false}
      fullWidth
      blurred={false}
      color= "transparent"
      className="fixed top-0 z-50 border-0" placeholder={undefined} onResize={undefined} onResizeCapture={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}    >
      <div className="container mx-auto flex items-center justify-between">
        <img src="/logos/logo.jpg" alt="Logo" className="h-24 rounded-full" />
        <ul
          className="ml-10 hidden items-center gap-6 lg:flex text-gray-800"
        >
          
        </ul>
      </div>
      <Collapse open={open}>
        <div className="container mx-auto mt-4 rounded-lg bg-white px-6 py-5">
          <ul className="flex flex-col gap-4 text-gray-900">
            <img src="/logos/logo.jpg" alt="Logo" className="h-18 rounded-full mx-auto" />
          </ul>
        </div>
      </Collapse>
    </MTNavbar>
  );
}

export default Navbar;
