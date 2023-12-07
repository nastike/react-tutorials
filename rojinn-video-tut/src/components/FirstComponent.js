const FirstComponent = (props) => {
  return (
    <div>
      <p>Example</p>
      <h1>{props.name}</h1>
      <h2>{props.courseName}</h2>
      <ul>
        {props.subjects.map((s) => (
          <li key={s}>{s}</li>
        ))}
      </ul>
      <p>git status check and learn new command</p>
    </div>
  );
};
export default FirstComponent;
