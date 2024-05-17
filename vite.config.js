import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";
import vue from "@vitejs/plugin-vue";
import svgLoader from "vite-svg-loader";
import path from "path";

export default defineConfig({
    resolve: {
        alias: {
            "@svg": path.resolve(__dirname, "./resources/svg"),
            "@": path.resolve(__dirname, "./resources/js"),
            'ziggy-js': path.resolve('vendor/tightenco/ziggy'),
        },
    },
    test: {
        globals: true,
        // environment: "jsdom",
        environment: "happy-dom",
        setupFiles: ['./vitestSetupFile.ts'],
    },
    plugins: [
        laravel({
            input: "resources/js/app.ts",
            refresh: true,
        }),
        vue({
            template: {
                transformAssetUrls: {
                    base: null,
                    includeAbsolute: false,
                },
            },
        }),
        svgLoader(),
    ],
});
