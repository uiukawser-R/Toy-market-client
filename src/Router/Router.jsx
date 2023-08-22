import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../LayOut/Main";
import CategoryToy from "../Pages/Home/CategoryToy";
import ToyDetails from "../Pages/Home/ToyDetails";
import Login from "../Pages/Login/Login";
import LoginLayOut from "../LayOut/LoginLayOut";
import ToysLayOut from "../LayOut/ToysLayOut";
import SignUp from "../Pages/SignUp/SignUp";
import PrivateRoute from "./Private/PrivateRoute";
import AddToy from "../Pages/AddToy/AddToy";
import MyToy from "../Pages/MyToy/MyToy";
import MyToyUpdate from "../Pages/MyToy/MyToyUpdate";
import AllToy from "../Pages/AllToy/AllToy";
import Blog from "../Pages/Blog/Blog";

const router = createBrowserRouter([
    {
        path:'/',
        element:<LoginLayOut></LoginLayOut>,
        children:[
            {
                path:'/',
                element:<Navigate to="/category/1"></Navigate>
            },
            {
                path:'login',
                element:<Login></Login>
            },
            {
                path:'signup',
                element:<SignUp></SignUp>
            },
            {
                path:'addtoy',
                element:<PrivateRoute><AddToy></AddToy></PrivateRoute>
            },
            {
                path:'mytoy',
                element:<PrivateRoute><MyToy></MyToy></PrivateRoute>,
            },
            {
                path:'update/:id',
                element:<MyToyUpdate></MyToyUpdate>,
                loader: ({params})=>fetch(`https://toy-market-server-neon.vercel.app/toys/${params.id}`)
            },
            {
                path:'allToy',
                element:<PrivateRoute><AllToy></AllToy></PrivateRoute>,
                loader: ()=> fetch ('https://toy-market-server-neon.vercel.app/totalToys')
            },
            {
                path:'blog',
                element:<Blog></Blog>
            }
            
        ]
    },



    {
      path: 'category',
      element: <Main></Main>,
      children:[
        
        // {
        //     path:'/category/:id',
        //     element:<CategoryToy></CategoryToy>,
        //     loader: ({params})=>fetch(`https://toy-market-server-neon.vercel.app/categories/${params.id}`)
        // },
        {
            path:':id',
            element:<CategoryToy></CategoryToy>,
            loader: ({params})=>fetch(`https://toy-market-server-neon.vercel.app/categories/${params.id}`)
        },
      ]
    },
    {
        path:'toys',
        element:<ToysLayOut></ToysLayOut>,
        children:[
            {
                path:':id',
                element:<PrivateRoute><ToyDetails></ToyDetails></PrivateRoute>,
                loader:({params})=>fetch(`https://toy-market-server-neon.vercel.app/toys/${params.id}`)
            }
        ]
    }
  ]);


  export default router;