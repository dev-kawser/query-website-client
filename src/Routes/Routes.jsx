import { createBrowserRouter } from "react-router-dom";
import Root from "../MainLayout/Root";
import ErrorPage from "../Pages/ErrorPage/ErrorPage"
import Home from "../Pages/Home/Home";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import ProtectedRoute from "./ProtectedRoute";
import AddQueries from "../Pages/AddQueries/AddQueries";
import AllQueries from "../Pages/AllQueries/AllQueries";
import MyQueries from "../Pages/MyQueries/MyQueries";
import QueryDetails from "../Pages/QueryDetails/QueryDetails";
import UpdateQuery from "../Pages/UpdateQuery/UpdateQuery";
import MyRecommendation from "../Pages/MyRecommendation/MyRecommendation";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },

            {
                path: "/register",
                element: <Register></Register>
            },

            {
                path: "/login",
                element: <Login></Login>
            },

            {
                path: "/my-queries",
                element: <ProtectedRoute>
                    <MyQueries></MyQueries>
                </ProtectedRoute>,
            },

            {
                path: "/my-recommendations",
                element: <MyRecommendation></MyRecommendation>,
            },

            {
                path: "/add-queries",
                element: <ProtectedRoute>
                    <AddQueries></AddQueries>
                </ProtectedRoute>,
            },

            {
                path: "/all-queries",
                element: <AllQueries></AllQueries>,
                loader: () => fetch('http://localhost:5000/recent-queries')
            },

            {
                path: "/query/:id",
                element: <ProtectedRoute>
                    <QueryDetails></QueryDetails>
                </ProtectedRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/recent-queries/${params.id}`)
            },

            {
                path: "/UpdateQuery/:id",
                element: <ProtectedRoute>
                    <UpdateQuery></UpdateQuery>
                </ProtectedRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/recent-queries/${params.id}`)
            },
        ]
    },
]);

export default router;