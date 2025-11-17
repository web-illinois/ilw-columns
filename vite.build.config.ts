import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
    root: "src",
    build: {
        outDir: "../dist/cdn",
        lib: {
            name: "ilw-columns",
            entry: "ilw-columns.ts",
            fileName: "ilw-columns",
            formats: ["es"],
        },
        rollupOptions: {
            output: {
                assetFileNames: () => {
                    return "[name][extname]";
                }
            },
        },
    },
    server: {
        hmr: false,
    },
});
