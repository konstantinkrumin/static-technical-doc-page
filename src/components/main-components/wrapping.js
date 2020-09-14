import React from "react";

import Header from "./header";

export default function Wrapping() {
  return (
    <section className="main-section" id="Wrapping">
      <Header title="Wrapping" />
      <p>
        One issue that arises when you have a fixed amount of width or height in
        your layout is that eventually your flexbox children will overflow their
        container, breaking the layout. Have a look at our{" "}
        <a
          className="flexbox-wrap0.html"
          target="_blank"
          href="http://bit.ly/3bx0W9c"
        >
          flexbox-wrap0.html
        </a>{" "}
        example, and try{" "}
        <a
          className="viewing_it_live"
          target="_blank"
          href="http://bit.ly/3bn4tqi"
        >
          viewing it live
        </a>{" "}
        (take a local copy of this file now if you want to follow along with
        this example):
      </p>
      <img
        id="img_4"
        src="https://i.imgur.com/DcvEIS7.png"
        alt="Sample flexbox wrapping example"
      />
      <p>
        Here we see that the children are indeed breaking out of their
        container. One way in which you can fix this is to add the following
        declaration to your{" "}
        <a className="section" target="_blank" href="https://mzl.la/2ulMDUf">
          &lt;section&gt;
        </a>{" "}
        rule:
      </p>
      <code className="code_separate">flex-wrap: wrap;</code>
      <p>
        Also, add the following declaration to your{" "}
        <a className="article" target="_blank" href="https://mzl.la/2H6a2LV">
          &lt;article&gt;
        </a>{" "}
        rule:
      </p>
      <code className="code_separate">flex: 200px;</code>
      <p>
        Try this now; you'll see that the layout looks much better with this
        included:
      </p>
      <img
        id="img_5"
        src="https://i.imgur.com/pmkoY4A.png"
        alt="Sample flexbox example 5"
      />
      <p>
        We now have multiple rows — as many flexbox children are fitted onto
        each row as makes sense, and any overflow is moved down to the next
        line. The <code className="code_intext">flex: 200px</code> declaration
        set on the articles means that each will be at least 200px wide; we'll
        discuss this property in more detail later on. You might also notice
        that the last few children on the last row are each made wider so that
        the entire row is still filled.
      </p>
      <p>
        But there's more we can do here. First of all, try changing your{" "}
        <a
          className="flex-direction"
          target="_blank"
          href="https://mzl.la/2vUynlw"
        >
          flex-direction
        </a>{" "}
        property value to row-reverse — now you'll see that you still have your
        multiple row layout, but it starts from the opposite corner of the
        browser window and flows in reverse.
      </p>
    </section>
  );
}
