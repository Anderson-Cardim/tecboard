import './label.estilos.css';


export default function Label({children, htmlFor}) {
    return (
        <label htmlFor={htmlFor} className='label'>
            {children}
        </label>
    );
}