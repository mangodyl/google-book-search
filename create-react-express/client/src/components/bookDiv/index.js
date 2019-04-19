import React from 'react';
import './style.css';

const BookDiv = ({
    title,
    authors,
    description,
    // image,
    link,
    handleSave
}) => {
    return (
        <div className="book-div">
            <h5 href={link}>{title}</h5>
            <h6>{authors}</h6>
            {/* <img src={image}/> */}
            <p>{description}</p>
            <btn className="btn btn-primary" onClick={handleSave}>Save</btn>
            <hr />
        </div>
    )
}

export default BookDiv;