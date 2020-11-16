import React from 'react'

const Comment = (props) => {
    return (
        <div>
            <ul>
    <li>{props.user}</li>
            </ul>
            {props.comment}
        </div>
    )
}

export default Comment