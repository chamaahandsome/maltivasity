"use client";

import { Card, CardContent } from "@/components/ui/card";
import { MALTIVASITY_CONSTANTS } from "@/constants";
import { useNavigation } from "@/hooks/navigation";
import { cn } from "@/lib/utils";
import Link from "next/link";


type MenuProps = {
  orientation: "desktop" | "mobile";
};

const Menu = ({ orientation }: MenuProps) => {
  const { section, onSetSection } = useNavigation();
  switch (orientation) {
    case "desktop":
      return (
        <Card className="bg-themeGray border-themeGray bg-clip-padding backdrop--blur__safari backdrop-filter backdrop-blur-2xl bg-opacity-60 p-1 lg:flex hidden rounded-xl">
          {/* <Card className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200"> */}
          <CardContent className="p-0 flex gap-2">
            {MALTIVASITY_CONSTANTS.landingPageMenu.map((menuItem) => (
              <Link
                href={menuItem.path}
                {...(menuItem.section && {
                  onClick: () => onSetSection(menuItem.path),
                })}
                className={cn(
                  "rounded-xl flex gap-2 py-2 px-4 items-center",
                  section == menuItem.path
                    ? "bg-themePurple border-[#4B154E]"
                    : "",
                )}
                key={menuItem.id}
              >
                {section == menuItem.path && menuItem.icon}
                {menuItem.label}
              </Link>
            ))}
          </CardContent>
        </Card>
      );

    case "mobile":
      return (
        <div className="flex flex-col mt-10">
          {MALTIVASITY_CONSTANTS.landingPageMenu.map((menuItem) => (
            <Link
              href={menuItem.path}
              {...(menuItem.section && {
                onClick: () => onSetSection(menuItem.path),
              })}
              className={cn(
                "rounded-xl flex gap-2 py-2 px-4 items-center",
                section == menuItem.path ? "bg-themePurple border-[#4B154E]" : "",
              )}
              key={menuItem.id}
            >
              {menuItem.icon}
              {menuItem.label}
            </Link>
          ))}
        </div>
      );

    default:
      return <></>;
  }
};

export default Menu;
