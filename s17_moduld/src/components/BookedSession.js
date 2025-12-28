
import "./css/mentor.css";




export default function BookedSession({ session, mentor }) {

  return (
    <div className="sessions keret padding">
      <h3>{mentor.mentorName}</h3>
        <div className="button">
        <button className={session==="rejected"?"rejected-button":session==="pending"?"pending-button":"confirmed-button"} >
        {session==="rejected"?"rejected":session==="pending"?"pending confirmation":"confirmed"}
        </button>
      </div>
      <div className="mentor-container">
        <div className="keret">
          <p>date</p>
          <p>
            {new Date(mentor.sessionDate).toLocaleDateString("en-US", {
              weekday: "long",
              year: "numeric",
              month: "short",
              day: "numeric",
            })}{" "}
          </p>
        </div>
        <div className="keret">
          <p>time</p>
          <p>
            {new Date(mentor.sessionDate).toLocaleTimeString("en-US", {
              hour: "numeric",
              minute: "2-digit",
              hour12: true,
            })}
          </p>
        </div>
        <div className="keret">
          <p>duration</p>
          <p>{mentor.durationMinutes} minutes</p>
        </div>
        <div className="keret">
          <p>cost</p>
          <p>{mentor.creditCost} credists</p>
        </div>
      </div>
     

    
    </div>
  );
}
