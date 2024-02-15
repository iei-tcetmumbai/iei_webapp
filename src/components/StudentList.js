import React from 'react';

export default function StudentList({ arr = [] }) {
  return (
    <div>
      <ul style={{ 'maxWidth': '90vw', 'display': 'flex', 'flexWrap': 'wrap', 'margin': '-2%'}}>
        {arr.map((student, index) => (
          <li  style={{'listStyle': 'none', 'margin': '2%', 'marginLeft': '10%', "justifyContent": "left", 'width': '33%'}} key={index}>{index + 1}. {student}</li>
        ))}
      </ul>
    </div>
  );
}
