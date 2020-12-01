import React, { useEffect, useState, lazy } from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import { Spin, Space } from 'antd';
import adminRouter from '../pages/Admin/routes';
import DashBoard from '../pages/layout/admin/DashBoard';
import MainLayout from '../pages/layout/MainLayout';
import publicRouter from '../pages/routes';
import AdminRouter from './AdminRouter';
import PublicRouter from './PublicRouter';

const AppRouter = (props) => {


    const [isLoginedAdmin, setIsAdminLogined] = useState(true);
    console.log(publicRouter);

    useEffect(() => {

    }, [])


    const AdminApp = () => {
        return (
            <DashBoard>
                <Switch>
                    {
                        adminRouter.map(router => {
                            const { exact, path, component } = router;
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
            <MainLayout>
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