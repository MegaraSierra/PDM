import React from "react";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create ({
        contenedorFicha: {
            backgroundColor: '#fce4ae',
            display: 'flex',
            flexDirection: 'row',
            marginBottom: 10, 
            padding: 8,
            borderStyle: 'solid',
            borderWidth: 2,
            borderColor: '#341257',
            borderRadius: 15,
        },
        contenedorDatosGenerales: {
            display: 'flex',
            flexDirection: 'column',
        

        },
        nombreEnFicha: {
            fontSize: 24,
            color: '#332811',
            fontWeight: 'bold',
        },
        datosGeneralesFicha: {
            fontSize: 16,
        },
        fotoPersonajeEnFicha: {
            height: 100,
            width: 100,
            borderRadius: 15,
            marginRight: 10,
        }

});

export default styles;

