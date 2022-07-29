import styled from 'styled-components'

export const Container = styled.div`
    display: block;
    margin: 2rem;    

    input{
        font-family: 'Montserrat', sans-serif;
        border: none;
        outline: none;
        border-bottom: 1px solid #6272a4;
        margin: 2rem 2rem;
        width: 30rem;
        font-size: 1.25rem;
        padding: 0.5rem;
    }

    button{
        border: 1px solid #6272a4;
        width: 2.75rem;
        height: 2.75rem;
        background: #fff;
        border-radius: 0.5rem;
        font-size: 1.5rem;
        color: #6272a4;
        transition: background 0.2s, color 0.2s;

        &:hover{
            color: #fff;
            background: #6272a4;
        }
    }
`;