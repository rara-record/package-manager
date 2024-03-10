/**
 * a 패키지에서는 axios를 설치하지 않았지만
 * b 패키지의 설치되어 있는 axios를 사용한 함수를 불러온다.
 * root의 node_modules와 연결되어 있기 때문이다.
 * */

const b = require("b");

(async function main() {
  const users = await b();
  console.log(users.map((user) => user.login).join(", "));
})();
