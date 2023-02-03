import styled from "styled-components";

type ContainerProps = {
    done: boolean
}

export const Container = styled.div(({ done }: ContainerProps) => (
`
    display: flex;
    background-color: #20212c;
    padding: 10px;
    border-radius: 10px;
    margin-bottom: 10px;
    align-items: center;
    justify-content: space-between;
    overflow: hidden;

    &:hover .remove-item{
        transform: translateY(0);
    }


    .item-content{
        display: flex;
        align-items: center;
    }

    label{
        color: #ccc;
        text-decoration: ${done ? 'line-through' : 'initial'}
    }

    input{
        width: 25px;
        height: 25px;
        margin-right: 15px;
    }

    .remove-item{
        
        background-color: red;
        padding: 10px;
        color: #fff;
        border-radius: 5px;
        cursor: pointer;
        transform: translateY(-60px);
        transition: .3s;

        @media(max-width: 768px){
            transform: translateY(0);
        }
    }

`
))
