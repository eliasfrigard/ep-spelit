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
} : {
  baseUrl: string,
  title: string,
  description: string,
  href: string,
  icon: any,
}) => {
  return (
    <Link href={baseUrl + href}>
      {/* @ts-ignore */}
      <MenuItem className="flex items-center gap-3 rounded-lg">
        <div className="flex items-center justify-center rounded-lg !bg-blue-gray-50 p-2 ">
          {" "}
          {React.createElement(icon, {
            strokeWidth: 2,
            className: "h-6 text-gray-900 w-6",
          })}
        </div>
        <div>
          {/* @ts-ignore */}
          <Typography
            variant="h6"
            color="blue-gray"
            className="flex items-center text-sm font-bold"
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
