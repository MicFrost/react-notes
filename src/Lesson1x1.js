// 1.1 My First Component
function Titel1x1() {
  return (
    <div>
      <h3>1.1 My First Component</h3>
    </div>
  );
}

export function HipHip() {
  return <h4>Hip Hip Hooray!</h4>;
}

function Congrats() {
  return (
    <div>
      <h3>Good Job!</h3>
      <HipHip />
    </div>
  );
}

function Recap1x1() {
  return (
    <>
      <h4>Recap from reactjs.org</h4>
      <p>
        In a React app, every piece of UI is a component. <br></br> React components are
        regular JavaScript functions except: <br></br>Their names always begin with a
        capital letter. <br></br>They return JSX markup
      </p>
    </>
  );
}

export default function Lesson1x1() {
  return (
    <>
      <Titel1x1 />
      <Congrats />
      <br />
      <Recap1x1 />
      <hr />
      <br />
    </>
  );
}
