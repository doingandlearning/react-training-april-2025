import { useState } from "react";
import "./index.css";

export function TypingSpeedTracker() {
  // TODO: Add state for text input
  // TODO: Add state for time left
  // TODO: Add state for tracking whether game is running

  function handleChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    // TODO: Update text input
  }

  function startGame() {
    // TODO: Reset game state and start timer
  }

  return (
    <div className="tracker-container">
      <textarea
        className="textarea"
        // TODO: Make controlled input
        onChange={handleChange}
      />
      <div className="info">
        {/* TODO: Display timer countdown */}
      </div>
      <button onClick={startGame}>Start Game</button>
      <div className="info">
        {/* TODO: Show word count when game ends */}
      </div>
    </div>
  );
}
