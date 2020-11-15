import React from 'react'

const Post = (props) => {
  return (
    <div className="row">
    <div className="col s12 m6">
      <div className="card">
        <div className="card-image">
          <img atl="game-image" src={props.image} />
        </div>
        <div className="card-content">
          <h5>{props.title}</h5>
          <p>Post by {props.username}</p>
        </div>
        <div className="card-action">
          <a href="#">View Full Post</a>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Post