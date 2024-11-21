// import { produtos } from '../../../mocks/dados';
import InformacoesContatoEditar from "../../../../FUNCIONÁRIO(ADM)/screens/infoContatoEditar";

export default function InfoCod({ route }) {
  const codInfo = parseInt(route.params.cod);

  return <InformacoesContatoEditar codInfo={codInfo} />;
}
