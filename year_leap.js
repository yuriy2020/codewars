var format = function (str, obj) {
	// return str.replace(/(\{foo\})/gm, obj.foo).replace(/(\{bar\})/gm, obj.bar);

	// return str.replace(/{\d}/gm, obj[str.match(/\d/).map(el=>parseInt(el))])
	 let arr = str.match(/{\d}/gm).map(el=>Number(el.slice(1,2)))
	//  console.log('>>>',arr);
	 let sub = str.indexOf(arr[2])
	 console.log('>>>',sub);
	 

	// return str.replace(/(\{\d\})/gm, arr.map(el=>el===))


};


var obj = { foo: "Jack", bar: "sandwich" };
// console.log('>>>',obj.length);


// console.log(format("Hello {foo} - make me a {bar}", obj)); //   "Hello Jack - make me a sandwich"
// console.log(
//   format("Hello {foo} - {foobar} make me a {bar}... {foo}!!?", {
//     bar: "sandwich {foo}",
//     foo: "Jack",
//   })
// );
// "Hello Jack - {foobar} make me a sandwich {foo}... Jack!!?"

console.log(
	format("Hello {0} - {foobar} make me {2} {1} - I'm full..", 
	[
    "Jack",
    "sandwiches",
    0,
  ])
);
//"Hello Jack - {foobar} make me 0 sandwiches - I\'m full.."