import NavBar from './NavBar';
import MobileApp from './MobileApp';
import { IconButton } from './IconButton';

import icon_arrow from '../images/right-arrow.svg';
import icon_play from '../images/play-button-round.svg';
import icon_star from '../images/icon-star.svg';
import icon_download from '../images/icon-download.svg';

export default function Intro() {
  return (
    <div className="intro">
      <div className="intro__kopiku">
        <NavBar />
        <div className="intro__kopiku--content">
          <GetFreeApp />
          <div className="order__text">
            Order your coffee with <span>Kopiku</span>
          </div>
          <DownloadORPlay />
          <RatingsAndDownloads />
        </div>
      </div>

      <div className="intro__app">
        <MobileApp />
      </div>
    </div>
  )
}

const GetFreeApp = () => (
  <div className="get-free-app">
    <span>Get free app</span>
    <div className="get-free-app__icon-group">
      <div className="get-free-app__line" />
        <img
          src={icon_arrow}
          alt="Get free app"
          width="50"
          height="20"
          className="get-free-app__icon"
        />
    </div>
  </div>
)

const DownloadORPlay = () => (
  <div className="app__download--play">
    <button>Download App</button>
    <button>
      <img
        src={icon_play}
        alt="play video"
        width="50"
        height="50"
        className="play__video--image"
      />
      <span>Play Video</span>
    </button>
  </div>
)

const RatingsAndDownloads = () => (
  <div className="ratings__downloads">
    <div className="user__ratings">
      <IconButton icon={icon_star} text="4.8" />
      <div className="user__ratings--text">
        User ratings on Playstore
      </div>
    </div>
    <div className="ratings__divider" />
    <div className="total__downloads">
      <IconButton icon={icon_download} text="1.6M" />
      <div className="total__downloads--text">
        Download all over the world
      </div>
    </div>
  </div>
)
