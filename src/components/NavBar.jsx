import logoWhite from '../assets/logo-white.png'
function NavBar() {
    return (
        <nav className="mx-10 pt-10 flex flex-col justify-center items-center bg-white dark:bg-black dark:text-white ">
            <img src={logoWhite} alt="TEDx UIUC Logo" className='w-60'></img>
            <ul className="flex flex-col gap-3 sm:flex-row">
                <li>home</li>
                <li>about</li>
                <li>apply</li>
            </ul>
        </nav>
    );
}

export default NavBar