import useModalStore from "@/store/modal";
import useUserStore from "@/store/user";
import { Button, Checkbox, Form, FormProps, Input } from "antd";
import React from "react";
import SuccessModal from "../Modal/SuccessModal";

type FieldType = {
  name: string;
  email: string;
  number: number;
  password: string;
  isAgree: boolean;
};

const RegisterForm = () => {
  const [form] = Form.useForm();
  const { register } = useUserStore();
  const { setOpen, isSuccessModalOpen } = useModalStore();
  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    if (values?.isAgree) {
      register({
        email: values?.email,
        name: values?.name,
        number: values?.number,
        password: values?.password,
      });
    }
  };
  return (
    <>
      <h2 className="mt-4 text-center mb-5">Create your account</h2>
      <Form form={form} onFinish={onFinish}>
        <Form.Item<FieldType>
          name="name"
          rules={[
            { required: true, message: "Please input your fullName!" },
            {
              max: 50,
              message: "Please input full name less than 50 characters",
            },
            {
              min: 3,
              message: "Please input full name more than 3 characters",
            },
          ]}
        >
          <Input
            size="large"
            prefix={
              <img
                src="/assets/icons/user/user_icon.svg"
                className="h-4 mr-2"
              />
            }
            placeholder="Name"
          />
        </Form.Item>
        <Form.Item<FieldType>
          name="email"
          rules={[
            { required: true, message: "Please input your email!" },
            {
              min: 3,
              message: "Please input email more than 3 characters",
            },
            {
              type: "email",
              message: "Please input valid email",
            },
          ]}
        >
          <Input
            size="large"
            prefix={
              <img
                src="/assets/icons/email/email_icon.svg"
                className="h-4 mr-2"
              />
            }
            placeholder="E-mail"
          />
        </Form.Item>
        <Form.Item<FieldType>
          name="number"
          rules={[
            { required: true, message: "Please input your fullName!" },
            {
              max: 20,
              message: "Please input full name less than 20 characters",
            },
            {
              min: 3,
              message: "Please input full name more than 3 characters",
            },
          ]}
        >
          <Input
            size="large"
            prefix={
              <img
                src="/assets/icons/user/user_icon.svg"
                className="h-4 mr-2"
              />
            }
            placeholder="Phone number"
          />
        </Form.Item>
        <Form.Item<FieldType>
          name="password"
          rules={[
            { required: true, message: "Please input your password!" },
            {
              min: 6,
              message: "Please input password more than 3 characters",
            },
          ]}
        >
          <Input.Password
            iconRender={(visible) => {
              return visible ? (
                <img src="/assets/icons/security/eye_visible.svg" />
              ) : (
                <img src="/assets/icons/security/eye_unvisible_icon.svg" />
              );
            }}
            size="large"
            prefix={
              <img
                src="/assets/icons/security/password_icon.svg"
                className="h-4 mr-2"
              />
            }
            placeholder="Password"
          />
        </Form.Item>

        <Form.Item<FieldType>
          name="isAgree"
          valuePropName="checked"
          rules={[
            { required: true, message: "Please agree our Terms & Conditions" },
          ]}
        >
          <Checkbox className="text-gray-717171">
            I agree to all
            <span className="text-primary ml-1">Terms & Conditions</span>
          </Checkbox>
        </Form.Item>

        <Form.Item>
          <Button
            size="large"
            className="w-full"
            type="primary"
            htmlType="submit"
          >
            Create Account
          </Button>
        </Form.Item>
      </Form>
      {isSuccessModalOpen && (
        <SuccessModal
          title="Well done"
          message="Congratulation your account has been successfully created"
          isOpen={isSuccessModalOpen}
          setIsOpen={setOpen}
        />
      )}
    </>
  );
};

export default RegisterForm;
