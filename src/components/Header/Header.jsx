import React from 'react';
import {Link} from 'react-router-dom';

import styled from "styled-components";

const Head = styled.div`
    width: 100%;
    height: 8vh;
    display: flex;
    justify-content: space-around;
    background-color: #f1f1f1;
`;

const Logo = styled.div`
    width: 50%;
    display: flex;
    margin: auto;
`;

const Navigation = styled.nav`
    width: 50%;
    display:flex;
    justify-content: space-around;
    align-items: center;
    
    & a{
        text-decoration: none;
    }
`;


function Header(){
    return(
        <div>
            <Head>
                <Logo>
                    <h1>POKEDEX</h1>
                </Logo>
                <Navigation>
                    <Link to='/home'>HOME</Link>
                    <Link to='/team'>TEAM</Link>
                    <button>
                        <Link to='/login'>LOGIN</Link>
                    </button>
                </Navigation>
            </Head>
        </div>
    )
}

export default Header;