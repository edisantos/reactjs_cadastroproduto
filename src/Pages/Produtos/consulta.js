import React from 'react'
import Produtos from '../../Services/produtos'
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
  render(){
     return(
        <div className="container">
            <br/>
            <div className="card">
                <div className="card-header">
                    <div className="card-title">
                        <label>Lista de produtos</label>
                    </div>
                </div>
                <div className="card-body">
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
                            <button type="button" className="btn btn-outline-danger">Delete</button>
                        </td>
                    </tr>
                )

                })
                }
           </tbody>
         </table>
                </div>
            <div className="card-footer"></div>
            </div>
        
        </div>
        
     )

  }

}
export default withRouter(ConsultaProdutos);