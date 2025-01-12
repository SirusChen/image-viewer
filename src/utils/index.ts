import { SizeKey } from "./const";
import type { Media } from "./typing";

export function getURL(media: Media, size: SizeKey = SizeKey.Small): string {
  return `${media.media_url_https}?name=${size}`
}
