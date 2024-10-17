
// import { produtos } from '../../../mocks/dados';
import InformacoesContatoEditar from "../../../../FUNCIONÁRIO(ADM)/screens/infoContatoEditar";

export default function InfoCod({ params }) {

    const codInfo = parseInt(params.cod);

    return (

        <InformacoesContatoEditar codInfo={codInfo} />

    );
}