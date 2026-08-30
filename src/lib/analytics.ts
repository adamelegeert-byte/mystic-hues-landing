declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

/**
 * Pousse un événement dans la dataLayer de Google Tag Manager.
 *
 * Le tableau est créé s'il n'existe pas encore : GTM peut être bloqué par un
 * bloqueur de publicités ou tarder à se charger, et l'application ne doit
 * jamais planter pour autant.
 */
export function pousserEvenement(
  event: string,
  donnees: Record<string, unknown> = {},
) {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event, ...donnees });
}
