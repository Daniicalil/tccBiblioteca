// import { produtos } from '../../../mocks/dados';
import InfoLivroRecomendacao from "../../infoLivroRecomendacao";

export default function LivrosCodRec({ route }) {
  const codLivroRec = parseInt(route.params.cod);

  return <InfoLivroRecomendacao codLivroRec={codLivroRec} />;
}
