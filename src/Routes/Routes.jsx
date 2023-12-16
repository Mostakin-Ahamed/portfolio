
import {
    createBrowserRouter,

} from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import AboutMe from "../Pages/About Me/AboutMe";
import Skills from "../Pages/Skills/Skills";
import ContactMe from "../Pages/ContactMe/ContactMe";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/home',
                element:<Home></Home>
            },
            {
                path: '/aboutMe',
                element:<AboutMe></AboutMe>
            },
            {
                path: '/skills',
                element:<Skills></Skills>
            },
            {
                path: '/contactMe',
                element:<ContactMe></ContactMe>
            }

            
        ]
    }
])


export default router;