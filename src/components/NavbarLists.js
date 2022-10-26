import Playlist from "./Playlists";

export default function NavbarLists() {
  return (
    <div className="flex flex-col">
      <div className="navbar-list-item">
        <a type="button">
          <div className="p-[6px] rounded-sm bg-white text-black">
            <svg
              role="img"
              height="12"
              width="12"
              aria-hidden="true"
              viewBox="0 0 16 16"
            >
              <path d="M15.25 8a.75.75 0 01-.75.75H8.75v5.75a.75.75 0 01-1.5 0V8.75H1.5a.75.75 0 010-1.5h5.75V1.5a.75.75 0 011.5 0v5.75h5.75a.75.75 0 01.75.75z"></path>
            </svg>
          </div>
          <span className="navbar-text">Çalma Listesi Oluştur</span>
        </a>
      </div>
      <div className="navbar-list-item">
        <a>
          <div className="liked-musics p-[6px] rounded-sm">
            <svg
              role="img"
              height="12"
              width="12"
              aria-hidden="true"
              viewBox="0 0 16 16"
              class="Svg-ytk21e-0 jAKAlG"
            >
              <path
                fill="currentcolor"
                d="M15.724 4.22A4.313 4.313 0 0012.192.814a4.269 4.269 0 00-3.622 1.13.837.837 0 01-1.14 0 4.272 4.272 0 00-6.21 5.855l5.916 7.05a1.128 1.128 0 001.727 0l5.916-7.05a4.228 4.228 0 00.945-3.577z"
              ></path>
            </svg>
          </div>
          <span className="navbar-text">Beğenilen Şarkılar</span>
        </a>
      </div>
      <div className="bg-white opacity-20 rounded-full  w-5/6 h-[1px] self-center mt-2 navbar-line"></div>
      <Playlist />
    </div>
  );
}
