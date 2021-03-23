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
  required = true,
  mask = "",
}) => {
  return (
    <Container margin={margin} backgroundName={backgroundName}>
      <Input
        value={value}
        mask={mask}
        type={type}
        className="Input"
        autoComplete="off"
        required={required}
        onChange={setValue}
        borderColor={borderColor}
        borderColorHover={borderColorHover}
        color={color}
      />
      <Label className="Label" colorLabel={colorLabel}>
        {icon && <Icon>{icon}</Icon>} {name}
      </Label>
    </Container>
  );
};

export default InputText;
