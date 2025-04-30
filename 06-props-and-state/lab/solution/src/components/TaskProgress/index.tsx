import { useState } from "react";
import "./index.css";

export function TaskProgress() {
  const [status, setStatus] = useState<"Not Started" | "In Progress" | "Complete" | "Archived">("Not Started");

  function nextStatus() {
    const next = {
      "Not Started": "In Progress",
      "In Progress": "Complete",
      "Complete": "Archived",
      "Archived": "Not Started",
    }[status];
    setStatus(next as typeof status);
  }

  return (
    <div className="task-container">
      <div className={`status-box status-\${status.toLowerCase().replace(/ /g, "-")}`}>
        {status}
      </div>
      <button onClick={nextStatus}>Next Status</button>
    </div>
  );
}
