/**
 * symbolic link + npm link를 통한 패키지 구성
 * - 직접 연결
 * - npm link
 *
 * require가 node_modules안에 package-a가 있는지 찾는다.
 * 있으면 node_modules안의 package.json을 보고 main에 해당하는 파일을 찾는다
 * 만약 main에 해당하는 파일이 index.js라면 그 안으로 들어간다.
 */
const packageA = require("package-a");
const packageB = require("package-b");
console.log(packageA, packageB); // package-a package-a
