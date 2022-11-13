import { styled } from "../../styles";

export const CartButtonContainer = styled('button', {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: 'none',
    borderRadius: 6,
    position: 'relative',
    cursor: 'pointer',
    transition: 'color 0.2s',

    '&:disabled': {
        opacity: 0.6,
        cursor: 'not-allowed'
    },

    '&:not(disable):hover': {
        color: '$green300'
    },

    backgroundColor: '$gray800',
    color: '$gray500',

    width: '3rem',   
    height: '3rem',
    
    svg: {
        fontSize: 24
    }
})