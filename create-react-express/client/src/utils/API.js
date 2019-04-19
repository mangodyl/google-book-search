import axios from "axios";

export default {

    getSaved: () => {
        return axios.get("/api/saved")
    },

    saveBook: bookData => {
        return axios.get("/api/saved", bookData)
    },

    deleteSaved: id => {
        return axios.delete("/api/saved/" + id)
    },

    searchGoogle: title => {
        const url = "https://www.googleapis.com/books/v1/volumes?q="
        return axios.get(url + title)
    }
}