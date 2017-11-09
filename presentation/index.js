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

//Import React Components
import PropsPower from "../assets/intercative/PropsPower";
import Interactive from "../assets/intercative/interactive";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  city: require("../assets/images/city.jpg"),
  kat: require("../assets/images/kat.png"),
  logo: require("../assets/images/formidable-logo.svg"),
  markdown: require("../assets/images/markdown.png"),
  twit: require("../assets/images/twit.png"),
  reactOrigin: require("../assets/images/reactwtf.png"),
  what: require("../assets/images/what.gif"),
  waitwhat: require("../assets/images/waitwhat.gif"),
  howlong: require("../assets/images/howlong.gif")
};

preloader(images);

const theme = createTheme({
  primary: "cornsilk",
  secondary: "mediumseagreen",
  tertiary: "#03A9FC",
  quartenary: "#CECECE",
  blue: "mediumblue",
  green: "mediumseagreen",
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
          <List textColor="black">
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
            source={require("raw-loader!../assets/examples/jsx.example")}
            margin="20px auto"
            overflow = "overflow"
            textSize="22px"
          />
          <Appear>
            <CodePane lang="jsx"
              source={require("raw-loader!../assets/examples/jsx_functional.example")}
              margin="20px auto"
              overflow = "overflow"
              textSize="22px"
            />
          </Appear>
        </Slide>
        <Slide maxHeight="1000">
          <Heading size={3} textColor="blue">Как на самом деле</Heading>
          <CodePane lang="jsx"
            source={require("raw-loader!../assets/examples/real_world.example")}
            margin="20px auto"
            overflow="overflow"
            textSize="24px"
          />
        </Slide>
        <Slide>
          <Image src={images.waitwhat.replace("/", "")} />
        </Slide>
        <Slide bgColor="secondary">
          <BlockQuote>
            <Quote textColor="white" textSize="24px" lineHeight={2} italic bold="false" textFont="secondary">
                Templates encourage a poor separation of concerns. "View Model" tightly couples a template to display logic. Display logic and markup are inevitably tightly coupled. Templates separate technologies, not concerns.
                React components are "...a highly cohesive building block for UIs loosely coupled with other components."
            </Quote>
            <Cite textColor="blue">Какой-то чувак из React Dev Team</Cite>
          </BlockQuote>
        </Slide>
        <Slide>
          <CodePane
            lang="jsx"
            source={require("raw-loader!../assets/examples/PropsPower.example")}
            margin="20px auto"
            overflow="overflow"
            textSize="18px"
          />
        </Slide>
        <Slide bgColor="blue">
          <PropsPower/>
        </Slide>
        <Slide bgColor="blue">
          <PropsPower multy="true" />
        </Slide>
        <Slide bgColor="blue">
          <Heading caps size={3} textColor="primary">Интерактивность!</Heading>
          <Image src={images.howlong.replace("/", "")} />
        </Slide>
        <Slide>
          <Interactive/>
        </Slide>
        <Slide>
          <CodePane
            lang="jsx"
            source={require("raw-loader!../assets/examples/interactive.example")}
          />
        </Slide>
        <Slide bgColor="blue">
          <Heading>State</Heading>
          <List textColor="white">
            <ListItem>Стейт чать класса</ListItem>
            <ListItem>Стейт обновляется только с помощью .setState({})</ListItem>
            <ListItem>Каждое обновление стейта запускает ре-рендер и оповещает всех подписчиков</ListItem>
          </List>
        </Slide>
      </Deck>
    );
  }
}
