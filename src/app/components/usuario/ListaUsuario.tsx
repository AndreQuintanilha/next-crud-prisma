import { Usuario } from '@/core/model/Usuario'
import LinhaUsuario from './LinhaUsuario'

export interface ListaUsuarioProps {
    usuarios: Usuario[]
    onClick?: (usuario: Usuario) => void
}

export default function ListaUsuario(props: ListaUsuarioProps) {
    // Ordenando os usuários por nome em ordem alfabética
    const usuariosOrdenados = [...props.usuarios].sort((a, b) => {
        if (a.nome < b.nome) return -1;
        if (a.nome > b.nome) return 1;
        return 0;
    });

    return ( 
        <div className="flex flex-col gap-4">
            {usuariosOrdenados.map((usuario: Usuario) => {
                return (
                    <LinhaUsuario
                        key={usuario.id}
                        usuario={usuario}
                        onClick={props.onClick}
                    />
                )
            })}
        </div>
    )
}
