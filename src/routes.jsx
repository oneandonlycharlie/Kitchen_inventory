import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./compoments/home";
import Category from "./compoments/categories";
import Reciepe from "./compoments/reciepe";

const router = createBrowserRouter([
    {
        path:"/",
        element: <App />,
        children: [
            {index:true, element:<Home />},
            {path:"/cuisines", element: <Category type={"cuisine"} />},
            {path:"/cuisine/:keyword", element: <Category type={"cuisine"}/>},
            {path:"/reciepes", element: <Category type={"reciepe"}/>},
            {path:"/reciepe/:title", element: <Reciepe/>},
            {path:"/ingredients", element: <Category type={"ingredient"}/>},
            {path:"/ingredient/:keyword", element: <Category type={"ingredient"}/>}
        ]
    }
])

export default router