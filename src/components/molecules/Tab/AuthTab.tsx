import { Tabs, TabsProps } from "antd";
import RegisterForm from "@/components/organisms/Form/RegisterForm";
import LoginForm from "@/components/organisms/Form/LoginForm";

const items: TabsProps["items"] = [
  {
    key: "1",
    label: "Log in",
    children: <LoginForm />,
  },
  {
    key: "2",
    label: "Create Account",
    children: <RegisterForm />,
  },
];

const AuthTab = () => {
  return <Tabs centered defaultActiveKey="1" items={items} />;
};

export default AuthTab;
