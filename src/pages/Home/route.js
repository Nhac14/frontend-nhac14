import {lazy} from "react";

export default {
        path: "/" | "/home",
        exact: true,
        component: lazy(() => import("./Home"))
    };