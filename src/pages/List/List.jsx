
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const CardList = styled.div`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
`;

const Card = styled.div`
    width: 150px;
    word-break: break;
    & img {
        width: 100%;
    }
`;

const Title = styled.h4`
    text-align: center;
`;

function List(){
    const [datas, setDatas] = useState({});
    async function getData(){
        let url = "https://pokeapi.co/api/v2/pokemon?offset=40&limit=100";

        let response = await fetch(url);
        let results = await response.json();
        await setDatas(results);
    }
    
    useEffect(() => {
        getData()
    }, [])

    return(
        <div>
            <h1>POKEDEX</h1>
            <div>
            <CardList>
                {datas.results !== undefined &&
                    datas.results.map((datas) => {
                        const id = datas.url.split("/")[6];

                        return (
                            <Card key={id}>
                                <Link to={`/pokemons/${datas.name}`}>
                                    <img
                                        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${id}.png`}
                                        alt="pokeimage"
                                    />
                                </Link>
                                <Title>{datas.name}</Title>
                            </Card>
                        );
                    })}
            </CardList>
        </div>
        
        </div>
    )
}


export default List;