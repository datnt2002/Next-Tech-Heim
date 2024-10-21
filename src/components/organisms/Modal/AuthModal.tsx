import AuthTab from "@/components/molecules/Tab/AuthTab";
import { ModalState } from "@/store/modal";
import { Modal } from "antd";
import Image from "next/image";

type ModalProps = {
  open: boolean;
  setOpen: (key: keyof ModalState, isOpen: boolean) => void;
};

const AuthModal = ({ open, setOpen }: ModalProps) => {
  return (
    <>
      <Modal
        className="max-w-[600px]"
        title={
          <div className="relative h-11">
            <Image
              src="/assets/images/logo_text.svg"
              className="mx-auto"
              fill
              alt=""
            />
          </div>
        }
        centered
        open={open}
        onCancel={() => setOpen("isAuthModalOpen", false)}
        footer={false}
      >
        <AuthTab />
      </Modal>
    </>
  );
};

export default AuthModal;
