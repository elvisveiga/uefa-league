import React from 'react';
import { Avatar, Card, CardContent, Typography } from '@mui/material';

// import { Container } from './styles';

function ClubeEscudo(props) {
    return <Card sx={{ minWidth: 80, maxWidth: 120, mt: 2, alignItems: "center", padding: 1 }}>
        <Avatar alt="Bayern"
            src={props.urlEscudo}
            sx={{ width: 64, height: 64, margin: "0 auto", mt: 1 }} />
        <CardContent>
            <Typography sx={{ textAlign: "center" }} component="div" fontWeight={"bold"}>
                {props.nome}
            </Typography>
            <Typography sx={{ textAlign: "center" }} component="div" fontWeight={"regular"}>
                {props.paisAbreviacao}
            </Typography>
        </CardContent>
    </Card>;
}

export default ClubeEscudo;