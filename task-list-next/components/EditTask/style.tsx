import styled from 'styled-components'

export const Background = styled.div`
    background: rgba(210, 215, 211, 0.5);
    position: fixed;
    top: 0rem;
    left: 0rem;
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Container = styled.div`
    background: white;
    border-radius: 1rem;
    width: 55vw;
    height: 40vh;
    position: relative;
    top: 0rem;
    left: 0rem;
`;

export const Header = styled.div`
    position: absolute;
    top: 1.5rem;
    right: 1.5rem;

    button{
        border: 1px solid #ff5555;
        width: 2rem;
        height: 2rem;
        background: #fff;
        border-radius: 0.5rem;
        font-size: 1.25rem;
        color: #ff5555;
        transition: background 0.2s, color 0.2s;
        &:hover{
            color: #fff;
            background: #ff5555;
        }
    }   
`;

export const Body = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

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
        padding: 0.25rem 1.75rem;
        background: #fff;
        border-radius: 0.5rem;
        font-size: 1.25rem;
        color: #6272a4;
        transition: background 0.2s, color 0.2s;

        &:hover{
            color: #fff;
            background: #6272a4;
        }
    }
`;