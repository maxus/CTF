/*
This vault uses some complicated arrays! I hope you can make sense of it, special agent. The source code for this vault is here: VaultDoor1.java
*/

var text = [
  { num: "0", text: "d" },
  { num: "29", text: "7" },
  { num: "4", text: "r" },
  { num: "2", text: "5" },
  { num: "23", text: "r" },
  { num: "3", text: "c" },
  { num: "17", text: "4" },
  { num: "1", text: "3" },
  { num: "7", text: "b" },
  { num: "10", text: "_" },
  { num: "5", text: "4" },
  { num: "9", text: "3" },
  { num: "11", text: "t" },
  { num: "15", text: "c" },
  { num: "8", text: "l" },
  { num: "12", text: "H" },
  { num: "20", text: "c" },
  { num: "14", text: "_" },
  { num: "6", text: "m" },
  { num: "24", text: "5" },
  { num: "18", text: "r" },
  { num: "13", text: "3" },
  { num: "19", text: "4" },
  { num: "21", text: "T" },
  { num: "16", text: "H" },
  { num: "27", text: "1" },
  { num: "30", text: "f" },
  { num: "25", text: "_" },
  { num: "22", text: "3" },
  { num: "28", text: "e" },
  { num: "26", text: "5" },
  { num: "31", text: "d" }
];
var sorted = text.sort((a, b) => {
  return a.num - b.num; 
});
var flag = "";
sorted.forEach(sorted => {
  flag += sorted.text;
});
console.log("picoCTF{" + flag + "}"); 
