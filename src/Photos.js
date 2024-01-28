import React from "react";
import "./Photos.css";

export default function Photos(props) {
  if (props.photos) {
    return (
      <div className="Photos">
        {props.photos.map(function (photo, index) {
          if (index < 6) {
            return (
              <a
                href={photo.src.landscape}
                target="_blank"
                rel="noreferrer"
                key={index}
                title="Open in browser"
              >
                <img src={photo.src.landscape} alt={photo.alt} />
              </a>
            );
          } else {
            return null;
          }
        })}
      </div>
    );
  } else {
    return null;
  }
}
