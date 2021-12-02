import React from 'React';

// Create a component for the
// MedicalTreament class
// with the correct props values
class MedicalTreatment extends 
React.Component {
  render() {
    return (
      <div>
        <h1>Treat Id: {this.props.TreatId}</h1>
        <h1>TreatCourse Id: {this.props.TreatCourseId}</h1>
        <h1>Type: {this.props.Type}</h1>
        <h1>Category: {this.props.Category}</h1>
        <h1>Name:
          {this.props.Name}
          </h1>
          <h1>StartDate 
            {this.props.StartDate}
            </h1>

      </div>
    );
  }
}

// Export the component
export default MedicalTreament;