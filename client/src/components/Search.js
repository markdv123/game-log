import React from 'react'

const Search = (props) => (
  <form onSubmit={props.onSubmit}>
    <input 
      type="text" 
      name="search" 
      value={props.value} 
      placeholder="Search Games" 
      onChange={props.onChange}></input>
    <button class="waves-effect waves-light btn" type="submit"><i class="material-icons left">search</i>Search</button>
  </form>
)

export default Search