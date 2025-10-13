import './botao.estilos.css';


export default function Botao({children, className, ...restProps}) {
    return (
        <button {...restProps} className={className}>
            {children}
        </button>
    );
}