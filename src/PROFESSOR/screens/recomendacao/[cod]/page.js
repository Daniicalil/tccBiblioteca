// import { produtos } from '../../../mocks/dados';
import InfoLivroRecomendacao from "../../../../PROFESSOR/screens/infoLivroRecomendacao";

export default function LivrosCodRec({ params }) {
    const codLivroRec = parseInt(params.cod);

    return (
        <InfoLivroRecomendacao codLivroRec={codLivroRec} />
    );
}