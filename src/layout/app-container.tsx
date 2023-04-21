import * as React from "react"
import { Container, Layout } from "./app-container-styled"
import LeftSide from "./left-side/left-side"
import MainContent from "./main-content/main-content"
import RightSide from "./right-side/right-side"

const AppContainer: React.FC = () => {
  return (
    <Layout>
      <Container>
        <LeftSide />
        <MainContent />
        <RightSide />
      </Container>
    </Layout>
  )
}

export default AppContainer
