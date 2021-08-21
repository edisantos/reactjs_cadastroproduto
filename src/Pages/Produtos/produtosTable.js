import React from 'react'

export default (props) => (
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
        {
        props.produtos.map((produto, index)=>{
         return(
             <tr key={index}>
                 <td>{produto.nome}</td>
                 <td>{produto.sn}</td>
                 <td>{produto.categoria}</td>
                 <td>{produto.valor}</td>
                 <td>
                     <button type="button" 
                     className="btn btn-outline-primary" 
                     onClick={ () => props.editarAction(produto.sn)}>
                         Editar
                         </button>
                     <button type="button" onClick={ () => props.deletarAction(produto.sn)} className="btn btn-outline-danger">Delete</button>
                 </td>
             </tr>
         )

         })
         }
    </tbody>
  </table>
)