import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig, loadEnv } from "vite";

export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  return {
    define: {
      "process.env.REACT_APP_SUPABASE_URL": JSON.stringify(
        env.REACT_APP_SUPABASE_URL
      ),
      "process.env.REACT_APP_ANON_KEY": JSON.stringify(env.REACT_APP_ANON_KEY),
      "process.env.DATABASE": JSON.stringify(env.DATABASE),
    },
    plugins: [react()],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  };
});
