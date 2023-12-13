import { useState, useEffect, } from 'react'
import './App.css'
import { OneSignalInitial } from './OneSignalInitial'
 
function App() {
  
  // タップカウントステート
  const [count, setCount] = useState(0)
  // 時間のステート
  const [time, setTime] = useState(String(10000/1000))
  // 実行中なのか状態ステート
  const [runing, setRuning] = useState(false)
  // タップするボタンの活性状態ステート
  const [tapDesabled, setTapDesabled] = useState(true)
  // 実行ボタンのDisplay状態ステート
  const [stBtnDisplay, setStBtnDisplay] = useState('inline-block')
  // スタートボタンのテキストステート
  const [stBtnText, setStBtnText] = useState('START')
  
  // 初回設定
  const initGame = () => {
    setCount(0)
    setTime(String(10000/1000));
  }
  // Tap実行処理
  const tapClick = () => {
    console.log(runing);
    if (!runing) return
    setCount((count) => count + 1)
    return
  }
  // スタートボタンの処理
  const startBtn = () => {
    // 最初に戻す
    initGame()
    // 実行中にする
    setRuning(true)
    // デザインの変更
    setTapDesabled(false)
    // デザインの変更
    setStBtnDisplay('none')

    return undefined
  }

  // タイマーの動き
  useEffect(() => {

    let timerInterval: number | undefined = undefined;
    // タイマーが動いている場合
    if (runing) {
      console.log("スタート・ストップが切り替わりました");
      let stopTime = '10';
      timerInterval = window.setInterval(() => {
        if (Number(stopTime) !== 0) {
          setTime((time) =>  {
            stopTime = ((Number(time) * 1000 - 10)/ 1000).toFixed(2)
            return stopTime
          })
        }

        if (Number(stopTime) === 0) {
          // 0秒になったら終了
          setRuning(false)
          setTapDesabled(false)
          setStBtnDisplay('inline-block')
          setStBtnText('もう一回')
        }
      }, 10)
    }
    // クリーンアップ（タイマーをクリア）
    return () => {
      clearInterval(timerInterval);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [runing]);


  return (
    <>
      <OneSignalInitial />
      <section className="container">
        <h1 className="title">10秒で何回タップできるか</h1>
        <button  className="btn-tap" disabled={tapDesabled} onClick={() => {tapClick()}}>
          <span id="js-count">{count}</span>
          <br/>タップ!!
        </button>
        <div className="time">残り時間 <span id="js-time">{time}</span> 秒</div>
        <button  className="btn"  style={{display: stBtnDisplay}} onClick={startBtn}>{stBtnText}</button>
      </section>{runing}
    </>
  )
}

export default App
