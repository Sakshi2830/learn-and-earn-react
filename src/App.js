const pet = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h2", {}, props.name),
    React.createElement("h3", {}, props.animal),
    React.createElement("h3", {}, props.breed),
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", { id: "my-brand" }, "Adopt Me!"),
    React.createElement(pet, {
      name: "Luna",
      animal: "Dog",
      breed: "Labrador",
    }),
    React.createElement(pet, {
      name: "Pepper",
      animal: "bird",
      breed: "cockatiel",
    }),
    React.createElement(pet, { name: "Sudo", animal: "Dog", breed: "pug" }),
  ]);
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
// You will be seeing a console warning  """"Warning: Each child in a list should have a unique "key" prop"""". in your browser console. React's dev warnings are trying to help your code run faster. Basically React tries to keep track of components are swapped in order in a list and it does that by you giving it a unique key it can track. If it sees two things have swapped, it'll just move the components instead of re-rendering.
