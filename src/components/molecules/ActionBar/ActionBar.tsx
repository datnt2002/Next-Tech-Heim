"use client";
import AuthModal from "@/components/organisms/Modal/AuthModal";
import ErrorModal from "@/components/organisms/Modal/ErrorModal";
import useModalStore from "@/store/modal";
import { Button } from "antd";
import React from "react";

const ActionBar = () => {
  //   const token = localStorage.getItem("token");
  const { isAuthModalOpen, setOpen } = useModalStore((state) => state);
  return (
    <>
      <div className="flex items-center gap-2 my-5 py-2">
        <Button
          className="md:block hidden self-center"
          type="primary"
          onClick={() => setOpen("isAuthModalOpen", true)}
        >
          Login / Sign Up
        </Button>

        {/* {token ? ( */}
        <>{/* <ProfileMenu /> */}</>
        {/* ) : ( */}
        {/* )} */}
      </div>
      {isAuthModalOpen && (
        <AuthModal open={isAuthModalOpen} setOpen={setOpen} />
      )}

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
