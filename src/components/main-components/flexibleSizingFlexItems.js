import React from "react";

import Header from "./header";

export default function FlexibleSizingFlexItems() {
  return (
    <section className="main-section" id="Flexible_sizing_of_flex_items">
      <Header title="Flexible sizing of flex items" />
      <p>
        Let's now return to our first example, and look at how we can control
        what proportion of space flex items take up. Fire up your local copy of{" "}
        <a
          className="flexbox0.html"
          target="_blank"
          href="http://bit.ly/2OBTKi2"
        >
          flexbox0.html
        </a>
        , or take a copy of{" "}
        <a
          className="flexbox1.html"
          target="_blank"
          href="http://bit.ly/39hbKpS"
        >
          flexbox1.html
        </a>{" "}
        as a new starting point (
        <a className="see_it_live" target="_blank" href="http://bit.ly/3bj6wfj">
          see it live
        </a>
        ).
      </p>
      <p>First, add the following rule to the bottom of your CSS:</p>
      <code className="code_separate">
        {`article {
            \u00A0flex: 1;
          }`}
      </code>
      <p>
        This is a unitless proportion value that dictates how much of the
        available space along the main axis each flex item will take up. In this
        case, we are giving each{" "}
        <a className="article" target="_blank" href="https://mzl.la/2H6a2LV">
          &lt;article&gt;
        </a>{" "}
        element a value of 1, which means they will all take up an equal amount
        of the spare space left after things like padding and margin have been
        set. It is a proportion, meaning that giving each flex item a value of
        400000 would have exactly the same effect.
      </p>
      <p>Now add the following rule below the previous one:</p>
      <code className="code_separate">
        {`article:nth-of-type(3) {
            \u00A0flex: 2;
          }`}
      </code>
      <p>
        Now when you refresh, you'll see that the third{" "}
        <a className="article" target="_blank" href="https://mzl.la/2H6a2LV">
          &lt;article&gt;
        </a>{" "}
        takes up twice as much of the available width as the other two — there
        are now four proportion units available in total. The first two flex
        items have one each so they take 1/4 of the available space each. The
        third one has two units, so it takes up 2/4 of the available space (or
        1/2).
      </p>
      <p>
        You can also specify a minimum size value inside the flex value. Try
        updating your existing article rules like so:
      </p>
      <code className="code_separate">
        {`article {
            \u00A0flex: 1 200px;
          }`}
      </code>
      <br />
      <code className="code_separate">
        {`article:nth-of-type(3) {
            \u00A0flex: 2 200px;
          }`}
      </code>
      <p>
        This basically states "Each flex item will first be given 200px of the
        available space. After that, the rest of the available space will be
        shared out according to the proportion units." Try refreshing and you'll
        see a difference in how the space is shared out.
      </p>
      <img
        id="img_6"
        src="https://i.imgur.com/igh28HZ.png"
        alt="Sample flexbox example 6"
      />
      <p>
        The real value of flexbox can be seen in its flexibility/responsiveness
        — if you resize the browser window, or add another{" "}
        <a className="article" target="_blank" href="https://mzl.la/2H6a2LV">
          &lt;article&gt;
        </a>{" "}
        element, the layout continues to work just fine.
      </p>
    </section>
  );
}
