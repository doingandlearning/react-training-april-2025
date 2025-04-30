// TODO: Import useState
import "./index.css";

export function TaskProgress() {
  // TODO: Add useState for status and delete the status constant here
  const status = ""

  // TODO: Create function to rotate state (valid states are: )
  return (
    <div className="task-container">
      <div className={`status-box status-${status.toLowerCase().replace(/ /g, "-")}`}>
        {status}
      </div>

      {/* TODO: Add your function from above */}
      <button onClick={() => { }}>Next Status</button>
    </div>
  );
}
