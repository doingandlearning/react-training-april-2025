import { useState } from "react";
import "./index.css";

type StatusType = "Not Started" | "In Progress" | "Complete" | "Archived"

export function TaskProgress() {
  const [status, setStatus] = useState<StatusType>("Not Started");
  if (Math.random() > 0.5) {
    const [timestamp, setTimestamp] = useState(Date.now())
  }

  function nextStatus() {
    if (status === "Archived") return
    const next = {
      "Not Started": "In Progress",
      "In Progress": "Complete",
      "Complete": "Archived",
      "Archived": "Not Started",
    }[status];
    setStatus(next as typeof status);
    setTimestamp(Date.now())
  }

  return (
    <div className="task-container">
      <div className={`status-box status-${status.toLowerCase().replace(/ /g, "-")}`}>
        {status}
      </div>
      <p>{timestamp}</p>
      <button onClick={nextStatus}>Next Status</button>
    </div>
  );
}
