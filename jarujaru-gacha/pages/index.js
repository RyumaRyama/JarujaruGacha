import { createElement, useState } from 'react';
import styles from '../styles/Home.module.css';
import honkiNeta from '../public/video_ids/honki_neta.json';
import bonNo from '../public/video_ids/bon_no.json';
import netaNoTane from '../public/video_ids/neta_no_tane.json';

export default function Home() {
  const createVideoIframe = (id) => {
    return (
      <iframe
        width="560"
        height="315"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        src={"https://www.youtube.com/embed/"+id}
      ></iframe>
    )
  }

  const [video, setVideo] = useState(createVideoIframe('NE7uHTxUJgM'));

  const yatcuButtonClick = () => {
    const videoList = [
      ...honkiNeta,
      ...bonNo,
      ...netaNoTane,
    ]
    const videoNum = videoList.length;
    const index = Math.floor(Math.random() * videoNum);
    setVideo(createVideoIframe(videoList[index]));
  }

  return (
    <div className={styles.content}>
      <style global jsx>{`
        html,
        body,
        body > div:first-child,
        div#__next,
        div#__next > div {
          height: 100%;
        }
      `}</style>
      <div className={styles.pageTitle}>
        <h1>ジャルジャルの奴ガチャ</h1>
      </div>
      <div className={styles.videoContainer}>
        <div id="video" className={styles.video}>
          {video}
        </div>
      </div>
      <div className={styles.videoTitle}>
        <h2>〇〇な奴</h2>
      </div>
      <div className={styles.buttonContainer}>
        <button
          className={styles.yatsuButton}
          type='button'
          onClick={yatcuButtonClick}
        >
          ガチャる奴
        </button>
      </div>
    </div>
  )
}
