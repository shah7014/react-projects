const css = (strings, ...expressions) => {
  return (props) =>
    expressions.reduce((acc, currVal, index) => {
      let calCurrVal = typeof currVal === "function" ? currVal(props) : currVal;
      return acc.concat(calCurrVal).concat(strings[index + 1]);
    }, strings[0]);
};

const div = css`
  background: ${(props) => props.background};
  color: ${(props) => props.color};
`;

console.log(div({ color: "white", background: "black" }));
