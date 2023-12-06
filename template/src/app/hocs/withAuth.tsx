import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router";
import Cookie from "../utilities/Cookie.ts";
import UnauthorizedPage from "../pages/UnauthorizedPage.tsx";

const withAuth = (Component: React.FunctionComponent) => {
    return () => {
        const [isAuth, setIsAuth] = useState<boolean>(true);
        const nav = useNavigate();
        useEffect(() => {
            const token = Cookie.getCookie("YOUR_TOKEN_CREDENTIALS" || '');
            setIsAuth(Boolean(token));
        }, [nav]);

        return isAuth?<Component/>:<UnauthorizedPage/>;
    };
};

export default withAuth;