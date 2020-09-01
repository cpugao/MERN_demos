class Counter {
  /**
   * Constructor method to create a new Counter component instance which will display a button and some text that shows how many times the button was clicked
   * @param {Object} props - containing the properties for the new Counter, such as button text, etc.
   * @param {Object} parentNode - HTML node that the new Counter component will be appended into
   */
  constructor(props, parentNode) {
    this.count = 0;

    // create a div HTML node which is NOT on the page until added where we can put all the other HTML for this counter into
    const container = document.createElement("div");

    const heading = document.createElement("h2");
    heading.innerText = props.headingText;
    // add this heading to the bottom of the container div
    container.appendChild(heading);

    this.paragraph = document.createElement("p");
    this.updateParagraph();
    container.appendChild(this.paragraph);

    const btn = document.createElement("button");
    btn.innerText = props.buttonText;
    btn.addEventListener("click", (event) => {
      this.count++;
      this.updateParagraph();
      console.log(this.count);
    });
    container.appendChild(btn);
    container.appendChild(document.createElement("hr"));

    parentNode.appendChild(container);
  }

  updateParagraph() {
    this.paragraph.innerText = `The button has been clicked ${this.count} times.`;
  }
}

// only works in this case because of the <script type="module">
export default Counter;
