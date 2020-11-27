import {lazy} from "react";

export default [
    {
        path: "/admin/albums" | "/admin",
        exact: true,
        component: lazy(() => import("./ListAlbum"))
        // component: import("./ListAlbum")
    },
    {
        path: "/admin/albums/new",
        exact: true,
        component: lazy(() => import("./NewAlbum"))
        // component: import("./NewAlbum")
    }
]