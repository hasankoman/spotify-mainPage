import { useContext } from "react";
import { useEffect, useRef, useState } from "react";
import ReactTooltip from "react-tooltip";
import { useAudio } from "react-use";
import MainContext from "../MainContext";
import secondsToTime from "../utils/secondsToTime";
import { Icon } from "./icons";
// import { Icon } from "Components/icons";

import { useSelector, useDispatch } from "react-redux";
import {
  setMemorizedVolume,
  setMemorizedTranslateVolumePx,
  setTranslateVolumePx,
  setVolume,
} from "../features/volume";
import {
  setIsConnectActive,
  setIsLiked,
  setIsLyricsActive,
  setIsQueueActive,
  setIsRepeat,
  setIsShuffle,
} from "../features/playback";

export default function PlayingBar() {
  const volumeSlice = useSelector((state) => state.volume);
  const playbackSlice = useSelector((state) => state.playback);
  const dispatch = useDispatch();

  const repeatModes = [
    { name: "noRepeat", tooltip: "Tekrarlayı etkinleştir" },
    { name: "allRepeat", tooltip: "Birini tekrarlayı etkinleştir" },
    { name: "oneRepeat", tooltip: "Tekrarlayı devre dışı bırak" },
  ];
  const [audio, stateOfAudio, controls, ref] = useAudio({
    src: "https://cdn.freesound.org/previews/649/649730_1648170-lq.mp3",
    autoPlay: true,
  });

  const { navbarWidth } = useContext(MainContext);

  const playbackRef = useRef(null);
  const [playbackPosition, setPlaybackPosition] = useState(0);
  const [translatePlaybackPx, setTranslatePlaybackPx] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    if (stateOfAudio.duration !== 0) {
      var level = (stateOfAudio.time / stateOfAudio.duration) * 100;
    } else {
      var level = 0;
    }

    let px =
      playbackRef.current.offsetWidth *
      (stateOfAudio.time / stateOfAudio.duration);

    setTranslatePlaybackPx(px);
    setPlaybackPosition(level);
  }, [stateOfAudio.time]);

  useEffect(() => {
    if (stateOfAudio.paused) {
      let time = stateOfAudio.duration * (playbackSlice.playbackPosition / 100);

      controls.seek(time);
    }
  }, [playbackSlice.playbackPosition]);

  const getMousePos = async (e) => {
    let level;
    let onPx;
    const rect = e.target.getBoundingClientRect();
    let barWidth = rect.width;

    onPx = e.clientX - rect.left;

    if (onPx <= 0) {
      onPx = 0;
    }

    level = (onPx / barWidth) * 100;

    if (e.target.id === "playback") {
      // controls.pause();
      setPlaybackPosition(level);
      setTranslatePlaybackPx(onPx);
    }
    if (e.target.id === "volumebar") {
      dispatch(setVolume(level));
      dispatch(setMemorizedVolume(volumeSlice.volume));
      dispatch(setTranslateVolumePx(onPx));
      dispatch(setMemorizedTranslateVolumePx(volumeSlice.translateVolumePx));
    }
  };

  const settingMousePos = (e) => {
    if (e.type === "mousemove") {
      if (isDragging) {
        getMousePos(e);
      }
      return;
    }
    if (e.type === "click") {
      getMousePos(e);
    }
  };

  const handleSilentClick = () => {
    if (volumeSlice.volume !== 0) {
      dispatch(setVolume(0));
      dispatch(setTranslateVolumePx(0));
    } else {
      dispatch(setVolume(volumeSlice.memorizedVolume));
      dispatch(setTranslateVolumePx(volumeSlice.memorizedTranslateVolumePx));
    }
  };

  return (
    <div
      className="playing-bar z-10"
      id="playing-bar"
      style={{ "navbar-width": `${navbarWidth}` }}
    >
      <div className="flex items-center gap-3 w-3/12">
        <figure className="cursor-pointer relative group w-[56px] h-[56px] flex-shrink-0">
          <img
            src="https://i.scdn.co/image/ab67616d000048516d362a3d334de413e8de137e"
            alt=""
          />
          <button
            data-tip="Genişlet"
            className="transition-all absolute top-1 right-1 hidden hover:scale-105 hover:opacity-90 group-hover:block bg-black opacity-60 rounded-full p-1"
          >
            <svg
              role="img"
              height="16"
              width="16"
              viewBox="0 0 16 16"
              class="Svg-ytk21e-0 jAKAlG"
            >
              <path
                fill="#ddd"
                d="M.47 11.03a.75.75 0 001.06 0L8 4.56l6.47 6.47a.75.75 0 101.06-1.06L8 2.44.47 9.97a.75.75 0 000 1.06z"
              ></path>
            </svg>
          </button>
        </figure>
        <div className="flex flex-col">
          <a className="cursor-pointer hover:underline hover:underline-offset-auto mb-[2px]">
            Aşk Kaç Beden Giyer
          </a>
          <a className="cursor-pointer text-xs text-gray-400 hover:underline hover:underline-offset-auto hover:text-white">
            Hadise
          </a>
        </div>
        <button
          className={`ml-4 group cursor-default playing-bar-button ${
            playbackSlice.isLiked ? "text-[#1db954] opacity-100" : ""
          }
          } `}
          data-tip={
            playbackSlice.isLiked
              ? "Kitaplığın'dan Kaldır"
              : "Kitaplığın'a Kaydet"
          }
          onClick={() => dispatch(setIsLiked(!playbackSlice.isLiked))}
        >
          {!playbackSlice.isLiked ? (
            <Icon name="hearth" type="noLiked" size={16} />
          ) : (
            <Icon name="hearth" type="liked" size={16} />
          )}
        </button>
      </div>
      <div className="flex flex-col gap-2 items-center w-5/12">
        <div className="player-controls">
          <div className="left-player-controls flex gap-4">
            <button
              className={`playing-bar-button  ${
                playbackSlice.isShuffle
                  ? "player-button-active-dot player-button-active"
                  : ""
              }`}
              data-tip={`${
                playbackSlice.isShuffle
                  ? "Karışık çalmayı devre dışı bırak"
                  : "Karışık Çal"
              } `}
              onClick={() => dispatch(setIsShuffle())}
            >
              <Icon name="shuffle" size={16} />
            </button>
            <button className=" playing-bar-button" data-tip="Önceki">
              <Icon name="changeMusic" type="previous" size={16} />
            </button>
          </div>
          <button
            className="p-2 bg-white rounded-full hover:scale-[1.075] active:scale-100 cursor-default"
            onClick={stateOfAudio.paused ? controls.play : controls.pause}
            data-tip={stateOfAudio.paused ? "Çal" : "Duraklat"}
          >
            {stateOfAudio.paused ? (
              <Icon name="playPause" size={16} type="pause" />
            ) : (
              <Icon name="playPause" size={16} type="play" />
            )}
          </button>
          <div className="right-player-controls flex gap-4">
            <button className="playing-bar-button" data-tip="Sonraki">
              <Icon name="changeMusic" type="next" size={16} />
            </button>
            <button
              className={`playing-bar-button  ${
                playbackSlice.isRepeat !== 0
                  ? "player-button-active-dot player-button-active"
                  : ""
              }`}
              data-tip={`${repeatModes[playbackSlice.isRepeat].tooltip}`}
              onClick={() =>
                dispatch(
                  dispatch(
                    setIsRepeat(
                      playbackSlice.isRepeat === 2
                        ? playbackSlice.isRepeat - 2
                        : playbackSlice.isRepeat + 1
                    )
                  )
                )
              }
            >
              <Icon
                name="repeat"
                size={16}
                type={repeatModes[playbackSlice.isRepeat]}
              />
            </button>
          </div>
        </div>

        <div className="playback-bar w-11/12 h-[12px] ">
          {/* {audio} */}
          <div className="text-xs text-gray-400 cursor-default">
            {secondsToTime(stateOfAudio.time)}
          </div>
          <div
            ref={playbackRef}
            id="playback"
            className="h-[12px] w-full flex items-center group relative"
            onClick={(e) => settingMousePos(e)}
            onMouseDown={() => {
              controls.pause();
              setIsDragging(true);
            }}
            onMouseMove={(e) => settingMousePos(e)}
            onMouseUp={() => {
              controls.play();
              setIsDragging(false);
            }}
            onMouseLeave={() => {
              setIsDragging(false);
            }}
          >
            <div
              className={`h-full w-full flex items-center pointer-events-none  `}
            >
              <div className="w-full h-[4px] rounded-full pointer-events-none   bg-gray-600">
                <div className="w-full h-full rounded-full overflow-hidden pointer-events-none ">
                  <div
                    className="bg-white w-full h-full on-playback pointer-events-none   rounded-full  group-hover:bg-[#1db954]"
                    style={{ "--transformRate": `${playbackPosition}%` }}
                  ></div>
                </div>
                <div
                  style={{
                    "--transformPlaybackPx": `${translatePlaybackPx}px`,
                  }}
                  draggable="true"
                  className="h-[12px] w-[12px]  top-1/2 on-playback-dot  absolute rounded-full pointer-events-none  bg-white drop-shadow-md hidden group-hover:block"
                ></div>
              </div>
            </div>
          </div>

          <div className="text-xs text-gray-400 cursor-default">
            {secondsToTime(stateOfAudio.duration)}
          </div>
        </div>
      </div>
      <div className="flex w-3/12 justify-end ">
        <button
          className={`controls-button hover:scale-[1.03] ${
            playbackSlice.isLyricsActive &&
            "control-button-active control-button-active-dot lyrics-dot"
          }`}
          onClick={() => dispatch(setIsLyricsActive())}
          data-tip="Şarkı sözleri"
        >
          <Icon name="lyrics" size={16} />
        </button>
        <button
          className={`controls-button hover:scale-[1.03] ${
            playbackSlice.isQueueActive &&
            "control-button-active control-button-active-dot"
          }`}
          onClick={() => dispatch(setIsQueueActive())}
          data-tip="Sıraya ekle"
        >
          <Icon name="queue" size={16} />
        </button>
        <button
          className={`controls-button  ${
            playbackSlice.isConnectActive && "control-button-active"
          }`}
          onClick={() => dispatch(setIsConnectActive())}
          data-tip="Bir cihaza bağlan"
          data-delay-show="2000"
        >
          <Icon name="connectDevice" size={16} />
        </button>
        <div className="volume-bar flex items-center justify-center w-[33%] group">
          <button
            className={`controls-button `}
            data-tip={` ${
              volumeSlice.volume === 0 ? "Sessizden çık" : "Sessiz"
            } `}
            onClick={handleSilentClick}
          >
            <Icon name="volume" size={16} level={volumeSlice.volume} />
          </button>

          <div
            id="volumebar"
            className="h-[12px] w-full flex items-center group relative"
            onClick={(e) => settingMousePos(e)}
            onMouseDown={(e) => setIsDragging(true)}
            onMouseMove={(e) => settingMousePos(e)}
            onMouseUp={(e) => setIsDragging(false)}
            onMouseLeave={(e) => setIsDragging(false)}
          >
            <div
              className={`h-full w-full flex items-center pointer-events-none  `}
            >
              <div className="w-full h-[4px] rounded-full pointer-events-none   bg-gray-600">
                <div className="w-full h-full rounded-full overflow-hidden pointer-events-none ">
                  <div
                    className="bg-white w-full h-full on-volume pointer-events-none   rounded-full  group-hover:bg-[#1db954]"
                    style={{ "--transformRate": `${volumeSlice.volume}%` }}
                  ></div>
                </div>
                <div
                  style={{
                    "--transformVolumePx": `${volumeSlice.translateVolumePx}px`,
                  }}
                  draggable="true"
                  className="h-[12px] w-[12px]  top-1/2 on-volume-dot  absolute rounded-full pointer-events-none  bg-white drop-shadow-md hidden group-hover:block"
                ></div>
              </div>
            </div>
          </div>
        </div>
        <button className={`controls-button ml-2`}>
          <Icon name="fullSize" size={16} />
        </button>
      </div>
      <ReactTooltip
        place="top"
        type="dark"
        delayShow={250}
        effect="solid"
        arrowColor="transparent"
        className="!text-base !font-medium !px-2 !py-2  !bg-neutral-800  tooltip-shadow tooltip-show !transition-opacity !duration-300 "
      />
    </div>
  );
}
