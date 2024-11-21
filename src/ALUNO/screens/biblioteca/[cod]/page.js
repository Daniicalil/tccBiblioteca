// import { produtos } from '../../../mocks/dados';
import InfoLivroBiblioteca from "../../infoLivroBiblioteca/index";

export default function LivrosCod({ route }) {
  const codLivro = parseInt(route.params.cod);

  return <InfoLivroBiblioteca codLivro={codLivro} />;
}
