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
  CodePane,
  Fill,
  Layout,
  Fit
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


const images = {
  city: require("../assets/images/city.jpg"),
  kat: require("../assets/images/kat.png"),
  logo: require("../assets/images/formidable-logo.svg"),
  markdown: require("../assets/images/markdown.png"),
  twit: require("../assets/images/twit.png"),
  reactOrigin: require("../assets/images/reactwtf.png"),
  what: require("../assets/images/what.gif"),
  waitwhat: require("../assets/images/waitwhat.gif"),
  howlong: require("../assets/images/howlong.gif"),
  events: require("../assets/images/events.png"),
  state1: require("../assets/images/state1.gif"),
  state2: require("../assets/images/state2.gif"),
  state3: require("../assets/images/state3.gif"),
  redux1: require("../assets/images/redux1.gif"),
  reduxp: require("../assets/images/reduxp.png")
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
  white: "white",
  redux: "#764abc"
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
          <Image src={images.events} />
        </Slide>
        <Slide bgColor="black">
          <Heading textColor="white" fit>Лучшие практики</Heading>
          <CodePane
            lang="jsx"
            source={require("raw-loader!../assets/examples/Components.example")}
          />
        </Slide>
        <Slide>
          <Heading fit>HOC</Heading>
          <Heading fit>Render Props</Heading>
          <Heading fit>Decorators</Heading>
          <Heading fit>Mixins</Heading>
        </Slide>
        <Slide bgColor="green">
          <Heading textColor="blue" size={3} margin="-80px 0 0 0">ЖЦ компонента</Heading>
          <List textColor="white" >
            <ListItem>componentWillMount (Constructor) — выполняется перед первым рендером</ListItem>
            <ListItem>componentDidMount — после рендера</ListItem>
            <ListItem>componentWillReceiveProps — при получении новых props </ListItem>
            <ListItem>shouldComponentUpdate — перед рендером, получает новые и старые стейт и пропс, решает рендерить ли компонент</ListItem>
            <ListItem>componentDidUpdate — компонент обновился/перерендерился</ListItem>
            <ListItem>componentWillUnmount — перед удалением компонента из DOM</ListItem>
          </List>
        </Slide>
        <Slide bgColor="blue">
          <Heading>State</Heading>
          <List textColor="white">
            <ListItem>Стейт чать класса</ListItem>
            <ListItem>Стейт обновляется только с помощью .setState({})</ListItem>
            <ListItem>Каждое обновление стейта запускает ре-рендер и оповещает всех подписчиков</ListItem>
          </List>
        </Slide>
        <Slide bgColor="white">
          <Heading textColor="black" size={3} margin="-20px auto 0">Стандартное распространение стейта</Heading>
          <Image src={images.state1.replace("/", "")} />
        </Slide>
        <Slide bgColor="white">
          <Heading textColor="black" size={3}>Стандартное распространение стейта</Heading>
          <Image src={images.state2.replace("/", "")} />
        </Slide>
        <Slide bgColor="white">
          <Heading textColor="black" size={3}>А потом...ting goes skrraa</Heading>
          <Text textAlign="right" textSize="15px" italic>© Big Shaq</Text>
          <Image src={images.state3.replace("/", "")} />
        </Slide>
        <Slide bgColor="tertiary">
          <Heading textColor="redux" fit>Redux</Heading>
        </Slide>
        <Slide bgColor="white">
          <Heading textColor="black" size={3}>Держим стейт под контролем</Heading>
          <Image src={images.redux1.replace("/", "")} />
        </Slide>
        <Slide bgColor="white">
          <Heading textColor="redux" size={4}>Схема работы редакса</Heading>
          <Image src={images.reduxp.replace("/", "")} />
        </Slide>
        <Slide bgColor="redux">
          <Heading textColor="white" size={4}>Основные принципы</Heading>
          <List lineHeight={3}>
            <ListItem>Все состояние хренится в одном месте—сторе</ListItem>
            <ListItem>Состояние нельзя менят напрямую</ListItem>
            <ListItem>Экшены обрабатываются чистой функцией—редьюсером</ListItem>
          </List>
        </Slide>
        <Slide bgColor="redux">
          <CodePane
            lang="js"
            source={require("raw-loader!../assets/examples/Redux.example")}
            margin="-140px auto 0"
            textSize="1rem"
          />
        </Slide>
        <Slide bgColor="white" notes="в этой схеме сайд-эффектам нет места. Единственное место, где происходят изменения — это редьюсер, а он обязан быть чистой функцией. Мидлвейр находится между кодом, который диспатчит экшены (то есть генерирует события) и редьюсером (то есть функцией, которая их преобразует в новое состояние), пропускает через себя все возникающие экшены, меняет их (если считает нужным) и отправляет дальше — или не отправляет. Особенность мидлвейра в том, что он быть чистой функцией не обязан — и поэтому он может делать сайд-эффекты вроде запросов на сервер или чего угодно.">
          <Heading fit>Когда нельзя быть таким чистым</Heading>
          <Appear>
            <Heading textColor="green" fit>Мидлвеир</Heading>
          </Appear>
          <Appear>
            <List textColor="redux">
              <ListItem>redux-thunk</ListItem>
              <ListItem>redux-saga</ListItem>
            </List>
          </Appear>
        </Slide>
        <Slide>
          <Heading textColor="green" margin="auto auto 20px">Что по стилям</Heading>
          <Layout>
            <Fill>
              <CodePane
                lang="js"
                source={require("raw-loader!../assets/examples/Css.example")}
                style={{ minWidth: "none" }}
              />
            </Fill>
          </Layout>
        </Slide>
        <Slide>
          <Heading textColor="green" margin="auto auto 20px">Что по стилям</Heading>
          <Layout>
            <Fill>
              <CodePane
                lang="js"
                source={require("raw-loader!../assets/examples/Styled.example")}
              />
            </Fill>
          </Layout>
        </Slide>
        <Slide bgColor="green">
          <Heading textColor="blue" margin="auto auto 20px">Как собирать</Heading>
          <CodePane
            lang="js"
            source={require("raw-loader!../assets/examples/Webpack.example")}
          />
        </Slide>
        <Slide bgColor="white">
          <Heading textColor="redux" margin="auto auto 20px">Если легаси дороже</Heading>
          <CodePane
            lang="js"
            source={require("raw-loader!../assets/examples/Gulp.example")}
          />
        </Slide>
        <Slide bgColor="redux">
          <Heading fit >
            Плюсы
          </Heading>
          <List textColor="white">
            <Appear>
              <ListItem>Tree-shaking</ListItem>
            </Appear>
            <Appear>
              <ListItem>Code-spliting</ListItem>
            </Appear>
            <Appear>
              <ListItem>All-in-one place</ListItem>
            </Appear>
            <Appear>
              <ListItem>Перспективы</ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide bgColor="black">
          <Layout >
            <Heading fit>Create-</Heading>
            <Heading fit>react-</Heading>
            <Heading fit>app</Heading>
          </Layout>
        </Slide>
        <Slide>
          <Heading textColor="redux" fit>Инструменты,</Heading>
          <Heading textColor="redux" fit>помогающие в разработке</Heading>
          <List textColor="blue">
            <Appear>
              <ListItem>Webpack</ListItem>
            </Appear>
            <Appear>
              <ListItem>Babel</ListItem>
            </Appear>
            <Appear>
              <ListItem>ESLint</ListItem>
            </Appear>
            <Appear>
              <ListItem>Flow</ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide bgColor="white">
          <Heading textColor="redux" margin="auto auto 20px">Flow</Heading>
          <CodePane
            lang="js"
            source={require("raw-loader!../assets/examples/Flow.example")}
          />
        </Slide>
      </Deck>
    );
  }
}

