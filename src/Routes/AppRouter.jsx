import React, { useState } from 'react';
import { Switch, BrowserRouter } from 'react-router-dom'
import adminRouter from '../pages/Admin/routes';
import DashBoard from '../pages/layout/admin/DashBoard';
import MainLayout from '../pages/layout/MainLayout';
import publicRouter from '../pages/routes';
import AdminRouter from './AdminRouter';
import PublicRouter from './PublicRouter';
const AppRouter = (props) => {

console.log("hihi: ", publicRouter);
console.log("dddd: ", adminRouter);
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
                </Switch>
            </MainLayout>
        )
    }


    return (
        <React.Suspense fallback={<div>Loading...</div>}>
            <BrowserRouter>

                <AdminRouter component={AdminApp}/>
                <PublicRouter component={PublicApp} />


            </BrowserRouter>
        </React.Suspense>
    );
}

export default AppRouter;