import React from 'react';
import styled from 'styled-components'


const Container = styled.div`
    width : 100%;
    height: 50vh;
    background-color: lightblue;
`;

function Home(){
    return(
        <div>
            <Container>
                <h1>Halaman Home</h1>
            </Container>
        </div>
    )
}

export default Home;