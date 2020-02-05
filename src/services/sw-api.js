const BASE_URL = 'https://swapi.co/api/';

export function getAllStarships() {
  return fetch(`${BASE_URL}starships`, {mode: "cors"})
    .then(res => res.json());
}

export function getAllPlanets() {
  return fetch(`${BASE_URL}planets`, {mode: "cors"})
    .then(res => res.json());
}