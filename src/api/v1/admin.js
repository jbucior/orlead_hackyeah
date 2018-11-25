import axios from 'axios';

// URL and endpoint constants
const NODES_INDEX_URL = 'nodes/';
const ROADS_INDEX_URL = 'roads/';
const PLACES_INDEX_URL = 'places/';
const VEHICLES_INDEX_URL = 'vehicles/';

export default {
  roads: {
    index() {
      return axios.get(ROADS_INDEX_URL);
    },
  },
  nodes: {
    show(data) {
      return axios.get(NODES_INDEX_URL, data);
    },
  },
  places: {
    index() {
      return axios.get(PLACES_INDEX_URL);
    },
  },
  vehicles: {
    show() {
      return axios.get(VEHICLES_INDEX_URL);
    },
  },
};
