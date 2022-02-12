import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../components/common/Header";
import { logoutProcessThunk, clearField } from "../../modules/sessionAuth";
import {
  connectWebsocket,
  disconnectWebsocket,
} from "../../modules/sessionAuth";

import { useNavigate } from "react-router";
export const withRouter = (Component) => {
  const Wrapper = (props) => {
    const history = useNavigate();
    return <Component history={history} {...props} />;
  };
  return Wrapper;
};

const HeaderContainer = ({ history }) => {
  const { tempAuth, auth } = useSelector(({ sessionAuth }) => ({
    tempAuth: sessionAuth.tempAuth,
    auth: sessionAuth.auth,
  }));
  const dispatch = useDispatch();

  const onLogout = useCallback(() => {
    dispatch(logoutProcessThunk());
  }, [dispatch]);

  const onRecord = useCallback(() => {
    alert("onRecord");
  }, []);

  const onLogin = useCallback(() => {
    dispatch(clearField({ form: "login" }));
    history.push("/login");
  }, [dispatch, history]);

  useEffect(() => {
    dispatch(connectWebsocket());
    return () => {
      dispatch(disconnectWebsocket());
    };
  }, [dispatch]);

  return (
    <Header
      onRecord={onRecord}
      onLogout={onLogout}
      onLogin={onLogin}
      tempAuth={tempAuth}
      auth={auth}
    />
  );
};

export default withRouter(HeaderContainer);
