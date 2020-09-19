import React from 'react';

export default function Main() {
  return (
    <main id="main-doc">
      <section className="main-section" id="Introduction">
        <header className="section_header">
          <h2>Introduction</h2>
        </header>
        <p>
          <a
            id="flexbox_def_link"
            target="_blank"
            rel="noopener noreferrer"
            href="https://mzl.la/2uuecut"
          >
            Flexbox
          </a>{' '}
          is a one-dimensional layout method for laying out items in rows or
          columns. Items flex to fill additional space and shrink to fit into
          smaller spaces. This article explains all the fundamentals.
        </p>
        <div id="prerequisites_and_objective">
          <p>
            <b>Prerequisites:</b>
          </p>
          <p>
            HTML basics (study{' '}
            <a
              id="intro_to_html_link"
              target="_blank"
              rel="noopener noreferrer"
              href="https://mzl.la/3bhiupH"
            >
              Introduction to HTML
            </a>
            ), and an idea of how CSS works (study{' '}
            <a
              id="intro_to_css_link"
              target="_blank"
              rel="noopener noreferrer"
              href="https://mzl.la/38bVy9k"
            >
              Introduction to CSS
            </a>
            .)
          </p>
          <p>
            <b>Objective:</b>
          </p>
          <p>
            To learn how to use the Flexbox layout system to create web layouts.
          </p>
        </div>
      </section>
      <section className="main-section" id="Why_Flexbox?">
        <header className="section_header">
          <h2>Why Flexbox?</h2>
        </header>
        <p>
          For a long time, the only reliable cross browser-compatible tools
          available for creating CSS layouts were things like{' '}
          <a
            id="floats_link"
            target="_blank"
            rel="noopener noreferrer"
            href="https://mzl.la/2Uyh3ND"
          >
            floats
          </a>{' '}
          and{' '}
          <a
            id="positioning_link"
            target="_blank"
            rel="noopener noreferrer"
            href="https://mzl.la/2tF6zAT"
          >
            positioning
          </a>
          . These are fine and they work, but in some ways they are also rather
          limiting and frustrating.
        </p>
        <p>
          The following simple layout requirements are either difficult or
          impossible to achieve with such tools, in any kind of convenient,
          flexible way:
        </p>
        <ul>
          <li>Vertically centering a block of content inside its parent.</li>
          <li>
            Making all the children of a container take up an equal amount of
            the available width/height, regardless of how much width/height is
            available.
          </li>
          <li>
            Making all columns in a multiple column layout adopt the same height
            even if they contain a different amount of content.
          </li>
        </ul>
        <p>
          As you'll see in subsequent sections, flexbox makes a lot of layout
          tasks much easier. Let's dig in!
        </p>
      </section>
      <section className="main-section" id="Introducing_a_simple_example">
        <header className="section_header">
          <h2>Introducing a simple example</h2>
        </header>
        <p>
          In this article we are going to get you to work through a series of
          exercises to help you understand how flexbox works. To get started,
          you should make a local copy of the first starter file —{' '}
          <a
            id="flexbox0.html_link"
            target="_blank"
            rel="noopener noreferrer"
            href="http://bit.ly/2OBTKi2"
          >
            flexbox0.html
          </a>{' '}
          from our github repo — load it in a modern browser (like Firefox or
          Chrome), and have a look at the code in your code editor. You can{' '}
          <a
            id="see_it_live_here_link"
            target="_blank"
            rel="noopener noreferrer"
            href="http://bit.ly/2UB9S7q"
          >
            see it live here
          </a>{' '}
          also.
        </p>
        <p>
          You'll see that we have a{' '}
          <a
            id="header"
            target="_blank"
            rel="noopener noreferrer"
            href="https://mzl.la/2H58WQC"
          >
            &lt;header&gt;
          </a>{' '}
          element with a top level heading inside it, and a "section" element
          containing three{' '}
          <a
            className="article"
            target="_blank"
            rel="noopener noreferrer"
            href="https://mzl.la/2H6a2LV"
          >
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
      <section
        className="main-section"
        id="Specifying_what_elements_to_lay_out_as_flexible_boxes"
      >
        <header className="section_header">
          <h2>Specifying what elements to lay out as flexible boxes</h2>
        </header>
        <p>
          To start with, we need to select which elements are to be laid out as
          flexible boxes. To do this, we set a special value of display on the
          parent element of the elements you want to affect. In this case we
          want to lay out the{' '}
          <a
            className="article"
            target="_blank"
            rel="noopener noreferrer"
            href="https://mzl.la/2H6a2LV"
          >
            &lt;article&gt;
          </a>{' '}
          elements, so we set this on the{' '}
          <a
            className="section"
            target="_blank"
            rel="noopener noreferrer"
            href="https://mzl.la/2ulMDUf"
          >
            &lt;section&gt;
          </a>{' '}
          (which becomes a flex container):
        </p>
        <code className="code_separate">
          {`section {
          \u00A0display: flex;
          }`}
        </code>
        <p>The result of this should be something like so:</p>
        <img
          id="img_2"
          src="https://i.imgur.com/jjk1qDf.png"
          alt="Sample flexbox example 2"
        />
        <p>
          So, this single declaration gives us everything we need — incredible,
          right? We have our multiple column layout with equal sized columns,
          and the columns are all the same height. This is because the default
          values given to flex items (the children of the flex container) are
          set up to solve common problems such as this. More on those later.
        </p>
        <p className="note">
          <b>Note:</b> You can also set a{' '}
          <a
            id="display"
            target="_blank"
            rel="noopener noreferrer"
            href="https://mzl.la/2ScicIU"
          >
            display
          </a>{' '}
          value of <b>inline-flex</b> if you wish to lay out inline items as
          flexible boxes.
        </p>
      </section>
      <section className="main-section" id="An_aside_on_the_flex_model">
        <header className="section_header">
          <h2>An aside on the flex model</h2>
        </header>
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
            items are being laid out in (e.g. as rows across the page, or
            columns down the page.) The start and end of this axis are called
            the <b>main start</b> and <b>main end</b>.
          </li>
          <li>
            The <b>cross axis</b> is the axis running perpendicular to the
            direction the flex items are being laid out in. The start and end of
            this axis are called the <b>cross start</b> and <b>cross end</b>.
          </li>
          <li>
            The parent element that has{' '}
            <code className="code_intext">display: flex</code> set on it (the{' '}
            <a
              className="section"
              target="_blank"
              rel="noopener noreferrer"
              href="https://mzl.la/2ulMDUf"
            >
              &lt;section&gt;
            </a>{' '}
            in our example) is called the <b>flex container</b>.
          </li>
          <li>
            The items being laid out as flexible boxes inside the flex container
            are called <b>flex items</b> (the{' '}
            <a
              className="article"
              target="_blank"
              rel="noopener noreferrer"
              href="https://mzl.la/2H6a2LV"
            >
              &lt;article&gt;
            </a>{' '}
            elements in our example).
          </li>
        </ul>
        <p>
          Bear this terminology in mind as you go through subsequent sections.
          You can always refer back to it if you get confused about any of the
          terms being used.
        </p>
      </section>
      <section className="main-section" id="Columns_or_rows?">
        <header className="section_header">
          <h2>Columns or rows?</h2>
        </header>
        <p>
          Flexbox provides a property called{' '}
          <a
            className="flex-direction"
            target="_blank"
            rel="noopener noreferrer"
            href="https://mzl.la/2vUynlw"
          >
            flex-direction
          </a>{' '}
          that specifies what direction the main axis runs in (what direction
          the flexbox children are laid out in) — by default this is set to row,
          which causes them to be laid out in a row in the direction your
          browser's default language works in (left to right, in the case of an
          English browser).
        </p>
        <p>
          Try adding the following declaration to your{' '}
          <a
            className="section"
            target="_blank"
            rel="noopener noreferrer"
            href="https://mzl.la/2ulMDUf"
          >
            &lt;section&gt;
          </a>{' '}
          rule:
        </p>
        <code className="code_separate">flex-direction: column;</code>
        <p>
          You'll see that this puts the items back in a column layout, much like
          they were before we added any CSS. Before you move on, delete this
          declaration from your example.
        </p>
        <p className="note">
          <b>Note:</b> You can also lay out flex items in a reverse direction
          using the <b>row-reverse</b> and <b>column-reverse</b> values.
          Experiment with these values too!
        </p>
      </section>
      <section className="main-section" id="Wrapping">
        <header className="section_header">
          <h2>Wrapping</h2>
        </header>
        <p>
          One issue that arises when you have a fixed amount of width or height
          in your layout is that eventually your flexbox children will overflow
          their container, breaking the layout. Have a look at our{' '}
          <a
            className="flexbox-wrap0.html"
            target="_blank"
            rel="noopener noreferrer"
            href="http://bit.ly/3bx0W9c"
          >
            flexbox-wrap0.html
          </a>{' '}
          example, and try{' '}
          <a
            className="viewing_it_live"
            target="_blank"
            rel="noopener noreferrer"
            href="http://bit.ly/3bn4tqi"
          >
            viewing it live
          </a>{' '}
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
          declaration to your{' '}
          <a
            className="section"
            target="_blank"
            rel="noopener noreferrer"
            href="https://mzl.la/2ulMDUf"
          >
            &lt;section&gt;
          </a>{' '}
          rule:
        </p>
        <code className="code_separate">flex-wrap: wrap;</code>
        <p>
          Also, add the following declaration to your{' '}
          <a
            className="article"
            target="_blank"
            rel="noopener noreferrer"
            href="https://mzl.la/2H6a2LV"
          >
            &lt;article&gt;
          </a>{' '}
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
          But there's more we can do here. First of all, try changing your{' '}
          <a
            className="flex-direction"
            target="_blank"
            rel="noopener noreferrer"
            href="https://mzl.la/2vUynlw"
          >
            flex-direction
          </a>{' '}
          property value to row-reverse — now you'll see that you still have
          your multiple row layout, but it starts from the opposite corner of
          the browser window and flows in reverse.
        </p>
      </section>
      <section className="main-section" id="flex-flow_shorthand">
        <header className="section_header">
          <h2>flex-flow shorthand</h2>
        </header>
        <p>
          At this point it is worth noting that a shorthand exists for{' '}
          <a
            className="flex-direction"
            target="_blank"
            rel="noopener noreferrer"
            href="https://mzl.la/2vUynlw"
          >
            flex-direction
          </a>{' '}
          and{' '}
          <a
            className="flex-wrap"
            target="_blank"
            rel="noopener noreferrer"
            href="https://mzl.la/2SAFE1Q"
          >
            flex-wrap
          </a>{' '}
          —{' '}
          <a
            className="flex-flow"
            target="_blank"
            rel="noopener noreferrer"
            href="https://mzl.la/38cRmWK"
          >
            flex-flow
          </a>
          . So for example, you can replace
        </p>
        <code className="code_separate">
          {`flex-direction: row; 
          flex-wrap: wrap;`}
        </code>
        <p>with</p>
        <code className="code_separate">flex-flow: row wrap;</code>
      </section>
      <section className="main-section" id="Flexible_sizing_of_flex_items">
        <header className="section_header">
          <h2>Flexible sizing of flex items</h2>
        </header>
        <p>
          Let's now return to our first example, and look at how we can control
          what proportion of space flex items take up. Fire up your local copy
          of{' '}
          <a
            className="flexbox0.html"
            target="_blank"
            rel="noopener noreferrer"
            href="http://bit.ly/2OBTKi2"
          >
            flexbox0.html
          </a>
          , or take a copy of{' '}
          <a
            className="flexbox1.html"
            target="_blank"
            rel="noopener noreferrer"
            href="http://bit.ly/39hbKpS"
          >
            flexbox1.html
          </a>{' '}
          as a new starting point (
          <a
            className="see_it_live"
            target="_blank"
            rel="noopener noreferrer"
            href="http://bit.ly/3bj6wfj"
          >
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
          available space along the main axis each flex item will take up. In
          this case, we are giving each{' '}
          <a
            className="article"
            target="_blank"
            rel="noopener noreferrer"
            href="https://mzl.la/2H6a2LV"
          >
            &lt;article&gt;
          </a>{' '}
          element a value of 1, which means they will all take up an equal
          amount of the spare space left after things like padding and margin
          have been set. It is a proportion, meaning that giving each flex item
          a value of 400000 would have exactly the same effect.
        </p>
        <p>Now add the following rule below the previous one:</p>
        <code className="code_separate">
          {`article:nth-of-type(3) {
            \u00A0flex: 2;
          }`}
        </code>
        <p>
          Now when you refresh, you'll see that the third{' '}
          <a
            className="article"
            target="_blank"
            rel="noopener noreferrer"
            href="https://mzl.la/2H6a2LV"
          >
            &lt;article&gt;
          </a>{' '}
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
          shared out according to the proportion units." Try refreshing and
          you'll see a difference in how the space is shared out.
        </p>
        <img
          id="img_6"
          src="https://i.imgur.com/igh28HZ.png"
          alt="Sample flexbox example 6"
        />
        <p>
          The real value of flexbox can be seen in its
          flexibility/responsiveness — if you resize the browser window, or add
          another{' '}
          <a
            className="article"
            target="_blank"
            rel="noopener noreferrer"
            href="https://mzl.la/2H6a2LV"
          >
            &lt;article&gt;
          </a>{' '}
          element, the layout continues to work just fine.
        </p>
      </section>
      <section className="main-section" id="flex:_shorthand_versus_longhand">
        <header className="section_header">
          <h2>flex: shorthand versus longhand</h2>
        </header>
        <p>
          <a
            className="flex"
            target="_blank"
            rel="noopener noreferrer"
            href="https://mzl.la/2OCWxYs"
          >
            flex
          </a>{' '}
          is a shorthand property that can specify up to three different values:
        </p>
        <ul>
          <li>
            The unitless proportion value we discussed above. This can be
            specified individually using the{' '}
            <a
              className="flex-flow"
              target="_blank"
              rel="noopener noreferrer"
              href="https://mzl.la/38cRmWK"
            >
              flex-flow
            </a>{' '}
            longhand property.
          </li>
          <li>
            A second unitless proportion value —{' '}
            <a
              className="flex-shrink"
              target="_blank"
              rel="noopener noreferrer"
              href="https://mzl.la/37csiOu"
            >
              flex-shrink
            </a>{' '}
            — that comes into play when the flex items are overflowing their
            container. This specifies how much of the overflowing amount is
            taken away from each flex item's size, to stop them overflowing
            their container. This is quite an advanced flexbox feature, and we
            won't be covering it any further in this article.
          </li>
          <li>
            The minimum size value we discussed above. This can be specified
            individually using the{' '}
            <a
              className="flex-basis"
              target="_blank"
              rel="noopener noreferrer"
              href="https://mzl.la/37csiOu"
            >
              flex-basis
            </a>{' '}
            longhand value.
          </li>
        </ul>
        <p>
          We'd advise against using the longhand flex properties unless you
          really have to (for example, to override something previously set).
          They lead to a lot of extra code being written, and they can be
          somewhat confusing.
        </p>
      </section>
      <section className="main-section" id="Horizontal_and_vertical_alignment">
        <header className="section_header">
          <h2>Horizontal and vertical alignment</h2>
        </header>
        <p>
          You can also use flexbox features to align flex items along the main
          or cross axis. Let's explore this by looking at a new example —{' '}
          <a
            className="flex-align0.html"
            target="_blank"
            rel="noopener noreferrer"
            href="http://bit.ly/2tCK8MG"
          >
            flex-align0.html
          </a>{' '}
          (
          <a
            className="see_it_live_also"
            target="_blank"
            rel="noopener noreferrer"
            href="http://bit.ly/2HaXRgM"
          >
            see it live also
          </a>
          ) — which we are going to turn into a neat, flexible button/toolbar.
          At the moment you'll see a horizontal menu bar, with some buttons
          jammed into the top left hand corner.
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
            rel="noopener noreferrer"
            href="https://mzl.la/2SckMi4"
          >
            align-items
          </a>{' '}
          controls where the flex items sit on the cross axis.
        </p>
        <ul>
          <li>
            By default, the value is <b>stretch</b>, which stretches all flex
            items to fill the parent in the direction of the cross axis. If the
            parent hasn't got a fixed width in the cross axis direction, then
            all flex items will become as long as the longest flex items. This
            is how our first example got equal height columns by default.
          </li>
          <li>
            The <b>center</b> value that we used in our above code causes the
            items to maintain their intrinsic dimensions, but be centered along
            the cross axis. This is why our current example's buttons are
            centered vertically.
          </li>
          <li>
            You can also have values like <b>flex-start</b> and <b>flex-end</b>,
            which will align all items at the start and end of the cross axis
            respectively. See{' '}
            <a
              className="align-items"
              target="_blank"
              rel="noopener noreferrer"
              href="https://mzl.la/2SckMi4"
            >
              align-items
            </a>{' '}
            for the full details.
          </li>
        </ul>
        <p>
          You can override the{' '}
          <a
            className="align-items"
            target="_blank"
            rel="noopener noreferrer"
            href="https://mzl.la/2SckMi4"
          >
            align-items
          </a>{' '}
          behavior for individual flex items by applying the{' '}
          <a
            className="align-self"
            target="_blank"
            rel="noopener noreferrer"
            href="https://mzl.la/2Svh3ez"
          >
            align-self
          </a>{' '}
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
            rel="noopener noreferrer"
            href="https://mzl.la/2vgLtJL"
          >
            justify-content
          </a>{' '}
          controls where the flex items sit on the main axis.
        </p>
        <ul>
          <li>
            The default value is <b>flex-start</b>, which makes all the items
            sit at the start of the main axis.
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
            There is another value, <b>space-between</b>, which is very similar
            to <b>space-around</b> except that it doesn't leave any space at
            either end.
          </li>
        </ul>
        <p>
          We'd like to encourage you to play with these values to see how they
          work before you continue.
        </p>
      </section>
      <section className="main-section" id="Ordering_flex_items">
        <header className="section_header">
          <h2>Ordering flex items</h2>
        </header>
        <p>
          Flexbox also has a feature for changing the layout order of flex
          items, without affecting the source order. This is another thing that
          is impossible to do with traditional layout methods.
        </p>
        <p>
          The code for this is simple: try adding the following CSS to your
          button bar example code:
        </p>
        <code className="code_separate">
          {`button:first-child {
            \u00A0order: 1;
          }`}
        </code>
        <p>
          Refresh, and you'll now see that the "Smile" button has moved to the
          end of the main axis. Let's talk about how this works in a bit more
          detail:
        </p>
        <ul>
          <li>
            By default, all flex items have an{' '}
            <a
              className="order"
              target="_blank"
              rel="noopener noreferrer"
              href="https://mzl.la/2vU0Ojx"
            >
              order
            </a>{' '}
            value of 0.
          </li>
          <li>
            Flex items with higher order values set on them will appear later in
            the display order than items with lower order values.
          </li>
          <li>
            Flex items with the same order value will appear in their source
            order. So if you have four items with order values of 2, 1, 1, and 0
            set on them respectively, their display order would be 4th, 2nd,
            3rd, then 1st.
          </li>
          <li>
            The 3rd item appears after the 2nd because it has the same order
            value and is after it in the source order.
          </li>
        </ul>
        <p>
          You can set negative order values to make items appear earlier than
          items with 0 set. For example, you could make the "Blush" button
          appear at the start of the main axis using the following rule:
        </p>
        <code className="code_separate">
          {`button:last-child {
            \u00A0order: -1;
          }`}
        </code>
      </section>
      <section className="main-section" id="Nested_flex_boxes">
        <header className="section_header">
          <h2>Nested flex boxes</h2>
        </header>
        <p>
          It is possible to create some pretty complex layouts with flexbox. It
          is perfectly ok to set a flex item to also be a flex container, so
          that its children are also laid out like flexible boxes. Have a look
          at{' '}
          <a
            className="complex-flexbox.html"
            target="_blank"
            rel="noopener noreferrer"
            href="http://bit.ly/31EO50c"
          >
            complex-flexbox.html
          </a>{' '}
          (
          <a
            className="see_it_live_also"
            target="_blank"
            rel="noopener noreferrer"
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
          The HTML for this is fairly simple. We've got a{' '}
          <a
            className="section"
            target="_blank"
            rel="noopener noreferrer"
            href="https://mzl.la/2ulMDUf"
          >
            &lt;section&gt;
          </a>{' '}
          element containing three{' '}
          <a
            className="article"
            target="_blank"
            rel="noopener noreferrer"
            href="https://mzl.la/2H6a2LV"
          >
            &lt;article&gt;
          </a>
          s. The third{' '}
          <a
            className="article"
            target="_blank"
            rel="noopener noreferrer"
            href="https://mzl.la/2H6a2LV"
          >
            &lt;article&gt;
          </a>{' '}
          contains three{' '}
          <a
            className="div"
            target="_blank"
            rel="noopener noreferrer"
            href="https://mzl.la/2UCZY5e"
          >
            &lt;div&gt;
          </a>
          s.
        </p>
        <p>Let's look at the code we've used for the layout.</p>
        <p>
          First of all, we set the children of the{' '}
          <a
            className="section"
            target="_blank"
            rel="noopener noreferrer"
            href="https://mzl.la/2ulMDUf"
          >
            &lt;section&gt;
          </a>{' '}
          to be laid out as flexible boxes.
        </p>
        <code className="code_separate">
          {`section {
            \u00A0display: flex;
          }`}
        </code>
        <p>
          Next, we set some flex values on the{' '}
          <a
            className="article"
            target="_blank"
            rel="noopener noreferrer"
            href="https://mzl.la/2H6a2LV"
          >
            &lt;article&gt;
          </a>
          s themselves. Take special note of the 2nd rule here — we are setting
          the third{' '}
          <a
            className="article"
            target="_blank"
            rel="noopener noreferrer"
            href="https://mzl.la/2H6a2LV"
          >
            &lt;article&gt;
          </a>{' '}
          to have its children laid out like flex items too, but this time we
          are laying them out like a column.
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
          Next, we select the first{' '}
          <a
            className="div"
            target="_blank"
            rel="noopener noreferrer"
            href="https://mzl.la/2UCZY5e"
          >
            &lt;div&gt;
          </a>
          . We first use <code>flex:1 100px;</code> to effectively give it a
          minimum height of 100px, then we set its children (the{' '}
          <a
            className="button"
            target="_blank"
            rel="noopener noreferrer"
            href="https://mzl.la/2UCZY5e"
          >
            &lt;button&gt;
          </a>{' '}
          elements) to also be laid out like flex items. Here we lay them out in
          a wrapping row, and align them in the center of the available space
          like we did in the individual button example we saw earlier.
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
      <section className="main-section" id="Cross_browser_compatibility">
        <header className="section_header">
          <h2>Cross browser compatibility</h2>
        </header>
        <p>
          Flexbox support is available in most new browsers — Firefox, Chrome,
          Opera, Microsoft Edge and IE 11, newer versions of Android/iOS, etc.
          However you should be aware that there are still older browsers in use
          that don't support Flexbox (or do, but support a really old,
          out-of-date version of it.)
        </p>
        <p>
          While you are just learning and experimenting, this doesn't matter too
          much; however if you are considering using flexbox in a real website
          you need to do testing and make sure that your user experience is
          still acceptable in as many browsers as possible.
        </p>
        <p>
          Flexbox is a bit trickier than some CSS features. For example, if a
          browser is missing a CSS drop shadow, then the site will likely still
          be usable. Not supporting flexbox features however will probably break
          a layout completely, making it unusable.
        </p>
        <p>
          We discuss strategies for overcoming cross browser support issues in
          our{' '}
          <a
            className="Cross_browser_testing"
            target="_blank"
            href="https://mzl.la/31DzamJ"
          >
            Cross browser testing
          </a>{' '}
          module.
        </p>
      </section>
      <section className="main-section" id="Test_your_skills!">
        <header className="section_header">
          <h2>Test your skills!</h2>
        </header>
        <p>
          We have covered a lot in this article, but can you remember the most
          important information? You can find some further tests to verify that
          you've retained this information before you move on — see{' '}
          <a
            className="Test_your_skills:_Flexbox"
            target="_blank"
            rel="noopener noreferrer"
            href="https://mzl.la/39fvQAI"
          >
            Test your skills: Flexbox
          </a>
          .
        </p>
      </section>
      <section className="main-section" id="Summary">
        <header className="section_header">
          <h2>Summary</h2>
        </header>
        <p>
          That concludes our tour of the basics of flexbox. We hope you had fun,
          and will have a good play around with it as you travel forward with
          your learning. Next we'll have a look at another important aspect of
          CSS layouts — CSS Grids.
        </p>
      </section>
      <section className="main-section" id="Reference">
        <header className="section_header">
          <h2>Reference</h2>
        </header>
        <p>
          All the documentation in this page is taken from{' '}
          <a
            className="reference-link"
            target="_blank"
            rel="noopener noreferrer"
            href="https://mzl.la/31AVkpK"
          >
            MDN
          </a>
          .
        </p>
      </section>
      <footer>
        <p>&copy; Konstantin Krumin 2020</p>
      </footer>
    </main>
  );
}
