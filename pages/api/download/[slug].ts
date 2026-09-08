import type { NextApiRequest, NextApiResponse } from "next";
import { getResourceBySlug } from "@/data/resources";
import { incrementResourceDownload } from "@/lib/downloads";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "GET") {
    res.setHeader("Allow", "GET");
    return res.status(405).json({ message: "Método no permitido" });
  }

  const slug = Array.isArray(req.query.slug) ? req.query.slug[0] : req.query.slug;
  if (!slug) return res.status(400).json({ message: "Recurso no válido" });

  const resource = getResourceBySlug(slug);
  if (!resource) return res.status(404).json({ message: "Recurso no encontrado" });

  if (!resource.available || !resource.downloadUrl) {
    return res.status(404).json({ message: "Este recurso todavía no está disponible" });
  }

  let destination: URL;
  try {
    destination = new URL(resource.downloadUrl, "https://jorgezapata.es");
  } catch {
    return res.status(500).json({ message: "Destino de descarga mal configurado" });
  }

  if (destination.protocol !== "https:") {
    return res.status(500).json({ message: "Destino de descarga no permitido" });
  }

  try {
    await incrementResourceDownload(resource.slug);
  } catch (error) {
    console.error("Error incrementando descarga", error);
    res.setHeader("Retry-After", "30");
    return res.status(503).json({ message: "La descarga no está disponible temporalmente" });
  }

  res.setHeader("Cache-Control", "no-store");
  return res.redirect(302, destination.toString());
}
