import './App.css';

import {Card} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Card style={{ width: '80rem', margin: 'auto' }}>
        <Card.Body>
          <Card.Title>Search Entities</Card.Title>
          <Header />
        </Card.Body>
      </Card>
    </div>
  );
}

export default App;
