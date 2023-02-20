import logo from "../assets/header_logo.png";

export default function NavBar() {
  return (
    <div className="navbar bg-[#171A21]">
      <div className="flex-1">
        <a href="/">
          <img src={logo} className="h-9" />
        </a>
      </div>
      <div className="flex-none text-[#b8b6b4] uppercase">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>Item 1</a>
          </li>
          <li>
            <a>store</a>
            <ul className="p-2 bg-[#171A21]">
              <li>
                <a>Submenu 1</a>
              </li>
              <li>
                <a>Submenu 2</a>
              </li>
            </ul>
          </li>
          <li>
            <a>Item 3</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
