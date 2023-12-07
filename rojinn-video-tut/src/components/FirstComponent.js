const FirstComponent = (abc) => {
  return (
    <div>
      <p>Example</p>
      <h1>{abc.name}</h1>
      <h2>{abc.courseName}</h2>
      <ul>
        <li>{abc.subjects[0]}</li>
        <li>{abc.subjects[1]}</li>
        <li>{abc.subjects[2]}</li>
        <li>{abc.subjects[3]}</li>
        <li>{abc.subjects[4]}</li>
      </ul>
    </div>
  );
};
export default FirstComponent;
