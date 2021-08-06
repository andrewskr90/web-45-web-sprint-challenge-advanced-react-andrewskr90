# Interview Answers
Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. These will not be counted as a part of your sprint score but will be helpful for preparing you for your endorsement interview, and enhancing overall understanding.

1. What are the main differences between a stateful and a functional component?
    -A stateful component contains a slice or slices of state, allowing it to hold data as well as be updated. Functional components are constant, they are built to provide an unalterable function.

2. When does a componentWillMount function be called? What about a componentWillUpdate?
    componentWillMount functions are called after the component renders the first time in its lifecycle. componentWillUpdate is called every time the page re-renders, like when state is changed or a function is called.

3. Define stateful logic.
    Stateful logic is logic built into a component that is meant to condition state or data. It can be a function that sets state, or a function that reforms data.

4. What are the three step of creating a successful test? What is done in each phase?
    -Arrange is where we set up the test, this is usually done by rendering our component onto the screen.
    -Act is where we simulate the user using our document, if it's typing a value, clicking a button, or hovering over an element.
    -Assert is where we assert that the intended outcome of the user's action occurs, if it's checking to see if a form submission goes through or a style is changed as expected.
