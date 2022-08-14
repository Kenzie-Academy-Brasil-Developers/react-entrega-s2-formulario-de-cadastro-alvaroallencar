import { useContext } from "react";
import DetailsTechModal from "../DetailsTechModal/DetailsTechModal";
import { UserContext } from "../../contexts/UserContext";
import { TechContext } from "../../contexts/TechContext";

import { TechsListWrapper, TechItem } from "./techsList.styles";

const TechsList = () => {
  const { user } = useContext(UserContext);
  const {
    details,
    techId,
    setTechId,
    techTitleInput,
    setTechTitleInput,
    techStatusSelect,
    setTechStatusSelect,
    showDetailsTechModal,
  } = useContext(TechContext);

  // sorting techs by most recents:

  user.techs.sort((a, b) => {
    return a.created_at > b.created_at ? -1 : 1;
  });

  const handleClick = (idTech, techTitle, techStatus) => {
    showDetailsTechModal();
    setTechId(idTech);
    setTechTitleInput(techTitle);
    setTechStatusSelect(techStatus);
  };

  const handleTranslate = (status) => {
    if (status === "Iniciante") {
      return "Beginner";
    } else if (status === "Intermediário") {
      return "Intermediary";
    } else if (status === "Avançado") {
      return "Advanced";
    } else {
      return status;
    }
  };

  return (
    <>
      <TechsListWrapper>
        {user.techs.map((tech) => {
          return (
            <TechItem
              key={tech.id}
              id={tech.id}
              onClick={() => handleClick(tech.id, tech.title, tech.status)}
            >
              <div>
                <p>{tech.title}</p>
              </div>
              <div>
                <p>{handleTranslate(tech.status)}</p>
              </div>
            </TechItem>
          );
        })}
      </TechsListWrapper>

      {details && <DetailsTechModal />}
    </>
  );
};

export default TechsList;
