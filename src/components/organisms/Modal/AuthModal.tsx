import AuthTab from "@/components/molecules/Tab/AuthTab";
import { ModalState } from "@/store/modal";
import { Modal } from "antd";

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
          <img
            src="/assets/images/logo_text.svg"
            className="mx-auto block md:hidden"
          />
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
