export const URLExtractor = (url) => {
  const myURL = new URL(url);

  const hostname = myURL.hostname;
  const pathname = myURL.pathname;
  const searchParams = myURL.searchParams;
  const search = myURL.search;

  // check if the url has params by looking at ? in search portion
  const hasParams = search.indexOf("?") === -1 ? false : true;
  let paramKeys = [];

  const domainPath = hostname + pathname;

  if (hasParams) {
    for (const key of searchParams.keys()) {
      paramKeys.push(key);
    }
  }
  return {
    url,
    hostname,
    pathname,
    paramKeys,
    search,
    domainPath,
  };
};

// console.log(
//   URLExtractor("https://sandbox.belvo.com/pathtest?q=2&t=3&x=23&w=wewe")
// );
