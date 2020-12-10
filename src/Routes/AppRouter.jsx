import React, { useEffect, useState, lazy } from 'react';
import { Switch, BrowserRouter, Route} from 'react-router-dom';
import {Redirect, useHistory} from 'react-router';
import {useCookies} from 'react-cookie';
import { Spin, Space } from 'antd';
import adminRouter from '../pages/Admin/routes';
import DashBoard from '../pages/layout/admin/DashBoard';
import MainLayout from '../pages/layout/MainLayout';
import publicRouter from '../pages/routes';
import AdminRouter from './AdminRouter';
import PublicRouter from './PublicRouter';

const AppRouter = (props) => {


    console.log(publicRouter);
    const history = useHistory();
    const [isLoginedAdmin, setIsAdminLogined] = useState(false);
    const [userToken, setUserToken] = useState(null);
    const [cookies, setCookie, removeCookie] = useCookies(["userToken", "user"]);
    const [user, setUser] = useState("gggg");
    useEffect(() => {
       getAuth();
    }, [cookies]);

    const getAuth = async () => {
        let token = await cookies.userToken;
        let userCookie = await cookies.user;
        console.log("token: ", token);
        console.log("user: ", user);
        if(userCookie)
            setUser({name: userCookie.name, avatar: userCookie.avatar});


    }

    const onLogout = (e) => {
        if(e){
            removeCookie("userToken");
            removeCookie("user");
            setUser(null);
        }
      
    }



    const AdminApp = () => {
        return (
            <DashBoard>
                <Switch>
                    {
                        adminRouter.map(router => {
                            const { exact, path, component } = router;

                            if(user) 
                            return (
                                <AdminRouter exact={exact} path={path} component={component} />
                            )
                        })
                    }
                </Switch>
            </DashBoard>

        )
    }

    const PublicApp = () => {
        return (
            <MainLayout user={user} logout={onLogout}>
                <Switch>
                    {
                        publicRouter.map(router => {
                            const { exact, path, component } = router;
                            return (
                                <PublicRouter exact={exact} path={path} component={component} />
                            )
                        })
                    }
                    
                    {
                        isLoginedAdmin ? '' :  <Route exact path="/admin/login" component={lazy(() => import('../pages/Admin/Login/AdminLogin'))} />
                    }
                </Switch>
            </MainLayout>
        )
    }


    const Loading = () => {
        return (
            <Space size="middle" style={{ position: 'absolute', top: '48%', left: '48%' }}>
                <Spin size="large" />
            </Space>
        )
    }

    return (
        <React.Suspense fallback={<div style={{ position: 'relative' }}><Loading /></div>}>
            <BrowserRouter>
                {
                    isLoginedAdmin
                         ? <AdminRouter component={AdminApp} />
                        : <PublicRouter component={PublicApp} />
                }


            </BrowserRouter>
        </React.Suspense>
    );
}

export default AppRouter;