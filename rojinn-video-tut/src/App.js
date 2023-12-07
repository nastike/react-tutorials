import './App.css';
import FirstComponent from './components/FirstComponent';

function App() {
  return (
    <div className='App'>
      <FirstComponent
        name='Rojinn'
        courseName='MERN'
        age={23}
        isStudent={true}
        details={{
          name: 'abcd',
          bloodGroup: 'O+',
          address: 'Kathmandu-24',
        }}
        subjects={['MondoDB', 'ExpressJS', 'ReactJS', 'NodeJS']}
      />
    </div>
  );
}

export default App;
