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
          <a onClick={props.onClick}>View Full Post</a>
          <a href={`/users/${props.username}`}>View User</a>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Post