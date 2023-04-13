import './App.css';
import SearchBar from './searchBar';
import {useState} from 'react';

function App() {
  const [filters, setFilters] = useState({});

  const updateFilters = (searchParams) => {
    setFilters(searchParams);
  }

  return (
    <div className="App">
      <SearchBar callback={updateFilters} name="TOMAS"></SearchBar>
      <p>Name:{'name' in data ? data['name']: "No data to display"}</p>
      <p>Max Price:{'price' in data ? data['price']: "No data to display"}</p>
      <p>Type:{'type' in data ? data['type']: "No data to display"}</p>
      <p>Brand:{'brand' in data ? data['brand']: "No data to display"}</p>
    </div>
  );
}












export default App;
