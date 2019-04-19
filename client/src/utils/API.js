import axios from "axios";

export default {

    getSaved: () => {
        return axios.get("/api/saved")
    },

    saveBook: savedBook => {
        return axios.post("/api/saved", savedBook)
    },

    deleteSaved: id => {
        return axios.delete("/api/saved/" + id)
    },

    searchGoogle: title => {
        const url = "https://www.googleapis.com/books/v1/volumes?q="
        return axios.get(url + title)
    }
}