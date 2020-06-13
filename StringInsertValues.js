//Given a string and an object/array you need to return a formatted string. Replace all occurrences in .// the string where the name of a key in the object is surrounded by curly brackets.

// function format(str, obj) {
//   let newStr = "";
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] !== "{") {
//       newStr += str[i];
//     } else {
//       i++;
//       let key = "";
//       while (str[i] !== "}") {
//         key += str[i];
//         i++;
//       }
//       newStr += key in obj ? obj[key] : `{${key}}`;
//     }
//   }
//   return newStr;
// };

function format(str, obj) {
  return str.replace(/{[^}]+}/g, (el) => {
    const key = el.slice(1, -1);
    return key in obj ? obj[key] : `{${key}}`;
  })
}



console.log(format("Hello {foo} - make me a {bar}",
{ foo: "Jack", bar: "sandwich" })); //   "Hello Jack - make me a sandwich"

console.log(
  format("Hello {foo} - {foobar} make me a {bar}... {foo}!!?", {
    bar: "sandwich {foo}",
    foo: "Jack",
  })
);
//"Hello Jack - {foobar} make me a sandwich {foo}... Jack!!?"

console.log(
	format("Hello {0} - {foobar} make me {2} {1} - I'm full..", 
	[
    "Jack",
    "sandwiches",
    0,
  ])
);
//"Hello Jack - {foobar} make me 0 sandwiches - I\'m full.."
