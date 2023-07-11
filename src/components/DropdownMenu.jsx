import { Link } from "react-router-dom";

function DropdownMenu({ setArea }) {
  return (
    <>
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
          <button>🔎</button>
        </Link>
      </main>
    </>
  );
}

export default DropdownMenu;
