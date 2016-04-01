var fs = require('fs');

var prgFiles = 'C:\\\\Program Files\\\\Java\\\\',
    binSer = '\\\\bin\\\\server;';

var baseJavaVersion = (jver, update) => {
  var ver = `1.${jver}.0`,
      jdk = `jdk${ver}${(update) ? ('_' + update) : ''}`,
      jre = `jre${ver}${(update) ? ('_' + update) : ''}`;
  return (
    `${prgFiles + jdk + '\\\\jre' + binSer}`+
    `${prgFiles + jre + binSer}`
  );
};

var pathStr = '\"';
var i;
for(i=0; i<81; i++) {
  if(i===0) {
    pathStr+=';' + baseJavaVersion('7');
  } else {
    var rel7 = ((i>=1 && i<=7) || (i>=9 && i<=11) ||
      i===13 || i===15 || i===17 || i===21 || i===25 ||
      i===40 || i===45 || i===51 || i===55 || i===60 ||
      i===65 || i===67 || i===71 || i===76 || i===79 ||
      i===80)
    ? i.toString()
    : undefined;
    if(rel7) {
      pathStr+= baseJavaVersion('7', rel7);
    }
  }
}

for(i=0; i<81; i++) {
  if(i===0) {
    pathStr+=baseJavaVersion('8');
  } else {
    var rel8 = (i===5 || i===11 || i===20 || i===25 ||
      i===31 || i===40 || i===45 || i===51 || i===60 ||
      (i>=65&&i<=66) || (i>=71&&i<=74))
    ? i.toString()
    : undefined
    if(rel8) {
      pathStr+= baseJavaVersion('8', rel8);
    }
  }
}
pathStr+='\"';
fs.writeFile('jvm_dll_path.json', pathStr, 'utf8', (err, res) => {
  console.log(res)
})
