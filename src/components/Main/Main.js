import React, { useState } from "react";
import "./main.css";
import Image from "../Image/Image";
import axios from "axios";

const api = axios.create({
    baseURL: "https://pixabay.com/api/",
});

export default function Main() {
    let [search, setSearch] = useState("");
    let [output, setOutput] = useState([]);
    let [loading, setLoading] = useState(true);

    let apikey = "24176762-411fd9d7d2ee8080115abeeea";
    let getInputValue = (event) => {
        setSearch(event.target.value);
    };
    let handleSubmit = () => {
        document.getElementsByClassName("info-text")[0].style.display = "none";
        api.get("?key=" + apikey + "&q=" + search + "&image_type=photo")
            .then((response) => {
                setOutput(response.data.hits);
                setLoading(true);
                document.getElementsByClassName("info-text")[0].style.display = "block";
            })
            .catch((err) => console.log(err));
    };

    let submit = (e) => {
        e.preventDefault();
        setLoading(false);
        handleSubmit();
    };

    return (
        <React.Fragment>
            <h1 id="title">Photo gallery</h1>
            <form id="form-search" onSubmit={submit}>
                <input placeholder="Search a term" id="searchText" type="text" onChange={getInputValue}></input>
                <button type="button" className="btn-style" onClick={handleSubmit}>
                    Search
                </button>
            </form>
            {output.length === 0 ? <p className="info-text">No results found</p> : <p className="info-text">Results:</p>}
            <div id="container-imgs">
                {loading
                    ? output.map((item, index) => {
                          return (
                              <Image
                                  key={index}
                                  reference={index}
                                  id={item.id}
                                  img={item.largeImageURL}
                                  likes={item.likes}
                                  views={item.views}
                                  downloads={item.downloads}
                                  tags={item.tags}
                                  user={item.user}
                              />
                          );
                      })
                    : "Loading..."}
            </div>
        </React.Fragment>
    );
}
