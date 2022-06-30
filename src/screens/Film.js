import React, { useState, useRef } from "react";
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  Dimensions,
  ImageBackground,
  Image,
} from "react-native";
import Carousel from "react-native-snap-carousel";

const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

export default function Film() {
  const carouselRef = useRef(null);

  const [lista, setLista] = useState([
    {
      title: "MS. MARVEL",
      text: "Kamala Khan é uma jovem paquistanesa de 16 anos que mora em Nova Jersey e leva uma vida comum ao lado de sua família muçulmana. Mas tudo muda quando ela sofre um ataque de um inumano, ganhando a habilidade de transmutação e assumindo a identidade de Miss Marvel.",
      img: "https://i.pinimg.com/564x/fa/b6/0d/fab60dc17aea3d33456a465248af2d6d.jpg",
    },
    {
      title: "CAPITÃ MARVEL",
      text: "Carol Danvers, retorna para seu planeta de origem com o objetivo de impedir uma invasão dos Skrull e, nessa jornada, acaba descobrindo a verdade sobre a própria história.",
      img: "https://i.pinimg.com/564x/c2/a8/88/c2a88822d7e5a50742a202180095aba3.jpg",
    },
    {
      title: "VIÚVA NEGRA",
      text: "Entre os filmes Capitão América: Guerra Civil e Vingadores: Guerra Infinita, Natasha Romanoff é caçada por uma organização russa enquanto busca suas raízes em Nova York.",
      img: "https://i.pinimg.com/564x/40/ca/b8/40cab8bc9d39dd270b2060cd7374be87.jpg",
    },
    {
      title: "PANTERA NEGRA",
      text: "Em Pantera Negra, após a morte do rei T'Chaka (John Kani), o príncipe T'Challa (Chadwick Boseman) retorna a Wakanda para a cerimônia de coroação. Nela são reunidas as cinco tribos que compõem o reino, sendo que uma delas, os Jabari, não apoia o atual governo.",
      img: "https://i.pinimg.com/564x/21/68/50/216850b61768c6eca26c1d388fd63315.jpg",
    },
    {
      title: "LIGHTYEAR",
      text: "Uma aventura de ação de ficção científica e a história de origem definitiva de Buzz Lightyear, o herói que inspirou o brinquedo em Toy Story (1995). Lightyear segue o lendário Patrulheiro Espacial depois que em um teste de voo da nave espacial faz com que ele vá para um planeta hostil e fique abandonado a 4,2 milhões de anos-luz da Terra ao lado de seu comandante e sua tripulação.",
      img: "https://i.pinimg.com/564x/6e/1a/16/6e1a16aee7acd1f8d08ed97dd5581abb.jpg",
    },
    {
      title: "HACKERS - PIRATAS DE COMPUTADOR",
      text: "Um adolescente conhecido como Zero Cool (Jonny Lee Miller) é uma lenda entre os hackers, pois com apenas 11 anos ele inutilizou 1507 computadores em Wall Street, provocando um caos total no mundo das finanças.  Até que se depara com um gigantesco plano que, além de tornar o autor muito rico, pode incriminá-lo. Assim, com a ajuda de seus companheiros, ele tenta salvar sua pele.",
      img: "https://i.pinimg.com/564x/e5/0b/f6/e50bf6db21c20414378164190e092bca.jpg",
    },
  ]);
  const [background, setBackground] = useState(lista[0].img);
  const [activeIndex, setActiveIndex] = useState(0);

  const _renderItem = ({ item, index }) => {
    return (
      <View>
        <Image source={{ uri: item.img }} style={styles.carouselImg} />
        <Text style={styles.carouselText}>{item.title}</Text>
      </View>
    );
  };

  return (
    <ScrollView style={styles.container}>
      <View style={{ flex: 1, height: screenHeight }}>
        <View style={{ ...StyleSheet.absoluteFill, backgroundColor: "#000" }}>
          <ImageBackground
            source={{ uri: background }}
            style={styles.imgBg}
            blurRadius={8}
          >
            <Text
              style={{
                color: "#FFF",
                fontSize: 25,
                fontWeight: "bold",
                marginLeft: 10,
                marginVertical: 10,
              }}
            >
              FILMES
            </Text>

            <View style={styles.slideView}>
              <Carousel
                style={styles.carousel}
                ref={carouselRef}
                data={lista}
                renderItem={_renderItem}
                sliderWidth={screenWidth}
                itemWidth={200}
                inactiveSlideOpacity={0.5}
                onSnapToItem={(index) => {
                  setBackground(lista[index].img);
                  setActiveIndex(index);
                }}
              />
            </View>

            <View style={styles.moreInfo}>
              <View style={{ marginTop: 10 }}>
                <Text style={styles.movieTitle}>
                  {lista[activeIndex].title}
                </Text>
                <Text style={styles.movieDesc}>{lista[activeIndex].text}</Text>
              </View>
            </View>
          </ImageBackground>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imgBg: {
    flex: 1,
    width: null,
    height: null,
    opacity: 1,
    justifyContent: "flex-start",
    backgroundColor: "#000",
  },
  slideView: {
    width: "100%",
    height: 350,
    justifyContent: "center",
    alignItems: "center",
  },
  carousel: {
    flex: 1,
    overflow: "visible",
  },
  carouselImg: {
    alignSelf: "center",
    width: 200,
    height: 300,
    borderRadius: 12,
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  carouselText: {
    padding: 15,
    color: "#FFF",
    position: "absolute",
    bottom: 10,
    left: 2,
    fontWeight: "bold",
  },
  moreInfo: {
    backgroundColor: "#FFF",
    width: screenWidth,
    height: screenHeight,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  movieTitle: {
    paddingLeft: 15,
    fontSize: 22,
    fontWeight: "bold",
    color: "#131313",
    marginBottom: 5,
  },
  movieDesc: {
    paddingLeft: 15,
    color: "#131313",
    fontSize: 14,
    fontWeight: "bold",
  },
});
