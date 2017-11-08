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
  Appear
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  city: require("../assets/city.jpg"),
  kat: require("../assets/kat.png"),
  logo: require("../assets/formidable-logo.svg"),
  markdown: require("../assets/markdown.png"),
  twit: require("../assets/twit.png")
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
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={6} textColor="primary" caps>Typography</Heading>
          <Heading size={1} textColor="secondary">Heading 1</Heading>
          <Heading size={2} textColor="secondary">Heading 2</Heading>
          <Heading size={3} textColor="secondary">Heading 3</Heading>
          <Heading size={4} textColor="secondary">Heading 4</Heading>
          <Heading size={5} textColor="secondary">Heading 5</Heading>
          <Text size={6} textColor="secondary">Standard text</Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>Standard List</Heading>
          <List>
            <ListItem>Item 1</ListItem>
            <ListItem>Item 2</ListItem>
            <ListItem>Item 3</ListItem>
            <ListItem>Item 4</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>Example Quote</Quote>
            <Cite>Author</Cite>
          </BlockQuote>
        </Slide>
      </Deck>
    );
  }
}
