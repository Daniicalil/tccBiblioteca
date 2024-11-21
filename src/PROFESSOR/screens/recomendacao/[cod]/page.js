// import { produtos } from '../../../mocks/dados';
import InfoLivroRecomendacao from "../../../../PROFESSOR/screens/infoLivroRecomendacao";

export default function LivrosCodRec({ route }) {
  const codLivroRec = parseInt(route.params.cod);

  return <InfoLivroRecomendacao codLivroRec={codLivroRec} />;
}
