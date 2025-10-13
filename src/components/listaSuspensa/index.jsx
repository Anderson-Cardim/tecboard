import './listaSuspensa.estilos.css'

export default function ListaSuspensa({ itens, ...rest }) {
    return (
        <select {...rest} class="contact-form__select" defaultValue="">
            <option value="" disabled>Selecione uma opção</option>
            {itens.map((item) =>
                <option key={item.id} value={item.id}>
                    {item.nome} 
                </option>
            )}
        </select>
    );
}