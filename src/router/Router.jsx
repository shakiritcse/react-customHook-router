import { createBrowserRouter } from "react-router"
import App from "../App"
import { action, loader } from "../loader"
import About from "../pages/About"
import ErrorPage from "../pages/ErrorPage"
import Home from "../pages/Home"
import Notes from "../pages/Notes"
import PostDetails from "../pages/PostDetails"
import PostList from "../pages/PostList"
import Root from "../pages/Root"
import Team from "../pages/Team"
import UserList from "../pages/UserList"
export const rootRouter=createBrowserRouter([
    {
        path:"/",
        element:<Root/>,
        errorElement:<ErrorPage/>,
        children:[
            {
                path:'/',
                index:true,
                element:<Home/>
            },
            {
                path:'/about',
                element:<About/>
            },
            {
                path:'/team',
                element:<Team/>
            },
            {
                path:'/todo',
                element:<App/>
            },
            {
                path:'postlist',
                element:<PostList/>
            },
            {
                path:'userlist',
                element:<UserList/>
            },
            {
                path:'notes',
                element:<Notes/> ,
                loader:loader,
                action:action

            },
            {
                path:"/posts/:postId",
                element:<PostDetails/>
            }
            // {
            //     path:'*',
            //     element:<ErrorPage/>
            // }
        ]
    },
    
])