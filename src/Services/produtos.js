
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
       if(!produtos){
           return []
       }
       return JSON.parse(produtos)
    }

    obterIndex = (sn) =>{
        let index = null;
        this.obterProdutos().forEach((produto,i )=> {
            if(produto.sn === sn){
                index = i;
            }
        })
        return index;
    } 
    
     deletar = (sn) =>{
       const index = this.obterIndex(sn);
       if(index!== null){
           const produtos = this.obterProdutos();
          produtos.splice(index, 1)
          localStorage.setItem(PRODUTOS,JSON.stringify(produtos))
          return produtos
       }
     }

    salvar = (produto)=>{

        this.validar(produto);
        
       let produtos =  localStorage.getItem(PRODUTOS)
       if(!produtos){
           produtos = []
       }else{
           produtos = JSON.parse(produtos)
       }

     const index =  this.obterIndex(produto.sn);
     if(index === null){
        produtos.push(produto);
     }else{
         produtos[index] = produto;
     }
      
     
       localStorage.setItem(PRODUTOS,JSON.stringify(produtos))
    }
}