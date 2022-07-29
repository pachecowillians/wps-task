import styled from 'styled-components'

export const Container = styled.div`
    margin: 1rem;
    border-right: 2px solid rebeccapurple;
    border-left: 2px solid rebeccapurple;
    width: 40rem;
    padding: 1.5rem;
    display: flex;
    flex-direction: row;
`;

export const Text = styled.div`
    margin: 0rem 0.75rem;
    width: 100%;
    text-align: justify;
`;

export const ButtonGroup = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

export const Button = styled.button`
    margin: 0.25rem;
    width: 2rem;
    height: 2rem;
    background: #fff;
    border-radius: 0.5rem;
    font-size: 1rem;
    color: ${props => props.color};
    border: 1px solid ${props => props.color};
    transition: background 0.2s, color 0.2s;

    &:hover{
        color: #fff;
        background: ${props => props.color};
    }
`;