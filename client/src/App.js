import React from 'react';
import axios from 'axios';
import DogTable from './components/DogTable';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      breeds: []
    }
    this.getAllDogs = this.getAllDogs.bind(this);
  }

  componentDidMount() {
    this.getAllDogs();
  }

  getAllDogs() {
    axios
    .get('/api/dogs')
    .then(response => {
      this.setState({breeds: response.data});
    })
    .catch(error => {
      console.error('Could not GET ALL dogs: ', error);
    })
  }

  render() {
    return(
    <div>
      <h1>Dog Breeds</h1>
      <div>{this.state.breeds[0].id}</div>
      <div>
        <table className="dog-table">
          <thead>
            <tr>
              <td>ID</td>
              <td>Breed</td>
              <td>Large</td>
            </tr>
          </thead>
          <tbody>
            {this.state.breeds.map(dog => {

              <tr key={dog.id}>
                <td>{dog.id}</td>
                <td>{dog.breed}</td>
                {/* <td>{Boolean(dog.large)}</td> */}
              </tr>

              {/* <DogTable key={dog.id} dog={dog} /> */}
            })}
              <tr>
                {/* <td>{this.state.breeds[0].id}</td> */}
                {/* <td>{this.state.breeds[0].breed}</td> */}
                {/* <td>{Boolean(this.state.breeds[0].large)}</td> */}
              </tr>
          </tbody>
        </table>
      </div>
    </div>)
  }
}

export default App;