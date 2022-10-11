import { Link, Outlet } from 'react-router-dom';


const Navigation = () => {
    return (
        <>
        <Link to='newCard'>Nueva Targeta</Link>
        <h1>Navegacion</h1>
        <Outlet />
        </>

    );
};
export default Navigation;