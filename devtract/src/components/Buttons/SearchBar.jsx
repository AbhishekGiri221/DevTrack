import './SearchBar.css';
import { FaSearch } from "react-icons/fa";

function SearchBar({placeholder}) {
    return (
        <>
            <div className="search-container">
                <FaSearch size={15} />
                <input type="text" placeholder={placeholder} />
            </div>
        </>
    )
}

export default SearchBar;