// vite.config.js
import { defineConfig } from "file:///C:/projects/crm-administrator/node_modules/vite/dist/node/index.js";
import laravel from "file:///C:/projects/crm-administrator/node_modules/laravel-vite-plugin/dist/index.js";
import vue from "file:///C:/projects/crm-administrator/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import svgLoader from "file:///C:/projects/crm-administrator/node_modules/vite-svg-loader/index.js";
import path from "path";
var __vite_injected_original_dirname = "C:\\projects\\crm-administrator";
var vite_config_default = defineConfig({
  resolve: {
    alias: {
      "@svg": path.resolve(__vite_injected_original_dirname, "./resources/svg"),
      "@": path.resolve(__vite_injected_original_dirname, "./resources/js"),
      "ziggy-js": path.resolve("vendor/tightenco/ziggy")
    }
  },
  test: {
    globals: true,
    // environment: "jsdom",
    environment: "happy-dom",
    setupFiles: ["./vitestSetupFile.js"]
  },
  plugins: [
    laravel({
      input: "resources/js/app.ts",
      refresh: true
    }),
    vue({
      template: {
        transformAssetUrls: {
          base: null,
          includeAbsolute: false
        }
      }
    }),
    svgLoader()
  ]
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxwcm9qZWN0c1xcXFxjcm0tYWRtaW5pc3RyYXRvclwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxccHJvamVjdHNcXFxcY3JtLWFkbWluaXN0cmF0b3JcXFxcdml0ZS5jb25maWcuanNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L3Byb2plY3RzL2NybS1hZG1pbmlzdHJhdG9yL3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSBcInZpdGVcIjtcbmltcG9ydCBsYXJhdmVsIGZyb20gXCJsYXJhdmVsLXZpdGUtcGx1Z2luXCI7XG5pbXBvcnQgdnVlIGZyb20gXCJAdml0ZWpzL3BsdWdpbi12dWVcIjtcbmltcG9ydCBzdmdMb2FkZXIgZnJvbSBcInZpdGUtc3ZnLWxvYWRlclwiO1xuaW1wb3J0IHBhdGggZnJvbSBcInBhdGhcIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgICByZXNvbHZlOiB7XG4gICAgICAgIGFsaWFzOiB7XG4gICAgICAgICAgICBcIkBzdmdcIjogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgXCIuL3Jlc291cmNlcy9zdmdcIiksXG4gICAgICAgICAgICBcIkBcIjogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgXCIuL3Jlc291cmNlcy9qc1wiKSxcbiAgICAgICAgICAgICd6aWdneS1qcyc6IHBhdGgucmVzb2x2ZSgndmVuZG9yL3RpZ2h0ZW5jby96aWdneScpLFxuICAgICAgICB9LFxuICAgIH0sXG4gICAgdGVzdDoge1xuICAgICAgICBnbG9iYWxzOiB0cnVlLFxuICAgICAgICAvLyBlbnZpcm9ubWVudDogXCJqc2RvbVwiLFxuICAgICAgICBlbnZpcm9ubWVudDogXCJoYXBweS1kb21cIixcbiAgICAgICAgc2V0dXBGaWxlczogWycuL3ZpdGVzdFNldHVwRmlsZS5qcyddLFxuICAgIH0sXG4gICAgcGx1Z2luczogW1xuICAgICAgICBsYXJhdmVsKHtcbiAgICAgICAgICAgIGlucHV0OiBcInJlc291cmNlcy9qcy9hcHAudHNcIixcbiAgICAgICAgICAgIHJlZnJlc2g6IHRydWUsXG4gICAgICAgIH0pLFxuICAgICAgICB2dWUoe1xuICAgICAgICAgICAgdGVtcGxhdGU6IHtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm1Bc3NldFVybHM6IHtcbiAgICAgICAgICAgICAgICAgICAgYmFzZTogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgaW5jbHVkZUFic29sdXRlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSksXG4gICAgICAgIHN2Z0xvYWRlcigpLFxuICAgIF0sXG59KTtcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBK1EsU0FBUyxvQkFBb0I7QUFDNVMsT0FBTyxhQUFhO0FBQ3BCLE9BQU8sU0FBUztBQUNoQixPQUFPLGVBQWU7QUFDdEIsT0FBTyxVQUFVO0FBSmpCLElBQU0sbUNBQW1DO0FBTXpDLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQ3hCLFNBQVM7QUFBQSxJQUNMLE9BQU87QUFBQSxNQUNILFFBQVEsS0FBSyxRQUFRLGtDQUFXLGlCQUFpQjtBQUFBLE1BQ2pELEtBQUssS0FBSyxRQUFRLGtDQUFXLGdCQUFnQjtBQUFBLE1BQzdDLFlBQVksS0FBSyxRQUFRLHdCQUF3QjtBQUFBLElBQ3JEO0FBQUEsRUFDSjtBQUFBLEVBQ0EsTUFBTTtBQUFBLElBQ0YsU0FBUztBQUFBO0FBQUEsSUFFVCxhQUFhO0FBQUEsSUFDYixZQUFZLENBQUMsc0JBQXNCO0FBQUEsRUFDdkM7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNMLFFBQVE7QUFBQSxNQUNKLE9BQU87QUFBQSxNQUNQLFNBQVM7QUFBQSxJQUNiLENBQUM7QUFBQSxJQUNELElBQUk7QUFBQSxNQUNBLFVBQVU7QUFBQSxRQUNOLG9CQUFvQjtBQUFBLFVBQ2hCLE1BQU07QUFBQSxVQUNOLGlCQUFpQjtBQUFBLFFBQ3JCO0FBQUEsTUFDSjtBQUFBLElBQ0osQ0FBQztBQUFBLElBQ0QsVUFBVTtBQUFBLEVBQ2Q7QUFDSixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
