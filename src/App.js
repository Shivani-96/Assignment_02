import React from 'react';
import './App.css';
import CustomDropdown from './CustomDropdown';

const App = () => {
  const options = ['Option 1', 'Option 2', 'Option 3', 'Option 4','Hello', 'World','Hi'];
 
  return (
    <div className="App">
      <CustomDropdown
        options={options}
        multiSelect={true}
        searchable={true}
        sortable={true}
      />
    </div>
  );
};

export default App;
