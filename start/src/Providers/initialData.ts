import { InitialBookmarkGroup } from "@startpage/bookmarks"
import { getTheme } from "@startpage/preset"
import { SearchEngineName, SearchOptions } from "@startpage/search"
import jsonData from "../data.json"

import { ShadowOptions } from "../Settings/Surface/fragments/ShadowStyle"

export const initialCustomCss = `/* You can put any css in here. For example:
#root > div {
  background-color: #373e4d;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23579190' fill-opacity='0.4'%3E%3Cpath d='M0 38.59l2.83-2.83 1.41 1.41L1.41 40H0v-1.41zM0 1.4l2.83 2.83 1.41-1.41L1.41 0H0v1.41zM38.59 40l-2.83-2.83 1.41-1.41L40 38.59V40h-1.41zM40 1.41l-2.83 2.83-1.41-1.41L38.59 0H40v1.41zM20 18.6l2.83-2.83 1.41 1.41L21.41 20l2.83 2.83-1.41 1.41L20 21.41l-2.83 2.83-1.41-1.41L18.59 20l-2.83-2.83 1.41-1.41L20 18.59z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
}
*/
`

export const initialGeneralSettings = jsonData["yags-general"];

export const initialTheme = jsonData["yags-theme"]

export const initialSearchSettings = {
  placeholder: "Search the web",
  engine: "google" as SearchEngineName,
  forwardingLookup: {
    "/": "/",
    deepl: "https://deepl.com/",
    reddit: "https://reddit.com/",
    maps: "https://maps.google.com/",
  } as SearchOptions["forwardingLookup"],
}

export const initialSurfaceSettings = jsonData["yags-surface"];

export const initialBookmarks: InitialBookmarkGroup[] = jsonData['yags-bookmarks']
