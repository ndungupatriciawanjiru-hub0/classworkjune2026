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
    </div>
  );
}

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
          {/*
            for booleans convert them to string before displaying
            */}
        </li>
        <li>
          Not set <b>{props.notSet}</b>
        </li>
      </ul>
    </div>
  );
}

export default Parent;