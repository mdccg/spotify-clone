import { useState } from 'react';
import SectionCard from './../../components/SectionCard';
import { CameraSolidIcon, GapBetweenColumns, Header, Heading, IconContainer, MagnifyingGlassSolidIcon, Placeholder, SearchBar, SearchContainer, SectionColumn, SectionGroup, SubHeading } from './styles';
import { StyleSheet } from 'react-native';

const Search = () => {
  const [sections] = useState([
    { title: 'Podcasts', backgroundColor: 'rgb(225, 51, 0)', imageUrl: require('./../../../assets/images/podcasts.jpeg') },
    { title: 'Eventos ao vivo', backgroundColor: 'rgb(115, 88, 255)', imageUrl: require('./../../../assets/images/eventos-ao-vivo.jpeg') },
    { title: 'Feito para você', backgroundColor: 'rgb(30, 50, 100)', imageUrl: require('./../../../assets/images/feito-para-voce.png') },
    { title: 'Lançamentos', backgroundColor: 'rgb(232, 17, 91)', imageUrl: require('./../../../assets/images/lancamentos.jpeg') },
    { title: 'creme, a experiência', backgroundColor: 'rgb(119, 119, 119)', imageUrl: require('./../../../assets/images/creme-a-experiencia.jpeg') },
    { title: 'Brasil', backgroundColor: 'rgb(255, 200, 100)', imageUrl: require('./../../../assets/images/brasil.jpeg') },
    { title: 'Sertanejo', backgroundColor: 'rgb(83, 122, 161)', imageUrl: require('./../../../assets/images/sertanejo.jpeg') },
    { title: 'Funk', backgroundColor: 'rgb(230, 30, 50)', imageUrl: require('./../../../assets/images/funk.jpeg') },
    { title: 'Paradas', backgroundColor: 'rgb(141, 103, 171)', imageUrl: require('./../../../assets/images/paradas.jpeg') },
    { title: 'No carro', backgroundColor: 'rgb(45, 70, 185)', imageUrl: require('./../../../assets/images/no-carro.jpeg') },
    { title: 'Pop', backgroundColor: 'rgb(20, 138, 8)', imageUrl: require('./../../../assets/images/pop.jpeg') },
    { title: 'Hip hop', backgroundColor: 'rgb(188, 89, 0)', imageUrl: require('./../../../assets/images/hip-hop.jpeg') },
    { title: 'Samba e pagode', backgroundColor: 'rgb(0, 100, 80)', imageUrl: require('./../../../assets/images/samba-e-pagode.jpeg') },
    { title: 'MPB', backgroundColor: 'rgb(160, 195, 210)', imageUrl: require('./../../../assets/images/mpb.jpeg') },
    { title: 'Descobrir', backgroundColor: 'rgb(141, 103, 171)', imageUrl: require('./../../../assets/images/descobrir.jpeg') },
    { title: 'AMPLIFIKA', backgroundColor: 'rgb(233, 20, 41)', imageUrl: require('./../../../assets/images/amplifika.jpeg') },
    { title: 'Dance/Eletrônica', backgroundColor: 'rgb(216, 64, 0)', imageUrl: require('./../../../assets/images/dance-eletronica.jpeg') },
    { title: 'Música Cristã', backgroundColor: 'rgb(13, 115, 236)', imageUrl: require('./../../../assets/images/musica-crista.jpeg') },
    { title: 'Rock', backgroundColor: 'rgb(233, 20, 41)', imageUrl: require('./../../../assets/images/rock.jpeg') },
    { title: 'Indie', backgroundColor: 'rgb(233, 20, 41)', imageUrl: require('./../../../assets/images/indie.jpeg') },
    { title: 'RADAR', backgroundColor: 'rgb(119, 119, 119)', imageUrl: require('./../../../assets/images/radar.jpeg') },
    { title: 'GLOW', backgroundColor: 'rgb(13, 115, 236)', imageUrl: require('./../../../assets/images/glow.jpeg') },
    { title: 'EQUAL', backgroundColor: 'rgb(5, 105, 82)', imageUrl: require('./../../../assets/images/equal.jpeg') },
    { title: 'Fresh Finds', backgroundColor: 'rgb(255, 0, 144)', imageUrl: require('./../../../assets/images/fresh-finds.jpeg') },
    { title: 'Seu astral', backgroundColor: 'rgb(225, 17, 140)', imageUrl: require('./../../../assets/images/seu-astral.jpeg') },
    { title: 'Para treinar', backgroundColor: 'rgb(119, 119, 119)', imageUrl: require('./../../../assets/images/para-treinar.jpeg') },
    { title: 'Relax', backgroundColor: 'rgb(216, 64, 0)', imageUrl: require('./../../../assets/images/relax.jpeg') },
    { title: 'Festa', backgroundColor: 'rgb(83, 122, 161)', imageUrl: require('./../../../assets/images/festa.jpeg') },
    { title: 'Em casa', backgroundColor: 'rgb(81, 121, 161)', imageUrl: require('./../../../assets/images/em-casa.jpeg') },
    { title: 'Para dormir', backgroundColor: 'rgb(30, 50, 100)', imageUrl: require('./../../../assets/images/para-dormir.jpeg') },
    { title: 'Amor', backgroundColor: 'rgb(230, 30, 50)', imageUrl: require('./../../../assets/images/amor.jpeg') },
    { title: 'Culinária', backgroundColor: 'rgb(186, 93, 7)', imageUrl: require('./../../../assets/images/culinaria.jpeg') },
    { title: 'Bem-estar', backgroundColor: 'rgb(165, 103, 82)', imageUrl: require('./../../../assets/images/bem-estar.jpeg') },
    { title: 'Foco', backgroundColor: 'rgb(80, 55, 80)', imageUrl: require('./../../../assets/images/foco.jpeg') },
    { title: 'Em alta', backgroundColor: 'rgb(176, 40, 151)', imageUrl: require('./../../../assets/images/em-alta.jpeg') },
    { title: 'Décadas', backgroundColor: 'rgb(186, 93, 7)', imageUrl: require('./../../../assets/images/decadas.jpeg') },
    { title: 'Spotify Singles', backgroundColor: 'rgb(119, 119, 119)', imageUrl: require('./../../../assets/images/spotify-singles.jpeg') },
    { title: 'Cidades', backgroundColor: 'rgb(80, 155, 245)', imageUrl: require('./../../../assets/images/cidades.jpeg') },
    { title: 'Viagem', backgroundColor: 'rgb(13, 114, 237)', imageUrl: require('./../../../assets/images/viagem.jpeg') },
    { title: 'Verão', backgroundColor: 'rgb(39, 133, 106)', imageUrl: require('./../../../assets/images/verao.jpeg') },
    { title: 'Música latina', backgroundColor: 'rgb(225, 17, 140)', imageUrl: require('./../../../assets/images/musica-latina.jpeg') },
    { title: 'R&B', backgroundColor: 'rgb(220, 20, 140)', imageUrl: require('./../../../assets/images/r-e-b.jpeg') },
    { title: 'K-pop', backgroundColor: 'rgb(20, 138, 8)', imageUrl: require('./../../../assets/images/k-pop.jpeg') },
    { title: 'Compositores', backgroundColor: 'rgb(140, 25, 50)', imageUrl: require('./../../../assets/images/compositores.jpeg') },
    { title: 'Natureza e outros sons', backgroundColor: 'rgb(71, 125, 149)', imageUrl: require('./../../../assets/images/natureza-e-outros-sons.jpeg') },
    { title: 'Música + Papo', backgroundColor: 'rgb(255, 70, 50)', imageUrl: require('./../../../assets/images/musica-mais-papo.jpeg') },
    { title: 'Crianças e família', backgroundColor: 'rgb(141, 103, 171)', imageUrl: require('./../../../assets/images/criancas-e-familia.jpeg') },
    { title: 'TV e filmes', backgroundColor: 'rgb(175, 40, 150)', imageUrl: require('./../../../assets/images/tv-e-filmes.jpeg') },
    { title: 'Jogos', backgroundColor: 'rgb(232, 17, 91)', imageUrl: require('./../../../assets/images/jogos.jpeg') },
    { title: 'Anime', backgroundColor: 'rgb(228, 29, 99)', imageUrl: require('./../../../assets/images/anime.jpeg') },
    { title: 'Criadores de tendências', backgroundColor: 'rgb(232, 17, 91)', imageUrl: require('./../../../assets/images/criadores-de-tendencias.png') },
    { title: 'Netflix', backgroundColor: 'rgb(235, 30, 50)', imageUrl: require('./../../../assets/images/netflix.jpeg') },
    { title: 'Estudante', backgroundColor: 'rgb(186, 93, 7)', imageUrl: require('./../../../assets/images/estudante.jpeg') },
    { title: 'League of Legends', backgroundColor: 'rgb(20, 138, 8)', imageUrl: require('./../../../assets/images/league-of-legends.jpeg') },
    { title: 'Reggae', backgroundColor: 'rgb(0, 100, 80)', imageUrl: require('./../../../assets/images/reggae.jpeg') },
    { title: 'Caribe', backgroundColor: 'rgb(13, 115, 236)', imageUrl: require('./../../../assets/images/caribe.jpeg') },
    { title: 'Afro', backgroundColor: 'rgb(216, 64, 0)', imageUrl: require('./../../../assets/images/afro.jpeg') },
    { title: 'Árabe', backgroundColor: 'rgb(13, 115, 236)', imageUrl: require('./../../../assets/images/arabe.jpeg') },
    { title: 'Contra o ódio anti-asiático', backgroundColor: 'rgb(245, 155, 35)', imageUrl: require('./../../../assets/images/contra-o-odio-anti-asiatico.jpeg') },
    { title: 'Boas festas', backgroundColor: 'rgb(140, 25, 50)', imageUrl: require('./../../../assets/images/boas-festas.jpeg') },
    { title: 'Clássico', backgroundColor: 'rgb(125, 75, 50)', imageUrl: require('./../../../assets/images/classico.jpeg') },
    { title: 'Instrumental', backgroundColor: 'rgb(83, 122, 161)', imageUrl: require('./../../../assets/images/instrumental.jpeg') },
    { title: 'Jazz', backgroundColor: 'rgb(119, 119, 119)', imageUrl: require('./../../../assets/images/jazz.jpeg') },
    { title: 'Folk & acústico', backgroundColor: 'rgb(188, 89, 0)', imageUrl: require('./../../../assets/images/folk-e-acustico.jpeg') },
    { title: 'Soul', backgroundColor: 'rgb(220, 20, 140)', imageUrl: require('./../../../assets/images/soul.jpeg') },
    { title: 'Metal', backgroundColor: 'rgb(233, 20, 41)', imageUrl: require('./../../../assets/images/metal.jpeg') },
    { title: 'Punk', backgroundColor: 'rgb(30, 50, 100)', imageUrl: require('./../../../assets/images/punk.jpeg') },
    { title: 'Blues', backgroundColor: 'rgb(176, 98, 57)', imageUrl: require('./../../../assets/images/blues.jpeg') },
    { title: 'Funk', backgroundColor: 'rgb(230, 30, 50)', imageUrl: require('./../../../assets/images/funk.jpeg') },
    { title: 'Música ambiente', backgroundColor: 'rgb(71, 125, 149)', imageUrl: require('./../../../assets/images/musica-ambiente.jpeg') },
    { title: 'Alternativa', backgroundColor: 'rgb(233, 20, 41)', imageUrl: require('./../../../assets/images/alternativa.jpeg') },
    { title: 'Country', backgroundColor: 'rgb(216, 64, 0)', imageUrl: require('./../../../assets/images/country.jpeg') },
    { title: 'Halloween', backgroundColor: 'rgb(196, 195, 196)', imageUrl: require('./../../../assets/images/halloween.jpeg') }
  ]);

  return (
    <SearchContainer contentContainerStyle={styles.searchContainer}>
      <Header>
        <Heading>Buscar</Heading>

        <IconContainer>
          <CameraSolidIcon />
        </IconContainer>
      </Header>

      <SearchBar>
        <MagnifyingGlassSolidIcon />
        <Placeholder>O que você quer ouvir?</Placeholder>
      </SearchBar>

      <SubHeading>Navegar por todas as seções</SubHeading>

      <SectionGroup>
        <SectionColumn>
          {sections.filter((_, index) => index % 2 === 0).map((section) => (
            <SectionCard key={section.title} section={section} />
          ))}
        </SectionColumn>
        
        <GapBetweenColumns />

        <SectionColumn>
          {sections.filter((_, index) => index % 2 !== 0).map((section) => (
            <SectionCard key={section.title} section={section} />
          ))}
        </SectionColumn>
      </SectionGroup>
    </SearchContainer>
  );
}

const styles = StyleSheet.create({
  searchContainer: {
    paddingBottom: 192,
  },
});

export default Search;