import Home from "./pages/Home/Home";
import SchoolRegistration from "./pages/SchoolRegistration/SchoolRegistration";
import { IRoute } from "./types/routeInterface";
import { HOME_ROUTE, SCHOOL_REGISTRATION_ROUTE } from "./utils/consts";


export const router: IRoute[] = [
    {
        path: HOME_ROUTE,
        Component: Home
    },
    {
        path: SCHOOL_REGISTRATION_ROUTE,
        Component: SchoolRegistration
    },
];