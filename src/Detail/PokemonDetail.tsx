import styled from "@emotion/styled";
import PokeMarkChip from "./../Common/PokeMarkChip";
import { useEffect, useState } from "react";
import { fetchPoketmonDetail } from "../Common/Service/pokemonService";
import { useParams } from "react-router-dom";

type pokemonDetailType = {
  baseStats: {
    name: string;
    value: number;
  }[];
  height: number;
  id: number;
  images: {
    frontDefault: string;
    dreamWorldFront: string;
    officialArtworkFront: string;
  };
  name: string;
  types: string[];
  weight: number;
};

export default function PokemonDetail() {
  const [pokemon, setPokemon] = useState<pokemonDetailType | null>(null);
  const Params = useParams();
  useEffect(() => {
    (async () => {
      if (Params.name) {
        const result = await fetchPoketmonDetail(Params.name);
        setPokemon(result);
      }
    })();
  }, [Params.name]);
  return (
    <Container>
      <ImageContainer>
        <Image src={pokemon?.images.dreamWorldFront} />
      </ImageContainer>
      <Divider />
      <Body>
        <h2>기본 정보</h2>
        <Table>
          <tbody>
            <TableRow>
              <TableHader>번호</TableHader>
              <td>{pokemon?.id}</td>
            </TableRow>
            <TableRow>
              <TableHader>이름</TableHader>
              <td>{pokemon?.name}</td>
            </TableRow>
          </tbody>
        </Table>
        <h2>능력치</h2>
        <Table>
          <tbody>
            <TableRow>
              <TableHader>hp</TableHader>
              <td>{pokemon?.baseStats[0].value}</td>
            </TableRow>
            <TableRow>
              <TableHader>attack</TableHader>
              <td>{pokemon?.baseStats[1].name}</td>
            </TableRow>
          </tbody>
        </Table>
      </Body>
      <Footer>
        <PokeMarkChip />
      </Footer>
    </Container>
  );
}

const Container = styled.section`
  border: 1px solid #c0c0c0;
  margin: 16px 32px;
  border-radius: 16px;
  box-shadow: 1px 1px 1px 1px #c0c0c0;
`;

const ImageContainer = styled.section`
  display: flex;
  flex: 1 1 auto;
  justify-content: center;
  align-items: center;
  margin: 8px 0;
`;
const Image = styled.img`
  width: 350px;
  height: 350px;
`;

const Divider = styled.hr`
  margin: 32px;
  border-style: none;
  border-top: 1px dashed #d3d3d3;
`;

const Body = styled.section`
  margin: 0 32px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
  margin: 0 auto 16px;
  & th,
  td {
    padding: 6px 12px;
  }
`;

const TableRow = styled.tr`
  border-width: 1px 0;
  border-style: solid;
  border: 1px solid #f0f0f0;
`;

const TableHader = styled.th`
  width: 1px;
  white-space: nowrap;
  text-align: left;
  font-weight: normal;
  font-size: 14px;
  color: #a0a0a0;
`;

const Footer = styled.section`
  display: flex;
  flex-direction: row;
  margin: 32px 16px;
`;
