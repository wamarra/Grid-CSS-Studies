import * as React from "react";

import education from "../../assets/education.png";
import entertainment from "../../assets/entertainment.png";
import explore from "../../assets/explore.png";
import game from "../../assets/game.png";
import music from "../../assets/music.png";
import student from "../../assets/student-hub.png";
import tech from "../../assets/tech.png";
import { Container, Icon, MenuItemLabel } from "./menu-item-styled";

interface MenuItemProps {
  name: string;
  urlIcon: string;
}

const MenuItem: React.FC = () => {
  const [selected, setSelected] = React.useState<MenuItemProps>();

  const items = React.useMemo<MenuItemProps[]>(
    () => [
      { name: "Home", urlIcon: explore },
      { name: "Music", urlIcon: music },
      { name: "Gaming", urlIcon: game },
      { name: "Education", urlIcon: education },
      { name: "Science & Tech", urlIcon: tech },
      { name: "Entertainment", urlIcon: entertainment },
      { name: "Student Hubs", urlIcon: student },
    ],
    []
  );

  return (
    <>
      {items.map((item) => (
        <Container
          key={item.name}
          selected={selected === item}
          onClick={() => setSelected(item)}
        >
          <Icon url={item.urlIcon} />
          <MenuItemLabel>{item.name}</MenuItemLabel>
        </Container>
      ))}
    </>
  );
};

export default MenuItem;
