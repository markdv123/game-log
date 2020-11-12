import React from 'react'

const Search = (props) => (
  <form onSubmit={props.onSubmit}>
    <input 
      type="text" 
      name="search" 
      value={props.value} 
      placeholder="Search Games" 
      onChange={props.onChange}></input>
    <button type="submit">Search</button>
  </form>
)

export default Search