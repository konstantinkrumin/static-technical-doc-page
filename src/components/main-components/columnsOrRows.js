import React from "react";

import Header from "./header";

export default function ColumnsOrRows() {
  return (
    <section className="main-section" id="Columns_or_rows?">
      <Header title="Columns or rows?" />
      <p>
        Flexbox provides a property called{" "}
        <a
          className="flex-direction"
          target="_blank"
          href="https://mzl.la/2vUynlw"
        >
          flex-direction
        </a>{" "}
        that specifies what direction the main axis runs in (what direction the
        flexbox children are laid out in) — by default this is set to row, which
        causes them to be laid out in a row in the direction your browser's
        default language works in (left to right, in the case of an English
        browser).
      </p>
      <p>
        Try adding the following declaration to your{" "}
        <a className="section" target="_blank" href="https://mzl.la/2ulMDUf">
          &lt;section&gt;
        </a>{" "}
        rule:
      </p>
      <code className="code_separate">flex-direction: column;</code>
      <p>
        You'll see that this puts the items back in a column layout, much like
        they were before we added any CSS. Before you move on, delete this
        declaration from your example.
      </p>
      <p className="note">
        <b>Note:</b> You can also lay out flex items in a reverse direction
        using the <b>row-reverse</b> and <b>column-reverse</b> values.
        Experiment with these values too!
      </p>
    </section>
  );
}
