import { css } from "@emotion/react"
import styled from "@emotion/styled/macro"

import { ContentSwitch, HashRouter, HashRoutes } from "./components"
import { useUrlHash } from "./components/HashRouter/utils/useUrlHash"
import { Settings } from "./Settings/Settings"
import { Startpage } from "./Startpage/Startpage"

const Link = styled.a`
  ${({ theme: { space, color } }) => css`
    color: ${color.fg.base};
    position: fixed;
    bottom: ${space.small};
    right: ${space.small};
    :hover {
      color: ${color.primary.fg};
    }
  `}
`

const Layout = styled.div`
  ${({ theme: { color } }) => css`
    position: relative;
    height: 100%;
    width: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: ${color.bg.base};
    color: ${color.fg.base};
  `}
`

const App = () => {
  return (
    <Layout>
      <ContentSwitch leftContent={<Startpage />} rightContent={<Settings />} />
    </Layout>
  )
}

export default App
