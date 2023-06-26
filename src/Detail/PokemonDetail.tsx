import styled from "@emotion/styled";
import PokeMarkChip from "./../Common/PokeMarkChip";

const TempImgUrl =
  "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBQUFBUVFRUZGBUZGx8dGxsZGhsbGBsdGx0bHRsdHRsbIS0kHSMqIBsiJkUlKy4xNDY0HyM6QDozTC0zNDEBCwsLEA8QHxISHTMhJCozMTM+NjMzMzw1MTMzPDUzMzE1MzMzMzMzMzM5MzMxMzMzNTMzMzMzMzMzMzMzPDUzM//AABEIAOEA4QMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAABQYDBAcBAv/EAEIQAAIBAgQDBQQHBgQGAwAAAAECAAMRBBIhMQVBUQYTImFxMlKBkQdCYnKCocEUIzOSorGywtHwFSRzo7PhNEOD/8QAGQEBAAMBAQAAAAAAAAAAAAAAAAECAwQF/8QAJREBAQACAQQCAgMBAQAAAAAAAAECEQMEEiExQVEicROBoWEy/9oADAMBAAIRAxEAPwDs0REBERAREQEREBERAREQPJ8VKgUEsQANyTYTyq4VSzEBQCSTsANSTI1buRUcEe4h+oCNyPfI58rkDmTFo+3x7t/DTT3nuo9VT2j8cvrIDinaejRbLUrvUqbCnRGt+lkOh8meQ3EuK4jiGIbB4JslNf4lUX2vZjmGoW+gAsWIOoFzLd2f7L4bBgd2gL2sajAFz1sfqjyFvjJEXgqWKxHi/ZKdBDqGxJNWqfPuxYj0LiTOH4KFHiZSfsU0QfAWY/nJmIGHD0QihbsQBa7Esx9WOpmaIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIkdhOIB3qpbKUaw1vmA0J2015a8utpsY6qUp1HG6oxHqASIGzEj+FXCZGYsUYrckk23W5OpOUgXO8yYrGKmntPa4RbZj8OQvzNh5wNbidTM6UuWjv6A+AH1YE/gI5yt9uOMfs2EchrPU8CnmAQS7eVlB16kScoowzM5BdzmYja+wA+yAAPhfcmc643ihj+JYegmtNHCeRAIesfQhMv4YHQOxfBRhMKilbVHAap1zEDw+ijT4E85YoiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiYqtQKpZjYDUwKWeId1ine/gWowb7pYhvlvb7Ilg4ljM6BVVrO6rmPhBFwWsDqfCDytvrNPAcLCs1Vxeozu6g2tTzszAcwWF9W+XnnrHNUQe4C59SCi/MF/lFu/SdPlC3e1FDsqkK5C2FycynxWuNEG1p5iK1KgjVHZUXdmJ3PUk6seWtzI3tHxlMHlqOCxZWVVHNgVIudlABJv/facs4rxati3L1GNr+FRoqj7I5ep1MSIWLtP20etmpYe6U9mqbO3UL7o89/Sbf0U8Lz16mII8FNcidM79PRPydZTuG8PfEVEpU1zMxsBsDbck8lA1J/vz7vwLhaYWglFdco8Tc2Y6sx9T8hYcpIk4iJAREQEREBERAREQEREBERAREQEREBERAREQPJBcdqFnpUwxFnR2A3PjGUenhZvVBJ2VrjWGxH7QtWlS7xQo0zqmoFQWOYj3wb+spnvXj7TEm7SuYftLQbGfstMmpUfMXdbZKYRTZb/AFtraaXJ9JQ+0nG8fVqGlWU4ZAfFSF8zDzZdWHmDlOu8luwOASmz4pyBdO7VQCMrEgsADroFHXVjr0n1dIt8t36UGHd4e+/eNb+Wc/oYepUYIilidlG5voLn109TbW8vnaOicbUTxZKdO40F2Zmte19BYAa66k9JLdk+E01rAKoC0xnPMs5uqFid7DMddiF6TTXhG0z2Q7MpgqdzZq7gd4/T7C/ZB+Z16AWSIlUkREBERAREQEREBERAREQEREBERAREQEREBERAREQKFxTs3VxeJqOyZVDZQztlDKNBlVQSQAOehzH1jiXBf2ZKSrUWzMVyqmWwys11ux9030+sDpznOO8YqUXyKFUZM2dhe+pBtsBlsCSb+0NOZ1OE4JmJr1izVHWy591QkG1reEsQCQAALAW3vO9IR2C4cWACjT/fOTfDqS4epc+zUUKW+qrKSVB6Zs5F+oA5ibFHd+gbT0yr+t5lKBrggEHQg6gg7gjnFyTIlIkQlY0LBjekSACTqhJsBc+0pJt1HmPZ+MBxkVMVXoWACAZTrdrWD3HkSLeplO6TX/U6TcTyeyyCIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiJr4uqyozKuZgCQo5kcoEbxbDJVq0lYX7u7t6HRUPkzDN/+ducysdZX+FcYvUrGo+ZmKsCNghXwgDkLhvzvfea1TjZxGIXDUvZ1NRhyUbrfqSQPS8aptZyZpcOWriVz5u6pEsAqgGoQrFbljcLcjYA6cxtNyYVP7Ot0ZVS5ORtEuxJOQgZlJJ28Q6AXkbS3sPwukhDZczjZ3Jdhfexa+X0FhKNgcT3XEmY6Bq7o3mHdlX+rKfhOhUKmdVaxXMAbMLMLi9iORE5P2ga2Lq0yxV+8dl66ksCDyNjp6eU5uptxky+qnD5jrb1AoJJAA3JNgPUmRdPtHhWdaa1lZmIVcoJBJ2AYDL+c57iMVXxVRFdnqudFQaLfqEFlHXMdhuZduznZtcPapUs1cjfdUB3VL/m258hpJw5suS/jPH3U3HXtY5F4njVOm5VwyqLXcgZBcAi5BuBruRbQ6yUle4zTHfWOoqUwLcvAxv8A+QTTlzuOO4jGbulgBmHE4hEXM7WG3mSdgANSfISscE4hUpI9DIzd29qbNogpnUDN9bL0HIqNOWDH45g6qAauJbRF2Av0GyrYXPkNSbXmeXUSSa82/CZhfls8S4tWdlpU7o9Q2RR7Vubuw9lQNSF103JNpZMLRyIiZmbKAMzEsxsLXJOpJ6yN4HwbuAXc567jxvyHPIg5KPz3PICamnHMpN5XzUWz4exETVUiIgIiICIiAiIgIiICIiAmGtVVFZ2IVVBZidgALkn0EzSkfSTxXu6S4dD46p8VtwgP6n5hWEDnnEeJ1Gr16tIlFrGyjmq5jltfY6k/iNuUun0e8KFOi1VvbqNp5IlwP6sxlErG2XooJ+Qt+s7Bw7Dd1Sp0/cRVPqAAT8TG06feMqMlNmRczAaDqeUy8EwYyU6znPVdQxY7LnAJVBso1t1PMmez5wWM7sd06uctyjKpKlb6Lf6rL7NjuADzIBD67Qcap4Skaj6k6Io3ZrXA8h1PIfKcbrV2r1zXqHxsbmwOW+bUfZAU2HpLj2s4LjcZXLqirTVctNXqAEDdiQtwCW89gvSV/iHZmrTSkRSfvLN3zMyCnuuQKc+UWGYEm1yR5AcvN3Zb+ovMZYvP0dYJRhu/Nmq1GYM3QKxUKvQeG/x8ha4yofR0WTDNRqKUdKjeFtCVYBgw6rckXGmhlvm3Frtmlb7JRO3PHBTqJTpn94Ee7WuFuyWXpmOU76C1zyBn+M8VCnukazn2m9wH/MRsOW55AwVVqDMBlR2p9RmK31Gp8wTrznN1HU447x9rTjyynjwh+GVK65dC1atoiliSRcnvCGOgsNPLMTpLvwHgq4cF3Oau/tv/AJRfl/ci/QCD7IpnxmJqNqyAAX1sHJAt00p/1HrLsJbpcJZ3/Zfxnb9PYiQPEO0CISlKzuNCb+BTsbsPaI90dLErOtRPRKFxDjZVS9asyqOebu0HkAtifQkmfHC0xGLAelR7umdqtfMMw5MlIHM482KeRMnSNugRI7hnD+5BvUdyQAcx8Itf2F+re/U7CSMhJERAREQEREBERATDXrBFZjeygk2FzYC+gG58pmmhxdrUiSbeJP8AGunx2gYhj6ptakFFvr1AGv8AdQMP6pVOPdl6uLrms1dE0AVe7LZQBtmzi+pY7fWMsz1rvlG9rnyGw+Z/sYqVVW2ZgL7XIF/S+8hKkVexOQF3xSBANb0jtfr3nO9pP1sNUrEMQ7KBoHb9npm+pawDVb/et+Zkm9dGBGV2HTI1j/MACJhqUlrorpUIDKGHoRcXXQxBiGFRBbJhz9nLYXO92INz55ZsUcSi2XLkvtf2D5KwOUemh8pF/wDBal9XQ/zTbocJt7TmxFiF0BltT7RtJo9xsR1B8p9TWxfeZLUyAwtv0HIE3APmQf1EWeJupyGoFqe5Vp2Y+hRgrDzW4mWeeOPmrTG30zcRwhpjvKZyhTcgaZOroeXmuxF/MN9N2ifugAo77ZjYimPtC+9/dubG9zpr4OLKulVco94eNPjpmX1It5ysYxWNqaNZSzjODfwU2ygjqSLfO+trHk5c7ufxWefH6v20xk1+Xwy0xUxLPTpOFAP7yq+tidSAPrMb3tsOfIHZfCJSqsqaju0ubDU3qcxqdLbkmYaOHRFsgyjoOvM+p5nnM2AwxIqVCdCxt6IApv8AFTK9R004+Gz3bZunHncsmXs3kzYl2dl/eBfC7psL/VIv7clsRxYoLJUc9MwUj5kXPxMolLi9Oh3pqMBme4tqT4VBsBqdprt2xpHam59co/Uzt6bGTjn6Z8l/KrZi8dVqgq7syn6osqnyIUDMPI3EjeI45KFM1H2GgA3Y8lH+9JXq3bIW8NLX7T6fkJtdj+EVOK4jvsQL4WkdrWR20IRRzGxY+g56dG5PTPSd7FdmGxLrj8aM19aFIjwqNw5B/IfiNzbL0yeT2ZrEREBERAREQEREBESP4lXdQgUhczZS5F8uhIsNrm1gTpcjQ7QMmMxq0wL3Zz7KLqzeg5D7RsBzIld453j0nzkZ8jMFXVKYUXza+097KGPM3AFmkpTpqp3uzbsxuzW6k9Omw5SKGNpvinp5hrSCtci1xUso15k1CPPSB5gKjEBEI7xzeo51NNBcAgHQsToAdPaOtrGUw2FSncqLsfadjmdvVjrby2HICfGEwiUwQo3NyTuTt+Q0kb2lw2JxFP8AZ8MVV3/iVGYqEp7NawJzNe3pm1EXzRWO03b2mKjUaa56S3DurAZ2G6jTVRz6+m+vgO1FGptnQje4vv5oT85uj6I07s/82/e20IRe6+KXzH1DD05Su4vsDxLDNmp01qgbGm67eavlNvLWWl0aXHDcQawZKl1IuCDcEeRkhhuKtezH5ygd9isMF72jUolybBlUqxW2Yi+24+fOT/DK/e0xUDE9Vut1PRgALH5jzMneNukeYu9CsHFwYxGGSouWoodTyYXHr5HzlboV3Q3BtJSlxf3hf0lbgmZI3H8JqUAXpFqlMbo2rqPsndgPn6yKo4gVKgy7BWJ6XYra3rYn4SW452iARqdPR2Gpv7CndtOdtvnykVw7DZFuRZmsSOgHsr8B+ZM4semx/mlx8a81pc726rYr5cpLeyBc36DW/wCUzYomjg0W37xgBYkk5nNyCTrubXnylHvHROTNdvur4j8DYL+Ke8aqZq9OlyQNUP5AfmQZfqfyznGcf443JQX7JYx6gU5CHNu8LWQfe0JQfhI1kq/0XcQHOi3pUf8AVBOhdnsD3hFRh+7RvCPfdfrfdU/Nh9kXtk6vXpm5Vwb6KDcNiqotzSlck+RdgLD0W/mJ0zBYOnRprTpIEpqLKqiwH++s2okBERAREQEREBERAREQE1sZhlqI1Nh4WFjY2I6EHcEHUEbECbMQOccVx9TC1RQqOWKjMGt7aMGUNpsbixHUdCJG8AJqYwG3hLKfiuZwP+3f1yyyduuD1azUqtKmXyhlcLbMBurAEi49oaXPiGm9tLshg8pUnfIah6g1Mop36EICLdbynJnrWM92rYz3VrCzR/4klLGpSewFWkArH3ldrL+K+nmAOYkitpzTtJxIYmuXX+GqhE8wCSX8rk6eSg85eTdQ6/Ep/ZHtG1UihVN6liUf3wN1b7QGt+YB6a3CEOV/SliL4mknJad/53YH/AJo8I4xh6GBcFQ2Keo2UDRkuiAM5H1R7p9o/Ejz6R8Wr4/IhDFaaIdbKrZqhIJ5aMJG9luA1MbUyqMlNT+8qDUAXPs+8zW0+Z2seW3KZ24xeXGzTPh+0VY6d3Tcjc6r87G3wsJH4rtdUzFMgQjQ2AvpvqWP9pbu1fZunhO7aiCtNrqQSWs4F73JucwB9MvnOdcaw+WoTyfUeo0P+vxnTMb2+bVfH0sHDq/f02awDEsDqTqeZJ3NiNZa8PUzor+8oPzEofZapY1Ke97MB+R/yy44XDVMvduAKdySb3LhiTkty1NielhzNuHHmnBnlMvXtpcLlJpvcOqEsamwIsv3ev4jr6BfORmIxBerVqKdAtifJbM9vO2UD71+U2se5LLSpmzNqx91BufU7D1manRVVyAWW1reu9+t7/nHR4Z8md5cv6OWzGdsdFp0wqhVAAAAAAsABoAANhMshcHxamuHos7+MqBYaszL4Wso1tcb7DnPijx3PVp0xTIDki7MAwsrN7Kgg+z7079Mk7ERAREQEREBERAREQEREBERAjuMVctJgN3sg6+LQkei3PwkPwZBeo/Vgo9FF/7sZscfxHjC8lXN+J7qvyAbT7QmvwRO8p01Q+EqHdhyz+MID7xDb8h0us5t93N+p/taesf2wdocJicTQdMMVABs2Ykd5a+ZFI5X0N9Dqt95zRK5zGnUQpUUlSrCxBG412PO3Mai87uiAAAAAAWAGwA2AlV7bdllxSd5TAGIQacs6jXIT16HkfWdFtnmKRRMBju5qU6h2Rwx+6D4/wCm4l77bdphhqfdUz/zFQeH7CnTOfPoOuvIzmGGr38Le15ixNtwQdmHMf8Au1k7MdjXxY76vUPd5iLBi1R8hK6sfYGgHM22toZXPK5Yy4/KZNXypJpqzM1yTe5B69T1vOvfRlSVcFoLE1HLeZ0Av8AJrdtuza/s6PQQL3AN0Rd0Nsx01JBF/QtuZ9fRhWHcVqfNamb8LKoB+amY4S456v0m6s3E32vwoqYSppqlnHlkN2P8uYfGcjxuFWopU/A8wes7fj8P3lKpTvbOjLf7wI/Wchw3DqtWoaYXKym1Qt7NMjQg9TcbDf01nV3TGW1WTaH4PgWpM1TN4kAzMBmWmjsEBsRqSTcD7J6GWjCcSY0VLa1ScgsNybEGw02I+JkjVoYWjTOFaoA1TS7WLM5tZjbS97abDQaSJ4xwyotHVVLqwsFvYgZABrbcoPnPJ6i48uctmvOv6a4zLHLx61/qSTAvRd1qD961mYg3BU3y5T0Go+9m8plvLDV7PhMJSpUwDUorddhnJ1qL5BySfI5Tyld/tPX45Mce2fDny97YKYyNUOyt4r9LDUHy5/Eywdj8KxZ6rX0BVQeRazEW+yuUX82kC1j91d/Mj9B/f0MvfBMPkoUwRZiuZh0ZvER8CbfCTl6IkYiJRYiIgIiICIiAiIgIiICIiBUMaprO6JrUZ2BG4UKcmZugCqD53sN5Y+HYJKNNaajQbnmxOrMbcydZs2E9mWPHMcrl81a5WyR9RETVVzD6RuzmRv2umPC5AqgfVY+zUFtrnQ+djzMkvorxRajXps2YrUDa8gygcvNDLtiKK1FZHAZWBDA7EEWIMrPZLs/UwlbFX/htkCNcEsFznUDYjNY9TciZasylnpbe4ts0cNwyjTdnp01Vn9orpfnttvrN2JqqwYtWKOEIVypCsdQGsbEjyMpfaLC4nD4V6memlmXMFDO7ZmCls7keIXvqp2MvcpP0nY5UoU0P1nLkdVRbEfzOsplhMvaZbPSglRrqcx3JN29by6YmuK2EWrsbIW8mDBWHwa8padeoG+/+9ZO8JxN8NWp80YONNCLqWA6kHU9M69RM+q45cZZPVXwvmurzmbVbo+X2kLoPNqZZQR5GwI8iJ0HieK7qk9TmqkgdW2UfFiB8Zz+igUWBvtr6AL+k6MWVZKVEHJT5MUT4MwX9Z0ic5on95S/6lP8A8iTo0nIhERKpIiICIiAiIgIiICIiAiIgIiICIiAiIgIiIHk5B9ImP77G90DdKQVT0zHxN+R1+6J1TiGLWjTeq2yKTbrbYDzJ0+M45R4e9SoX1eq5ubaZqlRjtfYXzegtM7lO6Y/a0nyz8K4bUxNQU6Y1OrMfZRebN+g5n4kdDxHZhBhhQpWDLm8TbsXGWoWIHMG9trqo0Am92f4OuEpBBYudXb3m/wBBsB/qZJVaiqrMxsqgkk7AAXJ+U0y8+KqqXb7iWVFoqbM3ibqAL5Tb1BYeaDrILBUe7povQa+u5/OYsYHxFfvXuMzZgp3RE1VT56LfzJkjh8O9Rwie23M6hQN2PkL7czYc7ynDnM95T16TlNeG1wTh5rVVNv3dNgzHqy2ZUHxsx8rDnpeJrYHCJSRaajReu5J1JJ5kkk/GbM0t2h7ERICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiBUe3uKtTpUgfbYs3mqDb+ZlPwml2F4cxLV2WygkU9faNsrN5WAKjqWboDJniXZsV6/eVKrFCFGQCxsv1QwOgJJJ0vqdRpadp0woCqAAAAABYADQAAbCYY4X+S5X61F7ZrT7tK/wBqMSQqUh9e5b7q20+LEfAEc5O1HCgsxAAFyToABuSZScdiGr1iyglmsqIPayKdCQdrkliTawIB2lOrz7cNT3fETx47u76j5w1AvmCi7kqiDzsXe55DLlN/L4S2cK4ctBLDV21dubHy6KOQ9dySTi4NwsUVLNY1G1YjYaDwr5aDXc2HQASs06fG4ccxqud3la9iImypERAREQEREBERAREQEREBERAREQEREBERAREQPJ7EQNHjH/x6/wD03/wmVzsH/wDb91P80RMeT/3F8fVXCexE2UIiICIiAiIgIiICIiAiIgf/2Q==";

export default function PokemonDetail() {
  return (
    <Container>
      <ImageContainer>
        <Image src={TempImgUrl} />
      </ImageContainer>
      <Divider />
      <Body>
        <h2>기본 정보</h2>
        <Table>
          <tbody>
            <TableRow>
              <TableHader>번호</TableHader>
              <td>1</td>
            </TableRow>
            <TableRow>
              <TableHader>이름</TableHader>
              <td>이상해씨</td>
            </TableRow>
          </tbody>
        </Table>
        <h2>능력치</h2>
        <Table>
          <tbody>
            <TableRow>
              <TableHader>hp</TableHader>
              <td>45</td>
            </TableRow>
            <TableRow>
              <TableHader>attack</TableHader>
              <td>49</td>
            </TableRow>
          </tbody>
        </Table>
      </Body>
      <Footer>
        <PokeMarkChip />
      </Footer>
      포켓몬 상세 페이지
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
  border-styled: none;
  border-top: 1px dashed #d3d3d3;
`;

const Body = styled.section`
  margin: 0 32px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
  marign: 0 auto 16px;
  th,td: {
    padding 6px 12px;
  }
`;

const TableRow = styled.tr`
border-width: 1px 0
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
