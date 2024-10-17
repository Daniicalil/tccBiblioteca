
// import { produtos } from '../../../mocks/dados';
import PerfilEditar from "../../perfilEditar";

export default function UsuCod({ params }) {

    const codUsu = parseInt(params.cod);

    return (

        <PerfilEditar codUsu={codUsu} />

    );
}