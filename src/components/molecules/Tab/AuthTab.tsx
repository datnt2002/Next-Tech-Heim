import { Tabs, TabsProps } from "antd";
import RegisterForm from "@/components/organisms/Form/RegisterForm";

const items: TabsProps["items"] = [
  //   {
  //     key: "1",
  //     label: "Log in",
  //     children: (
  //       <>
  //         <LoginForm />
  //         <AuthFormFooter
  //           href={"/"}
  //           hrefLabel="sign up"
  //           message="Don’t have an account ?"
  //           title="Or Log in With"
  //         />
  //       </>
  //     ),
  //   },
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
