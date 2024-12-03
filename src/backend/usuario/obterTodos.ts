'use server' // rodar no backend

import RepositorioUsuario from "./RepositorioUsuario";

export default async function obterTodos(){
    return RepositorioUsuario.obterTodos()
    
    }

    
