// This server is only used to load the dev server build
const viteDevServer =
  process.env.NODE_ENV === 'production'
    ? undefined
    : await import('vite').then((vite) =>
        vite.createServer({
          server: { middlewareMode: true },
          appType: 'custom',
        }),
      );

/**
 * Load the dev server build
 * @returns The server build
 */
export async function importDevBuild() {
  return viteDevServer?.ssrLoadModule('virtual:remix/server-build');
}
