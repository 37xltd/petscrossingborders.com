export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.hostname === "www.petscrossingborders.com" || url.protocol !== "https:") {
      url.hostname = "petscrossingborders.com";
      url.protocol = "https:";
      return Response.redirect(url.toString(), 301);
    }
    if (url.pathname === "/favicon.ico") {
      url.pathname = "/favicon.svg";
      return env.ASSETS.fetch(new Request(url, request));
    }
    if (url.pathname === "/corrections") {
      url.pathname = "/corrections.html";
      return env.ASSETS.fetch(new Request(url, request));
    }
    return env.ASSETS.fetch(request);
  },
};
