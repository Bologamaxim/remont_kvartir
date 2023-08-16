let arr = [10, 12.5, 32.4, 8];
function convert(cel) {
  let furingete = cel.map((gradusCel) => gradusCel * 1.8 + 32);
  return furingete;
}
console.log(convert(arr));
