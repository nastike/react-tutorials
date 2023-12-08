import { useState } from 'react';
import { MdDeleteForever } from 'react-icons/md';

const FirstComponent = ({
  name,
  courseName,
  subjects,
  institute,
  age,
  isStudent,
}) => {
  const [state, setState] = useState(isStudent);
  const [count, setCount] = useState(age);
  const [message, setMessage] = useState('');
  const [courses, setCourses] = useState(subjects);
  return (
    <div id='mycomponent' style={{ color: state ? 'red' : 'green' }}>
      <p>Example</p>
      <h1>{name}</h1>
      <h2>{courseName}</h2>
      <p>
        Hello my name is {name}, I study {courseName} at {institute}. I am{' '}
        {count} years old. I am{state ? '' : ' not'} a student of following
        subjects:
      </p>
      <input
        type='text'
        placeholder='Enter the Subject here'
        value={message}
        onChange={(e) => {
          setMessage(e.target.value);
        }}
      />
      <button
        onClick={() => {
          setCourses([...courses, message]);
          setMessage('');
        }}
      >
        Add Subject
      </button>
      <button onClick={(e) => setCount(count > 2 ? count - 1 : count)}>
        -
      </button>
      <button onClick={() => setState(!state)}>ChangeStudentStatus</button>
      <button onClick={(e) => setCount(count + 1)}>+</button>
      <ul>
        {courses.map((s, index) => (
          <li key={s}>
            {s}
            <MdDeleteForever
              color='black'
              onClick={(e) => {
                setCourses(courses.filter((sub, i) => i !== index));
              }}
            />
          </li>
        ))}
      </ul>
      <p>git status check and learn new command</p>
    </div>
  );
};
export default FirstComponent;
