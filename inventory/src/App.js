import './App.css';
import SearchBar from './searchBar';
import {useState} from 'react';
import AddItem from './addItem';


function App() {
  const [filters, setFilters] = useState({});
  const [data, setData] = useState({items:[]});
  const updateFilters = (searchParams) => {
    setFilters(searchParams);
  };

  const addItemsToData = (item) =>{
    let items = data["items"];
    items.push(item);
    setData({items:items});
    console.log(data);
  };



  return (
    <div className="App">
      <SearchBar updateSearchParams={updateFilters} name="TOMAS"></SearchBar>
      <AddItem  addItem={addItemsToData}/>
    </div>
  );
}












export default App;
