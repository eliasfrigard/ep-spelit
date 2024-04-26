import React from "react"
import DropdownItem from "./DropdownItem"

import {
  Collapse,
  ListItem,
  Menu,
  MenuHandler,
  MenuList,
} from "@material-tailwind/react"

import {
  ChevronDownIcon,
} from "@heroicons/react/24/outline"

const Dropdown = ({
  href,
  label,
  items,
  isScrolled,
  currentRoute,
  className,
} : {
  href: string,
  label: string,
  isScrolled?: boolean,
  currentRoute: string,
  items: {
    label: string,
    href: string,
    description: string,
    icon: any,
    type: string,
  }[],
  className?: string,
}) => {
  const [openNav, setOpenNav] = React.useState(false)
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)

  const activeLinkStyling = (path: string) => {
    if (path === '/') return

    const style = 'font-bold'

    if (currentRoute?.startsWith(path)) return style
  }

  const renderNavItems = items.map((item, key) => (
      <DropdownItem
        baseUrl={href}
        key={key}
        title={item.label}
        description={item.description}
        href={item.href}
        icon={item.icon}
        type={item.type}
      />
    )
  )

  React.useEffect(() => {
    window.addEventListener("resize", () => window.innerWidth >= 960 && setOpenNav(false))
  }, [])

  return (
    <div className="w-full xl:w-auto xl:max-w-[140px] flex items-center justify-between text-blue-gray-900">
      <div className="w-full xl:w-auto">
        <React.Fragment>
          <Menu
            open={isMenuOpen}
            handler={setIsMenuOpen}
            offset={{ mainAxis: 20 }}
            placement="bottom"
            allowHover={true}
          >
            <MenuHandler>
              <div className={`text-white ${isScrolled ? 'lg:text-white' : 'lg:text-black'} duration-400 ease-linear ${activeLinkStyling(href)}`}>
                {/* @ts-ignore */}
                <ListItem
                  className={`flex hover:bg-[#D2D6D9] items-center text-center gap-1 p-3 xl:text-sm tracking-wide ease-linear font-medium xl:font-normal ${className}`}
                  selected={isMenuOpen || isMobileMenuOpen}
                  onClick={() => setIsMobileMenuOpen((cur) => !cur)}
                >
                  {label}
                  <ChevronDownIcon
                    strokeWidth={2.5}
                    className={`hidden h-2 w-2 transition-transform lg:block ease-linear${
                      isMenuOpen ? "rotate-180" : ""
                    }`}
                  />
                  <ChevronDownIcon
                    strokeWidth={2.5}
                    className={`block h-2 w-2 transition-transform lg:hidden ease-linear ${
                      isMobileMenuOpen ? "rotate-180" : ""
                    }`}
                  />
                </ListItem>
              </div>
            </MenuHandler>
            {/* @ts-ignore */}
            <MenuList className="hidden max-w-screen-xl rounded-xl lg:block">
              <ul className="grid grid-cols-1 gap-y-2 outline-none outline-0">
                {renderNavItems}
              </ul>
            </MenuList>
          </Menu>
          <div className={`block lg:hidden bg-[#F2F2F2] rounded-lg ${isMobileMenuOpen && 'px-1 py-2 mt-2'}`}>
            <Collapse open={isMobileMenuOpen}>{renderNavItems}</Collapse>
          </div>
        </React.Fragment>
      </div>
    </div>
  )
}

export default Dropdown

