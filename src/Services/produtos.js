
const PRODUTOS = '_PRODUTOS';

export function ErroValidation(errors){
 this.errors = errors;
}

export default class Produtos{

    validar = (produto) =>{
        const errors =[]

        if(!produto.nome){
            errors.push('Campo nome é obrigatório')
        }
        
        if(!produto.sn){
            errors.push('Campo Serial é obrigatório')
        }

        if(!produto.categoria){
            errors.push('Campo Categoria é obrigatório')
        }
        
        if(!produto.valor || produto.valor <= 0){
            errors.push('Campo Valor dever ser maior que zero')
        }

        if(errors.length > 0){
            throw new ErroValidation(errors)
        }
    }
    
    obterProdutos = (produto) =>{
       const produtos = localStorage.getItem(PRODUTOS)
       return JSON.parse(produtos)
    }

    salvar = (produto)=>{

        this.validar(produto);
        
       let produtos =  localStorage.getItem(PRODUTOS)
       if(!produtos){
           produtos = []
       }else{
           produtos = JSON.parse(produtos)
       }

       produtos.push(produto);

       localStorage.setItem(PRODUTOS,JSON.stringify(produtos))
    }
}