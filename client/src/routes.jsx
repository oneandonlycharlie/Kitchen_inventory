import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./compoments/home";
import Category from "./compoments/category";
import Reciepe from "./compoments/reciepe";
import Ingredient from "./compoments/ingredient";

const router = createBrowserRouter([
    {
        path:"/",
        element: <App />,
        children: [
            {index:true, element:<Home />},
            {path:"/cuisines", element: <Category type={"cuisine"} />},
            {path:"/cuisine/:keyword", element: <Category type={"reciepe"}/>},
            {path:"/reciepes", element: <Category type={"reciepe"}/>},
            {path:"/reciepe/:title", element: <Reciepe/>},
            {path:"/ingredients", element: <Category type={"ingredient"}/>},
            {path:"/ingredient/:keyword", element: <Ingredient/>}
        ]
    }
])

export default router