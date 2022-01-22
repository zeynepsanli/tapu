import React from "react";
import { ButtonContainer, ButtonText } from './ButtonStyle'

const Button = ({ onPress, primary, secondary, title, textColor, borderColor, disabled }) => {

    const color = disabled ? primary : secondary;
    return (
        <ButtonContainer onPress={onPress} bgColor={color} borderColor={borderColor} disabled={disabled}>
            <ButtonText textColor={textColor} >{title}</ButtonText>
        </ButtonContainer>
    );
};

export default Button;