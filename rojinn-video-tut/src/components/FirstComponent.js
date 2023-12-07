const FirstComponent = ({ name, courseName, subjects }) => {
  return (
    <div>
      <p>Example</p>
      <h1>{name}</h1>
      <h2>{courseName}</h2>
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
