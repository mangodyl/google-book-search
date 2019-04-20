import React from 'react';
import './style.css';

const BookDiv = ({
    title,
    authors,
    description,
    // image,
    link,
    id,
    handleSave
}) => {
    return (
        <div className="book-div" data-id={id}>
            <h4 href={link}>{title}</h4>
            <h5>{authors}</h5>
            {/* <img src={image}/> */}
            <p>{description}</p>
            <button className="btn btn-primary" id={id} onClick={handleSave}>Save</button>
            <hr />
        </div>
    )
}

export default BookDiv;