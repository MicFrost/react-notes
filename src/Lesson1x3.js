function Titel() {
  return (
    <div>
      <h3>1.3 Writing Markup with JSX</h3>
    </div>
  );
}

function ExampleCats() {
  return (
    <>
      <div className="intro">
        <h1>Welcome to my website: Cook with Cats!</h1>
      </div>
      <p className="summary">
        You can find my Recipes here and a lot pictures of Cats!
      </p>
    </>
  );
}

function Recap() {
  return (
    <>
      <h4>Recap from reactjs.org</h4>
      <p>
        React components group rendering logic together with markup because they
        are related. <br /> JSX is similar to HTML, with a few differences.
      </p>
    </>
  );
}

export default function Lesson1x3() {
  return (
    <>
      <Titel />
      <br />
      <ExampleCats />
      <Recap />
      <hr />
      <br />
    </>
  );
}
