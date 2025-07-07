import './assets/App.css';
import { createBrowserRouter, RouterProvider  } from 'react-router-dom';
import RootLayout from './pages/Root';
import Home from './pages/Home';
import About from './pages/About';
import Logement from './pages/Logement';
import Erreur from './pages/Erreur';

const router = createBrowserRouter([
  {
    element : <RootLayout />,
    children : [
      { path : '/', element : <Home /> },
      { path : '/about', element : <About /> },
      { path : '/logement/:id', element : <Logement /> },
      { path : "*", element : <Erreur /> },

    ]
  }
], { 
  basename: "/projet-7-OPC/",
  future: {
    v7_startTransition: true,
  },
})




function App() {

 return <RouterProvider router={router} />
}

export default App;

