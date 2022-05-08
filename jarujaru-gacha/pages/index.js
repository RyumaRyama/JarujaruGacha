import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <>
      <h1 className={styles.title}>ジャルジャルの奴ガチャ作る奴</h1>
      <div className={styles.videoContainer}>
        <div className={styles.video}>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/NE7uHTxUJgM" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
        </div>
      </div>
      <div className={styles.buttonContainer}>
        <button className={styles.yatsuButton} type='button'>奴</button>
      </div>
    </>
  )
}
