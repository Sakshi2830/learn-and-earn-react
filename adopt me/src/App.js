const pet=() =>{
  return React.createElement("div", { }, [
        React.createElement("h2", {}, "Luna"),
        React.createElement("h3", {}, "Dog"),
        React.createElement("h3", {}, "Havanese"),
    ])
}


const App = () => {
    return React.createElement(
      "div",
      {},
      [
        React.createElement("h1", {}, "Adopt Me!"),
        React.createElement(pet),
        React.createElement(pet),
        React.createElement(pet),
      ]
    );
  };
  
  ReactDOM.render(React.createElement(App), document.getElementById("root"));