/*
1.Components are functions.
  input->output
  input<data>->output is ui
2.Create reusable components you need an
  understanding of props.
  properties.
3.Each component you create in react
  will always have props
4.Props are passed from parent to child
-> all data types can be passed into props
  including other components
*/

/*
Child: receives props but doesn't display them in JSX,
only logs to console. Demonstrates that props exist
even if unused visually.
*/
function Child(props) {
  console.log(props);
  return (
    <div>
      <h1>I am the child component</h1>
    </div>
  );
}

/*
Child1: same props as Child, but renders each value
using {props.x} inside JSX to show data flowing
from parent to child visually.
*/
function Child1(props) {
  console.log(props);
  return (
    <div>
      <h1>I am the child component</h1>
      <ul>
        <li>
          Favourite string <b>{props.str}</b>
        </li>
        <li>
          Amount <b>{props.amountInNumber}</b>
        </li>
        <li>
          isOk <b>{props.isOk}</b>
        </li>
        <li>
          isOk <b>{String(props.isOk)}</b>{" "}
          {/* for booleans convert them to string before displaying */}
        </li>
        <li>
          Not set <b>{props.notSet}</b>
        </li>
      </ul>
    </div>
  );
}

// display props using prop keyword
function Child1b(props) {
  return (
    <div>
      <h1>I am the child 1 component</h1>
      <ul>
        <li>
          Favourite string <b>{props.str}</b>
        </li>
        <li>
          Amount <b>{props.amountInNumber}</b>
        </li>
        <li>
          isOk <b>{props.isOk}</b>
        </li>
        <li>
          isOk <b>{String(props.isOk)}</b>{" "}
          {/* for booleans convert them to string before displaying */}
        </li>
        <li>
          Not set <b>{props.notSet}</b>
        </li>
      </ul>
    </div>
  );
}

// using destructuring
function Child2(props) {
  /*
  key:value
    const str=props.str
    const amountInNumber=props.amountInNumber
    const amount=props.amountInNumber
  key:number<>
  key:<string variable naming> "hi boss":34
    const {str,amountInNumber}=props
  */
  const { str, amountInNumber, isOk, notSet } = props;
  return (
    <div>
      <h1>I am the child 2 component</h1>
      <ul>
        <li>
          Favourite string <b>{str}</b>
        </li>
        <li>
          Amount <b>{amountInNumber}</b>
        </li>
        <li>
          isOk <b>{isOk}</b>
        </li>
        <li>
          isOk <b>{String(isOk)}</b>{" "}
          {/* for booleans convert them to string before displaying */}
        </li>
        <li>
          Not set <b>{notSet}</b>
        </li>
      </ul>
    </div>
  );
}

// display props using prop keyword
// direct destructuring
function Child2b({ str, amountInNumber, isOk, notSet }) {
  return (
    <div>
      <h1>I am the child 2 component</h1>
      <ul>
        <li>
          Favourite string <b>{str}</b>
        </li>
        <li>
          Amount <b>{amountInNumber}</b>
        </li>
        <li>
          isOk <b>{isOk}</b>
        </li>
        <li>
          isOk <b>{String(isOk)}</b>{" "}
          {/* for booleans convert them to string before displaying */}
        </li>
        <li>
          Not set <b>{notSet}</b>
        </li>
      </ul>
    </div>
  );
}

function Parent() {
  //primitive datatypes
  const str = "Hello world"; ///string
  const amount = 2000; //number
  const isOk = true; //boolean
  const notSet = null; //null

  return (
    <div>
      <h1> I am the parent component</h1>
      <Child str={str} amountInNumber={amount} isOk={isOk} notSet={notSet} />
      <Child1 str={str} amountInNumber={amount} isOk={isOk} notSet={notSet} />
      <Child1b str={str} amountInNumber={amount} isOk={isOk} notSet={notSet} />
      <Child2 str={str} amountInNumber={amount} isOk={isOk} notSet={notSet} />
      <Child2b str={str} amountInNumber={amount} isOk={isOk} notSet={notSet} />
    </div>
  );
}

export default Parent;