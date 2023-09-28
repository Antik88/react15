class Table extends React.Component {
  render() {
    const { elements } = this.props;
    return (
      <div>
        <h4 className="title">
          {this.props.name}
        </h4>
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Place</th>
              <th>Organizer Name</th>
              <th>Number of Owners</th>
              <th>Image</th>
            </tr>
          </thead>
          <tbody>
            {elements.map(element => (
              <tr key={element.id}>
                <td>{element.id}</td>
                <td>{element.name}</td>
                <td>{element.place}</td>
                <td>{element.organizerName}</td>
                <td>{element.numberOfOwners}</td>
                <td><img src={`./data/img/${element.img}`}
                  className="event_img"
                  alt={element.name} /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  static propTypes = {
    elements: React.PropTypes.arrayOf(
      React.PropTypes.shape({
        id: React.PropTypes.number.isRequired,
        name: React.PropTypes.string.isRequired,
        place: React.PropTypes.string.isRequired,
        organizerName: React.PropTypes.string.isRequired,
        numberOfOwners: React.PropTypes.number.isRequired,
        img: React.PropTypes.string.isRequired,
      })
    ).isRequired,
    name: React.PropTypes.string.isRequired,
  };


}