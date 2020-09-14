import React from "react";

import Header from "./header";

export default function TestYourSkills() {
  return (
    <section className="main-section" id="Test_your_skills!">
      <Header title="Test your skills!" />
      <p>
        We have covered a lot in this article, but can you remember the most
        important information? You can find some further tests to verify that
        you've retained this information before you move on — see{" "}
        <a
          className="Test_your_skills:_Flexbox"
          target="_blank"
          href="https://mzl.la/39fvQAI"
        >
          Test your skills: Flexbox
        </a>
        .
      </p>
    </section>
  );
}
