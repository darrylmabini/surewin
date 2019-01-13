declare module "page";
declare module "axios";
declare module "*.handlebars";

declare module "*.json" {
    const data: any;
    export default data;
}