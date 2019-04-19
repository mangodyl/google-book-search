import React from 'react';

const SavedDiv = ({
    title,
    authors,
    description,
    image,
    link,
    _id,
    handleUnsave
}) => {
    return (
        <div className="book-div" data-id={_id}>
            <h5 href={link}>{title}</h5>
            <h6>{authors}</h6>
            <img src={image} alt="book thumbnail"/>
            <p>{description}</p>
            <button className="btn btn-danger" onClick={() => handleUnsave(_id)}>Unsave</button>
            <hr />
        </div>
    )
}

export default SavedDiv;