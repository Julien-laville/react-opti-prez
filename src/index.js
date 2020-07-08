import React from 'react';
import ReactDOM from 'react-dom';

import {
  Appear,
  Box,
  CodePane,
  CodeSpan,
  Deck,
  FlexBox,
  FullScreen,
  Grid,
  Heading,
  Image,
  ListItem,
  Markdown,
  OrderedList,
  Link,
  Progress,
  Slide,
  SpectacleLogo,
  Stepper,
  Text,
  Notes,
  UnorderedList,
  indentNormalizer
} from 'spectacle';




import logo from "./assets/react.jpg"
import laag from "./assets/1.webm"
import profiler from "./assets/profiler.png"
import profiler_config from "./assets/profiler_config.png"
import hightlight from "./assets/hightlight.webm"
import hightlight_fixed from "./assets/hightlight-fixed.webm"
import diff from "./assets/diff.png"
import selector from "./assets/selector.png"

// SPECTACLE_CLI_THEME_START
const theme = {
  size: {
    maxCodePaneHeight: 400
  },
  fonts: {
    header: '"Open Sans Condensed", Helvetica, Arial, sans-serif',
    text: '"Open Sans Condensed", Helvetica, Arial, sans-serif'
  }
};
// SPECTACLE_CLI_THEME_END

// SPECTACLE_CLI_TEMPLATE_START
const template = () => (
  <FlexBox
    justifyContent="space-between"
    position="absolute"
    bottom={0}
    width={1}
  >
    <Box padding="0 1em">
      <FullScreen />
    </Box>
    <Box padding="1em">
      <Progress />
    </Box>
  </FlexBox>
);

const code = indentNormalizer(`
    const now = Object.entries(this.props);
    const added = now.filter(([key, val]) => {
      if (prevProps[key] === undefined) return true;
      if (prevProps[key] !== val) {
        console.log(\`\${key}
          - \${JSON.stringify(val)}
          + \${JSON.stringify(prevProps[key])}\`);
      }
      return false;
    });
    added.forEach(([key, val]) => console.log(\`\${key}
          + \${JSON.stringify(val)}\`));
  }`)



const Presentation = () => (
  <Deck theme={theme} template={template} transitionEffect="fade">
    <Slide>
      <FlexBox height="100%">
        <img src={logo} width="75%" />
      </FlexBox>
    </Slide>
    <Slide>
      <FlexBox height="100%" flexDirection="column">
        <Heading>Can you see the redraw ?</Heading>
        <video autoPlay loop src={laag} style={{height:"30vh"}}/>
      </FlexBox>
    </Slide>
    <Slide>
      <FlexBox height="100%" flexDirection="column">
        <Heading>react dev tool highlight</Heading>
        <img src={profiler_config} style={{height:"30vh"}}/>
      </FlexBox>
    </Slide>
    <Slide>
      <FlexBox height="100%" flexDirection="column">
        <Heading>now, you see the repaint</Heading>
        <video autoPlay loop src={hightlight} style={{height:"30vh"}}/>
      </FlexBox>
    </Slide>
    <Slide>
      <FlexBox height="100%" flexDirection="column">
        <Heading>we clearly waste 100 ms</Heading>
        <img src={profiler} style={{height:"30vh"}}/>
      </FlexBox>
    </Slide>
    <Slide>
      <FlexBox height="100%" flexDirection="column">
        <CodePane
          style={{height:"80vh",overflow:"auto" }}
          fontSize={22}
          autoFillHeight
        >
          {code}
        </CodePane>
      </FlexBox>
    </Slide>
    <Slide>
      <FlexBox height="100%" flexDirection="column">
        <Heading>The diff show there is no diff but reference change</Heading>
        <img src={diff} style={{width:"80vh"}}/>
      </FlexBox>
    </Slide>
    <Slide>
      <FlexBox height="100%" flexDirection="column">
        <Heading>Avoid spread on selector (and prefer subselect used properties)</Heading>
        <img src={selector} style={{width:"80vh"}}/>
      </FlexBox>
    </Slide>
    <Slide>
      <FlexBox height="100%" flexDirection="column">
        <Heading>Now it's fixed</Heading>
        <video autoPlay loop src={hightlight_fixed} style={{height:"30vh"}}/>
      </FlexBox>
    </Slide>
    <Slide>
      <FlexBox height="100%" flexDirection="column">
        <Heading>Tools</Heading>
        <Link>https://github.com/welldone-software/why-did-you-render</Link>
        <Link>https://chrome.google.com/webstore/detail/react-developer-tools</Link>
      </FlexBox>
    </Slide>
    <Slide>
      <FlexBox height="100%" flexDirection="column">
        <Heading>Conclusion</Heading>
        <UnorderedList>
          <ListItem>Use tools to track guilty component</ListItem>
          <ListItem>Avoid copy on component selector especially on root app</ListItem>
          <ListItem>Don't premature optimisation</ListItem>
        </UnorderedList>
      </FlexBox>
    </Slide>
  </Deck>
);

ReactDOM.render(<Presentation />, document.getElementById('root'));
