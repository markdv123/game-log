import React from 'react'

const Search = (props) => (
  <form onSubmit={props.onSubmit}>
    <input 
      type="text" 
      name="search" 
      value={props.value} 
      placeholder="Search Games" 
      onChange={props.onChange}></input>
    <button className="waves-effect waves-light btn" style={{marginLeft: '10px'}} type="submit"><i className="material-icons left">search</i>Search</button>
  </form>
)

export default Search