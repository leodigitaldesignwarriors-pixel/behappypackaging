import fs from "fs";
import path from "path";

/**
 * Appends the source file's modification time as a query string so replacing
 * an image under public/ always busts any browser/proxy cache for that URL.
 * Server-only (uses fs) — call from server components, never client ones.
 */
export function cacheBustedSrc(publicPath: string): string {
  try {
    const filePath = path.join(process.cwd(), "public", publicPath);
    const stat = fs.statSync(filePath);
    return `${publicPath}?v=${Math.floor(stat.mtimeMs)}`;
  } catch {
    return publicPath;
  }
}
