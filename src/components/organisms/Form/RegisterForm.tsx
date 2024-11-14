"use client";

import useModalStore from "@/store/modal";
import useUserStore from "@/store/user";
import { Button, Checkbox, Form, FormProps, Input } from "antd";
import React from "react";
import { registerService } from "@/services/auth.service";
import dynamic from "next/dynamic";

// const DynamicSuccessModal = dynamic(() => import("../Modal/SuccessModal"), {
//   ssr: false,
// });

type FieldType = {
  username: string;
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
  const onFinish: FormProps<FieldType>["onFinish"] = async (values) => {
    if (values?.isAgree) {
      const response = await registerService({
        email: values?.email,
        name: values?.name,
        username: values?.username,
        number: values?.number,
        password: values?.password,
      });

      if (response.statusCode === 201) {
        register(response);
        setOpen("isAuthModalOpen", false);
      }
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
          name="username"
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
            placeholder="Username"
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
        <DynamicSuccessModal
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
