import { Link } from "react-router-dom";
import search from "../assets/search-icon.svg";
import "./../App.css";

function DropdownMenu({ setArea }) {
  return (
    <div id="dropdown_container">
      <header>
        <h1>Weather spot</h1>
      </header>
      <main>
        <input
          type="text"
          onChange={(e) => {
            setArea(e.target.value);
          }}
          placeholder="Search for location.."
        />
        <Link to="/weather">
          <button>
            <img id="search_icon" src={search} />
          </button>
        </Link>
      </main>
    </div>
  );
}

export default DropdownMenu;
