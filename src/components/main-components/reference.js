import React from "react";

import Header from "./header";

export default function Reference() {
  return (
    <section className="main-section" id="Reference">
      <Header title="Reference" />
      <p>
        All the documentation in this page is taken from{" "}
        <a
          className="reference-link"
          target="_blank"
          href="https://mzl.la/31AVkpK"
        >
          MDN
        </a>
        .
      </p>
    </section>
  );
}
