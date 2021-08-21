import React from 'react'
import Produtos from '../../Services/produtos'
import Card from '../../Components/card'
import ProdutosTable from './produtosTable'
import {withRouter} from 'react-router-dom'

class ConsultaProdutos extends React.Component{

    state = {
        produtos :[]
    }

    constructor(){
        super()
        this.service = new Produtos();
    }

    componentDidMount(){
      const produtos = this.service.obterProdutos();
      this.setState({produtos})
    }

    preparaEditar = (sn)=>{
        console.log('sn para editar', sn)
     this.props.history.push(`/cadastro-produtos/${sn}`)
    }

    deletar = (sn)=>{
          const produtos =  this.service.deletar(sn);
          this.setState({produtos})
    }
  render(){
     return(
        <div className="container">
            <br/>
            <Card hearder="Consulta de produtos">
                <div className="card-header">
                    <label>Esta consulta esta usando um tabela por componentes</label>
                </div>
            <ProdutosTable produtos={this.state.produtos}
            editarAction={this.preparaEditar}
            deletarAction={this.deletar}/>
                           
             
               
          
            </Card>
        
        </div>
        
     )

  }

}
export default withRouter(ConsultaProdutos);