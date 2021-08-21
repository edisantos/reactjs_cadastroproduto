import React from 'react'
import Produtos from '../../Services/produtos'
import Card from '../../Components/card'
import {withRouter} from 'react-router-dom'

class PesquisaProdutos extends React.Component{

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
                    <div className="card-title">
                        <label>Pesquisa de produtos de produtos</label>
                    </div>
                </div>
               
                <table className="table table-light">
           <thead>
               <tr>
                   <th>Curso</th>
                   <th>Serial</th>
                   <th>Categoria</th>
                   <th>Valor</th>
                   <th></th>
               </tr>
           </thead>
           <tbody>
               {this.state.produtos.map((produto, index)=>{
                return(
                    <tr key={index}>
                        <td>{produto.nome}</td>
                        <td>{produto.sn}</td>
                        <td>{produto.categoria}</td>
                        <td>{produto.valor}</td>
                        <td>
                            <button type="button" 
                            className="btn btn-outline-primary" 
                            onClick={()=>this.preparaEditar(produto.sn)}>
                                Editar
                                </button>
                            <button type="button" onClick={()=> this.deletar(produto.sn)} className="btn btn-outline-danger">Delete</button>
                        </td>
                    </tr>
                )

                })
                }
           </tbody>
         </table>
               
          
            </Card>
        
        </div>
        
     )

  }

}
export default withRouter(PesquisaProdutos);