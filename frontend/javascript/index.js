import "$styles/index.css";

// Example Shoelace components. Mix 'n' match however you like!
import '@shoelace-style/shoelace/dist/components/breadcrumb/breadcrumb.js';
import '@shoelace-style/shoelace/dist/components/breadcrumb-item/breadcrumb-item.js';
import "@shoelace-style/shoelace/dist/components/button/button.js"
import '@shoelace-style/shoelace/dist/components/card/card.js';
import "@shoelace-style/shoelace/dist/components/icon/icon.js"
import '@shoelace-style/shoelace/dist/components/icon-button/icon-button.js';

// Use the public icons folder:
import { setBasePath } from "@shoelace-style/shoelace/dist/utilities/base-path.js"
setBasePath("/shoelace-assets")

// Import all JavaScript & CSS files from src/_components
import components from "$components/**/*.{js,jsx,js.rb,css}";
import "./external_links";
// import "./menu_toggle.js";
import "@justinribeiro/lite-youtube";

console.info("Bridgetown is loaded!");
