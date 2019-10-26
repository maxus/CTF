//This vault uses for-loops and byte arrays. The source code for this vault is here: VaultDoor3.java
const checkpassword = password => {
  var buffer = [];
  var i;
  for (i = 0; i < 8; i++) {
    buffer[i] = password.charAt(i);
  }
  for (; i < 16; i++) {
    buffer[i] = password.charAt(23 - i);
  }
  for (; i < 32; i += 2) {
    buffer[i] = password.charAt(46 - i);
  }
  for (i = 31; i >= 17; i -= 2) {
    buffer[i] = password.charAt(i);
  }
  console.log("picoCTF{" + buffer.join("") + "}");
  if (buffer == "jU5t_a_sna_3lpm13g34c_u_4_m3rf48") return true;
  else return false;
};
checkpassword("jU5t_a_sna_3lpm13g34c_u_4_m3rf48");
