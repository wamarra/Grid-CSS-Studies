import * as React from "react";
import addFriend from "../../assets/add-friend.svg";
import activeAvatar from "../../assets/avatar-active.svg";
import deafen from "../../assets/deafen.svg";
import mic from "../../assets/mic.svg";
import {
  Avatar,
  Container,
  Content,
  Icon,
  Username,
} from "./player-control-styled";

const PlayerControl: React.FC = () => {
  const [selected, setSelected] = React.useState<string>();

  const items = React.useMemo<string[]>(() => [addFriend, deafen, mic], []);

  return (
    <Container>
      <Avatar>
        <Icon url={activeAvatar} size="32px" isActive={false} />
        <Username>sophiafortune</Username>
      </Avatar>
      {items.map((item) => (
        <Content key={item} onClick={() => setSelected(item)}>
          <Icon url={item} size="16px" isActive={item === selected} />
        </Content>
      ))}
    </Container>
  );
};

export default PlayerControl;
