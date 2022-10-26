import { useContext } from "react";
import MainContext from "../MainContext";

export default function MainBar({ height }) {
  const { itemCount, cards, navbarWidth, mainViewWidth, hoverBg } =
    useContext(MainContext);

  return (
    <section
      className="w-full px-7 pt-7 scroll-box"
      style={{
        "--bg": `${hoverBg}`,
        "--height": `${height - 155}px`,
        "--navbar-width": `${navbarWidth}px`,
        "--width": `${mainViewWidth}px`,
      }}
    >
      {/* Users Tops */}
      <div>
        <section className="mb-8">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-white">İyi Akşamlar</h2>
          </div>
          <div className="grid grid-cols-2  gap-x-4 gap-y-3 xl:grid-cols-footer">
            <div className="top-list group ">
              <figure className="first-section-items  main-images-shadow">
                <img
                  src="https://t.scdn.co/images/3099b3803ad9496896c43f22fe9be8c4.png"
                  alt=""
                  className="h-full w-full object-cover"
                />
              </figure>
              <div className=" group flex-1 flex  items-center justify-between px-4">
                <div className="font-semibold text-[16px] text-white">
                  Beğenilen Şarkılar
                </div>
                <div>
                  <button className="bg-[#1db954] p-3 rounded-full hover:scale-105 cursor-default transition-opacity duration-500 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto">
                    <svg role="img" height="24" width="24" viewBox="0 0 24 24">
                      <path d="M7.05 3.606l13.49 7.788a.7.7 0 010 1.212L7.05 20.394A.7.7 0 016 19.788V4.212a.7.7 0 011.05-.606z"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <div className="top-list group">
              <figure className="first-section-items main-images-shadow">
                <img
                  src="https://i.scdn.co/image/ab67706f0000000258ad481a99e1e2bb66fa2ab7"
                  alt=""
                  className="h-full w-full object-cover"
                />
              </figure>
              <div className=" group flex-1 flex  items-center justify-between px-4">
                <div className="font-semibold text-[16px] text-white">
                  Hot Hits Turkiye
                </div>
                <div>
                  <button className="bg-[#1db954] p-3 rounded-full hover:scale-105 cursor-default transition-opacity duration-500 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto">
                    <svg role="img" height="24" width="24" viewBox="0 0 24 24">
                      <path d="M7.05 3.606l13.49 7.788a.7.7 0 010 1.212L7.05 20.394A.7.7 0 016 19.788V4.212a.7.7 0 011.05-.606z"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <div className="top-list group">
              <figure className="first-section-items main-images-shadow">
                <img
                  src="https://i.scdn.co/image/ab6761610000e5ebb7b2b71e53f8fc8f1672ca1f"
                  alt=""
                  className="h-full w-full object-cover"
                />
              </figure>
              <div className=" group flex-1 flex  items-center justify-between px-4">
                <div className="font-semibold text-[16px] text-white">
                  Canfeza
                </div>
                <div>
                  <button className="bg-[#1db954] p-3 rounded-full hover:scale-105 cursor-default transition-opacity duration-500 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto">
                    <svg role="img" height="24" width="24" viewBox="0 0 24 24">
                      <path d="M7.05 3.606l13.49 7.788a.7.7 0 010 1.212L7.05 20.394A.7.7 0 016 19.788V4.212a.7.7 0 011.05-.606z"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <div className="top-list group">
              <figure className="first-section-items main-images-shadow">
                <img
                  src="https://i.scdn.co/image/ab6761610000e5ebbfa5f383c68022447068eb49"
                  alt=""
                  className="h-full w-full object-cover"
                />
              </figure>
              <div className=" group flex-1 flex  items-center justify-between px-4">
                <div className="font-semibold text-[16px] text-white">
                  Ahiyan
                </div>
                <div>
                  <button className="bg-[#1db954] p-3 rounded-full hover:scale-105 cursor-default transition-opacity duration-500 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto">
                    <svg role="img" height="24" width="24" viewBox="0 0 24 24">
                      <path d="M7.05 3.606l13.49 7.788a.7.7 0 010 1.212L7.05 20.394A.7.7 0 016 19.788V4.212a.7.7 0 011.05-.606z"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <div className="top-list group">
              <figure className="first-section-items main-images-shadow">
                <img
                  src="https://i.scdn.co/image/ab67706c0000da84339465fcdd7a33191ccfedc4"
                  alt=""
                  className="h-full w-full object-cover"
                />
              </figure>
              <div className=" group flex-1 flex  items-center justify-between px-4">
                <div className="font-semibold text-[16px] text-white">
                  Morning Mood 2022
                </div>
                <div>
                  <button className="bg-[#1db954] p-3 rounded-full hover:scale-105 cursor-default transition-opacity duration-500 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto">
                    <svg role="img" height="24" width="24" viewBox="0 0 24 24">
                      <path d="M7.05 3.606l13.49 7.788a.7.7 0 010 1.212L7.05 20.394A.7.7 0 016 19.788V4.212a.7.7 0 011.05-.606z"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <div className="top-list group">
              <figure className="first-section-items main-images-shadow">
                <img
                  src="https://i.scdn.co/image/ab67706f0000000207eae4577274d0c3e43bb5e6"
                  alt=""
                  className="h-full w-full object-cover"
                />
              </figure>
              <div className=" group flex-1 flex  items-center justify-between px-4">
                <div className="font-semibold text-[16px] text-white">popt</div>
                <div>
                  <button className="bg-[#1db954] p-3 rounded-full hover:scale-105 cursor-default transition-opacity duration-500 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto">
                    <svg role="img" height="24" width="24" viewBox="0 0 24 24">
                      <path d="M7.05 3.606l13.49 7.788a.7.7 0 010 1.212L7.05 20.394A.7.7 0 016 19.788V4.212a.7.7 0 011.05-.606z"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="mb-8">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-white">Pop</h2>
          </div>
          <div
            className={`grid gap-3 card-grid `}
            style={{ "--grid-count": `${itemCount}` }}
          >
            {cards.map((card) => card.tag)}
          </div>
        </section>
        <section className="mb-8">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-white">Pop</h2>
          </div>
          <div
            className={`grid gap-3 card-grid `}
            style={{ "--grid-count": `${itemCount}` }}
          >
            {cards.map((card) => card.tag)}
          </div>
        </section>
        <section className="mb-8">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-white">Pop</h2>
          </div>
          <div
            className={`grid gap-3 card-grid `}
            style={{ "--grid-count": `${itemCount}` }}
          >
            {cards.map((card) => card.tag)}
          </div>
        </section>
        <section className="mb-8">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-white">Pop</h2>
          </div>
          <div
            className={`grid gap-3 card-grid `}
            style={{ "--grid-count": `${itemCount}` }}
          >
            {cards.map((card) => card.tag)}
          </div>
        </section>
        <section className="mb-8">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-white">Pop</h2>
          </div>
          <div
            className={`grid gap-3 card-grid `}
            style={{ "--grid-count": `${itemCount}` }}
          >
            {cards.map((card) => card.tag)}
          </div>
        </section>
      </div>
    </section>
  );
}
