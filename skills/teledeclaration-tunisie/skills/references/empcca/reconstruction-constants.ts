// Constantes pour la Déclaration d'Employeur Tunisie
// Supporte les 3 versions du Cahier des Charges (v2022, v2023, v2025)

import { AnnexeNumber, CahierVersion } from './types';

// --- Record lengths (OBLIGATOIRE — identiques toutes versions) ---
export const DECEMP_RECORD_LENGTH = 38;
export const ANNEXE_RECORD_LENGTH = 399;

// --- Nombre total d'enregistrements DECEMP par version ---
export function getDecempTotalRecords(version: CahierVersion): number {
  switch (version) {
    case 'v2022': return 49; // 1 header + 47 data + 1 footer
    case 'v2023': return 50; // 1 header + 48 data + 1 footer
    case 'v2025': return 51; // 1 header + 49 data + 1 footer
  }
}

// --- Table complète des enregistrements récapitulatifs DECEMP ---
export interface DecempLineConfig {
  index: number;
  code: string;        // 3 car. code type (zone obligatoire position 1-3)
  description: string;
  taux: string;        // 5 car. (999V99) — zone obligatoire position 19-23
  isSpecial?: boolean; // DECEMP03 (CSS): assiette = zone réservée
  minVersion?: CahierVersion; // Première version qui inclut ce code
}

/**
 * Lignes DECEMP partie 1 (indices 1-38) : communes à toutes les versions
 * Ordre conforme au Cahier des Charges v2025 (DECEMP01 à DECEMP38)
 */
