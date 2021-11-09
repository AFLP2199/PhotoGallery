import React from "react";
import "./image.css";

export default function Image(props) {
    let title = document.getElementById("title");
    let formsearch = document.getElementById("form-search");
    let images = document.getElementsByClassName("img-block");
    function fullscreenImage(id, reference) {
        let imgblock = document.getElementById(id);
        let imgcontainer = document.getElementById(reference);
        for (let i = 0; i < images.length; i++) {
            if (images[i] !== imgblock) {
                images[i].classList.add("block-blur");
            }
        }
        imgcontainer.getElementsByClassName("closeMenu")[0].style.display = "block";
        title.style.filter = "blur(7.5px)";
        formsearch.style.filter = "blur(7.5px)";
        imgblock.classList.remove("block-hide");
        imgblock.classList.add("block-active");
        imgcontainer.classList.remove("hide-container");
        imgcontainer.classList.add("active-container");
    }

    function closeImage(id, reference) {
        let imgblock = document.getElementById(id);
        let imgcontainer = document.getElementById(reference);
        for (let i = 0; i < images.length; i++) {
            images[i].classList.remove("block-blur");
        }
        imgcontainer.getElementsByClassName("closeMenu")[0].style.display = "none";
        title.style.filter = "blur(0px)";
        formsearch.style.filter = "blur(0px)";
        imgblock.classList.replace("block-active", "block-hide");
        imgcontainer.classList.replace("active-container", "hide-container");
    }

    return (
        <React.Fragment>
            <div className="img-container" id={props.reference}>
                <div className="img-block" id={props.id}>
                    <div className="closeMenu" onClick={() => closeImage(props.id, props.reference)}>
                        <i className="fas fa-times-circle"></i>
                    </div>
                    <img src={props.img} alt={props.id} onClick={() => fullscreenImage(props.id, props.reference)} />
                    <ul>
                        <li>
                            <i className="fas fa-heart"></i>
                            {props.likes}
                        </li>
                        <li>
                            <i className="far fa-eye"></i>
                            {props.views}
                        </li>
                        <li>
                            <i className="fas fa-download"></i>
                            {props.downloads}
                        </li>
                    </ul>
                    <p>
                        <b>Photo by: </b>
                        {props.user}
                    </p>
                    <ul>
                        {props.tags.split(",").map((item, index) => {
                            return (
                                <li className="tag" key={index}>
                                    #{item.trim()}
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </React.Fragment>
    );
}
