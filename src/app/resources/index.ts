// import a pre-defined template for config and content options
export {
  routes,
  protectedRoutes,
  effects,
  style,
  display,
  mailchimp,
  baseURL,
  font,
} from "@/app/resources/config";
export {
  person,
  social,
  home,
  about,
  blog,
  work,
  gallery,
} from "@/app/resources/content";

declare global {
  interface Window {
    fbq?: (...args: any[]) => void;
  }
}