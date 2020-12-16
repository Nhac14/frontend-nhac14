import {lazy} from "react";

export default {
        path: "/album/:idAlbum",
        exact: true,
        component: lazy(() => import("./PlayerAlbumPage"))
};