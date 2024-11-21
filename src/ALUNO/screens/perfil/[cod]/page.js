// import { produtos } from '../../../mocks/dados';
import PerfilEditar from "../../perfilEditar";

export default function UsuCod({ route }) {
  const codUsu = parseInt(route.params.cod);

  return <PerfilEditar codUsu={codUsu} />;
}
