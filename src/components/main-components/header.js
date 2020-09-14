import React from 'react';

export default function Header(props) {
  return (
    <header className="section_header">
      <h2>{props.title}</h2>
    </header>
  );
}
