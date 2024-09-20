import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  Pressable,
  Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import Icon from "react-native-vector-icons/MaterialIcons";
import { FontAwesome } from "@expo/vector-icons";
import { RadioButton } from "react-native-paper";

import {
  RetangGreen,
  RetangOrange,
} from "../../../componentes/cabecalho/forms";
import { BarraPesquisa } from "../../../componentes/barraPesquisa";
import styles from "./styles";

export default function BookList({ voltar }) {
  const navigation = useNavigation();

  const [books] = useState([
    {
      liv_foto_capa: require("../../../../assets/Capa_dos_livros/o diário de anne frank.jpg"),
      disponivel: 4,
      liv_nome: "O diário de Anne Frank",
      liv_desc:
        "O Diário de Anne Frank é um livro que relata a história de uma jovem judia chamada Anne Frank, que viveu durante a Segunda Guerra Mundial e se escondeu com sua família e outros judeus em um anexo secreto em Amsterdã, nos Países Baixos, para escapar da perseguição nazista.",
      aut_nome: "Anne Frank",
      edt_nome: "Grupo Editorial Record",
      generos: "Autobiográfico",
    },
    {
      liv_foto_capa: require("../../../../assets/Capa_dos_livros/dom casmurro.jpg"),
      disponivel: 6,
      liv_nome: "Dom Casmurro",
      liv_desc:
        "Em Dom Casmurro, o narrador Bento Santiago retoma a infância que passou na Rua de Matacavalos e conta a história do amor e das desventuras que viveu com Capitu, uma das personagens mais enigmáticas e intrigantes da literatura brasileira. Nas páginas deste romance, encontra-se a versão de um homem perturbado pelo ciúme, que revela aos poucos sua psicologia complexa e enreda o leitor em sua narrativa ambígua acerca do acontecimento ou não do adultério da mulher com olhos de ressaca, uma das maiores polêmicas da literatura brasileira.",
      aut_nome: "Machado de Assis",
      edt_nome: "Grupo Companhia das Letras",
      generos: "Romance",
    },
    {
      liv_foto_capa: require("../../../../assets/Capa_dos_livros/romeu e julieta.jpg"),
      disponivel: 5,
      liv_nome: "Romeu e Julieta",
      liv_desc:
        "Há muito tempo duas famílias banham em sangue as ruas de Verona. Enquanto isso, na penumbra das madrugadas, ardem as brasas de um amor secreto. Romeu, filho dos Montéquio, e Julieta, herdeira dos Capuleto, desafiam a rixa familiar e sonham com um impossível futuro, longe da violência e da loucura. Romeu e Julieta é a primeira das grandes tragédias de William Shakespeare, e esta nova tradução de José Francisco Botelho recria com maestria o ritmo ao mesmo tempo frenético e melancólico do texto shakespeariano. Contando também com um excelente ensaio introdutório do especialista Adrian Poole, esta edição traz nova vida a uma das mais emocionantes histórias de amor já contadas.",
      aut_nome: "William Shakespeare",
      edt_nome: "Grupo Companhia das Letras",
      generos: "Romance",
    },
    {
      liv_foto_capa: require("../../../../assets/Capa_dos_livros/1984.jpg"),
      disponivel: 3,
      liv_nome: "1984",
      liv_desc:
        "O trabalho de Winston, o herói de 1984, é reescrever artigos de jornais do passado, de modo que o registro histórico sempre apoie a ideologia do Partido. Grande parte do Ministério também destrói os documentos que não foram revisados, dessa forma não há como provar que o governo esteja mentindo. Winston é um trabalhador diligente e habilidoso, mas odeia secretamente o Partido e sonha com a rebelião contra o Grande Irmão.",
      aut_nome: "George Orwell",
      edt_nome: "Grupo Companhia das Letras",
      generos: "Ficção científica",
    },
    {
      liv_foto_capa: require("../../../../assets/Capa_dos_livros/os miseráveis.jpg"),
      disponivel: 2,
      liv_nome: "Os Miseráveis",
      liv_desc:
        "Um clássico da literatura mundial, esta obra é uma poderosa denúncia a todos os tipos de injustiça humana. Narra a emocionante história de Jean Valjean ― o homem que, por ter roubado um pão, é condenado a dezenove anos de prisão. Os miseráveis é um livro inquietantemente religioso e político, com uma das narrativas mais envolventes já criadas.",
      aut_nome: "Victor Hugo",
      edt_nome: "Grupo Companhia das Letras",
      generos: "Romance",
    },
    {
      liv_foto_capa: require("../../../../assets/Capa_dos_livros/orgulho e preconceito.png"),
      disponivel: 2,
      liv_nome: "Orgulho e Preconceito",
      liv_desc:
        "Orgulho e Preconceito é um dos mais aclamados romances da escritora inglesa Jane Austen. Publicado em 1813, revela como era a sociedade da época, quando os relacionamentos se desenrolavam de maneira mais lenta e romântica, no ritmo das cartas levadas por mensageiros a cavalo. Nesse mundo, o sonho da Sra. Bennet era casar bem suas cinco filhas: Jane, Elizabeth, Mary, Kitty e Lydia. Entre as irmãs, destaca-se Elizabeth, a Lizzy, que se depara com um turbilhão de sentimentos diante do orgulho e preconceito que mascaram a realidade. Trata-se de um clássico que, mesmo após duzentos anos desde a sua primeira publicação, continua a encantar milhões de leitores ao redor do mundo.",
      aut_nome: "Jane Austen",
      edt_nome: "Paulus editora",
      generos: "Romance",
    },
    {
      liv_foto_capa: require("../../../../assets/Capa_dos_livros/heartstopper.jpg"),
      disponivel: 1,
      liv_nome: "Heartstopper",
      liv_desc:
        "Charlie Spring e Nick Nelson não têm quase nada em comum. Charlie é um aluno dedicado e bastante inseguro por conta do bullying que sofre no colégio desde que se assumiu gay. Já Nick é superpopular, especialmente querido por ser um ótimo jogador de rúgbi. Quando os dois passam a sentar um ao lado do outro toda manhã, uma amizade intensa se desenvolve, e eles ficam cada vez mais próximos. Charlie logo começa a se sentir diferente a respeito do novo amigo, apesar de saber que se apaixonar por um garoto hétero só vai gerar frustrações. Mas o próprio Nick está em dúvida sobre o que sente ― e talvez os garotos estejam prestes a descobrir que, quando menos se espera, o amor pode funcionar das formas mais incríveis e surpreendentes.",
      aut_nome: "Alice Oseman",
      edt_nome: "Grupo Companhia das Letras",
      generos: "Romance",
    },
    {
      liv_foto_capa: require("../../../../assets/Capa_dos_livros/procure nas cinzas.jpg"),
      disponivel: 1,
      liv_nome: "Procure nas cinzas",
      liv_desc:
        "O ataque terrorista às Torres Gêmeas do World Trade Center chocou o mundo vinte anos atrás, mas, para uma família, esse atentado teve um gosto mais amargo. A destruição dos edifícios deu fim à vida de Victória, a principal suspeita de um crime brutal ― sem que ela tivesse a chance de se defender. E sua irmã, Emma, ainda tinha um assunto pendente: naquele momento extremo, pouco antes de o prédio desabar, Victoria conseguiu realizar uma última ligação pedindo que Emma a ajudasse a provar sua inocência. O caso fica abandonado por duas décadas, até que a evolução das técnicas forenses possibilitou a identificação do DNA de uma das vítimas dos ataques ― justamente da mulher que foi considerada culpada pelo assassinato de um conhecido escritor. Avery Manson, uma famosa apresentadora de TV, vê no caso uma oportunidade de alavancar ainda mais a sua carreira. Seu faro jornalístico a leva até Emma, e ela decide fazer o que for preciso para reabrir o caso, expor as falhas da polícia e descobrir se Victoria era ou não inocente. Avery não imaginava que seria preciso remontar um complexo quebra-cabeça para se chegar à verdade. E ela própria guarda também muitos segredos que, na busca insaciável por conseguir uma ótima história, podem ser expostos e destruir todo o sucesso que conquistou.",
      aut_nome: "Charlie Donlea",
      edt_nome: "Faro Editorial",
      generos: "Suspense",
    },
    {
      liv_foto_capa: require("../../../../assets/Capa_dos_livros/os sete maridos de evelyn hugo.jpg"),
      disponivel: 5,
      liv_nome: "Os Sete Maridos de Evelyn Hugo",
      liv_desc:
        "Lendária estrela de Hollywood, Evelyn Hugo sempre esteve sob os holofotes ― seja estrelando uma produção vencedora do Oscar, protagonizando algum escândalo ou aparecendo com um novo marido… pela sétima vez. Agora, prestes a completar oitenta anos e reclusa em seu apartamento no Upper East Side, a famigerada atriz decide contar a própria história ― ou sua “verdadeira história” ―, mas com uma condição: que Monique Grant, jornalista iniciante e até então desconhecida, seja a entrevistadora. Ao embarcar nessa misteriosa empreitada, a jovem repórter começa a se dar conta de que nada é por acaso ― e que suas trajetórias podem estar profunda e irreversivelmente conectadas. 'Evelyn Hugo faz Elizabeth Taylor parecer sem graça. Você vai rir com ela, chorar, sofrer, e então voltar para a primeira página e fazer tudo de novo.' ― Heather Cocks e Jessica Morgan, autoras de The Royal We",
      aut_nome: "Taylor Jenkins Reid",
      edt_nome: "Grupo Companhia das Letras",
      generos: "Romance",
    },
    {
      liv_foto_capa: require("../../../../assets/Capa_dos_livros/a garota do lago.jpg"),
      disponivel: 3,
      liv_nome: "A garota do lago",
      liv_desc:
        "Summit Lake, uma pequena cidade entre montanhas, é esse tipo de lugar, bucólico e com encantadoras casas dispostas à beira de um longo trecho de água intocada.Duas semanas atrás, a estudante de direito Becca Eckersley foi brutalmente assassinada em uma dessas casas. Filha de um poderoso advogado, Becca estava no auge de sua vida. Atraída instintivamente pela notícia, a repórter Kelsey Castle vai até a cidade para investigar o caso. ...E LOGO SE ESTABELECE UMA CONEXÃO ÍNTIMA QUANDO UM VIVO CAMINHA NAS MESMAS PEGADAS DOS MORTOS...E enquanto descobre sobre as amizades de Becca, sua vida amorosa e os segredos que ela guardava, a repórter fica cada vez mais convencida de que a verdade sobre o que aconteceu com Becca pode ser a chave para superar as marcas sombrias de seu próprio passado.",
      aut_nome: "Charlie Donlea",
      edt_nome: "Faro Editorial",
      generos: "Suspense",
    },
    {
      liv_foto_capa: require("../../../../assets/Capa_dos_livros/verity.jpg"),
      disponivel: 4,
      liv_nome: "Verity",
      liv_desc:
        "Verity Crawford é a autora best-seller por trás de uma série de sucesso. Ela está no auge de sua carreira, aclamada pela crítica e pelo público, no entanto, um súbito e terrível acidente acaba interrompendo suas atividades, deixando-a sem condições de concluir a história... E é nessa complexa circunstância que surge Lowen Ashleigh, uma escritora à beira da falência convidada a escrever, sob um pseudônimo, os três livros restantes da já consolidada série. Para que consiga entender melhor o processo criativo de Verity com relação aos livros publicados e, ainda, tentar descobrir seus possíveis planos para os próximos, Lowen decide passar alguns dias na casa dos Crawford, imersa no caótico escritório de Verity - e, lá, encontra uma espécie de autobiografia onde a escritora narra os fatos acontecidos desde o dia em que conhece Jeremy, seu marido, até os instantes imediatamente anteriores a seu acidente - incluindo sua perspectiva sobre as tragédias ocorridas às filhas do casal. Quanto mais o tempo passa, mais Lowen se percebe envolvida em uma confusa rede de mentiras e segredos, e, lentamente, adquire sua própria posição no jogo psicológico que rodeia aquela casa. Emocional e fisicamente atraída por Jeremy, ela precisa decidir: expor uma versão que nem ele conhece sobre a própria esposa ou manter o sigilo dos escritos de Verity? Em Verity , Colleen Hoover se afasta do estilo que a consagrou, os romances, para se aventurar em um suspense psicológico que deixou todo o mercado editorial sem palavras de tão avassalador. Através de uma narrativa perturbadora e chocante, Verity explora o lado mais sombrio das relações humanas deixando uma surpresinha chocante no final.",
      aut_nome: "Colleen Hoover",
      edt_nome: "Galera",
      generos: "Suspense",
    },
    {
      liv_foto_capa: require("../../../../assets/Capa_dos_livros/harry potter e a pedra filosofal.jpg"),
      disponivel: 2,
      liv_nome: "Harry Potter e a Pedra Filosofal",
      liv_desc:
        "Harry Potter é um garoto cujos pais, feiticeiros, foram assassinados por um poderosíssimo bruxo quando ele ainda era um bebê. Ele foi levado, então, para a casa dos tios que nada tinham a ver com o sobrenatural. Pelo contrário. Até os 10 anos, Harry foi uma espécie de gata borralheira: maltratado pelos tios, herdava roupas velhas do primo gorducho, tinha óculos remendados e era tratado como um estorvo. No dia de seu aniversário de 11 anos, entretanto, ele parece deslizar por um buraco sem fundo, como o de Alice no país das maravilhas, que o conduz a um mundo mágico. Descobre sua verdadeira história e seu destino: ser um aprendiz de feiticeiro até o dia em que terá que enfrentar a pior força do mal, o homem que assassinou seus pais. O menino de olhos verde, magricela e desengonçado, tão habituado à rejeição, descobre, também, que é um herói no universo dos magos. Potter fica sabendo que é a única pessoa a ter sobrevivido a um ataque do tal bruxo do mal e essa é a causa da marca em forma de raio que ele carrega na testa. Ele não é um garoto qualquer, ele sequer é um feiticeiro qualquer ele é Harry Potter, símbolo de poder, resistência e um líder natural entre os sobrenaturais. A fábula, recheada de fantasmas, paredes que falam, caldeirões, sapos, unicórnios, dragões e gigantes, não é, entretanto, apenas um passatempo.",
      aut_nome: "J.K. Rowling",
      edt_nome: "Rocco",
      generos: "Fantasia",
    },
    {
      liv_foto_capa: require("../../../../assets/Capa_dos_livros/a revolução dos bichos.jpg"),
      disponivel: 4,
      liv_nome: "A revolução dos bichos",
      liv_desc:
        "Escrita em plena Segunda Guerra Mundial e publicada em 1945 depois de ter sido rejeitada por várias edt_nomes, essa pequena narrativa causou desconforto ao satirizar ferozmente a ditadura stalinista numa época em que os soviéticos ainda eram aliados do Ocidente na luta contra o eixo nazifascista. De fato, são claras as referências: o despótico Napoleão seria Stálin, o banido Bola-de-Neve seria Trotsky, e os eventos políticos - expurgos, instituição de um estado policial, deturpação tendenciosa da História - mimetizam os que estavam em curso na União Soviética. Com o acirramento da Guerra Fria, as mesmas razões que causaram constrangimento na época de sua publicação levaram A revolução dos bichos a ser amplamente usada pelo Ocidente nas décadas seguintes como arma ideológica contra o comunismo. O próprio Orwell, adepto do socialismo e inimigo de qualquer forma de manipulação política, sentiu-se incomodado com a utilização de sua fábula como panfleto. Depois das profundas transformações políticas que mudaram a fisionomia do planeta nas últimas décadas, a pequena obra-prima de Orwell pode ser vista sem o viés ideológico reducionista. Mais de sessenta anos depois de escrita, ela mantém o viço e o brilho de uma alegoria perene sobre as fraquezas humanas que levam à corrosão dos grandes projetos de revolução política. É irônico que o escritor, para fazer esse retrato cruel da humanidade, tenha recorrido aos animais como personagens. De certo modo, a inteligência política que humaniza seus bichos é a mesma que animaliza os homens. Escrito com perfeito domínio da narrativa, atenção às minúcias e extraordinária capacidade de criação de personagens e situações, A revolução dos bichos combina de maneira feliz duas ricas tradições literárias: a das fábulas morais, que remontam a Esopo, e a da sátira política, que teve talvez em Jonathan Swift seu representante máximo.",
      aut_nome: "George Orwell",
      edt_nome: "Grupo Companhia das Letras",
      generos: "Ficção",
    },
    {
      liv_foto_capa: require("../../../../assets/Capa_dos_livros/deixada para trás.jpg"),
      disponivel: 2,
      liv_nome: "Deixada para Trás",
      liv_desc:
        "Duas colegas são raptadas. Megan foge e, um ano depois, escreve um livro que se torna um sucesso. Um detalhe inconveniente: Nicole continua desaparecida. Nicole e Megan são alunas do último ano da high school de Emerson Bay, uma cidadezinha na Carolina do Norte. Certa noite de verão, elas desaparecem de uma festa à beira do lago. A polícia realiza uma busca intensa, mas não encontra nenhuma pista. Quando já haviam perdido as esperanças de encontrá-las com vida, Megan aparece, milagrosamente, ao conseguir escapar do cativeiro escondido nas profundezas da mata. Um ano depois, Megan lança um livro contando o seu martírio naquelas duas semanas, e, imediatamente, ele se torna um best-seller e a converte de uma heroína local em celebridade nacional. Trata-se de um relato triunfante e inspirador, exceto por um detalhe inconveniente: Nicole continua desaparecida. Livia, irmã mais velha de Nicole, aluna de patologia forense, espera que um dia, em breve, o corpo de Nicole seja encontrado, e caberá a alguém como ela analisar a evidência e determinar finalmente a causa da morte de sua irmã. Em vez disso, a primeira pista do desaparecimento de Nicole surge de outro corpo que chega ao necrotério onde ela trabalha. É de alguém ligado ao passado de Nicole. Então, Livia entra em contato com Megan para contar a descoberta, e pedir mais detalhes da noite em que as duas foram sequestradas. Como outras garotas também desapareceram, Livia começa a acreditar que existe uma forte ligação entre todos aqueles casos. No entanto, Megan sabe mais do que revelou em seu livro. Lampejos de memória surgem, apontando para algo mais sombrio e monstruoso do que o descrito em suas arrepiantes memórias. Quanto mais ela e Livia se aprofundam, mais se dão conta de que, às vezes, o terror verdadeiro está em encontrar exatamente o que estávamos procurando.",
      aut_nome: "Charlie Donlea",
      edt_nome: "Faro Editorial",
      generos: "Suspense",
    },
  ]);

  const [selectedOption, setSelectedOption] = useState("liv_nome"); // Estado para controle de seleção

  const sortBooksAlphabetically = (booksList) => {
    return booksList.sort((a, b) => a.liv_nome.localeCompare(b.liv_nome));
  };

  useEffect(() => {
    // Se você quiser exibir a lista ordenada sem filtragem, você pode ordenar os livros aqui
    // setFilteredBooks(sortBooksAlphabetically(books));
  }, [books]);

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Pressable
        onPress={() =>
          navigation.navigate("infolivrobiblioteca", { book: item })
        }
      >
        <Image source={item.liv_foto_capa} style={styles.image} />
        <Text style={styles.titleBook}>{item.liv_nome}</Text>
        <Text style={styles.author}>{item.aut_nome}</Text>
      </Pressable>
    </View>
  );

  return (
    <View style={styles.headerContainer}>
      <RetangGreen />
      <RetangOrange />
      <View style={styles.titleContainer}>
        <FontAwesome
          name="angle-left"
          size={30}
          color="black"
          style={styles.icon}
          onPress={() => voltar.goBack()}
        />
        <Text style={styles.paragraph}>Biblioteca</Text>
      </View>
      <BarraPesquisa />

      <View style={styles.radioContainer}>
        <RadioButton.Group
          onValueChange={(value) => setSelectedOption(value)}
          value={selectedOption}
        >
          <View style={styles.seletores}>
            <View style={styles.radioOption}>
              <RadioButton value="liv_nome" color="#FF735C" />
              <Text style={styles.radioLabel}>Livro</Text>
            </View>
            <View style={styles.radioOption}>
              <RadioButton value="aut_nome" color="#FF735C" />
              <Text style={styles.radioLabel}>Autor</Text>
            </View>
            <View style={styles.radioOption}>
              <RadioButton value="edt_nome" color="#FF735C" />
              <Text style={styles.radioLabel}>Editora</Text>
            </View>
            <View style={styles.radioOption}>
              <RadioButton value="liv_cod" color="#FF735C" />
              <Text style={styles.radioLabel}>Código</Text>
            </View>
          </View>
        </RadioButton.Group>
      </View>

      <Pressable
        onPress={() => navigation.navigate("addBiblioteca")}
        style={({ pressed }) =>
          pressed ? [styles.buttonAdd, styles.btnAddPress] : styles.buttonAdd
        }
      >
        <Text style={styles.buttonTextAdd}>
          <FontAwesome
            name="sliders"
            size={16}
            color="white"
            style={styles.iconButton}
          />
          <Text style={styles.iconSpacing}>
            {" "}
            {" "}
            Administrar
          </Text>
        </Text>
      </Pressable>
      <FlatList
        style={Flatstyles.FlatList}
        data={sortBooksAlphabetically(books)} // Usar a lista de livros ordenada
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()} // Use index as keyExtractor
        numColumns={3}
        contentContainerStyle={styles.flatListContainer}
      />
    </View>
  );
}

const Flatstyles = StyleSheet.create({
  FlatList: {
    padding: 6,
  },
});
