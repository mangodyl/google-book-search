import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import BookDiv from "../components/bookDiv";
import Nav from "../components/Nav";
import API from '../utils/API';

let searchStyle = {
    padding: '5px',
    marginTop: '25px',
    border: '1px solid #2D3142',
    maxWidth: '300px'
}

let resultStyle = {
    textAlign: 'left'
}

class Search extends Component {
    state = {
        books: [],
        search: ""
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    }

    handleBookSearch = event => {
        event.preventDefault();
        if (this.state.search) {
            API.searchGoogle(this.state.search)
                .then(res => {
                    console.log(res.data.items);
                    this.setState({
                        books: res.data.items,
                        search: ""
                    })
                })
                .catch(err => console.log(err))
        }
    }

    handleSave = bookData => {
        API.saveBook(bookData)
            .then(res => alert("Book Saved!"))
            .catch(err => console.log(err));
    }

    render() {
        return (
            <div>
                <Nav />
                <Container fluid>
                    <Jumbotron>
                        <h1>Google Book Search</h1>
                        <h3>Find books. Save books. Cook books.</h3>
                        <h5>I don't judge...</h5>
                        <form>
                            <input 
                                style={searchStyle} 
                                name="search" 
                                value={this.state.search} 
                                onChange={this.handleInputChange}
                                type="text" 
                                placeholder="Search.." 
                            />
                            <button
                                className="btn btn-primary" 
                                onClick={this.handleBookSearch}
                            >Go!</button>
                        </form>
                    </Jumbotron>

                    <Jumbotron >
                        <div style={resultStyle}>
                            <div>
                            {this.state.books.length ? (
                                this.state.books.map(book => {
                                    const info = book.volumeInfo
                                    // console.log(info.imageLinks.thumbnail)
                                    return (
                                        <BookDiv
                                            key={book._id}
                                            id={book._id}
                                            title={info.title}
                                            authors={info.authors}
                                            description={info.description}
                                            // image={info.imageLinks.thumbnail}
                                            link={info.infoLink}
                                        />
                                    )
                                })
                            ) : (
                                    <h3 className="text-center no-book-font">Let us know what book you are looking for.</h3>
                                )
                            }
                            </div>
                        </div>
                        
                    </Jumbotron>
                </Container>
            </div>
            
        )
    }
}

export default Search;