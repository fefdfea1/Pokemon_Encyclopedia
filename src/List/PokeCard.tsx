import styled from "@emotion/styled";
import PokeNameChip from "../Common/PokeNameChip";
import PokeMarkChip from "../Common/PokeMarkChip";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchPoketmonDetail } from "../Common/Service/pokemonService";
import { PokemonDetailType } from "../Common/Service/pokemonService";

interface PokeCardProps {
  name: string;
}

export default function PokeCard(props: PokeCardProps) {
  const navigate = useNavigate();
  const [pokemon, setPokemon] = useState<PokemonDetailType | null>(null);

  const handleClick = () => {
    navigate(`/pokemon/${props.name}`);
  };

  useEffect(() => {
    (async () => {
      const detail = await fetchPoketmonDetail(props.name);
      setPokemon(detail);
    })();
  }, [props.name]);

  if (!pokemon) {
    return null;
  }

  return (
    <Item onClick={handleClick}>
      <Header>
        <PokeNameChip name={props.name} id={pokemon.id} />
      </Header>
      <Body>
        <Image src={pokemon.images.dreamWorldFront} alt={pokemon.name} />
      </Body>
      <Footer>
        <PokeMarkChip />
      </Footer>
    </Item>
  );
}

const Item = styled.li`
  display: flex;
  flex-direction: column;
  padding: 8px;
  border: 1px solid #c0c0c0;
  width: 250px;
  height: 300px;
  box-shadow: 1px 1px 3px 1px #c0c0c0;
  border: 1px solid #c0c0c0;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }

  &:active {
    background-color: yellow;
    opacity: 0.8;
    transition: background-color 0s;
  }
`;

const Header = styled.section`
  display: flex;
  flex-direction: row;
  margin: 8px 0;
`;

const Image = styled.img`
  width: 180px;
  height: 180px;
`;

const Body = styled.section`
  display: flex;
  flex: 1 1 auto;
  justify-content: center;
  align-items: center;
  margin: 8px 0;
`;

const Footer = styled.section`
  display: flex;
  flex-direction: row;
  margin: 8px 0;
`;
