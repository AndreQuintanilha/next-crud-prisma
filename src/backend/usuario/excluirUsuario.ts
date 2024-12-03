'use server' // rodar no backend

import RepositorioUsuario from "./RepositorioUsuario";


export default async function excluirUsuario(id: string){
    return RepositorioUsuario.excluir (id)
}