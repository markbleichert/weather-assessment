var React = require('react');
var classNames = require('classnames');

require('../styles/CurrentLocation.css');

var CurrentLocation = React.createClass({

	propTypes: {
		location: React.PropTypes.object
	},

	toggleFavorite() {
		this.props.onFavoriteToggle(this.props.location);
	},

	render() {

		var starClassName = classNames({
			'glyphicon glyphicon-star-empty': !this.props.favorite,
			'glyphicon glyphicon-star': this.props.favorite
		});

		return (
			<div className='current-location'>
				<h4 id='save-location'>{this.props.location.address}</h4>
				<span className={starClassName} onClick={this.toggleFavorite} aria-hidden='true'></span>
			</div>
		);
	}

});

module.exports = CurrentLocation;
