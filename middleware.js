export { default } from "next-auth/middleware";

export const config = {
  matcher: ["/dashboard"], // all the page to be protected
};
