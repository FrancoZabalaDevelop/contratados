import { createBrowserRouter } from "react-router-dom";
import LayoutPublic from "../layout/LayoutPublic";
import Landing from "../pages/Landing";
import TerminosCondiciones from "../pages/TerminosCondiciones";

export const router=createBrowserRouter(
    [
        {
            path: "/",
            element: <LayoutPublic />,
            children: [
                {
                    index: true,
                    element: <Landing/>,
                },
                {
                    path: "/Terminos",
                    element: <TerminosCondiciones/>,
                },
            ],
        },
    ]
)