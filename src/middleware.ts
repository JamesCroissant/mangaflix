export { default } from "next-auth/middleware";

export const config = {
  matcher: [
    "/favorites",
    "/profile",
    '/posts/:path*'
  ],
};