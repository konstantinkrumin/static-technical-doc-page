import React from "react";

import Header from "./header";

export default function SpecElemLayout() {
  return (
    <section
      className="main-section"
      id="Specifying_what_elements_to_lay_out_as_flexible_boxes"
    >
      <Header title="Specifying what elements to lay out as flexible boxes" />
      <p>
        To start with, we need to select which elements are to be laid out as
        flexible boxes. To do this, we set a special value of display on the
        parent element of the elements you want to affect. In this case we want
        to lay out the{" "}
        <a className="article" target="_blank" href="https://mzl.la/2H6a2LV">
          &lt;article&gt;
        </a>{" "}
        elements, so we set this on the{" "}
        <a className="section" target="_blank" href="https://mzl.la/2ulMDUf">
          &lt;section&gt;
        </a>{" "}
        (which becomes a flex container):
      </p>
      <code className="code_separate">
        {`section {
          \u00A0display: flex;
          }`}
      </code>
      <p>The result of this should be something like so:</p>
      <img
        id="img_2"
        src="https://i.imgur.com/jjk1qDf.png"
        alt="Sample flexbox example 2"
      />
      <p>
        So, this single declaration gives us everything we need — incredible,
        right? We have our multiple column layout with equal sized columns, and
        the columns are all the same height. This is because the default values
        given to flex items (the children of the flex container) are set up to
        solve common problems such as this. More on those later.
      </p>
      <p className="note">
        <b>Note:</b> You can also set a{" "}
        <a id="display" target="_blank" href="https://mzl.la/2ScicIU">
          display
        </a>{" "}
        value of <b>inline-flex</b> if you wish to lay out inline items as
        flexible boxes.
      </p>
    </section>
  );
}
