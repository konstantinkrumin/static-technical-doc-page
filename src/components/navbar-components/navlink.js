import React from "react";

export default function Navlink(props) {
  return (
    <a className="nav-link" href={props.href}>
      {props.title}
    </a>
  );
}
