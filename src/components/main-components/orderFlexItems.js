import React from "react";

import Header from "./header";

export default function OrderFlexItems() {
  return (
    <section className="main-section" id="Ordering_flex_items">
      <Header title="Ordering flex items" />
      <p>
        Flexbox also has a feature for changing the layout order of flex items,
        without affecting the source order. This is another thing that is
        impossible to do with traditional layout methods.
      </p>
      <p>
        The code for this is simple: try adding the following CSS to your button
        bar example code:
      </p>
      <code className="code_separate">
        {`button:first-child {
            \u00A0order: 1;
          }`}
      </code>
      <p>
        Refresh, and you'll now see that the "Smile" button has moved to the end
        of the main axis. Let's talk about how this works in a bit more detail:
      </p>
      <ul>
        <li>
          By default, all flex items have an{" "}
          <a className="order" target="_blank" href="https://mzl.la/2vU0Ojx">
            order
          </a>{" "}
          value of 0.
        </li>
        <li>
          Flex items with higher order values set on them will appear later in
          the display order than items with lower order values.
        </li>
        <li>
          Flex items with the same order value will appear in their source
          order. So if you have four items with order values of 2, 1, 1, and 0
          set on them respectively, their display order would be 4th, 2nd, 3rd,
          then 1st.
        </li>
        <li>
          The 3rd item appears after the 2nd because it has the same order value
          and is after it in the source order.
        </li>
      </ul>
      <p>
        You can set negative order values to make items appear earlier than
        items with 0 set. For example, you could make the "Blush" button appear
        at the start of the main axis using the following rule:
      </p>
      <code className="code_separate">
        {`button:last-child {
            \u00A0order: -1;
          }`}
      </code>
    </section>
  );
}
