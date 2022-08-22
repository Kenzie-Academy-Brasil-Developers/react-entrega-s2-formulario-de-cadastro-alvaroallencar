import DetailsTechModal from "../DetailsTechModal";
import { useUserContext } from "../../Providers/UserContext";
import { useTechContext } from "../../Providers/TechContext";

import { TechsListWrapper, TechItem } from "./styles";

const TechsList = (): JSX.Element => {
  const { user } = useUserContext();
  const {
    details,
    setTechId,
    setTechTitleInput,
    setTechStatusSelect,
    showDetailsTechModal,
  } = useTechContext();

  // sorting techs by most recents:

  user.techs.sort((a, b): number => {
    return a.created_at > b.created_at ? -1 : 1;
  });

  const handleClick = (
    idTech: string | number,
    techTitle: string,
    techStatus: string
  ): void => {
    showDetailsTechModal();
    setTechId(idTech);
    setTechTitleInput(techTitle);
    setTechStatusSelect(techStatus);
  };

  const handleTranslate = (status: string): string => {
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
