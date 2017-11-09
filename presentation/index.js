// Import React
import React from "react";

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  Image,
  Appear,
  CodePane
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";
import { request } from "https";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  city: require("../assets/city.jpg"),
  kat: require("../assets/kat.png"),
  logo: require("../assets/formidable-logo.svg"),
  markdown: require("../assets/markdown.png"),
  twit: require("../assets/twit.png"),
  reactOrigin: require("../assets/reactwtf.png"),
  what: require("../assets/what.gif")
};

preloader(images);

const theme = createTheme({
  primary: "cornsilk",
  secondary: "mediumgreen",
  tertiary: "#03A9FC",
  quartenary: "#CECECE",
  blue: "mediumblue",
  green: "mediumgreen",
  black: "black",
  white: "white"
}, {
  primary: "Montserrat",
  secondary: "Helvetica"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck progress="bar" transitionDuration={500} theme={theme} bgColor="primary">
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={6} fit caps lineHeight={1} textColor="tertiary">
            REACT
          </Heading>
          <Text margin="10px 0 0" textColor="black" fit bold>
            настоящее веб-разработки, будущее Таймпада
          </Text>
        </Slide>
        <Slide bgColor="white">
          <Image src={images.twit.replace("/", "")} />
        </Slide>
        <Slide >
          <Heading fit textColor="blue">
            Что такое реакт
          </Heading>
          <List textColor="secondary">
            <Appear>
              <ListItem margin="20px 0 0">Javascript библиотека для проектирования UI</ListItem>
            </Appear>
            <Appear>
              <ListItem margin="20px 0 0">Декларативный стиль</ListItem>
            </Appear>
            <Appear>
              <ListItem margin="20px 0 0">Компонентный подход</ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide bgColor="blue" textColor="green">
          <Heading fit >
            Какие проблемы решаем?
          </Heading>
          <List textColor="white">
            <Appear>
              <ListItem>Зависимость от DOM</ListItem>
            </Appear>
            <Appear>
              <ListItem>Бесконтрольный рендер</ListItem>
            </Appear>
            <Appear>
              <ListItem>Растущая сложность работы с данными</ListItem>
            </Appear>
            <Appear>
              <ListItem>Сложность поддержки</ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide bgColor="white">
          <Heading fir>
            Сразу к делу, реакт:
          </Heading>
          <Appear>
            <Image src={images.reactOrigin.replace("/", "")} />
          </Appear>
          <Appear>
            <Image src={images.what.replace("/", "")} />
          </Appear>
        </Slide>
        <Slide >
          <Heading fit textColor="blue">
            JSX
          </Heading>
          <Appear>
            <Heading>
              ESNext (6,7,...)
            </Heading>
          </Appear>
        </Slide>
        <Slide>
          <CodePane lang="jsx"
            source={require("raw-loader!../assets/jsx.example")}
            margin="20px auto"
            overflow = "overflow"
            textSize="22px"
          />
          <Appear>
            <CodePane lang="jsx"
              source={require("raw-loader!../assets/jsx_functional.example")}
              margin="20px auto"
              overflow = "overflow"
              textSize="22px"
            />
          </Appear>
        </Slide>
        <Slide>
          <Heading size={3} textColor="blue">Как на самом деле</Heading>
          <CodePane lang="jsx"
            source={require("raw-loader!../assets/real_world.example")}
            margin="20px auto"
            overflow="overflow"
            textSize="24px"
          />
        </Slide>
      </Deck>
    );
  }
}
