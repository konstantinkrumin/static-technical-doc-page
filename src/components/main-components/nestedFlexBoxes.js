import React from "react";

import Header from "./header";

export default function NestedFlexBoxes() {
  return (
    <section className="main-section" id="Nested_flex_boxes">
      <Header title="Nested flex boxes" />
      <p>
        It is possible to create some pretty complex layouts with flexbox. It is
        perfectly ok to set a flex item to also be a flex container, so that its
        children are also laid out like flexible boxes. Have a look at{" "}
        <a
          className="complex-flexbox.html"
          target="_blank"
          href="http://bit.ly/31EO50c"
        >
          complex-flexbox.html
        </a>{" "}
        (
        <a
          className="see_it_live_also"
          target="_blank"
          href="http://bit.ly/39gr3zd"
        >
          see it live also
        </a>
        ).
      </p>
      <img
        id="img_8"
        src="https://i.imgur.com/EK3tk4P.png"
        alt="Complex flexbox example"
      />
      <p>
        The HTML for this is fairly simple. We've got a{" "}
        <a className="section" target="_blank" href="https://mzl.la/2ulMDUf">
          &lt;section&gt;
        </a>{" "}
        element containing three{" "}
        <a className="article" target="_blank" href="https://mzl.la/2H6a2LV">
          &lt;article&gt;
        </a>
        s. The third{" "}
        <a className="article" target="_blank" href="https://mzl.la/2H6a2LV">
          &lt;article&gt;
        </a>{" "}
        contains three{" "}
        <a className="div" target="_blank" href="https://mzl.la/2UCZY5e">
          &lt;div&gt;
        </a>
        s.
      </p>
      <p>Let's look at the code we've used for the layout.</p>
      <p>
        First of all, we set the children of the{" "}
        <a className="section" target="_blank" href="https://mzl.la/2ulMDUf">
          &lt;section&gt;
        </a>{" "}
        to be laid out as flexible boxes.
      </p>
      <code className="code_separate">
        {`section {
            \u00A0display: flex;
          }`}
      </code>
      <p>
        Next, we set some flex values on the{" "}
        <a className="article" target="_blank" href="https://mzl.la/2H6a2LV">
          &lt;article&gt;
        </a>
        s themselves. Take special note of the 2nd rule here — we are setting
        the third{" "}
        <a className="article" target="_blank" href="https://mzl.la/2H6a2LV">
          &lt;article&gt;
        </a>{" "}
        to have its children laid out like flex items too, but this time we are
        laying them out like a column.
      </p>
      <code className="code_separate">
        {`article {
            \u00A0flex: 1 200px;
          }`}
      </code>
      <br />
      <code className="code_separate">
        {`article:nth-of-type(3) {
            \u00A0flex: 3 200px;
            \u00A0display: flex;
            \u00A0flex-flow: column;
          }`}
      </code>
      <p>
        Next, we select the first{" "}
        <a className="div" target="_blank" href="https://mzl.la/2UCZY5e">
          &lt;div&gt;
        </a>
        . We first use <code>flex:1 100px;</code> to effectively give it a
        minimum height of 100px, then we set its children (the{" "}
        <a className="button" target="_blank" href="https://mzl.la/2UCZY5e">
          &lt;button&gt;
        </a>{" "}
        elements) to also be laid out like flex items. Here we lay them out in a
        wrapping row, and align them in the center of the available space like
        we did in the individual button example we saw earlier.
      </p>
      <code className="code_separate">
        {`article:nth-of-type(3) div:first-child {
            \u00A0flex: 1 100px;
            \u00A0display: flex;
            \u00A0flex-flow: row wrap;
            \u00A0align-items: center;
            \u00A0justify-content: space-around;
          }`}
      </code>
      <p>
        Finally, we set some sizing on the button, but more interestingly we
        give it a flex value of 1 auto. This has a very interesting effect,
        which you'll see if you try resizing your browser window width. The
        buttons will take up as much space as they can and sit as many on the
        same line as they can, but when they can no longer fit comfortably on
        the same line, they'll drop down to create new lines.
      </p>
      <code className="code_separate">
        {`button {
            \u00A0flex: 1 auto;
            \u00A0margin: 5px;
            \u00A0font-size: 18px;
            \u00A0line-height: 1.5;
          }`}
      </code>
    </section>
  );
}
