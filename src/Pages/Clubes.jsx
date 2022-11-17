import React from 'react';
import ClubeEscudo from '../Components/ClubeEscudo';
import { Grid } from '@mui/material';

function Clubes() {

    const listaClubes = [
        { nome: "Paris", paisAbreviacao: "FRA", urlEscudo: "https://img.uefa.com/imgml/TP/teams/logos/64x64/52747.png" },
        { nome: "Bayern", paisAbreviacao: "GER", urlEscudo: "https://img.uefa.com/imgml/TP/teams/logos/64x64/50037.png" },
        { nome: "Napoli", paisAbreviacao: "ITA", urlEscudo: "https://img.uefa.com/imgml/TP/teams/logos/64x64/50136.png" },
        { nome: "Milan", paisAbreviacao: "ITA", urlEscudo: "https://img.uefa.com/imgml/TP/teams/logos/64x64/50058.png" },
        { nome: "Benfica", paisAbreviacao: "POR", urlEscudo: "https://img.uefa.com/imgml/TP/teams/logos/64x64/50147.png" },
        { nome: "Chelsea", paisAbreviacao: "ENG", urlEscudo: "https://img.uefa.com/imgml/TP/teams/logos/64x64/52914.png" },
    ];

    return <>
        <h1>Clubes</h1>
        <Grid container columnSpacing={2}>
            {listaClubes.map(clube => <Grid item sm={3} md={2} xs={4} xl={2}>
                <ClubeEscudo
                    nome={clube.nome}
                    paisAbreviacao={clube.paisAbreviacao}
                    urlEscudo={clube.urlEscudo} />
            </Grid>)}
        </Grid>

    </>;
}

export default Clubes;