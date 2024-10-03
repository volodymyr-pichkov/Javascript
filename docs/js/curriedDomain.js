export function curriedDomain(protocol) {
  return function (domainName) {
    return function (tld) {
      return `${protocol}://${domainName}.${tld}`;
    };
  };
}

const fullDomain = curriedDomain("https")("example")("com");
console.log(fullDomain);
