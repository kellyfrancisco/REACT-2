import React from 'react';
import { ButtonRed, ButtonWithe} from './styles';

function Button({ children, red, ...rest }) {

    return (
        <>
        {red ? (
            <ButtonRed {...rest}>{children}</ButtonRed>
        ) : (
            <ButtonWithe {...rest}>{children}</ButtonWithe>
        )}
        </>
    );
}
export default Button;

