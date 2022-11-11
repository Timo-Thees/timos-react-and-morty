import { useState, useEffect } from "react";

export default function useFetch(arrayProp) {
  const [characters, setCharacters] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://rickandmortyapi.com/api/character");
      const data = await response.json();
      return data;
    }
    fetchData();
  }, [arrayProp]);
  return [characters, setCharacters];
}
