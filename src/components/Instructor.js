import React from "react";

function Instructor({ firstName, lastName, email, dob, bio, linkedin }) {
  return (
    <div>
      <h3>
        {firstName} {lastName} ({dob})
      </h3>
      <div>
        Email: {email} | {linkedin}
      </div>
      <div>{bio}</div>
    </div>
  );
}

export default Instructor;
