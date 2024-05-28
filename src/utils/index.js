export const dateFormatter = (originalDate) => {
  const date = new Date(originalDate);
  const options = { year: "numeric", month: "long", day: "numeric" };
  const formattedDate = date.toLocaleDateString("en-GB", options);
  return formattedDate;
};
// export function base64Decode(input) {
//   const chars =
//     "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
//   let output = "";
//   let i = 0;

//   input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");

//   while (i < input.length) {
//     const index1 = chars.indexOf(input.charAt(i++));
//     const index2 = chars.indexOf(input.charAt(i++));
//     const index3 = chars.indexOf(input.charAt(i++));
//     const index4 = chars.indexOf(input.charAt(i++));
//     const a = (index1 << 2) | (index2 >> 4);
//     const b = ((index2 & 15) << 4) | (index3 >> 2);
//     const c = ((index3 & 3) << 6) | index4;

//     output += String.fromCharCode(a);
//     if (index3 !== 64) output += String.fromCharCode(b);
//     if (index4 !== 64) output += String.fromCharCode(c);
//   }

//   return output;
// }
