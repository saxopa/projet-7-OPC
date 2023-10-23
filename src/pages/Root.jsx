import {Outlet} from 'react-router-dom';
import Header   from '../components/Header/Header';
import Footer   from '../components/Footer/Footer';
import './Root.scss';

export default function RootLayout() {
    return (
        <>
        <Header />
        <main>
            <Outlet>
        
            </Outlet>
        </main>
        <Footer />

        </>
        
    )
}