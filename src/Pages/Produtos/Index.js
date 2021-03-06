import React from 'react'
import Card from '../../Components/card'
import Produtos from '../../Services/produtos'
import { withRouter } from 'react-router-dom';
const estadoInicial = {
    nome: '',
    sn: '',
    categoria: '',
    valor: 0,
    sucesso: false,
    errors:[],
    atualizando: false
}

class CadastroProdutos extends React.Component{

     state = estadoInicial;

      constructor(){
          super()
          this.service = new Produtos();
      }

     onChange = (event) =>{
        const valor = event.target.value
        const nomeCampo = event.target.name
        this.setState({ [nomeCampo]:valor})
     }

     onSubmit = (event) =>{
        event.preventDefault();
         const produtos ={
             nome: this.state.nome,
             sn: this.state.sn,
             categoria: this.state.categoria,
             valor: this.state.valor
         }
         try{
            this.service.salvar(produtos);
            this.limparCampos();
            //console.log('salvo com sucesso');
            this.setState({sucesso: true})
         }catch(erro){
            const errors = erro.errors;
            this.setState({errors : errors})
         }
        
     }
     limparCampos = ()=>{
         this.setState(estadoInicial)
     }

     componentDidMount(){
       const sn = this.props.match.params.sn
       if(sn){
         const resultado =   this.service
                             .obterProdutos()
                             .filter( produto => produto.sn === sn )
                             if(resultado.length ===1){
                                 const produtoEncontrao = resultado[0]
                                 this.setState({ ...produtoEncontrao, atualizando: true })
                             }
       }
     }
    render(){
        return(
            <div className="container">
                <br/>
                
            <Card header={this.state.atualizando ? 'Atualização de produtos': 'Cadastro de produtos'}>
               {/*  <div className="card-header">
                
                    {this.state.atualizando ? 'Em processo de atualização': 'Cadastro'} de produtos
                  
                </div> */}
                <div className="card-body">
                    <form id="frmProdutos" onSubmit={this.onSubmit}>
                    <div className="row">
                        <div className="col-sm-4">
                        <img src="img/ecommerce.png" alt="imagem" width="100%"/>
                        </div>
                        <div className="col-sm-8">
                            <br/>
                        <div className="row g-3 form">
                        <div className="col-md-6">
                            <label>Curso</label>
                         <input type="text" name="nome"
                          onChange={this.onChange}
                          value={this.state.nome}
                          className="form-control"
                         />
                     
                        </div>
                        <div className="col-md-6">
                        <label>Serial Number</label>
                        <input type="text" 
                        onChange={this.onChange} 
                        value={this.state.sn} 
                        disabled={this.state.atualizando}
                        className="form-control" 
                        name="sn" 
                        />
                        </div>
                        <div className="col-md-6">
                        <label>Categoria</label>
                        <input type="text" 
                        onChange={this.onChange}
                        value={this.state.categoria}
                        className="form-control"
                        id="categoria" name="categoria"
                       
                        />

                       
                        </div>
                        <div className="col-md-6">
                        <label>Valor</label>
                        <input type="text" name="valor"
                        onChange={this.onChange}
                        value={this.state.valor}
                        className="form-control"
                        />
                        </div>
                        <div className="d-grid gap-2">
                            <button  type="submit" className="btn btn-lg btn-primary">
                               {this.state.atualizando? 'Atualizar':'Registrar'} 
                            </button>
                            <button onClick={this.limparCampos} className="btn btn-lg btn-dark">
                                Limpar
                            </button>
                        </div>
                        </div>
                            </div>
                       
                        
                    </div>
                    </form>
                    
                    {this.state.sucesso &&
                    (
                        <div className="alert alert-dismissible alert-success">
                        <button type="button" className="btn-close" data-bs-dismiss="alert"></button>
                        <strong>Parabéns!</strong> Cadastro realizado com sucesso!
                        </div>
                    )
                      
                    
                    }
                     {this.state.errors.length > 0 &&   
                      this.state.errors.map(msg => {
                         return(
                            <div className="alert alert-dismissible alert-danger">
                            <button type="button" className="btn-close" data-bs-dismiss="alert"></button>
                            <strong>Ops!</strong> {msg}
                          </div>
                         )
                      })                 
                       
                                     
                    
                    }
                </div>
            </Card>
            </div>
        )
    }
}

export default CadastroProdutos;