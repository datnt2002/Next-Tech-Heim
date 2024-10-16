import Image from "next/image";
import { Button } from "antd";

import ActionBar from "@/components/molecules/ActionBar/ActionBar";

const Header = () => {
  return (
    <>
      <header className=" flex justify-between items-center py-2 md:py-0 px-1 md:px-6 lg:px-28 md:h-[100px] h-10">
        <div className="relative hidden md:block md:h-full md:w-10">
          <Image
            src="/assets/images/logo.svg"
            fill
            alt="Logo"
            className="md:py-5"
          />
        </div>
        <Button
          className="relative block md:hidden border-none w-full h-8"
          icon={
            <Image
              src="/assets/icons/essential/menu_icon.svg"
              fill
              alt="menu"
            />
          }
        />
        <h1 className="block md:hidden text-primary-400">Tech Heim</h1>
        <ActionBar />
      </header>
      <div className="gradient hidden md:block" />
    </>
  );
};

export default Header;
