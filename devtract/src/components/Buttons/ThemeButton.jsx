import './ThemeButton.css';
import LightTheme from '/Users/abhishekgiri/Documents/devtract/src/assets/images/lighttheme.png';
import DarkTheme from '/Users/abhishekgiri/Documents/devtract/src/assets/images/darktheme.png';
function ThemeButton() {
    return (
        <>
            <button className="theme-btn"> <img src = {LightTheme}/> </button>
        </>
    )
}

export default ThemeButton;