import axios from 'axios';

// URL and endpoint constants
const NODES_INDEX_URL = 'nodes/path';
const ROADS_INDEX_URL = 'roads/';
const PLACES_INDEX_URL = 'places/';
const VEHICLES_INDEX_URL = 'vehicles/';
const EVENTS_INDEX_URL = 'events/';

export default {
  roads: {
    index() {
      return axios.get(ROADS_INDEX_URL);
    },
  },
  nodes: {
    show(params) {
      return axios.get(NODES_INDEX_URL, { params });
    },
  },
  places: {
    index() {
      return axios.get(PLACES_INDEX_URL);
    },
    create(data) {
      return axios.post(PLACES_INDEX_URL, data);
    },
  },
  vehicles: {
    show(params) {
      return axios.get(VEHICLES_INDEX_URL, { params });
    },
    create(data) {
      return axios.post(VEHICLES_INDEX_URL, data);
    },
  },
  events: {
    show() {
      return axios.get(EVENTS_INDEX_URL);
    },
    create(data) {
      return axios.post(EVENTS_INDEX_URL, data);
    },
  },
};
