import GetstartedButton from '../Buttons/GetstartedButton';
import './Navbar.css';
import ThemeButton from '../Buttons/ThemeButton';
import Logo from '../logo/Logo';
function Navbar() {
    return (
        <>
            <div className="Navcontainer">
                <Logo/>

                <div className="Navoptions">
                    <ul>
                        <li>Features</li>
                        <li>Pricing</li>
                        <li>About</li>
                    </ul>
                </div>

                <div className='rightsection-nav-buttons'>
                    <GetstartedButton />
                    <ThemeButton /> {/* Theme button shoudl be visible once the user has logged in */}
                </div>

            </div>

        </>
    )
}

export default Navbar;