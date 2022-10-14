import { Link, Outlet } from 'react-router-dom';
import pageLogo from '../../assets/images/logo.png';
import './Navigation.css';

const Navigation = () => {
    return (
        <>
        <div className='navigation'>
            <Link className='logo-container' to='/'>
            <img src={pageLogo} alt='Logo' className='logo' />
            </Link>
            <div className='nav-links-container'>
                <Link className='nav-link' to='newCard'>
                    Nueva Targeta
                </Link>
{/*                 <h1>Navegacion</h1> */}
            </div>
        </div>
        <Outlet />
        </>

    );
};
export default Navigation;