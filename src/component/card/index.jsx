import {
  CardContainer,
  ImgContainer,
  InfoContainer,
  Status,
} from "./styled.card";

const ComponentCard = ({ character }) => {
  return (
    <CardContainer>
      <ImgContainer src={character.image} alt="personagem" />
      <InfoContainer>
        <h4>{character.name}</h4>
        <div>
          {character.species} - &nbsp;
          <Status alive={character.status === "Alive"}>
            {character.status}
          </Status>
        </div>

        <p>Last known location:</p>
        <span>{character.location.name}</span>
      </InfoContainer>
    </CardContainer>
  );
};

export default ComponentCard;
