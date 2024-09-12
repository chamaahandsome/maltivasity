import Image from "next/image";
import Menu from "./menu";

type Props = {};

const LandingPageNavBar = (props: Props) => {
  return (
    <div className="w-full flex justify-between sticky top-0 items-center py-5 z-50">
      <div className="w-full flex">
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
    </div>
  );
};

export default LandingPageNavBar;
