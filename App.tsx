import React,{useState,useEffect} from 'react'
import {Alert} from 'react-native';
import * as S from './App.styles'
import { mvs } from './types/mv';
import Mv from './components/mv';

const App = ()=>{

    const [mv,setMv] = useState<mvs[]>([]);
    const [loading,setLoading] =  useState<Boolean>();

    useEffect(()=>{
        API();
    },[])
    
    const API = async ()=>{
        
        setLoading(true);
        const req = await fetch("https://api.b7web.com.br/cinema/")
        const resp = await req.json();
        setLoading(false);
        setMv(resp)
        mv.length == 0? Alert.alert("Erro","Houve um erro. Tente novamente mais tarde") : null
    }

    return(
        <S.Safe>
            <S.AppName>
                NEOSYSTEM - CARTAZ
            </S.AppName>
            <S.Found>
                APROXIMADAMENTE {mv.length} FILMES EM CARTAZ
            </S.Found>
            {!!loading?
                <>
                <S.Loading>Carregando...</S.Loading>
                <S.LoadingImg source = {{uri:"https://upload.wikimedia.org/wikipedia/commons/b/b9/Youtube_loading_symbol_1_(wobbly).gif"}}/>
                </> :
                <S.Scroll>
                {mv.map((data,id)=>(
                    <Mv key = {id} items = {data}/>
                ))}
            </S.Scroll>
        }
        </S.Safe>
    )
}
export default App