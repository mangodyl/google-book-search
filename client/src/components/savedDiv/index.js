import React from 'react';

const SavedDiv = ({
    title,
    authors,
    description,
    // image,
    link,
    id,
    handleUnsave
}) => {
    return (
        <div className="book-div" data-id={_id}>
            <h5 href={link}>{title}</h5>
            <h6>{authors}</h6>
            {/* <img src={image}/> */}
            <p>{description}</p>
            <button className="btn btn-danger" id={id} onClick={handleUnsave}>Unsave</button>
            <hr />
        </div>
    )
}

export default SavedDiv;