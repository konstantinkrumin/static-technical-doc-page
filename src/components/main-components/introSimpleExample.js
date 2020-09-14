import React from "react";

import Header from "./header";

export default function IntroSimpleExample() {
  return (
    <section className="main-section" id="Introducing_a_simple_example">
      <Header title="Introducing a simple example" />
      <p>
        In this article we are going to get you to work through a series of
        exercises to help you understand how flexbox works. To get started, you
        should make a local copy of the first starter file —{" "}
        <a id="flexbox0.html_link" target="_blank" href="http://bit.ly/2OBTKi2">
          flexbox0.html
        </a>{" "}
        from our github repo — load it in a modern browser (like Firefox or
        Chrome), and have a look at the code in your code editor. You can{" "}
        <a
          id="see_it_live_here_link"
          target="_blank"
          href="http://bit.ly/2UB9S7q"
        >
          see it live here
        </a>{" "}
        also.
      </p>
      <p>
        You'll see that we have a{" "}
        <a id="header" target="_blank" href="https://mzl.la/2H58WQC">
          &lt;header&gt;
        </a>{" "}
        element with a top level heading inside it, and a "section" element
        containing three{" "}
        <a className="article" target="_blank" href="https://mzl.la/2H6a2LV">
          &lt;article&gt;
        </a>
        s. We are going to use these to create a fairly standard three column
        layout.
      </p>
      <img
        id="img_1"
        src="https://i.imgur.com/wuSeJ7M.png"
        alt="Sample flexbox example 1"
      />
    </section>
  );
}
