import Navbar from "./components/Navbar";
import MainView from "./components/MainView";
import PlayingBar from "./components/PlayingBar";
import {  useState, useRef } from "react";
import { useWindowWidth } from "@react-hook/window-size/throttled";
import MainContext from "./MainContext";
import Split from "react-split";
export default function App() {
  const [hoverBg, setHoverBg] = useState("rgb(124, 0, 138)");
  const [navbarWidth, setNavbarWidth] = useState(250);
  const [mainViewWidth, setMainViewWidth] = useState();
  const [itemCount, setItemCount] = useState();
  const [cards, setCards] = useState([]);
  const [sizes, setSizes] = useState([17, 83]);
  const width = useWindowWidth();
  const main = useRef();
  const split = useRef();

const contextData = {
    itemCount,
    setItemCount,
    cards,
    setCards,
    mainViewWidth,
    setMainViewWidth,
    main,
    hoverBg,
    setHoverBg,
    navbarWidth,
    setNavbarWidth,
  };

  const onDrag = (sizes) => {
 
    setSizes(sizes);

    setNavbarWidth(width * (sizes[0] / 100));
    setMainViewWidth(width * (sizes[1] / 100));
  };

  return (
    <>
      <MainContext.Provider value={contextData}>
        <main className="flex  min-h-[100vh]" id="main">
          <Split
            direction="horizontal"
            className="split flex"
            sizes={sizes}
            minSize={[150, 0]}
            maxSize={[350, 1500]}
            snapOffset={0}
            gutterSize={2}
            onDrag={onDrag}
            ref={split}
          >
            <Navbar />

            <MainView />
          </Split>

          <PlayingBar />
        </main>
      </MainContext.Provider>
    </>
  );
}
