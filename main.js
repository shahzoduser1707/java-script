let line = ''
for (let k = 0; k < 6; k++) {
  for (let i = 0; i < 8; i++) {
   if (i % 2 == 0 && k % 2 == 0 || k % 2 != 0 && i % 2 != 0) {
    line += '⬜';
   } else{
    line += '⬛';
   }
    
  }
  console.log(line);
  line = ''
  
}