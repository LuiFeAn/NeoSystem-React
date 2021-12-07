import React from "react";
import * as S from './styles';
import {mvs} from '../../types/mv'

type Props = {
    items:mvs,
}

const Mv = (prop: Props)=>{
    return(
        <S.Container>
            <S.mvImg source = {{uri: prop.items.avatar}}/>
            <S.mvName>{prop.items.titulo}</S.mvName>
        </S.Container>
    )
}
export default Mv