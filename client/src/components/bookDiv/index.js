import React from 'react';
import { Row, Col } from '../Grid';
import './style.css';

const BookDiv = ({
    title,
    authors,
    description,
    image,
    link,
    id,
    handleSave
}) => {
    return (
        <div className="book-div container-fluid" data-id={id}>
            <a href={link}><h4>{title}</h4></a>
            <h5>{authors}</h5>
            <Row>
                <Col size="lg-2">
                    {image && image.imageLinks && image.imageLinks.thumbnail && <img href={link} alt="book thumbnail" src={image.imageLinks.thumbnail}/>}
                </Col>
                <Col size="lg-10">
                    <p>{description}</p>
                    <button className="btn btn-primary" id={id} onClick={handleSave}>Save</button>
                    <a href={link}><button className="btn btn-info" href={link}>Link</button></a>
                </Col>
            </Row>
            <hr />
        </div>
    )
}

export default BookDiv;