const DECEMP_LINES_PART1: DecempLineConfig[] = [
  // DECEMP01-03 : Annexe I
  { index: 1,  code: '010', description: 'Salaires, pensions, rentes viagères — régime commun', taux: '00000' },
  { index: 2,  code: '170', description: 'Salaires payés aux étrangers', taux: '02000' },
  { index: 3,  code: '300', description: 'Contribution sociale solidarité (CSS)', taux: '00000', isSpecial: true },
  // DECEMP04-12 : Annexe II
  { index: 4,  code: '021', description: 'Commissions/courtages/loyers/rém. act. non commerciales PP résidentes', taux: '01000' },
  { index: 5,  code: '022', description: 'Commissions/courtages/loyers/rém. act. non commerciales PM résidentes', taux: '01000' },
  { index: 6,  code: '023', description: 'Commissions/courtages/loyers PP non domiciliées', taux: '01500' },
  { index: 7,  code: '024', description: 'Commissions/courtages/loyers PM non domiciliées', taux: '01500' },
  { index: 8,  code: '027', description: 'Honoraires PP non soumises régime réel', taux: '01000' },
  { index: 9,  code: '030', description: 'Honoraires PM soumises IS / PP régime réel', taux: '00300' },
  { index: 10, code: '400', description: 'Rémunérations artistes/créateurs', taux: '00500' },
  { index: 11, code: '040', description: 'Loyers hôtels PM soumises IS / PP régime réel', taux: '00500' },
  { index: 12, code: '260', description: 'Rémunérations performance/prestation services', taux: '01000' },
  // DECEMP13-17 : Annexe III (intérêts / capitaux mobiliers)
  { index: 13, code: '060', description: 'Intérêts comptes épargne banques/CENT + prêts budgétaires', taux: '02000' },
  { index: 14, code: '071', description: 'Revenus capitaux mobiliers PP résidents', taux: '02000' },
  { index: 15, code: '072', description: 'Revenus capitaux mobiliers PM résidents', taux: '02000' },
  { index: 16, code: '073', description: 'Revenus capitaux mobiliers PP non résidents', taux: '02000' },
  { index: 17, code: '074', description: 'Revenus capitaux mobiliers PM non résidents', taux: '02000' },
  // DECEMP18-23 : Actions/parts sociales + membres conseils
  { index: 18, code: '241', description: 'Actions/parts sociales PP résidentes', taux: '01000' },
  { index: 19, code: '242', description: 'Actions/parts sociales PP et PM non résidentes', taux: '01000' },
  { index: 20, code: '091', description: 'Rémunérations/primes membres conseils PP résidentes', taux: '02000' },
  { index: 21, code: '092', description: 'Rémunérations/primes membres conseils PM résidentes', taux: '02000' },
  { index: 22, code: '093', description: 'Rémunérations/primes membres conseils PP non résidentes', taux: '02000' },
  { index: 23, code: '094', description: 'Rémunérations/primes membres conseils PM non résidentes', taux: '02000' },
  // DECEMP24-25 : Travail occasionnel + intérêts prêts
  { index: 24, code: '100', description: 'Rémunérations travail occasionnel/accidentel', taux: '01500' },
  { index: 25, code: '110', description: 'Intérêts prêts banques non établies en Tunisie', taux: '01000' },
  // DECEMP26-28 : Plus-value immobilière
  { index: 26, code: '121', description: 'Plus-value immobilière résidents et établis', taux: '00250' },
  { index: 27, code: '122', description: 'Plus-value immobilière PP non résidentes', taux: '00250' },
  { index: 28, code: '123', description: 'Plus-value immobilière PM non établies', taux: '01500' },
  // DECEMP29-33 : Annexe V — Acquisitions ≥ 1000 DT
  { index: 29, code: '132', description: 'Acquisitions ≥ 1000 DT — entreprises IS 20%', taux: '00100' },
  { index: 30, code: '133', description: 'Acquisitions ≥ 1000 DT — entreprises IS 10%', taux: '00050' },
  { index: 31, code: '134', description: 'Acquisitions ≥ 1000 DT — unipersonnelles (déduction 2/3)', taux: '00050' },
  { index: 32, code: '135', description: 'Acquisitions ≥ 1000 DT — autres entreprises', taux: '00150' },
  { index: 33, code: '140', description: 'Retenue ≥ 1000 DT État/collectivités/entreprises publics', taux: '02500' },
  // DECEMP34-37 : Non-résidents / TVA / construction
  { index: 34, code: '150', description: 'Retenue TVA non établis en Tunisie', taux: '10000' },
  { index: 35, code: '160', description: 'Non-résidents construction/montage ≤ 6 mois', taux: '00000' },
  { index: 36, code: '270', description: 'Non-résidents paradis fiscal sans dépôt déclaration existence', taux: '02500' },
  { index: 37, code: '271', description: 'Non-résidents autres étab. stables sans dépôt déclaration', taux: '01500' },
  // DECEMP38 : Avance ventes forfaitaires
  { index: 38, code: '200', description: 'Avance ventes forfaitaires PP régime forfaitaire', taux: '00100' },
];

/**
 * Lignes DECEMP partie 2 (après insertion éventuelle du code 500)
 * Communes à toutes les versions — Ordre conforme au Cahier des Charges v2025
 */
const DECEMP_LINES_PART2: DecempLineConfig[] = [
  // DECEMP40+ : PV cession actions, autres rém., paradis fiscaux, télécom, jeux, distribution
  { index: 39, code: '191', description: 'Plus-value cession actions PP non résidentes', taux: '01000' },
  { index: 40, code: '192', description: 'Plus-value cession actions PM non résidentes', taux: '02000' },
  { index: 41, code: '051', description: 'Autres rémunérations PP non établies', taux: '01500' },
  { index: 42, code: '052', description: 'Autres rémunérations PM non établies', taux: '01500' },
  { index: 43, code: '220', description: 'Rémunérations/revenus paradis fiscaux', taux: '02500' },
  { index: 44, code: '250', description: 'Commissions distributeurs télécom PP', taux: '00150' },
  { index: 45, code: '251', description: 'Commissions distributeurs télécom PM', taux: '00100' },
  { index: 46, code: '280', description: 'Revenus jeux de pari/hasard/loterie', taux: '02500' },
  { index: 47, code: '290', description: 'Impôt ventes distribution ≤ 20 000 DT/an', taux: '00300' },
];

