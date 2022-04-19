//import Image from "next/image";
//import Link from "./Link";
import download_play from '../images/download-play.png';
import download_apple from '../images/download-apple.png';
import phones from '../images/image-phones-alt.jpg';

export default function DownloadApp() {
    return (
        <div className="download--panel">
            <div className="download__panel--intro">
                <div className="download__panel--intro-header">
                    Download App
                </div>
                <div className="download__panel--intro-text">
                    Download the Kopiku App now to get convenience of
                    ordering your favorite coffee anytime on your phone
                </div>
                <div className="download__panel--intro-buttons">
                  <a href="/">
                      <img
                          src={download_play}
                          alt="Download from apple store"
                          width={150}
                          height={50}
                      />
                  </a>
                  <a href="/">
                      <img
                          src={download_apple}
                          alt="Download from apple store"
                          width={"150"}
                          height={"50"}
                      />
                  </a>
                </div>
            </div>


            <div className="download__panel--image">
                <img
                    src={phones}
                    alt="Mobile app"
                    width={'100%'}
                    height={'100%'}
                />
            </div>
        </div>
    )
}
