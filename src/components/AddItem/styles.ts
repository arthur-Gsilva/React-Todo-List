import styled from "styled-components";

export const Container = styled.div`
    border: 1px solid #555;
    border-radius: 15px;
    padding: 10px;
    margin: 20px 0;
    display: flex;
    align-items: center;

    .image{
        margin-right: 5px;
    }

    input{
        border: 0;
        outline: none;
        background: transparent;
        flex: 1;
        color: #ccc;
        font-size: 1rem;
    }
`