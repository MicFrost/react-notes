function Titel() {
  return (
    <div>
      <h3>1.4 JavaScript in JSX with Curly Braces</h3>
    </div>
  );
}

const today = new Date();

function formatDate(date) {
  return new Intl.DateTimeFormat("en-US", { weekday: "long" }).format(date);
}

function MyDay() {
  return (
    <>
      <h3>Have a good {formatDate(today)}. Hier is your plan for today.</h3>
    </>
  );
}

const person = {
  name: "Mic Frost",
  height="100px" 
  theme: {
    backgroundColor: "White",
    color: "Black",
  },
};

function TodoList() {
  return (
    <div style={person.theme}>
      <h3>{person.name}'s Todos</h3>
      <img 
      maxWidth= {peson.height}
        className="avatar"
        src="https://media.licdn.com/dms/image/C5603AQF9yWwOi8tV7Q/profile-displayphoto-shrink_800_800/0/1516497639022?e=1680134400&v=beta&t=FCaiUL73_AZsiTPIAu-8aWBnUTQaWIeGBinzAC32-5c"
        alt="Mic Frost"
      />
      <ul>
        <li>Improve the 5K Run</li>
        <li>Prepare for 10K Run</li>
        <li>Work on the Core Muscles</li>
      </ul>
    </div>
  );
}

function Recap() {
  return (
    <>
      <h4>Recap from reactjs.org</h4>
      <p> x </p>
    </>
  );
}

export default function Lesson1x4() {
  return (
    <>
      <Titel />
      <br />
      <MyDay />
      <TodoList />
      <Recap />
      <hr />
      <br />
    </>
  );
}
