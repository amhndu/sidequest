import styled from "@emotion/styled"

import { Section, Slider, Switch, TextInput } from "../components"
import { ImageInput } from "../components/TextInputs/ImageInput"
import { useGeneralSettings } from "../Providers"
import { Note } from "./fragments/Note"

const FlexRow = styled.div`
  display: flex;
  > label {
    flex: 1;
  }
`

export const General = () => {
  const [generalSettings, setGeneralSettings] = useGeneralSettings()

  const setTitle = (title: string) =>
    setGeneralSettings({ ...generalSettings, title })

  const setImg = (img: string) =>
    setGeneralSettings({ ...generalSettings, img })

  const setDispalyImg = (displayImg: boolean) =>
    setGeneralSettings({ ...generalSettings, displayImg })

  const setBackgroundImg = (bgImg: string) =>
    setGeneralSettings({ ...generalSettings, bgImg })

  const setDispalyBackgroundImg = (displayBgImg: boolean) =>
    setGeneralSettings({ ...generalSettings, displayBgImg })

  const setBgImgBlur = (bgImgBlur: number) =>
    setGeneralSettings({ ...generalSettings, bgImgBlur })

  const setFont = (font: string) =>
    setGeneralSettings({ ...generalSettings, font })

  const setEnableFonts = (enableFonts: boolean) =>
    setGeneralSettings({ ...generalSettings, enableFonts })

  const setFontSize = (fontSize: number) =>
    setGeneralSettings({ ...generalSettings, fontSize })

  return (
    <Section title="General">
      <TextInput
        label="Title"
        value={generalSettings.title}
        onChange={setTitle}
      />
      <br />
      <br />
      <ImageInput label="Image" value={generalSettings.img} onChange={setImg} />
      <br />
      <br />
      <Switch
        checked={generalSettings.displayImg}
        onChange={setDispalyImg}
        label="Display image"
      />
      <br />
      <br />
      <ImageInput label="Background Image" value={generalSettings.bgImg} onChange={setBackgroundImg} />
      <br />
      <br />
      <Switch
        checked={generalSettings.displayBgImg}
        onChange={setDispalyBackgroundImg}
        label="Display background image"
      />
      <br />
      <br />
      <Slider
        label="Display blur"
        value={generalSettings.bgImgBlur}
        min={0}
        max={32}
        step={1}
        onChange={setBgImgBlur}
        getValueText={value => `${generalSettings.bgImgBlur}px blur`}
      />
      <FlexRow>
        <TextInput
          label="Font"
          value={generalSettings.font}
          onChange={setFont}
        />
        <Slider
          label="Font size"
          value={generalSettings.fontSize}
          onChange={setFontSize}
          min={0.5}
          max={2}
          getValueText={value => `font-size: ${value}rem`}
          step={0.1}
        />
      </FlexRow>
      <Switch
        checked={generalSettings.enableFonts}
        onChange={setEnableFonts}
        label="Google fonts"
      />
      <Note>
        Fonts are automatically fetched from{" "}
        <a href="https://fonts.google.com/">google fonts</a> if enabled and
        possible. But you can also use local fonts.
      </Note>
    </Section>
  )
}
