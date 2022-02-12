import React from "react";
import { Helmet } from "react-helmet-async";

import HeaderContainer from "../containers/common/HeaderContainer";
import RegisterContainer from "../containers/login/RegisterContainer";
import FooterContainer from "../containers/common/FooterContainer";

const RegisterPage = () => {
  return (
    <>
      <Helmet>
        <title>Sign Up • Hamza's Chess Club</title>
      </Helmet>
      <HeaderContainer />
      <RegisterContainer />
      <FooterContainer />
    </>
  );
};

export default RegisterPage;
