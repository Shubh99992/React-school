import React from 'react'


const StudentInfo = ({ name, age }) => {
  return (
    <div>
      <h2>Student Info:</h2>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
    </div>
  );
};

const test = () => {
  return (
    <div>
      <StudentInfo name="John" age={17} />
    </div>
  );
};

export default test;
