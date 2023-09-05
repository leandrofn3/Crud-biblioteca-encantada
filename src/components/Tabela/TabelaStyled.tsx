
import styled from 'styled-components';

const TableWrapper = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: Arial, sans-serif;
    width: 100vw;
    max-width: 73rem;
    margin: 0 auto;
    border-collapse: collapse;
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
    border: 0.1rem solid black;
`;

const TableHeader = styled.th`
    background-color: #808080;
    padding: 0.8rem 0rem 0.8rem 0.8rem;
    text-align: left;
    width: 100vw;
`;

const TableData = styled.td`
    padding: 0.6rem;
    border-bottom: 0.1rem solid #ddd;
    text-align: center;
    
    &:nth-child(odd){
        background-color: #ddd;
    }
`;

export { TableWrapper, TableHeader, TableData };