/** Ligne supplémentaire v2023+ : code 500 — insérée entre part1 et part2 (DECEMP39) */
const DECEMP_LINE_500: DecempLineConfig = {
  index: 39, code: '500', description: 'Avance ventes fabricants/embouteilleurs vin/bière/alcool', taux: '00500', minVersion: 'v2023',
};

/** Ligne supplémentaire v2025+ : code 600 — ajoutée en fin (DECEMP49) */
const DECEMP_LINE_600: DecempLineConfig = {
  index: 49, code: '600', description: 'Prestataires services livraison (retenue 3%)', taux: '00300', minVersion: 'v2025',
};

/**
 * Retourne les lignes DECEMP pour la version donnée.
 * L'ordre respecte strictement le Cahier des Charges :
 *   v2022: Part1(38) + Part2(9) = 47 lignes
 *   v2023: Part1(38) + 500 + Part2(9) = 48 lignes
 *   v2025: Part1(38) + 500 + Part2(9) + 600 = 49 lignes
 */
export function getDecempLines(version: CahierVersion): DecempLineConfig[] {
  const lines: DecempLineConfig[] = [...DECEMP_LINES_PART1];

  // v2023+ : insérer code 500 entre part1 et part2
  if (version === 'v2023' || version === 'v2025') {
    lines.push({ ...DECEMP_LINE_500 });
  }

  // Part2 : codes 191-290 (communs à toutes les versions)
  lines.push(...DECEMP_LINES_PART2);

  // v2025+ : ajouter code 600 en fin
  if (version === 'v2025') {
    lines.push({ ...DECEMP_LINE_600 });
  }

  // Réindexer séquentiellement
  return lines.map((l, i) => ({ ...l, index: i + 1 }));
}

// Backward compat: default v2025 lines
export const DECEMP_LINES = getDecempLines('v2025');

// --- Codes type montants payés pour autrui (Annexe VII) ---
// v2022: codes 01-27, v2023: codes 01-28, v2025: codes 01-29
export const CODES_TYPE_MONTANTS_PAYES: Record<string, string> = {
  '01': 'Traitements, salaires, pensions et rentes viagères',
  '02': 'Honoraires',
  '03': 'Commissions',
  '04': 'Courtages',
  '05': 'Loyers',
  '06': 'Rémunérations des activités non commerciales',
  '07': 'Honoraires PM et PP régime réel',
  '08': 'Rémunérations artistes/créateurs',
  '15': 'Intérêts comptes épargne banques/CENT',
  '16': 'Intérêts prêts banques non établies en Tunisie',
  '17': 'Revenus des autres capitaux mobiliers',
  '19': 'Honoraires non-résidents construction/montage ≤ 6 mois',
  '20': 'Revenus valeurs mobilières / jetons / rém. conseils non résidents',
  '21': 'Rémunérations paradis fiscaux',
  '22': 'Retenues acquisitions ≥ 1000 DT (toutes catégories IS)',
  '23': 'Retenues ≥ 1000 DT autres opérations',
  '24': 'Retenues TVA ≥ 1000 DT établissements/entreprises publics',
  '25': 'Retenues TVA non établis en Tunisie',
  '26': 'Redevance caisse générale compensation',
  '27': 'Honoraires PP non soumises régime réel',
  '28': 'Avance ventes fabricants/embouteilleurs vin/bière/alcool', // v2023+
  '29': 'Prestataires services livraison (retenue 3%)', // v2025+
};

/** Retourne les codes type Annexe VII valides pour la version */
export function getCodesTypeMontantsPayes(version: CahierVersion): Record<string, string> {
  const codes = { ...CODES_TYPE_MONTANTS_PAYES };
  if (version === 'v2022') {
    delete codes['28'];
    delete codes['29'];
  } else if (version === 'v2023') {
    delete codes['29'];
  }
  return codes;
}

