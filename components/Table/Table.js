var Table = React.createClass({
  displayName: "Table",
  render: function () {
    return React.DOM.div(
      null,
      React.DOM.h4(
        { className: "title" },
        this.props.name
      ),
      React.DOM.table(
        { className: "table" },
        React.DOM.thead(
          null,
          React.DOM.tr(
            null,
            React.DOM.th(null, "ID"),
            React.DOM.th(null, "Name"),
            React.DOM.th(null, "Place"),
            React.DOM.th(null, "Organizer Name"),
            React.DOM.th(null, "Number of Owners"),
            React.DOM.th(null, "Image")
          )
        ),
        React.DOM.tbody(
          null,
          this.props.elements.map(function (element) {
            return React.DOM.tr(
              { key: element.id },
              React.DOM.td(null, element.id),
              React.DOM.td(null, element.name),
              React.DOM.td(null, element.place),
              React.DOM.td(null, element.organizerName),
              React.DOM.td(null, element.numberOfOwners),
              React.DOM.td(
                null,
                React.DOM.img({
                  src: "./data/img/" + element.img,
                  className: "event_img",
                  alt: element.name
                })
              )
            );
          })
        )
      )
    );
  },
});