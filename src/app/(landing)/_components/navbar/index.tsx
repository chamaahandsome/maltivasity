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
    // <div className="w-full flex justify-between sticky top-0 items-center py-2 z-50 bg-transparent">
    <div className="w-full flex justify-between sticky top-0 items-center py-2 z-50 bg-black bg-opacity-30">

      <div className="flex gap-2">
      <Image
              src="/MaltivasityHLogo.png"
              alt="Maltivasity Logo"
              width={200}
              height={50}
              priority
              />
      {/* <p className="text-2xl font-bold text-black sm:text-white">Maltivasity.</p> */}
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


