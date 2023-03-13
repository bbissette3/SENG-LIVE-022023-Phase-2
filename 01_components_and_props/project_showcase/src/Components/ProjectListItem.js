import React from "react";

const ProjectListItem = ({ id, name, phase, image, link, about }) => {
    return (
        <li className="card">
            <figure className="image">
                <img src={image} alt={name} />
                <button className="claps">👏{1}</button>
            </figure>
            <section>
                <h4>{name}</h4>
                <p>{about}</p>
                <p>
                    <a href={link}>URL</a>
                </p>
            </section>
        </li>
    )
}

export default ProjectListItem;