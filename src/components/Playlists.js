import { useWindowSize } from "@react-hook/window-size";

export default function Playlist() {
  const [width, height] = useWindowSize();
  return (
    <div
      className="playlist-size"
      style={{
        "--height": `${height - 413}px`,
      }}
    >
      <ul className="flex flex-col overflow-y-auto h-full navbar-line">
        <li className="playlist-item mt-1">
          <a href="#!" className="playlist-link">
            My Playlist 1
          </a>
        </li>
        <li className="playlist-item mt-1">
          <a href="#!" className="playlist-link">
            My Playlist 1
          </a>
        </li>
        <li className="playlist-item mt-1">
          <a href="#!" className="playlist-link">
            My Playlist 1
          </a>
        </li>
        <li className="playlist-item mt-1">
          <a href="#!" className="playlist-link">
            My Playlist 1
          </a>
        </li>
        <li className="playlist-item mt-1">
          <a href="#!" className="playlist-link">
            My Playlist 1
          </a>
        </li>
        <li className="playlist-item mt-1">
          <a href="#!" className="playlist-link">
            My Playlist 1
          </a>
        </li>
        <li className="playlist-item mt-1">
          <a href="#!" className="playlist-link">
            My Playlist 1
          </a>
        </li>
        <li className="playlist-item mt-1">
          <a href="#!" className="playlist-link">
            My Playlist 1
          </a>
        </li>
        <li className="playlist-item mt-1">
          <a href="#!" className="playlist-link">
            My Playlist 1
          </a>
        </li>
        <li className="playlist-item mt-1">
          <a href="#!" className="playlist-link">
            My Playlist 1
          </a>
        </li>
        <li className="playlist-item mt-1">
          <a href="#!" className="playlist-link">
            My Playlist 1
          </a>
        </li>
        {/* {myPlaylist.map((playlist,index) => (
          <li className="playlist-item mt-1" key={index}>
            <a href="#!" className="playlist-link">
              {playlist.name}
            </a>
          </li>
        ))} */}
      </ul>
    </div>
  );
}
