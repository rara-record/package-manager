const b = require("b");

/**
 * axios는 a패키지에 설치 되었지만 사용하는 쪽은 패키지 b이다.
 * 하지만 a패키지의 package.json에서는
 * 패키지 a에서 패키지 b를 사용하고 있다는 그 어떤 dependency도 표현되고 있지 않다.
 * 그럼에도 불구하고 node_modules의 동작 방식에 따라서
 * a b 모두 aixos 접근이 가능하며 해당 스크립트도 정상 작동한다.
 */
(async function () {
  const users = await b();
  console.log(users.map((user) => user.login).join(", "));
})();
