import { useState } from "react"

import { TextInput } from "./TextInput"

type ImageInputProps = {
  label: string
  value: string
  onChange: (value: string) => void
}

export const ImageInput = ({
  label,
  value: img,
  onChange,
}: ImageInputProps) => {
  const [value, setValue] = useState(img)
  const [isValid, setIsValid] = useState(true)

  const handleChange = (value: string) => {
    setValue(value);
    setIsValid(true);
    onChange(value);
  }

  return (
    <TextInput
      label={label}
      value={value}
      onChange={handleChange}
      invalid={!isValid}
    />
  )
}
