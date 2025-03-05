import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./compoments/home";
import CategoriesAll from "./compoments/categories";

const router = createBrowserRouter([
    {
        path:"/",
        element: <App />,
        children: [
            {index:true, element:<Home />},
            {path:"/cuisines", element: <CategoriesAll category={"cusine"}/>},
            {path:"/cuisines/:keyword", element: <CategoriesAll category={"cusine"}/>},
            {path:"/receipes", element: <CategoriesAll category={"receipe"}/>},
            {path:"/receipes/:keyword", element: <CategoriesAll category={"receipe"}/>},
            {path:"/ingredients", element: <CategoriesAll category={"ingredient"}/>},
            {path:"/ingredients/:keyword", element: <CategoriesAll category={"ingredient"}/>}
        ]
    }
])

export default router