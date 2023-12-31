import { Route, Routes } from "react-router-dom";
import PokeCardList from "./List/PokeCardList";
import PokemonDetail from "./Detail/PokemonDetail";

export default function PageNavigator() {
  return (
    <Routes>
      <Route path="/" element={<PokeCardList />}></Route>
      <Route path="/pokemon/:name" element={<PokemonDetail />}></Route>
    </Routes>
  );
}
