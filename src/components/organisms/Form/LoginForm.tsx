import { loginService } from "@/services/auth.service";
import useModalStore from "@/store/modal";
import useUserStore from "@/store/user";
import type { FormProps } from "antd";
import { Button, Checkbox, Form, Input } from "antd";

type FieldType = {
  principle: string;
  password: string;
  remember?: string;
};

const LoginForm = () => {
  const [form] = Form.useForm();
  const { login } = useUserStore();
  const { setOpen } = useModalStore();
  const onFinish: FormProps<FieldType>["onFinish"] = async (values) => {
    const response = await loginService(values);
    login(response);
    setOpen("isAuthModalOpen", false);
  };

  return (
    <>
      <h2 className="mt-4 text-center mb-5">Log in to Tech Heim</h2>
      <Form form={form} onFinish={onFinish}>
        <Form.Item<FieldType>
          name="principle"
          rules={[
            { required: true, message: "Please input your email or username!" },
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
            placeholder="Please input your email or username!"
          />
        </Form.Item>

        <Form.Item<FieldType>
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
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

        <div className="flex justify-between h-6 mb-2">
          <Form.Item<FieldType> name="remember" valuePropName="checked">
            <Checkbox className="text-gray-717171">Keep me logged in</Checkbox>
          </Form.Item>
          {/* <Link className="text-primary" to="/">
            Forgot password ?
          </Link> */}
        </div>
        <Form.Item>
          <Button
            size="large"
            className="w-full"
            type="primary"
            htmlType="submit"
          >
            Log in
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default LoginForm;
