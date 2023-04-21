import * as React from "react";
import Menu from "../../components/menu/menu";
import PlayerControl from "../../components/player/player-control";
import PlayerTracking from "../../components/player/player-tracking";
import {
  Aside,
  Container,
  Footer,
  Header,
  IconAdd,
  IconCrystal,
  IconDualCrystal,
  IconExplore,
  IconMeal,
  Logo,
  Main,
  SideBar,
} from "./left-side-styled";

const LeftSide: React.FC = () => {
  const [crystalSelected, setCrystalSelected] = React.useState(false);
  const [mealSelected, setMealSelected] = React.useState(false);
  const [dualCrystalSelected, setDualCrystalSelected] = React.useState(false);
  const [exploreSelected, setExploreSelected] = React.useState(false);
  const [addSelected, setAddSelected] = React.useState(false);

  const updateState = React.useCallback(
    (
      action: (value: React.SetStateAction<boolean>) => void,
      value: boolean
    ) => {
      setCrystalSelected(false);
      setMealSelected(false);
      setDualCrystalSelected(false);
      setExploreSelected(false);
      setAddSelected(false);
      action(value);
    },
    []
  );

  return (
    <Container>
      <Header>Explorer</Header>
      <Aside>
        <Logo />
        <SideBar>
          <IconCrystal
            selected={crystalSelected}
            onClick={() => updateState(setCrystalSelected, true)}
          />
          <IconMeal
            selected={mealSelected}
            onClick={() => updateState(setMealSelected, true)}
          />
          <IconDualCrystal
            selected={dualCrystalSelected}
            onClick={() => updateState(setDualCrystalSelected, true)}
          />
          <IconExplore
            selected={exploreSelected}
            onClick={() => updateState(setExploreSelected, true)}
          />
          <IconAdd
            selected={addSelected}
            onClick={() => updateState(setAddSelected, true)}
          />
        </SideBar>
      </Aside>
      <Main>
        <Menu />
      </Main>
      <Footer>
        <PlayerTracking />
        <PlayerControl />
      </Footer>
    </Container>
  );
};

export default LeftSide;
