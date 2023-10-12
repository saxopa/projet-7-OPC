import './styles/App.css';
import { createBrowserRouter, RouterProvider  } from 'react-router-dom';
import RootLayout from './pages/Root';
import Home from './pages/Home';
import About from './pages/About';
import Logement from './pages/Logement';
import Erreur from './pages/Erreur';



const router = createBrowserRouter([
  { 
    path : '/',
    element : <RootLayout />,
    children : [
      { path : '/', element : <Home /> },
      { path : '/about', element : <About /> },
      { path : '/logement/:id', element : <Logement /> },
      { path : '/erreur', element : <Erreur /> },

    ]
  }
])


function App() {

 return <RouterProvider router={router} />
}

export default App;