// --- Nature identifiant autorisée par annexe ---
export const NATURE_IDENTIFIANT_PAR_ANNEXE: Record<AnnexeNumber, number[]> = {
  1: [2, 3],        // CIN ou carte séjour uniquement
  2: [1, 2],        // MF ou CIN uniquement
  3: [1, 2, 3, 4],  // Toutes natures
  4: [3, 4],         // Carte séjour ou non domicilié uniquement
  5: [1, 2, 3, 4],  // Toutes natures
  6: [1, 2, 3, 4],  // Toutes natures
  7: [1, 2, 3, 4],  // Toutes natures
};

// --- Mapping des noms d'annexe pour les fichiers ---
export const ANNEXE_FILE_PREFIX = 'ANXEMP_';
export const DECEMP_FILE_PREFIX = 'DECEMP_';

// --- Annexe labels ---
export const ANNEXE_LABELS: Record<AnnexeNumber, string> = {
  1: 'Annexe I — Traitements, salaires, pensions et rentes viagères',
  2: 'Annexe II — Honoraires, commissions, courtages, loyers',
  3: 'Annexe III — Revenus des capitaux mobiliers',
  4: 'Annexe IV — Montants servis aux non-résidents',
  5: 'Annexe V — Autres montants (acquisitions ≥ 1000 DT)',
  6: 'Annexe VI — Ristournes, jeux, ventes forfaitaires',
  7: 'Annexe VII — Montants payés pour autrui',
};

// --- Détection rules ---
export interface DetectionRule {
  keywords: string[];
  requiredColumns: string[];
  description: string;
}

export const DETECTION_RULES: Record<string, DetectionRule> = {
  annexe1: {
    keywords: ['salaire', 'traitement', 'pension', 'rente viagere', 'cnss', 'brut', 'net imposable', 'retenue', 'css', 'situation familiale', 'enfant', 'avantages nature'],
    requiredColumns: ['identifiant', 'nom', 'brut', 'retenue'],
    description: 'Traitements, salaires, pensions et rentes viagères',
  },
  annexe2: {
    keywords: ['honoraire', 'commission', 'courtage', 'loyer', 'occasionnel', 'accidentel', 'non salarie', 'artiste', 'createur', 'hotel', 'plus-value immobiliere', 'performance', 'prestation', 'regime reel', 'conseil'],
    requiredColumns: ['identifiant', 'nom', 'montant'],
    description: 'Honoraires, commissions, courtages, loyers (résidents)',
  },
  annexe3: {
    keywords: ['capitaux mobiliers', 'interet', 'epargne', 'pret', 'dividende'],
    requiredColumns: ['identifiant', 'nom', 'montant'],
    description: 'Revenus des capitaux mobiliers',
  },
  annexe4: {
    keywords: ['non resident', 'non etabli', 'etranger', 'redevance', 'non domicilie', 'paradis fiscal'],
    requiredColumns: ['identifiant', 'nom', 'montant'],
    description: 'Montants servis aux non-résidents',
  },
  annexe5: {
    keywords: ['acquisition', 'marchandise', 'materiel', 'equipement', '1000', 'fournisseur', 'achat', 'livraison'],
    requiredColumns: ['identifiant', 'nom', 'montant'],
    description: 'Autres montants (acquisitions ≥ 1000 DT)',
  },
  annexe6: {
    keywords: ['ristourne', 'forfaitaire', 'jeu', 'pari', 'hasard', 'loterie', 'distribution', 'espece', 'alcool', 'vin', 'biere'],
    requiredColumns: ['identifiant', 'nom', 'montant'],
    description: 'Ristournes, jeux, ventes forfaitaires',
  },
  annexe7: {
    keywords: ['pour autrui', 'paye pour', 'compte de', 'mandataire'],
    requiredColumns: ['identifiant', 'nom', 'type montant', 'montant paye'],
    description: 'Montants payés pour autrui',
  },
};

