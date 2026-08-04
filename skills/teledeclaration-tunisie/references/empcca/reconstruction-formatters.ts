// Fonctions de formatage pour la Déclaration d'Employeur
// Conforme au Cahier des Charges v2025 — Notices explicatives

/**
 * Formater un champ numérique (cadré à droite, complété par des zéros à gauche)
 * Les montants sont tous ≥ 0, aucun signe (+ ou -), aucun séparateur.
 */
export function formatNumeric(value: number | string, length: number): string {
  const str = String(value).replace(/[^0-9]/g, '');
  return str.padStart(length, '0').slice(-length);
}

/**
 * Formater un champ alphanumérique (cadré à gauche, complété par des espaces à droite)
 * Convertit en MAJUSCULES et supprime les accents (ASCII pur).
 * Conforme à la notice: "Codage ASCII, type séquentiel, non compressés"
 */
export function formatAlpha(value: string, length: number): string {
  const ascii = removeAccents(value).toUpperCase();
  return ascii.padEnd(length, ' ').slice(0, length);
}

/**
 * Formater un champ alphanumérique en préservant la casse originale.
 * Utilisé pour les zones qui acceptent la casse mixte (ex: type document "An1").
 */
export function formatAlphaPreserveCase(value: string, length: number): string {
  const ascii = removeAccents(value);
  return ascii.padEnd(length, ' ').slice(0, length);
}

/**
 * Supprimer les accents et convertir en ASCII pur
 */
export function removeAccents(str: string): string {
  return str
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^\x00-\x7F]/g, ' ');
}

/**
 * Convertir un montant en dinars vers des millimes (entier)
 * Les montants sont tous exprimés en millimes.
 */
export function toMillimes(montantDinars: number): number {
  return Math.round(montantDinars * 1000);
}

/**
 * Formater un taux (format 999V99 — 5 positions)
 * "Les taux sont exprimés par deux positions décimales et trois positions entières"
 * Ex: 2.5% → 00250, 10% → 01000, 15% → 01500, 20% → 02000
 */
export function formatTaux(tauxPourcent: number): string {
  const value = Math.round(tauxPourcent * 100);
  return String(value).padStart(5, '0').slice(-5);
}

/**
 * Créer une zone réservée remplie d'espaces
 * "Toute zone non renseignée doit être initialisée par des espaces si alphanumérique"
 */
export function zoneReserveeAlpha(length: number): string {
  return ' '.repeat(length);
}

/**
 * Créer une zone réservée remplie de zéros
 * "Toute zone non renseignée doit être initialisée par des zéros si numérique"
 */
export function zoneReserveeNum(length: number): string {
  return '0'.repeat(length);
}

/**
 * Vérifier la longueur d'un enregistrement
 */
export function validateRecordLength(record: string, expectedLength: number): boolean {
  if (record.length !== expectedLength) {
    throw new Error(
      `Longueur enregistrement invalide: ${record.length} au lieu de ${expectedLength}`
    );
  }
  return true;
}

/**
 * Formater l'identifiant bénéficiaire (13 caractères)
 *
 * Nature 1 (MF): 7 chiffres + 1 clé + 1 catégorie(≠E) + 1 code TVA + 3 étab(=000) = 13
 * Nature 2 (CIN): 8 chiffres numériques cadrés gauche + 5 espaces = 13
 * Nature 3 (Carte séjour): idem CIN
 * Nature 4 (Non domicilié): idem CIN
 *
 * Format MF: NNNNNNN X X X NNN = 13
 * Format CIN: NNNNNNNN      = 8 + 5 espaces = 13
 */
export function formatIdentifiantBeneficiaire(
  nature: number,
  identifiant: string,
  cleMatricule?: string,
  categorieContribuable?: string,
  numEtablissement?: string
): string {
  if (nature === 1) {
    // Matricule fiscal: 7N + 1X(clé) + 1X(catégorie) + 1X(codeTVA) + 3N(étab)
    const mat = formatNumeric(identifiant.slice(0, 7), 7);
    const cle = (cleMatricule || identifiant.slice(7, 8) || ' ').toUpperCase().charAt(0);
    const cat = (categorieContribuable || identifiant.slice(8, 9) || ' ').toUpperCase().charAt(0);
    // Code TVA: extrait du matricule complet ou espace par défaut
    const codeTva = (identifiant.slice(9, 10) || ' ').toUpperCase().charAt(0);
    const etab = formatNumeric(numEtablissement || identifiant.slice(10, 13) || '000', 3);
    const result = mat + cle + cat + codeTva + etab;
    return result.padEnd(13, ' ').slice(0, 13);
  } else {
    // CIN, carte séjour, non domicilié: 8 chiffres + 5 espaces
    const id = identifiant.replace(/[^0-9]/g, '');
    const formatted = id.padStart(8, '0').slice(0, 8);
    return formatted + '     '; // 8 + 5 espaces = 13
  }
}

/**
 * Formater le nom du fichier récapitulatif
 * Format: DECEMP_AA (9 caractères)
 */
export function getDecempFileName(exercice: string): string {
  const aa = exercice.slice(-2);
  return `DECEMP_${aa}`;
}

/**
 * Formater le nom du fichier annexe
 * Format: ANXEMP_N_AA_P (13 caractères)
 */
export function getAnnexeFileName(annexeNum: number, exercice: string, partition: number = 1): string {
  const aa = exercice.slice(-2);
  return `ANXEMP_${annexeNum}_${aa}_${partition}`;
}

/**
 * Formater une date au format JJMMAAAA (8 chiffres)
 * Retourne 00000000 si vide
 */
export function formatDate(dateStr: string): string {
  if (!dateStr || dateStr.trim() === '') return '00000000';
  // Nettoyer et formater
  const clean = dateStr.replace(/[^0-9]/g, '');
  return clean.padStart(8, '0').slice(0, 8);
}

/**
 * Normaliser un en-tête de colonne pour la détection
 */
export function normalizeHeader(header: string): string {
  return removeAccents(header)
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}
