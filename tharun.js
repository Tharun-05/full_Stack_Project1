// const addfun=document.getElementById("toggle_btn")[0];
// const grids=document.getElementsByClassName("grids")[0];
// var ctr=0;
// console.log(addfun);
// addfun.addEventListener('click',function(){
//     // ctr++;
//     // if(ctr==6){
//     //     alert("maximum grides are added in the row another click will leads to collide!");
//     //     return;
//     // }
// alert("you got clicked by the toggle button");
//     // const grid=createGrides();
//     // grids.appendChild(grid);
     
// })
// function createGrides(){
//        const gridDiv= document.createElement('div');
//        gridDiv.className='grid';
//        return gridDiv;


// }
import  React,{lazy,Suspense} from "react"
import  ReactDOM  from "react-dom/client";
import Header from "./src/comonents/Header";
import Body from "./src/comonents/Body";
import Footer from "./src/comonents/Footer";
import About from "./src/comonents/About";
import { createBrowserRouter,Outlet,RouterProvider } from "react-router-dom";
// import Contact from "./src/comonents/Contact";
import Restaurents from "./src/comonents/Restaurents";
import Restaurents from "./src/comonents/Restaurents";
import RestaurentManu from "./src/comonents/RestaurentMenu";
// const divelement=React.createElement('div',{id:'child'},
// [React.createElement('h1',{id:'header'},"hello world"),React.createElement('h1',{},"hello world")]);


// function myfunction(){
//  alert("need function on the toggle");
// }
// const addfun=document.getElementsByClassName("header");
// console.log(addfun);

const App=()=>{
    return( <>
    <div className="App">
    <Header/>
    <Outlet/>
    <Footer/>
    </div>
     </>)
 }
 const Contact=lazy(()=>import("./src/comonents/Contact"))
const appRouter=createBrowserRouter([
   
    {
        path:"/",
        element:<App/>,
        children:[
            {
                path:"/about",
                element:<About/>,
                },
                {
                    path:"/contact",
                    element:
                    <Suspense><Contact/></Suspense>,
                    },
                    {
                        path:"/Restaurents",
                        element:<Body/>,
                        children:[
                            {path:"restaurent/Restaurents/:name/:id",
                            element:<RestaurentManu/>}
                        ]
                        },
                        {
                            path:"/",
                            element:<Restaurents/>
                        }  ,
                        {
                            path:"/Restaurents/:name/:id",
                            element:<RestaurentManu/>
                        },
        ]
        },
        
]);

const result=ReactDOM.createRoot(document.getElementById('parent'));
// result.render(divelement);
// const header=<h1 id="header">Tharun Kumar</h1>
result.render(<RouterProvider router={appRouter}></RouterProvider>);