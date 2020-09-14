import React from "react";

import Navlink from "./navlink";

export default function Navbar() {
  const NAV_LINKS = [
    {
      href: "#Why_Flexbox?",
      title: "Why Flexbox?"
    },
    {
      href: "#Introducing_a_simple_example",
      title: "Introducing a simple example"
    },
    {
      href: "#Specifying_what_elements_to_lay_out_as_flexible_boxes",
      title: "Specifying what elements to lay out as flexible boxes"
    },
    {
      href: "#An_aside_on_the_flex_model",
      title: "An aside on the flex model"
    },
    {
      href: "#Columns_or_rows?",
      title: "Columns or rows?"
    },
    {
      href: "#Wrapping",
      title: "Wrapping"
    },
    {
      href: "#flex-flow_shorthand",
      title: "flex-flow shorthand"
    },
    {
      href: "#Flexible_sizing_of_flex_items",
      title: "Flexible sizing of flex items"
    },
    {
      href: "#flex:_shorthand_versus_longhand",
      title: "flex: shorthand versus longhand"
    },
    {
      href: "#Horizontal_and_vertical_alignment",
      title: "Horizontal and vertical alignment"
    },
    {
      href: "#Ordering_flex_items",
      title: "Ordering flex items"
    },
    {
      href: "#Nested_flex_boxes",
      title: "Nested flex boxes"
    },
    {
      href: "#Cross_browser_compatibility",
      title: "Cross browser compatibility"
    },
    {
      href: "#Test_your_skills!",
      title: "Test your skills!"
    },
    {
      href: "#Summary",
      title: "Summary"
    },
    {
      href: "#Reference",
      title: "Reference"
    }
  ];

  return (
    <nav id="navbar">
      <header id="page_title">
        <h1>CSS Flexbox</h1>
      </header>
      <a className="nav-link" id="nav_link_1" href="#Introduction">
        Introduction
      </a>
      {NAV_LINKS.map(({ href, title }, key) => (
        <Navlink key={key} href={href} title={title} />
      ))}
    </nav>
  );
}
