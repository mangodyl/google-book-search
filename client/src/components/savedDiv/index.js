import React from 'react';
import { Row, Col } from '../Grid';

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
        <div className="book-div container-fluid" data-id={_id}>
            <a href={link}><h4>{title}</h4></a>
            <h5>{authors}</h5>
            <Row>
                <Col size="lg-2">
                    <img src={image} alt="book thumbnail" />
                </Col>

                <Col size="lg-10">
                    <p>{description}</p>
                    <button className="btn btn-danger" onClick={() => handleUnsave(_id)}>Unsave</button>
                    <a href={link}><button className="btn btn-info" href={link}>Link</button></a>
                </Col>
            </Row>
            <hr />
        </div>
    )
}

export default SavedDiv;