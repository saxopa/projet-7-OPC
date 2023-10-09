import './styles/App.css';
import { createBrowserRouter, RouterProvider  } from 'react-router-dom';
import RootLayout from './pages/Root';
import Home from './pages/Home';
import About from './pages/About';
import Logement from './pages/Logement';



const router = createBrowserRouter([
  { 
    path : '/',
    element : <RootLayout />,
    children : [
      { path : '/', element : <Home /> },
      { path : '/about', element : <About /> },
      { path : '/Logement/:id', element : <Logement /> },

    ]
  }
])


function App() {

 return <RouterProvider router={router} />
}

export default App;

