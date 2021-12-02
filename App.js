import React from 'react';
import ReactDOM from 'react-dom';
import MedicalTreament from './MedicalTreament';

// Create a component for the main App class
// and render the MedicalTreament
// component inside it
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>Welcome to MedicalTreament Management Platform</h1> <br />
        <MedicalTreament
          TreatId="Alpha"
          TreatCourse="st001"
          Type="CS150"
          Category=""
          Name=""
          StartDate="13/09/2021"
        />
      </div>
    );
  }
}

// Render the main App component inside the root element
ReactDOM.render(<App />, document.getElementById('root'));
