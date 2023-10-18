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
            React.DOM.th(null, "Salary"),
            React.DOM.th(null, "Organization"),
            React.DOM.th(null, "Image")
          )
        ),
        React.DOM.tbody(
          null,
          this.props.vacancys.map(function (element) {
            return React.DOM.tr(
              { key: element.id },
              React.DOM.td(null, element.id),
              React.DOM.td(null, element.name),
              React.DOM.td(null, element.salary),
              React.DOM.td(null, element.organization),
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