const BASE_URL = 'https://swapi.co/api/';

export function getAllStarships() {
  return fetch(`${BASE_URL}starships`, {mode: "cors"})
    .then(res => res.json());
}

export function getAllPlanets() {
  return fetch(`${BASE_URL}planets`, {mode: "cors"})
    .then(res => res.json());
}

export function getAllVehicles() {
  return fetch(`${BASE_URL}vehicles`, {mode: "cors"})
    .then(res => res.json());
}

export function getAllSpecies() {
  return fetch(`${BASE_URL}species`, {mode: "cors"})
    .then(res => res.json());
}