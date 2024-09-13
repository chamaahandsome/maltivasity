import Image from "next/image";
import Menu from "./menu";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Logout } from "@/icons";
import GlassSheet from "@/components/global/glass-sheet";
import { MenuIcon } from "lucide-react";

type Props = {};

const LandingPageNavBar = (props: Props) => {
  return (
    <div className="w-full flex justify-between sticky top-0 items-center py-5 z-50">
      <div className="flex">
      <Image
              src="/MaltivasityLogo.svg"
              alt="Maltivasity Logo"
              width={34}
              height={34}
              priority
              />
      <p className="text-2xl font-bold">Maltivasity.</p>
      </div>
      <Menu orientation="desktop" />
      <div className="flex gap-2">
        <Link href="/sign-in">
          <Button
            variant="outline"
            className="bg-themeBlack rounded-2xl flex gap-2 border-themeGray hover:bg-themePurple"
          >
            <Logout />
            Login
          </Button>
        </Link>
        <GlassSheet
          triggerClass="lg:hidden"
          trigger={
            <Button
              variant="ghost"
              className="hover:bg-transparent"
            >
              <MenuIcon size={30} />
            </Button>
          }
        >
          <Menu orientation="mobile" />
        </GlassSheet>
      </div>
    </div>
  );
};

export default LandingPageNavBar;
