import { useEffect, useState } from "react"

import styled from "@emotion/styled/macro"

import { useGeneralSettings } from "../Providers"

const fallbackImage = "https://http.cat/404"

const Img = styled.img`
  height: 300px;
  width: 300px;
  object-fit: cover;
`

const Video = styled.video`
  height: 320px;
  max-width: 400px;
  object-fit: cover;
`

export const Image = () => {
  const [{ img, displayImg }] = useGeneralSettings()
  const [src, setSrc] = useState(img)

  useEffect(() => setSrc(img), [img])

  if (!displayImg) return null

  const srcUrl = new URL(src);

  if (srcUrl.pathname.endsWith("mp4")) {
    return <Video src={src} onError={() => setSrc(fallbackImage)} loop muted autoPlay/>
  } else {
    return <Img alt="" src={src} onError={() => setSrc(fallbackImage)} />
  }
}
