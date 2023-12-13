
import {
    createBrowserRouter,

} from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import AboutMe from "../Pages/About Me/AboutMe";

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
            }
            
        ]
    }
])


export default router;