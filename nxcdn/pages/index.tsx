// import { spawnSync } from 'child_process'
import type { NextPage } from 'next'
import Head from 'next/head'
// import Image from 'next/image'
import { useEffect, useState } from 'react'
import styles from '../styles/Home.module.scss'
import styles2 from '../styles/Time.module.scss'

const Home: NextPage = () => {
  const [partyTime, setPartytime] = useState(false)
  const [days, setDays] = useState(0)
  const [hours, setHours] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(0)

  useEffect(() => {
    const target = new Date("12/31/2021 23:59:59")
    const interval = setInterval(() => {
      const now = new Date()
      const differrence = target.getTime() - now.getTime()
      const d = Math.floor(differrence / (1000 * 60 * 60 * 24))
      setDays(d);
      const h = Math.floor(
        (differrence % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      setHours(h);
      const m = Math.floor(
        (differrence % (1000 * 60 * 60)) / (1000 * 60)
      );
      setMinutes(m);
      const s = Math.floor(
        (differrence % (1000 * 60)) / 1000
      );
      setSeconds(s);
      if (d <= 0 && h <= 0 && m <= 0 && s <= m) {
        setPartytime(true);
      }
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className={styles.container}>
      <Head>
        <title>นับถอยหลังวันปีใหม่ | NEiX</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {partyTime ? (
        <div>
          <h1>happy new year!</h1>
        </div>
      ) : (

        <main className={styles.main}>
          <div className='nxtime-warpper'>
            <div className={styles2.nxtimeinner}>
              <div className={styles2.nxtimesegment}>
                <span className={styles2.time}>{days}</span>&nbsp;
                <br />
                <span className={styles2.label}>วัน</span>
              </div>
              <span className={styles2.divider}>:</span>
              <div className={styles2.nxtimesegment}>
                <span className={styles2.time}>{hours}</span>&nbsp;
                <br />
                <span className={styles2.label}>ชั่วโมง</span>
              </div>
              <span className={styles2.divider}>:</span>
              <div className={styles2.nxtimesegment}>
                <span className={styles2.time}>{minutes}</span>&nbsp;
                <br />
                <span className={styles2.label}>นาที</span>
              </div>
              <span className={styles2.divider}>:</span>
              <div className={styles2.nxtimesegment}>
                <span className={styles2.time}>{seconds}</span>&nbsp;
                <br />
                <span className={styles2.label}>วินาที</span>
              </div>
            </div>
          </div>

        </main>)}

    </div>
  )
}

export default Home
