import React from 'react'
import {Switch,Route} from 'react-router-dom'

import Home from './Pages/Home/Index'
import CadastroProdutos from './Pages/Produtos/Index'
import  ConsultaProdutos  from './Pages/Produtos/consulta'

export default()=>{
    return(
        
            <Switch>
                <Route exact ={true} path="/cadastro-produtos/:sn?" component={CadastroProdutos}/>
                <Route exact ={true} path="/consulta-produtos" component={ConsultaProdutos}/>
                <Route exact ={true} path="/" component={Home}/>
            </Switch>
       
    )
}