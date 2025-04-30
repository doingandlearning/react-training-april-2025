import { useState, useEffect, useRef } from "react";
import "./index.css";

export function TypingSpeedTracker() {
  const [text, setText] = useState("");
  const [timeLeft, setTimeLeft] = useState(60);
  const [isRunning, setIsRunning] = useState(false);
  const timerRef = useRef<number | undefined>(undefined);

  function handleChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    setText(e.target.value);
  }

  function startGame() {
    setText("");
    setTimeLeft(60);
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

  function wordCount(text: string) {
    return text.trim().split(/\s+/).filter(Boolean).length;
  }

  return (
    <div className="tracker-container">
      <textarea
        className="textarea"
        value={text}
        onChange={handleChange}
        disabled={!isRunning}
      />
      <div className="info">Time Left: {timeLeft} seconds</div>
      <button onClick={startGame} disabled={isRunning}>
        Start Game
      </button>
      {!isRunning && timeLeft !== 60 && (
        <div className="info">Words Typed: {wordCount(text)}</div>
      )}
    </div>
  );
}
