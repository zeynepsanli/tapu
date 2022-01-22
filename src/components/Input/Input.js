import React from "react";
import { InputContainer, Input } from './InputStyle'

const TextInput = ({ placeholder, onChangeText, value, isSecure, onBlur }) => {
    return (
        <InputContainer >
            <Input
                placeholder={placeholder}
                onChangeText={onChangeText}
                value={value}
                secureTextEntry={isSecure}
                onBlur={onBlur}
            />
        </InputContainer>
    );
};

export default TextInput;