import { HipHip } from "./Lesson1x1";

function Titel1x2() {
  return (
    <div>
      <h3>1.2 Import and Exporting Components</h3>
    </div>
  );
}

function Recap1x2() {
  return (
    <>
      <h4>Recap from reactjs.org</h4>
      <p>
        <ul>Syntax for Default statement</ul>
        <li>export default function Name() {} </li>
        <li>import Name from './Name.js'; </li>
        <ul>Syntax for Named statement</ul>
        <li>export function Name() {} </li>
        <li>import &#123; Name &#125; from './Name.js';</li>
      </p>
    </>
  );
}

export default function Lesson1x2() {
  return (
    <>
      <Titel1x2 />
      <p>
        <HipHip /> This Hip Hip Hooray comed from Lesson 1.1.
      </p>
      <br />
      <Recap1x2 />
      <hr />
      <br />
    </>
  );
}
