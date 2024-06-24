/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_STOCK_INFORMATION_API_BASE_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
