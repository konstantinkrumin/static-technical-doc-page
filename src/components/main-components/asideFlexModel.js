import React from "react";

import Header from "./header";

export default function AsideFlexModel() {
  return (
    <section className="main-section" id="An_aside_on_the_flex_model">
      <Header title="An aside on the flex model" />
      <p>
        When elements are laid out as flexible boxes, they are laid out along
        two axes:
      </p>
      <img
        id="img_3"
        src="https://i.imgur.com/b005LYV.png"
        alt="Layout of the elements in the flexboxes along two axes: main and cross axes"
      />
      <ul>
        <li>
          The <b>main axis</b> is the axis running in the direction the flex
          items are being laid out in (e.g. as rows across the page, or columns
          down the page.) The start and end of this axis are called the{" "}
          <b>main start</b> and <b>main end</b>.
        </li>
        <li>
          The <b>cross axis</b> is the axis running perpendicular to the
          direction the flex items are being laid out in. The start and end of
          this axis are called the <b>cross start</b> and <b>cross end</b>.
        </li>
        <li>
          The parent element that has{" "}
          <code className="code_intext">display: flex</code> set on it (the{" "}
          <a className="section" target="_blank" href="https://mzl.la/2ulMDUf">
            &lt;section&gt;
          </a>{" "}
          in our example) is called the <b>flex container</b>.
        </li>
        <li>
          The items being laid out as flexible boxes inside the flex container
          are called <b>flex items</b> (the{" "}
          <a className="article" target="_blank" href="https://mzl.la/2H6a2LV">
            &lt;article&gt;
          </a>{" "}
          elements in our example).
        </li>
      </ul>
      <p>
        Bear this terminology in mind as you go through subsequent sections. You
        can always refer back to it if you get confused about any of the terms
        being used.
      </p>
    </section>
  );
}
