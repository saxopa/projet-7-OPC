import './styles/App.css';
import { createBrowserRouter, RouterProvider  } from 'react-router-dom';
import RootLayout from './pages/Root';
import Home from './pages/Home';
import About from './pages/About';



const router = createBrowserRouter([
  { 
    path : '/',
    element : <RootLayout />,
    children : [
      { path : '/', element : <Home /> },
      { path : '/about', element : <About /> },

    ]
  }
])


function App() {

 return <RouterProvider router={router} />
}

export default App;

