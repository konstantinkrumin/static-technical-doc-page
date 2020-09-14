import React from "react";

import Header from "./header";

export default function HorizontalVerticalAlign() {
  return (
    <section className="main-section" id="Horizontal_and_vertical_alignment">
      <Header title="Horizontal and vertical alignment" />
      <p>
        You can also use flexbox features to align flex items along the main or
        cross axis. Let's explore this by looking at a new example —{" "}
        <a
          className="flex-align0.html"
          target="_blank"
          href="http://bit.ly/2tCK8MG"
        >
          flex-align0.html
        </a>{" "}
        (
        <a
          className="see_it_live_also"
          target="_blank"
          href="http://bit.ly/2HaXRgM"
        >
          see it live also
        </a>
        ) — which we are going to turn into a neat, flexible button/toolbar. At
        the moment you'll see a horizontal menu bar, with some buttons jammed
        into the top left hand corner.
      </p>
      <img
        id="img_7"
        src="https://i.imgur.com/V7yUVyR.png"
        alt="Flexbox with some buttons jammed into the top left hand corner"
      />
      <p>First, take a local copy of this example.</p>
      <p>Now, add the following to the bottom of the example's CSS:</p>
      <code className="code_separate">
        {`div {
            \u00A0display: flex;
            \u00A0align-items: center;
            \u00A0ustify-content: space-around;
          }`}
      </code>
      <p>
        Refresh the page and you'll see that the buttons are now nicely
        centered, horizontally and vertically. We've done this via two new
        properties.
      </p>
      <p>
        <a
          className="align-items"
          target="_blank"
          href="https://mzl.la/2SckMi4"
        >
          align-items
        </a>{" "}
        controls where the flex items sit on the cross axis.
      </p>
      <ul>
        <li>
          By default, the value is <b>stretch</b>, which stretches all flex
          items to fill the parent in the direction of the cross axis. If the
          parent hasn't got a fixed width in the cross axis direction, then all
          flex items will become as long as the longest flex items. This is how
          our first example got equal height columns by default.
        </li>
        <li>
          The <b>center</b> value that we used in our above code causes the
          items to maintain their intrinsic dimensions, but be centered along
          the cross axis. This is why our current example's buttons are centered
          vertically.
        </li>
        <li>
          You can also have values like <b>flex-start</b> and <b>flex-end</b>,
          which will align all items at the start and end of the cross axis
          respectively. See{" "}
          <a
            className="align-items"
            target="_blank"
            href="https://mzl.la/2SckMi4"
          >
            align-items
          </a>{" "}
          for the full details.
        </li>
      </ul>
      <p>
        You can override the{" "}
        <a
          className="align-items"
          target="_blank"
          href="https://mzl.la/2SckMi4"
        >
          align-items
        </a>{" "}
        behavior for individual flex items by applying the{" "}
        <a className="align-self" target="_blank" href="https://mzl.la/2Svh3ez">
          align-self
        </a>{" "}
        property to them. For example, try adding the following to your CSS:
      </p>
      <code className="code_separate">
        {`button:first-child {
            \u00A0align-self: flex-end;
          }`}
      </code>
      <p>
        Have a look at what effect this has, and remove it again when you've
        finished.
      </p>
      <p>
        <a
          className="justify-content"
          target="_blank"
          href="https://mzl.la/2vgLtJL"
        >
          justify-content
        </a>{" "}
        controls where the flex items sit on the main axis.
      </p>
      <ul>
        <li>
          The default value is <b>flex-start</b>, which makes all the items sit
          at the start of the main axis.
        </li>
        <li>
          You can use <b>flex-end</b> to make them sit at the end.
        </li>
        <li>
          <b>center</b> is also a value for <b>justify-content</b>, and will
          make the flex items sit in the center of the main axis.
        </li>
        <li>
          The value we've used above, <b>space-around</b>, is useful — it
          distributes all the items evenly along the main axis, with a bit of
          space left at either end.
        </li>
        <li>
          There is another value, <b>space-between</b>, which is very similar to{" "}
          <b>space-around</b> except that it doesn't leave any space at either
          end.
        </li>
      </ul>
      <p>
        We'd like to encourage you to play with these values to see how they
        work before you continue.
      </p>
    </section>
  );
}
