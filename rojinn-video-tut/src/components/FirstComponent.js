import { useState } from 'react';
const FirstComponent = ({ name, courseName, subjects, institute, age }) => {
  const [state, setState] = useState(false);
  return (
    <div id='mycomponent' style={{ color: state ? 'red' : 'green' }}>
      <p>Example</p>
      <h1>{name}</h1>
      <h2>{courseName}</h2>
      <p>
        Hello my name is {name}, I study {courseName} at {institute}. I am {age}{' '}
        years old. I am{state ? '' : ' not'} a student of following subjects:
      </p>
      <button onClick={() => setState(!state)}>ChangeStudentStatus</button>
      <ul>
        {subjects.map((s) => (
          <li key={s}>{s}</li>
        ))}
      </ul>
      <p>git status check and learn new command</p>
    </div>
  );
};
export default FirstComponent;
