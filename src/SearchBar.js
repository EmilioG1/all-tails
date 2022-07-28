// import React, { useState } from "react";

// const SearchBar = (props) => {
//   const [searchValue, setSearchValue] = useState('');

//   const handleInputChange = (event) => {
//     setSearchValue(event.target.value)
//   }

//   const handleClearClick = () => {
//     setSearchValue('')
//   }

//   const shouldDisplayButton = searchValue.length > 0

//   const filteredTrails = props.trails.filter((trail) => {
//       return trail.includes(searchValue)
//     })

//   return <div>
//     <input type='text' value={searchValue} onChange={handleInputChange} />
//     {shouldDisplayButton && <button onClick={handleClearClick}>Clear</button>}
    
//     <ul className="SearchBar-list">
//       {filteredTrails.map((trail) => {
//         return <li key={trail}>{trail}</li>
//       })}
//     </ul>
//   </div>
// }

// export default SearchBar;