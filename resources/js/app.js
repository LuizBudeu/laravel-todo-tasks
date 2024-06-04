import "./bootstrap";
import "../css/app.css";
// import "primevue/resources/themes/aura-light-green/theme.css";
import "primevue/resources/themes/mdc-dark-deeppurple/theme.css";

import { createApp, h } from "vue";
import { createInertiaApp } from "@inertiajs/vue3";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";
import { ZiggyVue } from "../../vendor/tightenco/ziggy";

import PrimeVue from "primevue/config";
import InputText from "primevue/inputtext";
import Textarea from "primevue/textarea";
import Dropdown from "primevue/dropdown";
import Toast from "primevue/toast";
import ToastService from "primevue/toastservice";

const appName = import.meta.env.VITE_APP_NAME || "Laravel";

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) =>
        resolvePageComponent(
            `./Pages/${name}.vue`,
            import.meta.glob("./Pages/**/*.vue")
        ),
    setup({ el, App, props, plugin }) {
        return createApp({ render: () => h(App, props) })
            .use(plugin)
            .use(ZiggyVue, Ziggy)
            .use(PrimeVue)
            .use(ToastService)
            .component("InputText", InputText)
            .component("Textarea", Textarea)
            .component("Dropdown", Dropdown)
            .component("Toast", Toast)
            .mount(el);
    },
    progress: {
        color: "#4B5563",
    },
});

// createInertiaApp({
//     title: (title) => `${title} - ${appName}`,
//     resolve: (name) => resolvePageComponent(`./Pages/${name}.vue`, import.meta.glob('./Pages/**/*.vue')),
//     setup({ el, App, props, plugin }) {
//         return createApp({ render: () => h(App, props) })
//             .use(plugin)
//             .use(ZiggyVue, Ziggy)
//             .use(PrimeVue)
//             .use(ToastService)
//             .component('InputText', InputText)
//             .component('Textarea', Textarea)
//             .component('Dropdown', Dropdown)
//             .component('Toast', Toast)
//             .mount(el);
//     },
//     progress: {
//         color: '#4B5563',
//     },
// });
