import React, {useState} from 'react';
import * as S from './style';

const TextInput = ({name, placeholder, value, change, size, warn, isPassword = false}) => {
    const [see, setSee] = useState(!isPassword);
    const onChangeHandler = (event) => {
        change(event);
    }

    return (
        <S.Wrapper>
            <S.Title>
                {name}
            </S.Title>
            <S.InputContainer>
                <S.TextInput
                    name={name}
                    placeholder={placeholder}
                    onChange={onChangeHandler}
                    value={value}
                    type={see ? 'text' : 'password'}
                    maxLength={size}
                />
                {isPassword ? (
                    <S.ShowPassword onClick={() => setSee(!see)}>
                        🔎
                    </S.ShowPassword>
                ) : null}
            </S.InputContainer>
            <S.Warn>{warn}</S.Warn>

        </S.Wrapper>
    )
}
export default TextInput;