import styled from "@emotion/styled";
import PokeCard from "./PokeCard";
import { useEffect, useState } from "react";
import {
  fetchPokemons,
  pokemonListResponseType,
} from "../Common/Service/pokemonService";
export default function PokeCardList() {
  const [pokemons, setPokemons] = useState<pokemonListResponseType>({
    count: 0,
    next: "",
    results: [],
  });
  useEffect(() => {
    (async () => {
      const result = await fetchPokemons();
      setPokemons(result);
    })();
  }, []);
  return (
    <List>
      {pokemons.results.map((pokemon) => {
        return <PokeCard key={pokemon.name} name={pokemon.name} />;
      })}
    </List>
  );
}

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 32px 0;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;
