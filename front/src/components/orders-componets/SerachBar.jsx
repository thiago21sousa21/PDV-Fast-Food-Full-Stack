import styled from "styled-components";

const SearchBar = () => {

    return (
        <CsSearchBar>
            <h1>Seja bem vindo!</h1>
            <input type="text" placeholder="O que voce procura?" />
        </CsSearchBar>
    );
}

export default SearchBar;

const CsSearchBar = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 50%;

    margin: 20px 0;
`;