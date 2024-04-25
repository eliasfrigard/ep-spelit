import React from "react"
import Link from "next/link";

import {
  Typography,
  MenuItem,
} from "@material-tailwind/react";

const DropdownItem = ({
  title,
  description,
  href,
  icon,
  baseUrl,
  type,
} : {
  baseUrl: string,
  title: string,
  description: string,
  href: string,
  icon: any,
  type?: string,
}) => {
  console.log('🚀 || type:', type)
  if (type === 'link') {
    return (
      <a href={href}>
        {/* @ts-ignore */}
        <MenuItem className="flex items-center gap-3 rounded-lg hover:bg-[#D2D6D9] dropdownItem">
          <div className="flex items-center justify-center rounded-lg bg-[#D2D6D9] p-2 dropDownIconDiv">
            {" "}
            {React.createElement(icon, {
              strokeWidth: 2,
              className: "h-6 text-[#283740] w-6 dropdownIcon",
            })}
          </div>
          <div>
            {/* @ts-ignore */}
            <Typography
              variant="h6"
              color="blue-gray"
              className="flex items-center text-sm font-bold dropdownLabel"
            >
              {title}
            </Typography>
            {/* @ts-ignore */}
            <Typography
              variant="paragraph"
              className="text-xs !font-medium text-blue-gray-500"
            >
              {description}
            </Typography>
          </div>
        </MenuItem>
      </a>
    )
  }

  return (
    <Link href={baseUrl + href}>
      {/* @ts-ignore */}
      <MenuItem className="flex items-center gap-3 rounded-lg hover:bg-[#D2D6D9] dropdownItem">
        <div className="flex items-center justify-center rounded-lg bg-[#D2D6D9] p-2 dropDownIconDiv">
          {" "}
          {React.createElement(icon, {
            strokeWidth: 2,
            className: "h-6 text-[#283740] w-6 dropdownIcon",
          })}
        </div>
        <div>
          {/* @ts-ignore */}
          <Typography
            variant="h6"
            color="blue-gray"
            className="flex items-center text-sm font-bold dropdownLabel"
          >
            {title}
          </Typography>
          {/* @ts-ignore */}
          <Typography
            variant="paragraph"
            className="text-xs !font-medium text-blue-gray-500"
          >
            {description}
          </Typography>
        </div>
      </MenuItem>
    </Link>
  )
}

export default DropdownItem
