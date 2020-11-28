import {lazy} from "react";

export default [
    {
        path: "/admin/albums",
        exact: true,
        component: lazy(() => import("./ListAlbum"))
    },
    {
        path: "/admin/albums/new",
        exact: true,
        component: lazy(() => import("./NewAlbum"))
    }
]