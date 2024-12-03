interface ValidarEmailProps {
    email: string; // O e-mail a ser validado
    onValid?: () => void; // Callback quando o e-mail for válido
    onInvalid?: () => void; // Callback quando o e-mail for inválido
}

export default function ValidarEmail({ email, onValid, onInvalid }: ValidarEmailProps) {
    const isValidEmail = (email: string): boolean => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Regex para validar e-mails
        return regex.test(email);
    };

    // Realiza a validação e executa o callback apropriado
    if (isValidEmail(email)) {
        onValid?.(); // Executa o callback de e-mail válido
    } else {
        onInvalid?.(); // Executa o callback de e-mail inválido
    }

    return null; // Não renderiza nada na interface
}
