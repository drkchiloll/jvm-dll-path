var fs = require('fs');

var prgFiles = 'C:\\Program Files\\Java\\',
    bser = '\\bin\\server\\;'
    j7 = '1.7.0',
    j8 = '1.8.0',
    jdk7 = `jdk${j7}`,
    jre7 = `jre${j7}`,
    jdk8 = `jdk${j8}`,
    jre8 = `jre${j8}`;
var pathStr = '';
var i;
for(i=0; i<81; i++) {
  if(i===0) {
    // console.log(`${prgFiles + jdk7}`);
    // console.log(`${prgFiles + jre7}`);
    pathStr+=`${prgFiles+jdk7+'\\jre'+bser}`;
    pathStr+=`${prgFiles+jre7+bser}`;
  } else {
    var iter = i.toString();
    var rel;
    rel = ((i>=1 && i<=7) || (i>=9 && i<=11) ||
      i===13 || i===15 || i===17 || i===21 || i===25 ||
      i===40 || i===45 || i===51 || i===55 || i===60 ||
      i===65 || i===67 || i===71 || i===76 || i===79 ||
      i===80)
    ? iter
    : null;
    if(rel) {
      // console.log(`${prgFiles + jdk7 + '_' + i}`);
      // console.log(`${prgFiles + jre7 + '_' + i}`);
      pathStr+=`${prgFiles + jdk7 + '_' + i + '\\jre' + bser}`;
      pathStr+=`${prgFiles + jre7 + '_' + i + bser}`;
    }
    console.log(pathStr);
  }
}

for(i=0; i<81; i++) {
}
