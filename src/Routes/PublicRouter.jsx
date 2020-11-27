import React from 'react';
import { Route, Redirect } from 'react-router-dom';

function AdminRouter({component: Component, ...rest}){

    console.log("allllo: ", Component);
    return (
        <Route
        {...rest}
        render={props => <Component {...props}/>}
        />  // chỗ này khi có auth sẽ có check token để ridirect sau

    )
}

export default AdminRouter;