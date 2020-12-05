import {lazy} from "react";

export default {
        path: "/video/:idVideo",
        exact: true,
        component: lazy(() => import("./PlayerVideoPage"))
};