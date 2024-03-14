import React, { useEffect, useState } from "react";
import {SafeAreaView, View, Text, ScrollView } from "react-native";
import People from "../types/People";
import axios from "axios";
import PeopleResult from "../types/PeopleResults";
import FichaListaPersonaje from "../components/FichaListaPersonaje";


const   ArregloPersonasInicial: People[] = [];
const urlBase = "https://swapi.dev/api/";
const Inicio = ({navigation: any}) => {
    const [personajes, setPersonajes] = useState(ArregloPersonasInicial);
    const [count, setCount]  = useState(0);
    const [next, setNext] = useState('');
    const [previous, setPrevious] = useState('');

    const CargarPersonas = async () => {
        const resultados = await axios.get(`${urlBase}people`);
        if (resultados.data) {
        const datos: PeopleResult = resultados.data;
        setCount(datos.count);
        setNext(datos.next);
        if(datos.previous == null){
            setPrevious('');
        }else{
            setPrevious(datos.previous as string);  
        }
        setPersonajes(datos.results);
        }
    };

    useEffect(() => {
        CargarPersonas();
    }, []);

    return (
        <SafeAreaView>
            <ScrollView>
            {personajes.map((p, index) => {
            return <FichaListaPersonaje codigo = {index + 1} personaje={p} />;
          })}
            </ScrollView>
        </SafeAreaView>
      );
      

};

export default Inicio;