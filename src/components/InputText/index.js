import React from "react";

import { Container, Input, Label, Icon } from "./styles";

const InputText = ({
  value = "",
  icon = null,
  setValue,
  margin = "0",
  name,
  type = "text",
  backgroundName = "var(--color-dark)",
  borderColor = "var(--color-darker)",
  borderColorHover = "var(--color-primary)",
  color = "var(--color-white)",
  colorLabel = "var(--color-white)",
  onFocus,
  onBlur,
}) => {
  return (
    <Container margin={margin} backgroundName={backgroundName}>
      <Input
        value={value}
        type={type}
        className="Input"
        autoComplete="off"
        required
        onChange={setValue}
        borderColor={borderColor}
        borderColorHover={borderColorHover}
        color={color}
        onFocus={onFocus ? onFocus : () => {}}
        onBlur={onBlur ? onBlur : () => {}}
      />
      <Label className="Label" colorLabel={colorLabel}>
        {icon && <Icon>{icon}</Icon>} {name}
      </Label>
    </Container>
  );
};

export default InputText;
