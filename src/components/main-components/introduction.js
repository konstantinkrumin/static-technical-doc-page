import React from "react";

import Header from "./header";

export default function Introduction() {
  return (
    <section className="main-section" id="Introduction">
      <Header title="Introduction" />
      <p>
        <a id="flexbox_def_link" target="_blank" href="https://mzl.la/2uuecut">
          Flexbox
        </a>{" "}
        is a one-dimensional layout method for laying out items in rows or
        columns. Items flex to fill additional space and shrink to fit into
        smaller spaces. This article explains all the fundamentals.
      </p>
      <div id="prerequisites_and_objective">
        <p>
          <b>Prerequisites:</b>
        </p>
        <p>
          HTML basics (study{" "}
          <a
            id="intro_to_html_link"
            target="_blank"
            href="https://mzl.la/3bhiupH"
          >
            Introduction to HTML
          </a>
          ), and an idea of how CSS works (study{" "}
          <a
            id="intro_to_css_link"
            target="_blank"
            href="https://mzl.la/38bVy9k"
          >
            Introduction to CSS
          </a>
          .)
        </p>
        <p>
          <b>Objective:</b>
        </p>
        <p>
          To learn how to use the Flexbox layout system to create web layouts.
        </p>
      </div>
    </section>
  );
}
