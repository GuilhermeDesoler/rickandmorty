import {
  CardContainer,
  ImgContainer,
  InfoContainer,
  Status,
} from "./styled.card";

const Card = ({ character }) => {
  return (
    <CardContainer>
      <ImgContainer src={character.image} alt="personagem" />
      <InfoContainer>
        <h4>{character.name}</h4>
        <div>
          {character.species} -
          <Status alive={character.status === "Alive"}>
            {character.status}
          </Status>
        </div>

        <p>Last known location</p>

        <h4>{character.location.name}</h4>
      </InfoContainer>
    </CardContainer>
  );
};

export default Card;
