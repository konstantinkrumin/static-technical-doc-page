import React from "react";

import Header from "./header";

export default function CrossBrowserCompatibility() {
  return (
    <section className="main-section" id="Cross_browser_compatibility">
      <Header title="Cross browser compatibility" />
      <p>
        Flexbox support is available in most new browsers — Firefox, Chrome,
        Opera, Microsoft Edge and IE 11, newer versions of Android/iOS, etc.
        However you should be aware that there are still older browsers in use
        that don't support Flexbox (or do, but support a really old, out-of-date
        version of it.)
      </p>
      <p>
        While you are just learning and experimenting, this doesn't matter too
        much; however if you are considering using flexbox in a real website you
        need to do testing and make sure that your user experience is still
        acceptable in as many browsers as possible.
      </p>
      <p>
        Flexbox is a bit trickier than some CSS features. For example, if a
        browser is missing a CSS drop shadow, then the site will likely still be
        usable. Not supporting flexbox features however will probably break a
        layout completely, making it unusable.
      </p>
      <p>
        We discuss strategies for overcoming cross browser support issues in our{" "}
        <a
          className="Cross_browser_testing"
          target="_blank"
          href="https://mzl.la/31DzamJ"
        >
          Cross browser testing
        </a>{" "}
        module.
      </p>
    </section>
  );
}
