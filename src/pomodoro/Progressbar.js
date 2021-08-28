function Progressbar({ focusDuration, breakDuration, session }) {
  return session ? (
    <div className="row mb-2">
      <div className="col">
        <div className="progress" style={{ height: "20px" }}>
          <div
            className="progress-bar"
            role="progressbar"
            aria-valuemin="0"
            aria-valuemax="100"
            aria-valuenow={
              session.label === "Focusing"
                ? (focusDuration * 60 - session.timeRemaining) *
                  (100 / (focusDuration * 60))
                : (breakDuration * 60 - session.timeRemaining) *
                  (100 / (breakDuration * 60))
            } // TODO: Increase aria-valuenow as elapsed time increases
            style={{
              width: `${
                session.label === "Focusing"
                  ? (focusDuration * 60 - session.timeRemaining) *
                    (100 / (focusDuration * 60))
                  : (breakDuration * 60 - session.timeRemaining) *
                    (100 / (breakDuration * 60))
              }%`,
            }} // TODO: Increase width % as elapsed time increases
          />
        </div>
      </div>
    </div>
  ) : null;
}
export default Progressbar;
