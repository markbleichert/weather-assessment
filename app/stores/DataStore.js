class DataStore {
	constructor(data) {
		this.data = data;
	}

	getCurrentLocationItems(location_id) {
		return this.data.filter(function (obj) {
			// change naming this is confusing ! place_name == location_id
			if (obj.place_name == location_id) {
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

module.exports = new DataStore(require('../fixtures/Data'));
