import { TypeAnimation } from 'react-type-animation';

const TypeHeader = () => (
  <TypeAnimation
    sequence={[
      "I'm Mohamad",
      2000,
      ' Glad to see you!',
      2000,
    ]}
    wrapper="span"
    speed={10}
    repeat={Infinity}
  />
);

export default TypeHeader;
