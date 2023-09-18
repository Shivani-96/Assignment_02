import React, { useState } from 'react';
import './CustomDropdown.css';

const CustomDropdown = ({ options, multiSelect, searchable, sortable }) => {
  const [selectedItems, setSelectedItems] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortedOptions, setSortedOptions] = useState(options);


  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const toggleItem = (item) => {
    if (multiSelect) {
      if (selectedItems.includes(item)) {
        setSelectedItems(selectedItems.filter((selected) => selected !== item));
      } else {
        setSelectedItems([...selectedItems, item]);
      }
    } else {
      setSelectedItems([item]);
      setIsOpen(false);
    }
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSort = () => {
    const sorted = [...sortedOptions].sort();
    setSortedOptions(sorted);
  };

  const renderDropdownItems = () => {
    const filteredOptions = sortedOptions.filter((option) =>
      option.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return filteredOptions.map((item) => (
      <div
        key={item}
        className={`dropdown-item ${selectedItems.includes(item) ? 'selected' : ''}`}
        onClick={() => toggleItem(item)}
      >
        {item}
      </div>
    ));
  };

  return (
    <div className="custom-dropdown">
      <div className="dropdown-header" onClick={toggleDropdown}>
        <div className="selected-items">
          {selectedItems.map((item) => (
            <span key={item} className="selected-item">
              {item}
            </span>
          ))}
        </div>
        <div className="dropdown-icon">{isOpen ? '▲' : '▼'}</div>
      </div>
      {isOpen && (
        <div className="dropdown-list">
          {searchable && (
            <input
              className='search-box'
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={handleSearch}
            />
          )}
          {sortable && (
            <button onClick={handleSort} className="sort-button">
              Sort
            </button>
          )}
          {renderDropdownItems()}
        </div>
      )}
    </div>
  );
};

export default CustomDropdown;