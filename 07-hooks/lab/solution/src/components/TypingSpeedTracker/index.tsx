import { useState, useEffect, useRef } from "react";
import "./index.css";

export function TypingSpeedTracker() {
  const [text, setText] = useState("");
  const [timeLeft, setTimeLeft] = useState(60);
  const [isRunning, setIsRunning] = useState(false);
  const timerRef = useRef<number | undefined>(undefined);
  const [userTime, setUserTime] = useState(60)
  const textRef = useRef<HTMLTextAreaElement>(null)

  function handleChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    setText(e.target.value);
  }

  function startGame() {
    setText("");
    setTimeLeft(userTime);
    setIsRunning(true);
  }

  useEffect(() => {
    if (isRunning && timeLeft > 0) {
      timerRef.current = window.setTimeout(() => {
        setTimeLeft((time) => time - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setIsRunning(false);
    }

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [isRunning, timeLeft]);

  function wordCount() {
    if (!textRef.current) return 0
    return textRef.current.value.trim().split(/\s+/).filter(Boolean).length;
  }

  return (
    <div className="tracker-container">
      <textarea
        className="textarea"
        ref={textRef}
        disabled={!isRunning}
      />
      <div className="info">Time Left: {timeLeft} seconds</div>
      <div>
        <input type="number" value={userTime} onChange={(e) => setUserTime(e.target.value)} />
        <button onClick={startGame} disabled={isRunning}>
          Start Game
        </button>
        <button onClick={startGame} disabled={!isRunning}>
          Restart Game
        </button>
      </div>
      {!isRunning && timeLeft !== 60 && (
        <div className="info">Words Typed: {wordCount(text)}</div>
      )}
    </div>
  );
}
