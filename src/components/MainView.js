import TopBar from "./TopBar";
import MainBar from "./MainBar";
import { useWindowSize } from "@react-hook/window-size";
import { useContext,useEffect } from "react";
import MainContext from "../MainContext";
import { useElementSize } from "use-element-size";

export default function MainView() {
  const [width, height] = useWindowSize();
  const cardsArray = [
    {
      tag: (
        <div className="card-container group">
          <figure className="w-full rounded-md overflow-hidden relative">
            <img
              src="https://i.scdn.co/image/ab67706f00000002df847d627b5522dad651d62c"
              alt=""
              className="object-cover w-full"
            />
            <div className="absolute bottom-0 right-2 ">
              <button className="card-button">
                <svg role="img" height="24" width="24" viewBox="0 0 24 24">
                  <path d="M7.05 3.606l13.49 7.788a.7.7 0 010 1.212L7.05 20.394A.7.7 0 016 19.788V4.212a.7.7 0 011.05-.606z"></path>
                </svg>
              </button>
            </div>
          </figure>
          <div>
            <div className="font-semibold mt-4">Türkçe Pop</div>
            <div className="card-info overflow-hidden mt-1 text-[15px]">
              Türkiye'nin en büyük pop listesi. Kapak: Feride Hilal Akın
            </div>
          </div>
        </div>
      ),
    },
    {
      tag: (
        <div className="card-container group">
          <figure className="w-full rounded-md overflow-hidden relative ">
            <img
              src="https://i.scdn.co/image/ab67706f00000002df847d627b5522dad651d62c"
              alt=""
              className="object-cover w-full"
            />
            <div className="absolute bottom-0 right-2 ">
              <button className="card-button">
                <svg role="img" height="24" width="24" viewBox="0 0 24 24">
                  <path d="M7.05 3.606l13.49 7.788a.7.7 0 010 1.212L7.05 20.394A.7.7 0 016 19.788V4.212a.7.7 0 011.05-.606z"></path>
                </svg>
              </button>
            </div>
          </figure>
          <div>
            <div className="font-semibold mt-4">Türkçe Pop</div>
            <div className="card-info overflow-hidden mt-1 text-[15px]">
              Türkiye'nin en büyük pop listesi. Kapak: Feride Hilal Akın
            </div>
          </div>
        </div>
      ),
    },
    {
      tag: (
        <div className="card-container group">
          <figure className="w-full rounded-md overflow-hidden relative">
            <img
              src="https://i.scdn.co/image/ab67706f00000002df847d627b5522dad651d62c"
              alt=""
              className="object-cover w-full"
            />
            <div className="absolute bottom-0 right-2 ">
              <button className="card-button">
                <svg role="img" height="24" width="24" viewBox="0 0 24 24">
                  <path d="M7.05 3.606l13.49 7.788a.7.7 0 010 1.212L7.05 20.394A.7.7 0 016 19.788V4.212a.7.7 0 011.05-.606z"></path>
                </svg>
              </button>
            </div>
          </figure>
          <div>
            <div className="font-semibold mt-4">Türkçe Pop</div>
            <div className="card-info overflow-hidden mt-1 text-[15px]">
              Türkiye'nin en büyük pop listesi. Kapak: Feride Hilal Akın
            </div>
          </div>
        </div>
      ),
    },
    {
      tag: (
        <div className="card-container group">
          <figure className="w-full rounded-md overflow-hidden relative">
            <img
              src="https://i.scdn.co/image/ab67706f00000002df847d627b5522dad651d62c"
              alt=""
              className="object-cover w-full"
            />
            <div className="absolute bottom-0 right-2 ">
              <button className="card-button">
                <svg role="img" height="24" width="24" viewBox="0 0 24 24">
                  <path d="M7.05 3.606l13.49 7.788a.7.7 0 010 1.212L7.05 20.394A.7.7 0 016 19.788V4.212a.7.7 0 011.05-.606z"></path>
                </svg>
              </button>
            </div>
          </figure>
          <div>
            <div className="font-semibold mt-4">Türkçe Pop</div>
            <div className="card-info overflow-hidden mt-1 text-[15px]">
              Türkiye'nin en büyük pop listesi. Kapak: Feride Hilal Akın
            </div>
          </div>
        </div>
      ),
    },
    {
      tag: (
        <div className="card-container group">
          <figure className="w-full rounded-md overflow-hidden relative">
            <img
              src="https://i.scdn.co/image/ab67706f00000002df847d627b5522dad651d62c"
              alt=""
              className="object-cover w-full"
            />
            <div className="absolute bottom-0 right-2 ">
              <button className="card-button">
                <svg role="img" height="24" width="24" viewBox="0 0 24 24">
                  <path d="M7.05 3.606l13.49 7.788a.7.7 0 010 1.212L7.05 20.394A.7.7 0 016 19.788V4.212a.7.7 0 011.05-.606z"></path>
                </svg>
              </button>
            </div>
          </figure>
          <div>
            <div className="font-semibold mt-4">Türkçe Pop</div>
            <div className="card-info overflow-hidden mt-1 text-[15px]">
              Türkiye'nin en büyük pop listesi. Kapak: Feride Hilal Akın
            </div>
          </div>
        </div>
      ),
    },
    {
      tag: (
        <div className="card-container group">
          <figure className="w-full rounded-md overflow-hidden relative">
            <img
              src="https://i.scdn.co/image/ab67706f00000002df847d627b5522dad651d62c"
              alt=""
              className="object-cover w-full"
            />
            <div className="absolute bottom-0 right-2 ">
              <button className="card-button">
                <svg role="img" height="24" width="24" viewBox="0 0 24 24">
                  <path d="M7.05 3.606l13.49 7.788a.7.7 0 010 1.212L7.05 20.394A.7.7 0 016 19.788V4.212a.7.7 0 011.05-.606z"></path>
                </svg>
              </button>
            </div>
          </figure>
          <div>
            <div className="font-semibold mt-4">Türkçe Pop</div>
            <div className="card-info overflow-hidden mt-1 text-[15px]">
              Türkiye'nin en büyük pop listesi. Kapak: Feride Hilal Akın
            </div>
          </div>
        </div>
      ),
    },
    {
      tag: (
        <div className="card-container group">
          <figure className="w-full rounded-md overflow-hidden relative">
            <img
              src="https://i.scdn.co/image/ab67706f00000002df847d627b5522dad651d62c"
              alt=""
              className="object-cover w-full"
            />
            <div className="absolute bottom-0 right-2 ">
              <button className="card-button">
                <svg role="img" height="24" width="24" viewBox="0 0 24 24">
                  <path d="M7.05 3.606l13.49 7.788a.7.7 0 010 1.212L7.05 20.394A.7.7 0 016 19.788V4.212a.7.7 0 011.05-.606z"></path>
                </svg>
              </button>
            </div>
          </figure>
          <div>
            <div className="font-semibold mt-4">Türkçe Pop</div>
            <div className="card-info overflow-hidden mt-1 text-[15px]">
              Türkiye'nin en büyük pop listesi. Kapak: Feride Hilal Akın
            </div>
          </div>
        </div>
      ),
    },
    {
      tag: (
        <div className="card-container group">
          <figure className="w-full rounded-md overflow-hidden relative">
            <img
              src="https://i.scdn.co/image/ab67706f00000002df847d627b5522dad651d62c"
              alt=""
              className="object-cover w-full"
            />
            <div className="absolute bottom-0 right-2 ">
              <button className="card-button">
                <svg role="img" height="24" width="24" viewBox="0 0 24 24">
                  <path d="M7.05 3.606l13.49 7.788a.7.7 0 010 1.212L7.05 20.394A.7.7 0 016 19.788V4.212a.7.7 0 011.05-.606z"></path>
                </svg>
              </button>
            </div>
          </figure>
          <div>
            <div className="font-semibold mt-4">Türkçe Pop</div>
            <div className="card-info overflow-hidden mt-1 text-[15px]">
              Türkiye'nin en büyük pop listesi. Kapak: Feride Hilal Akın
            </div>
          </div>
        </div>
      ),
    },
    {
      tag: (
        <div className="card-container group">
          <figure className="w-full rounded-md overflow-hidden relative">
            <img
              src="https://i.scdn.co/image/ab67706f00000002df847d627b5522dad651d62c"
              alt=""
              className="object-cover w-full"
            />
            <div className="absolute bottom-0 right-2 ">
              <button className="card-button">
                <svg role="img" height="24" width="24" viewBox="0 0 24 24">
                  <path d="M7.05 3.606l13.49 7.788a.7.7 0 010 1.212L7.05 20.394A.7.7 0 016 19.788V4.212a.7.7 0 011.05-.606z"></path>
                </svg>
              </button>
            </div>
          </figure>
          <div>
            <div className="font-semibold mt-4">Türkçe Pop</div>
            <div className="card-info overflow-hidden mt-1 text-[15px]">
              Türkiye'nin en büyük pop listesi. Kapak: Feride Hilal Akın
            </div>
          </div>
        </div>
      ),
    },
    {
      tag: (
        <div className="card-container group">
          <figure className="w-full rounded-md overflow-hidden relative">
            <img
              src="https://i.scdn.co/image/ab67706f00000002df847d627b5522dad651d62c"
              alt=""
              className="object-cover w-full"
            />
            <div className="absolute bottom-0 right-2 ">
              <button className="card-button">
                <svg role="img" height="24" width="24" viewBox="0 0 24 24">
                  <path d="M7.05 3.606l13.49 7.788a.7.7 0 010 1.212L7.05 20.394A.7.7 0 016 19.788V4.212a.7.7 0 011.05-.606z"></path>
                </svg>
              </button>
            </div>
          </figure>
          <div>
            <div className="font-semibold mt-4">Türkçe Pop</div>
            <div className="card-info overflow-hidden mt-1 text-[15px]">
              Türkiye'nin en büyük pop listesi. Kapak: Feride Hilal Akın
            </div>
          </div>
        </div>
      ),
    },
    {
      tag: (
        <div className="card-container group">
          <figure className="w-full rounded-md overflow-hidden relative">
            <img
              src="https://i.scdn.co/image/ab67706f00000002df847d627b5522dad651d62c"
              alt=""
              className="object-cover w-full"
            />
            <div className="absolute bottom-0 right-2 ">
              <button className="card-button">
                <svg role="img" height="24" width="24" viewBox="0 0 24 24">
                  <path d="M7.05 3.606l13.49 7.788a.7.7 0 010 1.212L7.05 20.394A.7.7 0 016 19.788V4.212a.7.7 0 011.05-.606z"></path>
                </svg>
              </button>
            </div>
          </figure>
          <div>
            <div className="font-semibold mt-4">Türkçe Pop</div>
            <div className="card-info overflow-hidden mt-1 text-[15px]">
              Türkiye'nin en büyük pop listesi. Kapak: Feride Hilal Akın
            </div>
          </div>
        </div>
      ),
    },
    {
      tag: (
        <div className="card-container group">
          <figure className="w-full rounded-md overflow-hidden relative">
            <img
              src="https://i.scdn.co/image/ab67706f00000002df847d627b5522dad651d62c"
              alt=""
              className="object-cover w-full"
            />
            <div className="absolute bottom-0 right-2 ">
              <button className="card-button">
                <svg role="img" height="24" width="24" viewBox="0 0 24 24">
                  <path d="M7.05 3.606l13.49 7.788a.7.7 0 010 1.212L7.05 20.394A.7.7 0 016 19.788V4.212a.7.7 0 011.05-.606z"></path>
                </svg>
              </button>
            </div>
          </figure>
          <div>
            <div className="font-semibold mt-4">Türkçe Pop</div>
            <div className="card-info overflow-hidden mt-1 text-[15px]">
              Türkiye'nin en büyük pop listesi. Kapak: Feride Hilal Akın
            </div>
          </div>
        </div>
      ),
    },
    {
      tag: (
        <div className="card-container group">
          <figure className="w-full rounded-md overflow-hidden relative">
            <img
              src="https://i.scdn.co/image/ab67706f00000002df847d627b5522dad651d62c"
              alt=""
              className="object-cover w-full"
            />
            <div className="absolute bottom-0 right-2 ">
              <button className="card-button">
                <svg role="img" height="24" width="24" viewBox="0 0 24 24">
                  <path d="M7.05 3.606l13.49 7.788a.7.7 0 010 1.212L7.05 20.394A.7.7 0 016 19.788V4.212a.7.7 0 011.05-.606z"></path>
                </svg>
              </button>
            </div>
          </figure>
          <div>
            <div className="font-semibold mt-4">Türkçe Pop</div>
            <div className="card-info overflow-hidden mt-1 text-[15px]">
              Türkiye'nin en büyük pop listesi. Kapak: Feride Hilal Akın
            </div>
          </div>
        </div>
      ),
    },
    {
      tag: (
        <div className="card-container group">
          <figure className="w-full rounded-md overflow-hidden relative">
            <img
              src="https://i.scdn.co/image/ab67706f00000002df847d627b5522dad651d62c"
              alt=""
              className="object-cover w-full"
            />
            <div className="absolute bottom-0 right-2 ">
              <button className="card-button">
                <svg role="img" height="24" width="24" viewBox="0 0 24 24">
                  <path d="M7.05 3.606l13.49 7.788a.7.7 0 010 1.212L7.05 20.394A.7.7 0 016 19.788V4.212a.7.7 0 011.05-.606z"></path>
                </svg>
              </button>
            </div>
          </figure>
          <div>
            <div className="font-semibold mt-4">Türkçe Pop</div>
            <div className="card-info overflow-hidden mt-1 text-[15px]">
              Türkiye'nin en büyük pop listesi. Kapak: Feride Hilal Akın
            </div>
          </div>
        </div>
      ),
    },
  ];

  const {
    mainViewWidth,
    setCards,
    itemCount,
    setMainViewWidth,
    setItemCount,
    hoverBg,
  } = useContext(MainContext);

  const containerItem = useElementSize((size, prevSize, elem) => {
    setMainViewWidth(size.width);
  });

  useEffect(() => {
    setCards([]);
    for (let i = 0; i < itemCount; ++i) {
      const object = cardsArray[i];
      setCards((oldArray) => [...oldArray, object]);
    }
  }, [itemCount]);

  useEffect(() => {
    setCardsCount();
  }, [width, mainViewWidth]);

  const setCardsCount = () => {
    if (mainViewWidth < 580) {
      setItemCount(2);
    } else if (mainViewWidth >= 580 && mainViewWidth < 730) {
      setItemCount(3);
    } else if (mainViewWidth >= 730 && mainViewWidth < 1058) {
      setItemCount(4);
    } else if (mainViewWidth >= 1058 && mainViewWidth < 1210) {
      setItemCount(5);
    } else if (mainViewWidth >= 1210 && mainViewWidth < 1470) {
      setItemCount(6);
    } else {
      setItemCount(7);
    }
  };

  return (
    <div
      ref={containerItem}
      className="relative main-view-container "
      id="main-view"
      style={{
        "--bg": `${hoverBg}`,
      }}
    >
      <TopBar />
      <MainBar height={height} />
    </div>
  );
}
