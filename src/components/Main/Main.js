import React from "react";
import { useState } from "react";
import "./main.css";
import Image from "../Image/Image";
import axios from "axios";

const api = axios.create({
    baseURL: "https://pixabay.com/api/",
});

export default function Main() {
    let [search, setSearch] = useState("");
    let [output, setOutput] = useState([]);
    let apikey = "24176762-411fd9d7d2ee8080115abeeea";
    let getInputValue = (event) => {
        setSearch(event.target.value);
    };
    let handleSubmit = () => {
        api.get("?key=" + apikey + "&q=" + search + "&image_type=photo")
            .then((response) => {
                setOutput(response.data.hits);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    let submit = (e) => {
        e.preventDefault();
        handleSubmit();
    };

    return (
        <React.Fragment>
            <h1>Photo gallery</h1>
            <form className="form-search" onSubmit={submit}>
                <input placeholder="Search a term" id="searchText" type="text" onChange={getInputValue}></input>
                <button type="button" className="btn-style" onClick={handleSubmit}>
                    Search
                </button>
            </form>
            <div className="container-imgs">
                {output.map((item, index) => {
                    return <Image key={index} id={item.id} img={item.largeImageURL} likes={item.likes} views={item.views} downloads={item.downloads} tags={item.tags} user={item.user} />;
                })}
            </div>
        </React.Fragment>
    );
}
