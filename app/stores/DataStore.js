class DataStore {
	constructor(data) {
		this.data = data;
	}

	getLocationByName(location_name) {
		return this.getCurrentLocationItems(location_name)[0];
	}
	
	getCurrentLocationItems(location_name) {
		return this.data.filter(function (obj) {

			if (obj.place_name == location_name) {
				return (obj);
			}
		});
	}

	getListItems() {

		var uniqueLocations = {};

		return this.data.filter((obj) => {

			var test = (obj.station_id in uniqueLocations);

			// should not depend on data in order
			// ensure unique locations
			if (test) {
				return false
			} else {
				uniqueLocations[obj.station_id] = true;
				return true;
			}

		}).map(obj => {

			return {
				value: obj.place_name,
				label: obj.place_name
			};
		});
	}
}

module.exports = DataStore;
