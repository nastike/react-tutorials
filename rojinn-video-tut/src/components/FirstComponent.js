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
    </div>
  );
};
export default FirstComponent;
