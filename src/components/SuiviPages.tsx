import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { pousserEvenement } from "@/lib/analytics";

/**
 * Signale les changements de page à Google Tag Manager.
 *
 * Le site est une application monopage : passer de l'accueil à /contact ne
 * recharge rien, donc ni GTM ni le pixel Meta ne se déclenchent d'eux-mêmes.
 * Sans ce composant, une visite entière ne compte qu'une seule page vue.
 *
 * Le tout premier affichage est volontairement ignoré : le conteneur GTM se
 * déclenche déjà au chargement via son déclencheur "All Pages". Sans cette
 * garde, la page d'entrée serait comptée deux fois.
 */
const SuiviPages = () => {
  const { pathname } = useLocation();
  const premierAffichage = useRef(true);

  useEffect(() => {
    if (premierAffichage.current) {
      premierAffichage.current = false;
      return;
    }
    pousserEvenement("virtual_pageview", {
      page_path: pathname,
      page_title: document.title,
    });
  }, [pathname]);

  return null;
};

export default SuiviPages;
