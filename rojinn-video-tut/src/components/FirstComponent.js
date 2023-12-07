import { useState } from 'react';
const FirstComponent = ({ name, courseName, subjects, institute, age }) => {
  const [a, b] = useState(false);
  return (
    <div>
      <p>Example</p>
      <h1>{name}</h1>
      <h2>{courseName}</h2>
      <p>
        Hello my name is {name}, I study {courseName} at {institute}. I am {age}{' '}
        years old. I am{a ? '' : ' not'} a student of following subjects:
      </p>
      <button onClick={() => b(!a)}>ChangeStudentStatus</button>
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
