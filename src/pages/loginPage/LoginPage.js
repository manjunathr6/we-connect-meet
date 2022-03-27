import React from "react";
import iconChoose from "../../assets/choose.svg";
import LeftSideNav from "../../components/left-side-nav/LeftSideNav";
import Input from "../../components/formElements/Input";
import Paragraph from "../../components/text/Paragraph";
import Button from "../../components/buttons/Button";

function LoginPage() {
  const data = [{ icon: `${iconChoose}`, name: "Choose" }];
  return (
    <div className="md-d-flex">
      <LeftSideNav data={data} login={true} />
      <div className="login-block flex-1 py-8 px-6">
        <div className="page-name">
          <Paragraph text="Sign In" />
        </div>
        <div className="form-container">
          <form className="md-ml--6">
            <Input
              id="email"
              type="email"
              label="Email address"
              placeholder="Enter your email"
            />
            <Input
              id="password"
              type="password"
              label="Password"
              placeholder="Enter your password"
            />
            <div className="text-center mt-6">
              <Button type="submit" name="Login" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
