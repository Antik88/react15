var Table = React.createClass({
  displayName: "Table",
  render: function () {
    return React.createElement(
      "div",
      null,
      React.createElement(
        "h4",
        { className: "title" },
        this.props.name
      ),
      React.createElement(
        "table",
        { className: "table" },
        React.createElement(
          "thead",
          null,
          React.createElement(
            "tr",
            null,
            React.createElement("th", null, "ID"),
            React.createElement("th", null, "Name"),
            React.createElement("th", null, "Place"),
            React.createElement("th", null, "Organizer Name"),
            React.createElement("th", null, "Number of Owners"),
            React.createElement("th", null, "Image")
          )
        ),
        React.createElement(
          "tbody",
          null,
          this.props.elements.map(function (element) {
            return React.createElement(
              "tr",
              { key: element.id },
              React.createElement("td", null, element.id),
              React.createElement("td", null, element.name),
              React.createElement("td", null, element.place),
              React.createElement("td", null, element.organizerName),
              React.createElement("td", null, element.numberOfOwners),
              React.createElement("td", null, React.createElement("img", {
                src: "./data/img/" + element.img,
                className: "event_img",
                alt: element.name
              }))
            );
          })
        )
      )
    );
  },
});


//   static propTypes = {
//     elements: React.PropTypes.arrayOf(
//       React.PropTypes.shape({
//         id: React.PropTypes.number.isRequired,
//         name: React.PropTypes.string.isRequired,
//         place: React.PropTypes.string.isRequired,
//         organizerName: React.PropTypes.string.isRequired,
//         numberOfOwners: React.PropTypes.number.isRequired,
//         img: React.PropTypes.string.isRequired,
//       })
//     ).isRequired,
//     name: React.PropTypes.string.isRequired,
//   };
// }