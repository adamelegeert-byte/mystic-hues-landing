import { createClient } from "@supabase/supabase-js";

// La clé publiable est destinée à vivre dans le bundle envoyé au navigateur :
// elle n'est pas un secret. La sécurité repose entièrement sur les politiques
// RLS de la table. Sur `leads`, seule l'insertion est autorisée, aucune lecture.
const SUPABASE_URL = "https://qzckddomcodsnqbjlrcg.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_BcAMIeLT4SlLPdEWRjeQEw_CQj8GypN";

export const supabase = createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);

export type Lead = {
  name: string;
  email: string;
  company: string;
  phone: string;
  service: string;
  message: string;
};

/**
 * Enregistre une demande de contact.
 *
 * Ne jamais chaîner .select() ici : cela demanderait à PostgREST de renvoyer la
 * ligne insérée, ce qui exige un droit de lecture que la politique RLS refuse
 * volontairement. L'insertion échouerait alors avec une erreur trompeuse
 * ("new row violates row-level security policy").
 */
export async function enregistrerLead(lead: Lead) {
  return supabase.from("leads").insert(lead);
}
