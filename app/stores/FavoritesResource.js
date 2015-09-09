class FavoritesResource {
	constructor(localStorage) {
		this.localStorage = localStorage;

	}

	isFavorite(location) {
		return (this._getByName(location) !== null);
	}

	_getByName(location) {
		var favorites = this.getFavorites();
		var result = null;

		favorites.some((loc) => {
			if (loc.location.place_name == location.place_name) {
				result = loc;
				return true;
			}
		});

		return result;
	}

	_updateStorage(favorites) {
		this.localStorage.setItem('favorites', JSON.stringify(favorites));
	}

	getFavorites() {
		return JSON.parse(this.localStorage.getItem('favorites')) || [];
	}

	addFavorite(location) {
		var favorites = this.getFavorites();

		if (!this.isFavorite(location)) {
			favorites.push({
				location: {
					place_name: location.place_name
				},
				timestamp: Date.now()
			});

			this._updateStorage(favorites);
		}
	}

	removeFavorite(location) {

		var favorites = this.getFavorites();
		var index = -1;

		for (var i = 0; i < favorites.length; i++) {

			if (favorites[i].location.place_name == location.place_name) {
				index = i;
				break;
			}

		}

		// If it was found, remove it from the favorites array

		if (index !== -1) {

			favorites.splice(index, 1);

			this._updateStorage(favorites);

		}
	}
}

module.exports = FavoritesResource;