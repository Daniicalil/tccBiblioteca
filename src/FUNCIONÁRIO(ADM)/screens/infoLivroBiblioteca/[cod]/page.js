
// import { produtos } from '../../../mocks/dados';
import EditarInfoLivro from "../../editarInfoLivro";

export default function InfoCod({ params }) {

    const codInfo = parseInt(params.cod);

    return (

        <EditarInfoLivro codInfo={codInfo} />

    );
}