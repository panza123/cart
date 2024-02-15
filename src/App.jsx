import { RouterProvider, createBrowserRouter, } from "react-router-dom"
import Layout from "./layout/Layout"
import Shop from "./pages/shop/Shop"
import Cart from "./pages/cart/Cart"
import ShopcontextProvider from "./context/Shopcontext"



function App() {
  
  const router =createBrowserRouter([
    {path:'/',
    element:<Layout/>,
    children:[
    {path:'/',element:<Shop/>},
    {path:'/cart',element:<Cart/>},
    ]
  
  
  }
  ])

  return (
    <>
    
    <div className="App">
      <ShopcontextProvider>

     <RouterProvider router={router}/>

      </ShopcontextProvider>
     </div>
     
    </>
  )
}

export default App
