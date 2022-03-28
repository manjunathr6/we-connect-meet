import React, { useState } from "react";
import { Link } from "react-router-dom";
import iconChoose from "../../assets/choose.svg";
import LeftSideNav from "../../components/left-side-nav/LeftSideNav";
import Input from "../../components/formElements/Input";
import Paragraph from "../../components/text/Paragraph";
import Image from "../../components/backgrounds/Image";

import loginPageBgImg from "../../assets/bg-image.png";

function LoginPage(props) {
  console.log("login pagess", props);
  const data = [{ icon: `${iconChoose}`, name: "Choose" }];
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (eve) => {
    eve.preventDefault();
    console.log("input values..", password, email);
    if (email !== "" && password !== "") {
      props.loginCheck(true);
    }
  };
  return (
    <div className="md-d-flex login-page postion-relative">
      <LeftSideNav data={data} login={true} />
      <Image
        src={loginPageBgImg}
        class="bg-img-login position-absolute right-0"
      />
      <div className="login-block flex-1 py-8 px-6">
        <div className="page-name sm-mb-4">
          <Paragraph text="Sign In" />
        </div>
        <div className="form-container">
          <form className="md-ml--6">
            <Input
              id="email"
              type="email"
              label="Email address"
              placeholder="Enter your email"
              value={email}
              setValue={setEmail}
              onChange={(eve) => setEmail(eve.target.value)}
            />
            <Input
              id="password"
              type="password"
              label="Password"
              value={password}
              setValue={setPassword}
              placeholder="Enter your password"
              onChange={(eve) => setPassword(eve.target.value)}
            />
            <div className="text-center mt-6">
              <div className="button">
                <Link
                  to={`${props.valid ? "/landingpage" : "/"}`}
                  type="submit"
                  name="Login"
                  onClick={handleSubmit}
                >
                  Login
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
