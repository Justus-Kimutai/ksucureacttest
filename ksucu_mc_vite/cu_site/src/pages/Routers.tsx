import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import LandingPage from "./landing";
import FinancialsPage from "./Financials";
import MinistriesPage from "./Ministries";
import Etpage from "./Et";
import NoPage from "./NoPage";
import SignUp from "../componenets/signup";
import SignIn from "../componenets/signin";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children:[
            {path: "", element: <LandingPage />},
            {path: "/Home", element: <LandingPage />},
            {path: "/financial", element: <FinancialsPage />},
            {path: "/ministries", element: <MinistriesPage />},
            {path: "/ets", element: <Etpage />},
            {path: "/signUp", element: <SignUp />},
            {path: "/signIn", element: <SignIn />},
            {path: "*", element: <NoPage />}
        ]
    }
])


