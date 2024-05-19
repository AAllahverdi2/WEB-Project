import Add from "./Pages/Admin/Add";
import AddNews from "./Pages/Admin/AddNews";
import Admin from "./Pages/Admin/Admin";
import AdminDetail from "./Pages/Admin/AdminDetail";
import AdminOrder from "./Pages/Admin/AdminOrder";
import AdminRoot from "./Pages/Admin/AdminRoot";
import EditPage from "./Pages/Admin/EditPage";
import ModaAdd from "./Pages/Admin/ModaAdd";
import XeberAdmin from "./Pages/Admin/XeberAdmin";
import Azerbaijan from "./Pages/Main/Azerbaijan";
import Basket from "./Pages/Main/Basket";
import Blog from "./Pages/Main/Blog";
import Detail from "./Pages/Main/Detail";
import Elaqe from "./Pages/Main/Elaqe";
import ElaqeMail from "./Pages/Main/ElaqeMail";
import Elektronika from "./Pages/Main/Elektronika";
import ErrorPage from "./Pages/Main/ErrorPage";
import Giris from "./Pages/Main/Giris";
import Home from "./Pages/Main/Home";
import Ingilis from "./Pages/Main/Ingilis";
import Lego from "./Pages/Main/Lego";
import MainRoot from "./Pages/Main/MainRoot";
import Mekteb from "./Pages/Main/Mekteb";
import Moda from "./Pages/Main/Moda";
import Order from "./Pages/Main/Order";
import Oyun from "./Pages/Main/Oyun";
import Puzzle from "./Pages/Main/Puzzle";
import Register from "./Pages/Main/Register";
import Rus from "./Pages/Main/Rus";
import Shop from "./Pages/Main/Shop";
import Turk from "./Pages/Main/Turk";
import Xeberler from "./Pages/Main/Xeberler";
import Yaradiciliq from "./Pages/Main/Yaradiciliq";

const ROUTES=[
    {
        path:"/",
        element:<MainRoot/>,
        children:[
            {
                path:"",
                element:<Home/>
            },
            {
                path:"basket",
                element:<Basket/>
            },
            {
                path:"Shop",
                element:<Shop/>
            },
            {
                path:":id",
                element:<Detail/>
            },
            // {
            //     path:"",
            //     element:<Home/>
            // },
            {
                path:"Rus",
                element:<Rus/>
            },
            {
                path:"Giris",
                element:<Giris/>
            },
            {
                path:"Azerbaijan",
                element:<Azerbaijan/>
            },
            {
                path:"Turk",
                element:<Turk/>
            },
            {
                path:"Lego",
                element:<Lego/>
            },
            {
                path:"Ingilis",
                element:<Ingilis/>
            },
            {
                path:"Mekteb",
                element:<Mekteb/>
            },
            {
                path:"Yaradiciliq",
                element:<Yaradiciliq/>
            },
            {
                path:"Oyun",
                element:<Oyun/>
            },
            {
                path:"Puzzle",
                element:<Puzzle/>
            },
            {
                path:"Moda",
                element:<Moda/>
            },
            {
                path:"Elektronika",
                element:<Elektronika/>
            },
            {
                path:"Register",
                element:<Register/>
            },
            {
                path:"Elaqe",
                element:<Elaqe/>
            },
            {
                path:"Order",
                element:<Order/>
            },
            {
                path:"Xeberler",
                element:<Xeberler/>
            },
            {
                path:"Blog",
                element:<Blog/>
            },
            {
                path:"ElaqeMail",
                element:<ElaqeMail/>
            },
            {
                path:'*',
                element:<ErrorPage/>
            },
        ]
    },
    {
        path:"/admin",
        element:<AdminRoot/>,
        children:[
            {
                path:"",
                element:<Admin/>
            },
            {
                path:"Add",
                element:<Add/>
            },
            {
                path:"ModaAdd",
                element:<ModaAdd/>
            },
            {
                path:"AdminDetail/:id",
                element:<AdminDetail/>
            },
            {
                path:"EditPage/:id",
                element:<EditPage/>
            },
            {
                path:"AdminOrder",
                element:<AdminOrder/>
            },
            {
                path:"XeberAdmin",
                element:<XeberAdmin/>
            },
            {
                path:"AddNews",
                element:<AddNews/>
            },
        ]
    }
]
export default ROUTES