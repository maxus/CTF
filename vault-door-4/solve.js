//This vault uses ASCII encoding for the password. The source code for this vault is here: VaultDoor4.java
var flag = String.fromCharCode.apply(null, [
  106,
  85,
  53,
  116,
  95,
  52,
  95,
  98,
  0x55,
  0x6e,
  0x43,
  0x68,
  0x5f,
  0x30,
  0x66,
  0x5f,
  0142,
  0131,
  0164,
  063,
  0163,
  0137,
  062,
  066
]);
console.log("picoCTF{" + flag + "7e03d116}");
