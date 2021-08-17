import React from 'react'
import {HashRouter,Switch,Route} from 'react-router-dom'

import Home from './Pages/Home/Index'
import CadastroProdutos from './Pages/Produtos/Index'

export default()=>{
    return(
        <HashRouter>
            <Switch>
                <Route exact ={true} path="/cadastro-produtos" component={CadastroProdutos}/>
                <Route exact ={true} path="/" component={Home}/>
            </Switch>
        </HashRouter>
    )
}