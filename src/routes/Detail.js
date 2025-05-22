import React from "react";
import "./Detail.css";

class Detail extends React.Component {
  componentDidMount() {
    const { location, history } = this.props;
    if (location === undefined) {
      history.push("/");
    }
  }
  render() {
    const { location } = this.props;
    if (location) {
      return (
        <div className="detail__container">
          <img
            src={location.state.poster}
            alt={location.state.title}
            title={location.state.title}
          />
          <h3 className="movie__title">{location.state.title}</h3>
          <h5 className="movie__year">{location.state.year}</h5>
          <ul className="movie__genres">
            {location.state.genres.map((genre, index) => (
              <li className="location.state.movie__genre" key={index}>
                {genre}
              </li>
            ))}
          </ul>
          <p className="movie__summary">{location.state.summary}</p>
        </div>
      );
    } else {
      return null;
    }
  }
}
// function Detail(props) {
//   console.log(props);
//   return <span>Detail</span>;
// }

export default Detail;
