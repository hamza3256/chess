import React from "react";
import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import { Helmet } from "react-helmet-async";

import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import MainPage from "./pages/MainPage";

const ErrorPageDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 200px;
  font-size: 50px;
`;

const App = () => {
  return (
    <>
      <Helmet>
        <title>Hamza's Chess Club</title>
      </Helmet>
      <Routes>
        <Route component={MainPage} path='/' exact />
        <Route component={LoginPage} path='/login' exact />
        <Route component={RegisterPage} path='/register' exact />
        <Route
          render={({ location }) => (
            <ErrorPageDiv>
              <h1>404 Error</h1>
            </ErrorPageDiv>
          )}
        />
      </Routes>
    </>
  );
};

export default App;
