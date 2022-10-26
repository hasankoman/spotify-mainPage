import SpotifyIcon from "./SpotifyIcon";
import NavbarButtons from "./NavbarButtons";
import NavbarLists from "./NavbarLists";
import { useContext } from "react";
import { useElementSize } from "use-element-size";
import MainContext from "../MainContext";
export default function Navbar() {
  const {  setNavbarWidth } = useContext(MainContext);

  const containerItem = useElementSize((size, prevSize, elem) => {
    setNavbarWidth(size.width);
  });

  return (
   
    <nav ref={containerItem} className=" bg-black " id="nav-bar">
      <div className="pt-6 flex flex-col gap-4 text-white">
        <SpotifyIcon />
        <NavbarButtons />
        <NavbarLists />
      </div>
    </nav>
  );
}
