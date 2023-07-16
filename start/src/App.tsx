import { css, Theme } from "@emotion/react"
import styled from "@emotion/styled/macro"
import { useEffect, useState } from "react"

import { ContentSwitch, HashRouter, HashRoutes } from "./components"
import { useUrlHash } from "./components/HashRouter/utils/useUrlHash"
import { Settings } from "./Settings/Settings"
import { Startpage } from "./Startpage/Startpage"
import { useGeneralSettings } from "./Providers"

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

const bgImgPartial = ({ theme }: {theme: Theme}) => {
  const [{ bgImg, displayBgImg, bgImgBlur }] = useGeneralSettings()

  if (displayBgImg) {
    return css`
      overflow: auto;
      &:before {
        content: "";
        position: fixed;
        left: 0;
        right: 0;
        z-index: -1;
        height: 100%;
        width: 100%;


        display: block;
        background-image: url(${bgImg});
        filter: blur(${bgImgBlur}px);
        -webkit-filter: blur(${bgImgBlur}px);
      }
    `
  } else {
    return css `
      background-color: ${theme.color.bg.base};
    `
  }
}

const Layout = styled.div`
  ${({ theme: { color } }) => css`
    position: relative;
    height: 100%;
    width: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    color: ${color.fg.base};
  `}
  ${bgImgPartial}
`

const App = () => {

  return (
    <Layout>
      <ContentSwitch leftContent={<Startpage />} rightContent={<Settings />} />
    </Layout>
  )
}

export default App
