import ErrorModal from "@/components/organisms/Modal/ErrorModal";
import { cn } from "@/utils/cn";
import { Button } from "antd";
import Image from "next/image";
import React from "react";

type Props = {};

const ActionBar = (props: Props) => {
  //   const token = localStorage.getItem("token");
  return (
    <>
      <div className="flex items-center gap-2 my-5 py-2">
        <>
          <Button
            className="md:block hidden self-center"
            type="primary"
            //   onClick={() => handleToggleModalAuth(true)}
          >
            Login / Sign Up
          </Button>
          <Button
            type="text"
            className="text-primary font-inter flex items-center md:hidden"
            icon={<img src="/assets/icons/arrow/login_icon.svg" alt="" />}
          >
            Login
          </Button>
        </>
        {/* {token ? ( */}
        <>{/* <ProfileMenu /> */}</>
        {/* ) : ( */}
        {/* )} */}
      </div>
      {/* 
      {authModal && (
        <AuthModal open={authModal} setOpen={handleToggleModalAuth} />
      )} */}

      {/* {searchModal && (
        <SearchModal isOpen={searchModal} setIsOpen={handleToggleModalSearch} />
      )} */}

      {/* {errorModal && (
        <ErrorModal
          title="Oops"
          message="Unfortunately, there was a problem during creating your account. try again later."
          isOpen={true}
          setIsOpen={handleToggleModalError}
        />
      )} */}
    </>
  );
};

export default ActionBar;
