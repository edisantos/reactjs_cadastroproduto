import React from 'react'
import Produtos from '../../Services/produtos'

export default class ConsultaProdutos extends React.Component{

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
                        <td></td>
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