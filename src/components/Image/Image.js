import React from "react";
import "./image.css";

export default function Image(props) {
    return (
        <React.Fragment>
            <div className="img-block">
                <img src={props.img} alt={props.id} />
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
        </React.Fragment>
    );
}
