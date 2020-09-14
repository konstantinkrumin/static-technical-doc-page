import React from "react";

import Header from "./header";

export default function FlexShorthandVsLonghand() {
  return (
    <section className="main-section" id="flex:_shorthand_versus_longhand">
      <Header title="flex: shorthand versus longhand" />
      <p>
        <a className="flex" target="_blank" href="https://mzl.la/2OCWxYs">
          flex
        </a>{" "}
        is a shorthand property that can specify up to three different values:
      </p>
      <ul>
        <li>
          The unitless proportion value we discussed above. This can be
          specified individually using the{" "}
          <a
            className="flex-flow"
            target="_blank"
            href="https://mzl.la/38cRmWK"
          >
            flex-flow
          </a>{" "}
          longhand property.
        </li>
        <li>
          A second unitless proportion value —{" "}
          <a
            className="flex-shrink"
            target="_blank"
            href="https://mzl.la/37csiOu"
          >
            flex-shrink
          </a>{" "}
          — that comes into play when the flex items are overflowing their
          container. This specifies how much of the overflowing amount is taken
          away from each flex item's size, to stop them overflowing their
          container. This is quite an advanced flexbox feature, and we won't be
          covering it any further in this article.
        </li>
        <li>
          The minimum size value we discussed above. This can be specified
          individually using the{" "}
          <a
            className="flex-basis"
            target="_blank"
            href="https://mzl.la/37csiOu"
          >
            flex-basis
          </a>{" "}
          longhand value.
        </li>
      </ul>
      <p>
        We'd advise against using the longhand flex properties unless you really
        have to (for example, to override something previously set). They lead
        to a lot of extra code being written, and they can be somewhat
        confusing.
      </p>
    </section>
  );
}
