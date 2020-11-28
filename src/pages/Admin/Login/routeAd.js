import {lazy} from "react";

export default {
        path:"/admin/login",
        exact: true,
        component: lazy(() => import("./AdminLogin"))
    };