// Column mapping per annexe for Excel parsing
export const ANNEXE_COLUMN_MAPPING: Record<AnnexeNumber, Record<string, string[]>> = {
  1: {
    natureIdentifiant: ['nature identifiant', 'type id', 'nature id', 'type identifiant'],
    identifiant: ['identifiant', 'matricule', 'cin', 'id beneficiaire', 'mat fiscal'],
    nom: ['nom', 'nom prenom', 'raison sociale', 'beneficiaire', 'nom et prenom'],
    activite: ['activite', 'profession', 'emploi', 'emploi occupe', 'qualification'],
    adresse: ['adresse', 'derniere adresse'],
    situationFamiliale: ['situation familiale', 'sit', 'sit fam', 'situation', 'etat civil'],
    nombreEnfantsCharge: ['enfants charge', 'nb enfants', 'nombre enfants', 'enf'],
    dateDebut: ['date debut', 'debut periode', 'date embauche'],
    dateFin: ['date fin', 'fin periode', 'date depart'],
    dureePeriodeJours: ['duree', 'nombre jours', 'jours'],
    revenuImposable: ['revenu imposable', 'imposable', 'rev imposable'],
    avantagesNature: ['avantages nature', 'avantages en nature', 'nature'],
    revenuBrutImposable: ['revenu brut', 'brut imposable', 'total brut', 'brut'],
    revenuReinvesti: ['revenu reinvesti', 'reinvesti'],
    retenuesRegimeCommun: ['retenue', 'retenues operees', 'retenue source', 'irpp', 'retenue regime commun'],
    retenuesEtrangers: ['retenue etranger', 'retenues etrangers'],
    css: ['retenue css', 'css', 'contribution sociale'],
    montantNetServi: ['montant net servi', 'net servi', 'net'],
  },
  2: {
    natureIdentifiant: ['nature identifiant', 'type id', 'nature id'],
    identifiant: ['identifiant', 'matricule', 'cin', 'id beneficiaire'],
    nom: ['nom', 'nom prenom', 'raison sociale', 'beneficiaire'],
    activite: ['activite', 'profession'],
    adresse: ['adresse', 'derniere adresse'],
    typeMontant: ['type montant', 'type', 'categorie montant'],
    montantBrut: ['montant brut', 'brut', 'honoraires', 'commissions'],
    honorairesRegimeReel: ['honoraires regime reel', 'regime reel'],
    remunerationsConseils: ['remunerations conseils', 'conseils', 'actions parts'],
    remunerationsOccasionnelles: ['occasionnel', 'accidentel', 'travail occasionnel'],
    plusValueImmobiliere: ['plus value immobiliere', 'plus value immo'],
    loyersHotels: ['loyers hotels', 'hotels'],
    remunerationsArtistes: ['artistes', 'createurs'],
    retenueTVA: ['retenue tva', 'tva'],
    montantRetenuesOperees: ['retenues operees', 'retenue', 'retenue source'],
    montantNetServi: ['net servi', 'net', 'montant net'],
  },
  3: {
    natureIdentifiant: ['nature identifiant', 'type id'],
    identifiant: ['identifiant', 'matricule', 'cin'],
    nom: ['nom', 'nom prenom', 'raison sociale'],
    activite: ['activite'],
    adresse: ['adresse'],
    interetsEpargne: ['interets epargne', 'epargne', 'comptes speciaux'],
    interetsCapitauxMobiliers: ['capitaux mobiliers', 'autres capitaux', 'interets capitaux'],
    interetsPrets: ['interets prets', 'prets bancaires'],
    montantRetenuesOperees: ['retenues operees', 'retenue'],
    montantNetServi: ['net servi', 'net'],
  },
  4: {
    natureIdentifiant: ['nature identifiant', 'type id'],
    identifiant: ['identifiant', 'matricule'],
    nom: ['nom', 'nom prenom', 'raison sociale'],
    activite: ['activite'],
    adresse: ['adresse'],
    typeMontant: ['type montant', 'type', 'categorie'],
    tauxHonorairesCommissions: ['taux honoraires', 'taux commissions'],
    montantHonorairesCommissions: ['montant honoraires', 'honoraires', 'commissions'],
    tauxConstruction: ['taux construction', 'taux montage'],
    montantConstruction: ['montant construction', 'construction'],
    tauxPVImmobiliere: ['taux plus value immo', 'taux pv immo'],
    montantPVImmobiliere: ['plus value immobiliere', 'pv immo'],
    tauxPVCessionActions: ['taux cession actions', 'taux pv actions'],
    montantPVCessionActions: ['cession actions', 'pv actions'],
    tauxRevenusValeursMobilieres: ['taux valeurs mobilieres', 'taux revenus mob'],
    montantRevenusValeursMobilieres: ['valeurs mobilieres', 'revenus mobilieres'],
    montantParadisFiscaux: ['paradis fiscaux', 'regime privilegie'],
    retenueTVANonEtablis: ['retenue tva', 'tva non etablis'],
    montantRetenuesOperees: ['retenues operees', 'retenue'],
    montantNetServi: ['net servi', 'net'],
  },
  5: {
    natureIdentifiant: ['nature identifiant', 'type id'],
    identifiant: ['identifiant', 'matricule', 'cin'],
    nom: ['nom', 'nom prenom', 'raison sociale'],
    activite: ['activite'],
    adresse: ['adresse'],
    montantAcquisitionsIS10: ['is 10', 'acquisitions is 10', 'societes is 10'],
    montantAcquisitionsIS15: ['is 15', 'is 20', 'acquisitions is 15', 'acquisitions is 20', 'societes is 15', 'societes is 20'],
    montantAcquisitionsUnipersonnelles: ['unipersonnelle', 'deduction deux tiers'],
    montantAcquisitionsAutres: ['autres entreprises', 'autres acquisitions'],
    retenueTVAAcquisitions: ['retenue tva', 'tva acquisitions'],
    retenue3PctLivraison: ['livraison', 'retenue 3', 'prestataires livraison'],
    montantRetenuesOperees: ['retenues operees', 'retenue'],
    montantNetServi: ['net servi', 'net'],
  },
  6: {
    natureIdentifiant: ['nature identifiant', 'type id'],
    identifiant: ['identifiant', 'matricule', 'cin'],
    nom: ['nom', 'nom prenom', 'raison sociale'],
    activite: ['activite'],
    adresse: ['adresse'],
    typeRistournes: ['type ristournes', 'type'],
    montantRistournes: ['ristournes', 'montant ristournes'],
    montantVentesForfaitaires: ['ventes forfaitaires', 'forfaitaire'],
    montantAvanceVentesForfaitaires: ['avance forfaitaire', 'avance ventes'],
    montantRevenusJeux: ['revenus jeux', 'jeux', 'pari', 'hasard', 'loterie'],
    retenueSourceJeux: ['retenue jeux', 'retenue source jeux'],
    montantVentesDistribution: ['ventes distribution', 'distribution'],
    retenueSourceVentesDistribution: ['retenue distribution', 'retenue ventes distribution'],
    montantsPercusEspeces: ['especes', 'percus especes'],
    montantVentesAlcool: ['ventes alcool', 'vin', 'biere', 'boissons alcoolisees'],
    montantAvanceVentesAlcool: ['avance alcool', 'avance vin'],
  },
  7: {
    natureIdentifiant: ['nature identifiant', 'type id'],
    identifiant: ['identifiant', 'matricule', 'cin'],
    nom: ['nom', 'nom prenom', 'raison sociale'],
    activite: ['activite'],
    adresse: ['adresse'],
    typeMontantsPayes: ['type montant', 'type', 'code type'],
    montantsPayes: ['montant paye', 'montants payes', 'montant'],
    retenueSource: ['retenue', 'retenue source'],
    montantNetServi: ['net servi', 'net'],
  },
};
