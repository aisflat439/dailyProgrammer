const jsonObj = { "name":"Devin", "age":38, "hasPets":true, "petNames":[ "Joey","Tuna","Seven" ], "favorites": { "colors":null, "musicians":[ "Bad Religion", "Taylor Swift" ] }}

let stringJSON = JSON.stringify(jsonObj, null, 4)

console.log(stringJSON);

const customJsonObj = { "name":"Devin", "age":38, "hasPets":true, "petNames":[ "Joey","Tuna","Seven" ], "favorites": { "colors":null, "musicians":[ "Bad Religion", "Taylor Swift" ] }}

function prettyPrint(JSONobj) {
  for (var variable in JSONobj) {
    if (JSONobj.hasOwnProperty(variable)) {
      console.log(variable, typeof variable);
    }
  }
  // console.log(typeof JSONobj);
  // for (var item in JSONobj) {
  //   console.log(item, typeof item);
  //   if (typeof item === Array || typeof item === Object) {
  //     // prettyPrint(item)
  //   }
  // }
}

let customStringJson = prettyPrint(customJsonObj);
