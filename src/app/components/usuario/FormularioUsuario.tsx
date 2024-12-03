'use client';
import { Usuario } from "@/core/model/Usuario";
import InputTexto from "../shared/InputTexto";
import ValidarEmail from "./ValidarEmail";


export interface FormularioUsuarioProps {
    usuario: Partial<Usuario>;
    onChange: (usuario: Partial<Usuario>) => void;
    salvar: () => void;
    cancelar: () => void;
    excluir: () => void;
}

export default function FormularioUsuario(props: FormularioUsuarioProps) {
    const handleSave = () => {
        ValidarEmail({
            email: props.usuario.email || "",
            onValid: () => {
                props.salvar(); // Salva se o e-mail for válido
                alert("Cadastro realizado com sucesso!");
            },
            onInvalid: () => {
                alert("Por favor, insira um e-mail válido.");
            },
        });
    };

    return (
        <div className="flex flex-col gap-5">
            <InputTexto
                label="Nome"
                type="text"
                value={props.usuario.nome}
                onChange={(e) => props.onChange?.({ ...props.usuario, nome: e.target.value })}
            />

            <InputTexto
                label="E-mail"
                type="email"
                value={props.usuario.email}
                onChange={(e) => props.onChange?.({ ...props.usuario, email: e.target.value })}
            />

            <InputTexto
                label="Senha"
                type="password"
                value={props.usuario.senha}
                onChange={(e) => props.onChange?.({ ...props.usuario, senha: e.target.value })}
            />

            <div className="flex justify-between">
                <div className="flex gap-5">
                    <button
                        className="bg-blue-500 px-4 py-2 rounded-md"
                        onClick={handleSave}
                    >
                        Salvar
                    </button>

                    <button
                        className="bg-blue-500 px-4 py-2 rounded-md"
                        onClick={props.cancelar}
                    >
                        Cancelar
                    </button>
                </div>

                <button
                    className="bg-red-500 px-4 py-2 rounded-md"
                    onClick={() => {
                        if (!props.usuario.nome || !props.usuario.email) {
                            alert("Nenhum usuário encontrado para excluir.");
                            return;
                        }
                        if (confirm("Tem certeza que deseja excluir?")) {
                            props.excluir();
                        }
                    }}
                >
                    Excluir
                </button>
            </div>
        </div>
    );
}
