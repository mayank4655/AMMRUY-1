import React from "react";
import { Link } from "react-router-dom";
import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
  List,
  ListItem,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import {
  ChevronDownIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  Bars4Icon,
  GlobeAmericasIcon,
  NewspaperIcon,
  PhoneIcon,
  RectangleGroupIcon,
  SquaresPlusIcon,
  SunIcon,
  TagIcon,
  UserGroupIcon,
} from "@heroicons/react/24/solid";
 
const navListMenuItems = [
  {
    title: "AC Repair",
    description: "Find the perfect solution for your needs.",
    icon: SquaresPlusIcon,
  },
  {
    title: "Fridge Repair",
    description: "Meet and learn about our dedication",
    icon: UserGroupIcon,
  },
  {
    title: "Microwave Repair",
    description: "Find the perfect solution for your needs.",
    icon: Bars4Icon,
  },
  {
    title: "RO Repair",
    description: "Learn how we can help you achieve your goals.",
    icon: SunIcon,
  },
  {
    title: "TV Repair",
    description: "Reach out to us for assistance or inquiries",
    icon: GlobeAmericasIcon,
  },
  {
    title: "Washing Machine Repair",
    description: "Find the perfect solution for your needs.",
    icon: PhoneIcon,
  },
];
 
function NavListMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const renderItems = navListMenuItems.map(
    ({ icon, title, description }, key) => (
      <a key={key}>
        <MenuItem className="flex items-center  rounded-lg hover:bg-black/10 pt-2 md:hover:text-black hover:text-white" >
          <div >
            <Typography
              variant="h6"
              color="blue-gray"
              className="flex items-center text-sm font-semibold"
            >
              {title}
            </Typography>
          </div>
        </MenuItem>
      </a>
    ),
  );
 
  return (
    <React.Fragment>
      <Menu
        open={isMenuOpen}
        handler={setIsMenuOpen}
        offset={{ mainAxis: 20 }}
        placement="bottom"
        allowHover={true}
      >
        <MenuHandler>
          <Typography as="div" variant="small" className="font-medium">
            <ListItem
              className="flex items-center gap-2 py-2 pr-4 font-medium text-white-900 text-base hover:bg-slate-600/30"
              selected={isMenuOpen || isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((cur) => !cur)}
            >
              Services
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`hidden h-3 w-3 transition-transform lg:block ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
              />
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`block h-3 w-3 transition-transform lg:hidden ${
                  isMobileMenuOpen ? "rotate-180" : ""
                }`}
              />
            </ListItem>
          </Typography>
        </MenuHandler>
        <MenuList className="hidden w-full md:w-64 rounded-xl lg:block hover:bg-black/40">
          <ul className="grid grid-cols-1 gap-y-2 outline-none outline-0 ">
            {renderItems}
          </ul>
        </MenuList>
      </Menu>
      <div className="block lg:hidden">
        <Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
      </div>
    </React.Fragment>
  );
}
 
function NavList() {
  return (
    <List className=" mb-8 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1">
      <Typography
        as="a"
        href="#"
        variant="small"
        color="blue-gray"
        className="font-medium"
      >
        <ListItem className="flex items-center  gap-2 py-2 pr-4 hover:bg-slate-600/30 hover:text-white text-base">Home</ListItem>
      </Typography>
      <NavListMenu />
      <Typography
        as="a"
        href="#footer"
        variant="small"
        color="blue-gray"
        className="font-medium"
      >
        <ListItem className="flex items-center  gap-2 py-2 pr-4 hover:bg-slate-600/30 hover:text-white text-base">
          Contact Us
        </ListItem>
      </Typography>
      <Typography
        as="a"
        href="#about"
        variant="small"
        color="blue-gray"
        className="font-medium"
      >
        <ListItem className="flex items-center  gap-2 py-2 pr-4 hover:bg-slate-600/30 hover:text-white text-base">
          About Us
        </ListItem>
      </Typography>
    </List>
  );
}
 
export function NavBar() {
  const [openNav, setOpenNav] = React.useState(false);
 
  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);
 
  return (
    <Navbar className=" px-4 py-2 bg-[#00B09A] rounded-none">
      <div className="flex items-center justify-between text-blue-gray-900">
        <Typography
          as="a"
          href="#"
          variant="h6"
          className="mr-4 cursor-pointer py-1.5 lg:ml-2 text-xl hover:text-white"
        >
          SharpCareer Solutions
        </Typography>
        <div className="hidden lg:block">
          <NavList />
        </div>
        <div className="hidden gap-2 lg:flex">
          <Button variant="text" color="blue-gray" className="bg-slate-600/20 hover:bg-slate-600/30 text-sm font-semibold">
            Log In
          </Button>
          <Button variant="gradient" className="bg-slate-600/20 hover:bg-slate-600/30 text-sm font-semibold">
            Sign In
          </Button>
        </div>
        <IconButton

          variant="text"
          color="blue-gray"
          className="lg:hidden pb-4 pr-6"
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <div className="hover:none">
        <NavList />
        <div className="flex w-full flex-nowrap items-center gap-2 lg:hidden ">
          <Button  className="text-base font-medium bg-slate-600/30 hover:bg-slate-600/50 py-[10px]" color="blue-gray" fullWidth>
            Log In
          </Button>
          <Button  className="text-base font-medium bg-slate-600/30 hover:bg-slate-600/50 py-[10px]" color="blue-gray"  fullWidth>
            Sign In
          </Button>
        </div>
        </div>
      </Collapse>
    </Navbar>
  );
}