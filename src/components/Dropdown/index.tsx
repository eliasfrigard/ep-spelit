import React from "react"
import DropdownItem from "./DropdownItem"

import {
  Collapse,
  Typography,
  ListItem,
  Menu,
  MenuHandler,
  MenuList,
} from "@material-tailwind/react"

import {
  ChevronDownIcon,
} from "@heroicons/react/24/outline"

function NavListMenu({ 
  label, 
  items 
} : {
  label: string,
  items: {
    label: string,
    href: string,
    description: string,
    icon: any,
  }[],
}) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)

  const renderNavItems = items.map((item, key) => (
      <DropdownItem
        key={key}
        title={item.label}
        description={item.description}
        href={item.href}
        icon={item.icon}
      />
    )
  )

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
          <div className="text-white lg:text-black desktopNavLink">
            <ListItem
              className={`flex items-center gap-2 py-2 text-lg tracking-wide pr-4 capitalize`}
              selected={isMenuOpen || isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((cur) => !cur)}
            >
              {label}
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
          </div>
        </MenuHandler>
        <MenuList className="hidden max-w-screen-xl rounded-xl lg:block">
          <ul className="grid grid-cols-1 gap-y-2 outline-none outline-0">
            {renderNavItems}
          </ul>
        </MenuList>
      </Menu>
      <div className="block lg:hidden bg-blue-gray-50 rounded-lg">
        <Collapse open={isMobileMenuOpen}>{renderNavItems}</Collapse>
      </div>
    </React.Fragment>
  );
}

const Dropdown = ({
  label,
  items,
} : {
  label: string,
  items: {
    label: string,
    href: string,
    description: string,
    icon: any,
  }[],
}) => {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener("resize", () => window.innerWidth >= 960 && setOpenNav(false))
  }, [])

  return (
    <>
      <div className="flex items-center justify-between text-blue-gray-900">
        <div className="hidden lg:block">
          <NavListMenu label={label} items={items} />
        </div>
        <div className="block lg:hidden">
          <NavListMenu label={label} items={items} />
        </div>
      </div>
    </>
  )
}

export default Dropdown
