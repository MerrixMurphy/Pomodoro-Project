import { minutesToDuration } from "../utils/duration";
import { secondsToDuration } from "../utils/duration";

function Timer({ session, breakDuration, focusDuration }) {
  return (
    <div className="col">
      {/* TODO: Update message below to include current session (Focusing or On Break) total duration */}
      <h2 data-testid="session-title">
        {session.label} for{" "}
        {session.label === "On Break"
          ? minutesToDuration(breakDuration)
          : minutesToDuration(focusDuration)}{" "}
        minutes
      </h2>
      {/* TODO: Update message below correctly format the time remaining in the current session */}
      <p className="lead" data-testid="session-sub-title">
        {secondsToDuration(session.timeRemaining)} remaining
      </p>
    </div>
  );
}

export default Timer;
