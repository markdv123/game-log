import React from 'react'

const Comment = (props) => {
    return (
        <div className="comments">
            <p>{props.user}:</p>
            <p style={{'marginLeft': '10px'}}>{props.comment}</p>
            {/* <a className="waves-effect waves-light btn-small" style={{ 'marginLeft': '10px'}} onClick={() => { this.deleteComment() }}><i class="material-icons left">delete</i>Delete</a>          */}
        </div>
    )
}

export default Comment