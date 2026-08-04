// Générateurs des fichiers annexes I à VII — multi-version
// Chaque enregistrement annexe = 399 caractères exactement
// Conforme aux Cahiers des Charges v2022, v2023, v2025
//
// Structure commune ANXDEB (en-tête) : Type(2) + MF(7) + Clé(1) + Cat(1) + Étab(3) + Exercice(4) +
//   TypeDoc(3) + CodeActe(1) + NbBénéf(6) + Nom(40) + Activité(40) + Ville(40) + Rue(72) +
//   Numéro(4) + CodePostal(4) + ZoneRéservée(171) = 399
//
// Structure commune ANXFIN (pied) : Type(2) + MF(7) + Clé(1) + Cat(1) + Étab(3) + Exercice(4) +
//   NbBénéf(6) + fields totaux spécifiques + ZoneRéservée = 399

import {
  DeclarantInfo,
  BeneficiaireAnnexe1,
  BeneficiaireAnnexe2,
  BeneficiaireAnnexe3,
  BeneficiaireAnnexe4,
  BeneficiaireAnnexe5,
  BeneficiaireAnnexe6,
  BeneficiaireAnnexe7,
  CahierVersion,
  getCahierVersion,
} from '../types';
import { ANNEXE_RECORD_LENGTH } from '../constants';
import {
  formatNumeric,
  formatAlpha,
  formatAlphaPreserveCase,
  formatDate,
  formatIdentifiantBeneficiaire,
  toMillimes,
  zoneReserveeAlpha,
  zoneReserveeNum,
  validateRecordLength,
} from '../formatters';

// ===== PARTIE COMMUNE =====

/**
 * Générer l'identifiant déclarant commun (MF+Clé+Cat+Étab = 12 chars)
 */
function formatDeclarantId(d: DeclarantInfo): string {
  return (
    formatNumeric(d.matriculeFiscal, 7) +
    formatAlpha(d.cleMatricule, 1) +
    formatAlpha(d.categorieContribuable || ' ', 1) +
    formatNumeric(d.numEtablissement, 3)
  );
}

/**
 * Générer les champs communs bénéficiaire (Exercice+Ordre+TypeId+Id+Nom+Activité+Adresse = 224 chars)
 */
function formatBeneficiaireCommon(
  d: DeclarantInfo,
  ben: { numeroOrdre: number; natureIdentifiant: number; identifiant: string; nom: string; activite: string; adresse: string }
): string {
  return (
    formatAlpha(d.exercice, 4) +
    formatNumeric(ben.numeroOrdre, 6) +
    formatNumeric(ben.natureIdentifiant, 1) +
    formatIdentifiantBeneficiaire(ben.natureIdentifiant, ben.identifiant) +
    formatAlpha(ben.nom, 40) +
    formatAlpha(ben.activite, 40) +
    formatAlpha(ben.adresse, 120)
  );
}

/**
 * Générer un en-tête d'annexe ANXDEB00 (399 caractères)
 *
 * E100: Type enregistrement (2X) — OBLIGATOIRE, "E1"-"E7"
 * E101: Matricule fiscal (7N) — OBLIGATOIRE
 * E102: Clé (1X) — OBLIGATOIRE
 * E103: Catégorie (1X) — OBLIGATOIRE, ≠ E
 * E104: N° établissement (3N) — OBLIGATOIRE
 * E105: Exercice (4X) — OBLIGATOIRE
 * E106: Type de document (3X) — OBLIGATOIRE "An1"-"An7"
 * E107: Code acte (1N) — OBLIGATOIRE 0/1/2
 * E108: Nb bénéficiaires (6N) — OBLIGATOIRE
 * E109: Nom/raison sociale (40X)
 * E110: Activité (40X)
 * E111: Ville (40X)
 * E112: Rue (72X)
 * E113: Numéro (4X)
 * E114: Code postal (4X)
 * E115: Zone réservée (171X)
 */
function generateAnnexeHeader(
  annexeNum: number,
  declarant: DeclarantInfo,
  nbBeneficiaires: number
): string {
  let record = '';

  // E100: Type enregistrement
  record += formatAlpha(`E${annexeNum}`, 2);
  // E101-E104: Identifiant déclarant
  record += formatDeclarantId(declarant);
  // E105: Exercice
  record += formatAlpha(declarant.exercice, 4);
  // E106: Type de document (An1, An2, ..., An7)
  record += formatAlphaPreserveCase(`An${annexeNum}`, 3);
  // E107: Code acte
  record += formatNumeric(declarant.codeActe, 1);
  // E108: Nombre de bénéficiaires
  record += formatNumeric(nbBeneficiaires, 6);
  // E109: Nom ou raison sociale
  record += formatAlpha(declarant.nomOuRaisonSociale, 40);
  // E110: Activité
  record += formatAlpha(declarant.activite, 40);
  // E111: Ville
  record += formatAlpha(declarant.ville, 40);
  // E112: Rue
  record += formatAlpha(declarant.rue, 72);
  // E113: Numéro (type N — zéros à gauche)
  record += formatNumeric(declarant.numero, 4);
  // E114: Code postal (type N — zéros à gauche)
  record += formatNumeric(declarant.codePostal, 4);
  // E115: Zone réservée
  record += zoneReserveeAlpha(171);

  validateRecordLength(record, ANNEXE_RECORD_LENGTH);
  return record;
}

// ===== ANNEXE I : Traitements, salaires, pensions et rentes viagères =====

/**
 * ANXBEN01 (399 caractères)
 *
 * A100: Type "L1" (2X, OBLIGATOIRE)
 * A101-A104: Identifiant déclarant (12N/X, OBLIGATOIRE)
 * A105: Exercice (4X, OBLIGATOIRE)
 * A106: Numéro d'ordre (6N, OBLIGATOIRE)
 * A107: Type identifiant bénéficiaire (1N, OBLIGATOIRE: 2=CIN ou 3=carte séjour)
 * A108: Identifiant bénéficiaire (13X, OBLIGATOIRE)
 * A109: Nom et prénom (40X)
 * A110: Activité/emploi (40X)
 * A111: Adresse (120X)
 * A112: Situation familiale (1N) — 1=célib, 2=marié, 3=divorcé, 4=veuf
 * A113: Nombre enfants à charge (2N)
 * A114: Date début période (8N, JJMMAAAA) — non obligatoire
 * A115: Date fin période (8N, JJMMAAAA) — non obligatoire
 * A116: Durée période en jours (3N) — non obligatoire
 * A117: Revenu imposable (15N, millimes)
 * A118: Avantages en nature (15N, millimes)
 * A119: Total revenu brut imposable (15N, millimes)
 * A120: Revenu réinvesti (15N, millimes)
 * A121: Retenues régime commun (15N, millimes)
 * A122: Retenues salariés étrangers (15N, millimes)
 * A123: Contribution sociale solidarité — CSS (15N, millimes)
 * A124: Montant net servi (15N, millimes)
 * A125: Zone réservée (19X)
 */
function generateAnnexe1Record(d: DeclarantInfo, ben: BeneficiaireAnnexe1): string {
  let record = '';

  // A100: Type
  record += formatAlpha('L1', 2);
  // A101-A104: Identifiant déclarant
  record += formatDeclarantId(d);
  // A105-A111: Champs communs bénéficiaire
  record += formatBeneficiaireCommon(d, ben);
  // A112: Situation familiale
  record += formatNumeric(ben.situationFamiliale || 0, 1);
  // A113: Nombre enfants à charge
  record += formatNumeric(ben.nombreEnfantsCharge || 0, 2);
  // A114: Date début période (non obligatoire → 00000000 si vide)
  record += formatDate(ben.dateDebut || '');
  // A115: Date fin période (non obligatoire → 00000000 si vide)
  record += formatDate(ben.dateFin || '');
  // A116: Durée en jours (non obligatoire → 000 si vide)
  record += formatNumeric(ben.dureePeriodeJours || 0, 3);
  // A117: Revenu imposable
  record += formatNumeric(toMillimes(ben.revenuImposable || 0), 15);
  // A118: Avantages en nature
  record += formatNumeric(toMillimes(ben.avantagesNature || 0), 15);
  // A119: Total revenu brut imposable
  record += formatNumeric(toMillimes(ben.revenuBrutImposable || 0), 15);
  // A120: Revenu réinvesti
  record += formatNumeric(toMillimes(ben.revenuReinvesti || 0), 15);
  // A121: Retenues régime commun
  record += formatNumeric(toMillimes(ben.retenuesRegimeCommun || 0), 15);
  // A122: Retenues étrangers
  record += formatNumeric(toMillimes(ben.retenuesEtrangers || 0), 15);
  // A123: CSS
  record += formatNumeric(toMillimes(ben.css || 0), 15);
  // A124: Montant net servi
  record += formatNumeric(toMillimes(ben.montantNetServi || 0), 15);
  // A125: Zone réservée
  record += zoneReserveeAlpha(19);

  validateRecordLength(record, ANNEXE_RECORD_LENGTH);
  return record;
}

/**
 * ANXFIN01 (399 caractères) — Pied Annexe I
 * Même structure mais avec les totaux au lieu des données individuelles
 */
function generateAnnexe1Footer(d: DeclarantInfo, beneficiaires: BeneficiaireAnnexe1[]): string {
  let record = '';

  // Calculer les totaux
  let totalRevenuImposable = 0;
  let totalAvantagesNature = 0;
  let totalRevenuBrut = 0;
  let totalRevenuReinvesti = 0;
  let totalRetenuesCommun = 0;
  let totalRetenuesEtrangers = 0;
  let totalCSS = 0;
  let totalNetServi = 0;

  for (const ben of beneficiaires) {
    totalRevenuImposable += ben.revenuImposable || 0;
    totalAvantagesNature += ben.avantagesNature || 0;
    totalRevenuBrut += ben.revenuBrutImposable || 0;
    totalRevenuReinvesti += ben.revenuReinvesti || 0;
    totalRetenuesCommun += ben.retenuesRegimeCommun || 0;
    totalRetenuesEtrangers += ben.retenuesEtrangers || 0;
    totalCSS += ben.css || 0;
    totalNetServi += ben.montantNetServi || 0;
  }

  // T100: Type (conforme au cahier des charges: T1, T2, ..., T7)
  record += formatAlpha('T1', 2);
  // T101-T104: Identifiant déclarant
  record += formatDeclarantId(d);
  // T105: Exercice
  record += formatAlpha(d.exercice, 4);
  // T106: Zone réservée (242 espaces, pos 19-260)
  record += zoneReserveeAlpha(242);
  // T107-T114: Totaux
  record += formatNumeric(toMillimes(totalRevenuImposable), 15);
  record += formatNumeric(toMillimes(totalAvantagesNature), 15);
  record += formatNumeric(toMillimes(totalRevenuBrut), 15);
  record += formatNumeric(toMillimes(totalRevenuReinvesti), 15);
  record += formatNumeric(toMillimes(totalRetenuesCommun), 15);
  record += formatNumeric(toMillimes(totalRetenuesEtrangers), 15);
  record += formatNumeric(toMillimes(totalCSS), 15);
  record += formatNumeric(toMillimes(totalNetServi), 15);
  // T115: Zone réservée
  record += zoneReserveeAlpha(19);

  validateRecordLength(record, ANNEXE_RECORD_LENGTH);
  return record;
}

export function generateAnnexe1File(d: DeclarantInfo, beneficiaires: BeneficiaireAnnexe1[]): string {
  const lines: string[] = [];
  lines.push(generateAnnexeHeader(1, d, beneficiaires.length));
  for (const ben of beneficiaires) {
    lines.push(generateAnnexe1Record(d, ben));
  }
  lines.push(generateAnnexe1Footer(d, beneficiaires));
  return lines.join('\r\n');
}

// ===== ANNEXE II : Honoraires, commissions, courtages, loyers =====

/**
 * ANXBEN02 (399 caractères)
 *
 * A200: Type "L2" (2X)
 * A201-A211: Identifiant + commun bénéficiaire
 * A212: Type montant (1N, OBLIGATOIRE) 0-6
 * A213: Montant brut (15N)
 * A214: Honoraires régime réel (15N)
 * A215: Rémunérations conseils (15N)
 * A216: Rémunérations occasionnelles (15N)
 * A217: Plus-value immobilière (15N)
 * A218: Loyers hôtels (15N)
 * A219: Rémunérations artistes/créateurs (15N)
 * A220: Retenue TVA (15N)
 * A221: Retenues opérées (15N)
 * A222: Montant net servi (15N)
 * A223: Zone réservée (10X)
 */
function generateAnnexe2Record(d: DeclarantInfo, ben: BeneficiaireAnnexe2): string {
  let record = '';

  record += formatAlpha('L2', 2);
  record += formatDeclarantId(d);
  record += formatBeneficiaireCommon(d, ben);
  // A212: Type montant (OBLIGATOIRE)
  record += formatNumeric(ben.typeMontant, 1);
  // A213-A222: Montants
  record += formatNumeric(toMillimes(ben.montantBrut || 0), 15);
  record += formatNumeric(toMillimes(ben.honorairesRegimeReel || 0), 15);
  record += formatNumeric(toMillimes(ben.remunerationsConseils || 0), 15);
  record += formatNumeric(toMillimes(ben.remunerationsOccasionnelles || 0), 15);
  record += formatNumeric(toMillimes(ben.plusValueImmobiliere || 0), 15);
  record += formatNumeric(toMillimes(ben.loyersHotels || 0), 15);
  record += formatNumeric(toMillimes(ben.remunerationsArtistes || 0), 15);
  record += formatNumeric(toMillimes(ben.retenueTVA || 0), 15);
  record += formatNumeric(toMillimes(ben.montantRetenuesOperees || 0), 15);
  record += formatNumeric(toMillimes(ben.montantNetServi || 0), 15);
  // A223: Zone réservée
  record += zoneReserveeAlpha(10);

  validateRecordLength(record, ANNEXE_RECORD_LENGTH);
  return record;
}

function generateAnnexe2Footer(d: DeclarantInfo, bens: BeneficiaireAnnexe2[]): string {
  let record = '';
  const totals = {
    montantBrut: 0, honorairesRegimeReel: 0, remunerationsConseils: 0,
    remunerationsOccasionnelles: 0, plusValueImmobiliere: 0, loyersHotels: 0,
    remunerationsArtistes: 0, retenueTVA: 0, retenues: 0, netServi: 0,
  };
  for (const b of bens) {
    totals.montantBrut += b.montantBrut || 0;
    totals.honorairesRegimeReel += b.honorairesRegimeReel || 0;
    totals.remunerationsConseils += b.remunerationsConseils || 0;
    totals.remunerationsOccasionnelles += b.remunerationsOccasionnelles || 0;
    totals.plusValueImmobiliere += b.plusValueImmobiliere || 0;
    totals.loyersHotels += b.loyersHotels || 0;
    totals.remunerationsArtistes += b.remunerationsArtistes || 0;
    totals.retenueTVA += b.retenueTVA || 0;
    totals.retenues += b.montantRetenuesOperees || 0;
    totals.netServi += b.montantNetServi || 0;
  }

  record += formatAlpha('T2', 2);
  record += formatDeclarantId(d);
  record += formatAlpha(d.exercice, 4);
  // T206: Zone réservée (221 espaces, pos 19-239)
  record += zoneReserveeAlpha(221);
  // T207-T217: Totaux
  record += formatNumeric(toMillimes(totals.montantBrut), 15);
  record += formatNumeric(toMillimes(totals.honorairesRegimeReel), 15);
  record += formatNumeric(toMillimes(totals.remunerationsConseils), 15);
  record += formatNumeric(toMillimes(totals.remunerationsOccasionnelles), 15);
  record += formatNumeric(toMillimes(totals.plusValueImmobiliere), 15);
  record += formatNumeric(toMillimes(totals.loyersHotels), 15);
  record += formatNumeric(toMillimes(totals.remunerationsArtistes), 15);
  record += formatNumeric(toMillimes(totals.retenueTVA), 15);
  record += formatNumeric(toMillimes(totals.retenues), 15);
  record += formatNumeric(toMillimes(totals.netServi), 15);
  record += zoneReserveeAlpha(10);

  validateRecordLength(record, ANNEXE_RECORD_LENGTH);
  return record;
}

export function generateAnnexe2File(d: DeclarantInfo, bens: BeneficiaireAnnexe2[]): string {
  const lines: string[] = [];
  lines.push(generateAnnexeHeader(2, d, bens.length));
  for (const ben of bens) lines.push(generateAnnexe2Record(d, ben));
  lines.push(generateAnnexe2Footer(d, bens));
  return lines.join('\r\n');
}

// ===== ANNEXE III : Revenus des capitaux mobiliers =====

/**
 * ANXBEN03 (399 caractères)
 *
 * A300: Type "L3" (2X)
 * A301-A311: Identifiant + commun bénéficiaire
 * A312: Intérêts épargne (15N)
 * A313: Intérêts capitaux mobiliers (15N)
 * A314: Intérêts prêts (15N)
 * A315: Retenues opérées (15N)
 * A316: Montant net servi (15N)
 * A317: Zone réservée (86X)
 */
function generateAnnexe3Record(d: DeclarantInfo, ben: BeneficiaireAnnexe3): string {
  let record = '';

  record += formatAlpha('L3', 2);
  record += formatDeclarantId(d);
  record += formatBeneficiaireCommon(d, ben);
  record += formatNumeric(toMillimes(ben.interetsEpargne || 0), 15);
  record += formatNumeric(toMillimes(ben.interetsCapitauxMobiliers || 0), 15);
  record += formatNumeric(toMillimes(ben.interetsPrets || 0), 15);
  record += formatNumeric(toMillimes(ben.montantRetenuesOperees || 0), 15);
  record += formatNumeric(toMillimes(ben.montantNetServi || 0), 15);
  record += zoneReserveeAlpha(86);

  validateRecordLength(record, ANNEXE_RECORD_LENGTH);
  return record;
}

function generateAnnexe3Footer(d: DeclarantInfo, bens: BeneficiaireAnnexe3[]): string {
  let record = '';
  const totals = { epargne: 0, capitaux: 0, prets: 0, retenues: 0, net: 0 };
  for (const b of bens) {
    totals.epargne += b.interetsEpargne || 0;
    totals.capitaux += b.interetsCapitauxMobiliers || 0;
    totals.prets += b.interetsPrets || 0;
    totals.retenues += b.montantRetenuesOperees || 0;
    totals.net += b.montantNetServi || 0;
  }

  record += formatAlpha('T3', 2);
  record += formatDeclarantId(d);
  record += formatAlpha(d.exercice, 4);
  // T306: Zone réservée (220 espaces, pos 19-238)
  record += zoneReserveeAlpha(220);
  record += formatNumeric(toMillimes(totals.epargne), 15);
  record += formatNumeric(toMillimes(totals.capitaux), 15);
  record += formatNumeric(toMillimes(totals.prets), 15);
  record += formatNumeric(toMillimes(totals.retenues), 15);
  record += formatNumeric(toMillimes(totals.net), 15);
  record += zoneReserveeAlpha(86);

  validateRecordLength(record, ANNEXE_RECORD_LENGTH);
  return record;
}

export function generateAnnexe3File(d: DeclarantInfo, bens: BeneficiaireAnnexe3[]): string {
  const lines: string[] = [];
  lines.push(generateAnnexeHeader(3, d, bens.length));
  for (const ben of bens) lines.push(generateAnnexe3Record(d, ben));
  lines.push(generateAnnexe3Footer(d, bens));
  return lines.join('\r\n');
}

// ===== ANNEXE IV : Montants servis aux non-résidents =====

/**
 * ANXBEN04 (399 caractères)
 *
 * A400: Type "L4" (2X)
 * A401-A411: Identifiant + commun
 * A412: Type montant (1N, OBLIGATOIRE 0-9)
 * A413: Taux honor./commissions (5N)
 * A414: Montant honor./commissions (15N)
 * A415: Taux construction (5N)
 * A416: Montant construction (15N)
 * A417: Taux PV immobilière (5N)
 * A418: Montant PV immobilière (15N)
 * A419: Taux PV cession actions (5N)
 * A420: Montant PV cession actions (15N)
 * A421: Taux revenus valeurs mobilières (5N)
 * A422: Montant revenus valeurs mobilières (15N)
 * A423: Montant paradis fiscaux (15N)
 * A424: Retenue TVA non établis (15N)
 * A425: Retenues opérées (15N)
 * A426: Montant net servi (15N)
 */
function generateAnnexe4Record(d: DeclarantInfo, ben: BeneficiaireAnnexe4): string {
  let record = '';

  record += formatAlpha('L4', 2);
  record += formatDeclarantId(d);
  record += formatBeneficiaireCommon(d, ben);
  record += formatNumeric(ben.typeMontant, 1);
  record += formatNumeric(Math.round((ben.tauxHonorairesCommissions || 0) * 100), 5);
  record += formatNumeric(toMillimes(ben.montantHonorairesCommissions || 0), 15);
  record += formatNumeric(Math.round((ben.tauxConstruction || 0) * 100), 5);
  record += formatNumeric(toMillimes(ben.montantConstruction || 0), 15);
  record += formatNumeric(Math.round((ben.tauxPVImmobiliere || 0) * 100), 5);
  record += formatNumeric(toMillimes(ben.montantPVImmobiliere || 0), 15);
  record += formatNumeric(Math.round((ben.tauxPVCessionActions || 0) * 100), 5);
  record += formatNumeric(toMillimes(ben.montantPVCessionActions || 0), 15);
  record += formatNumeric(Math.round((ben.tauxRevenusValeursMobilieres || 0) * 100), 5);
  record += formatNumeric(toMillimes(ben.montantRevenusValeursMobilieres || 0), 15);
  record += formatNumeric(toMillimes(ben.montantParadisFiscaux || 0), 15);
  record += formatNumeric(toMillimes(ben.retenueTVANonEtablis || 0), 15);
  record += formatNumeric(toMillimes(ben.montantRetenuesOperees || 0), 15);
  record += formatNumeric(toMillimes(ben.montantNetServi || 0), 15);

  validateRecordLength(record, ANNEXE_RECORD_LENGTH);
  return record;
}

function generateAnnexe4Footer(d: DeclarantInfo, bens: BeneficiaireAnnexe4[]): string {
  let record = '';
  const totals = {
    honoraires: 0, construction: 0, pvImmo: 0, pvActions: 0,
    valeursMob: 0, paradis: 0, tva: 0, retenues: 0, net: 0,
  };
  for (const b of bens) {
    totals.honoraires += b.montantHonorairesCommissions || 0;
    totals.construction += b.montantConstruction || 0;
    totals.pvImmo += b.montantPVImmobiliere || 0;
    totals.pvActions += b.montantPVCessionActions || 0;
    totals.valeursMob += b.montantRevenusValeursMobilieres || 0;
    totals.paradis += b.montantParadisFiscaux || 0;
    totals.tva += b.retenueTVANonEtablis || 0;
    totals.retenues += b.montantRetenuesOperees || 0;
    totals.net += b.montantNetServi || 0;
  }

  record += formatAlpha('T4', 2);
  record += formatDeclarantId(d);
  record += formatAlpha(d.exercice, 4);
  // T406: Zone réservée (221 espaces, pos 19-239)
  record += zoneReserveeAlpha(221);
  // T407-T420: Totaux avec taux intercalés
  record += zoneReserveeNum(5); // taux
  record += formatNumeric(toMillimes(totals.honoraires), 15);
  record += zoneReserveeNum(5); // taux
  record += formatNumeric(toMillimes(totals.construction), 15);
  record += zoneReserveeNum(5); // taux
  record += formatNumeric(toMillimes(totals.pvImmo), 15);
  record += zoneReserveeNum(5); // taux
  record += formatNumeric(toMillimes(totals.pvActions), 15);
  record += zoneReserveeNum(5); // taux
  record += formatNumeric(toMillimes(totals.valeursMob), 15);
  record += formatNumeric(toMillimes(totals.paradis), 15);
  record += formatNumeric(toMillimes(totals.tva), 15);
  record += formatNumeric(toMillimes(totals.retenues), 15);
  record += formatNumeric(toMillimes(totals.net), 15);

  validateRecordLength(record, ANNEXE_RECORD_LENGTH);
  return record;
}

export function generateAnnexe4File(d: DeclarantInfo, bens: BeneficiaireAnnexe4[]): string {
  const lines: string[] = [];
  lines.push(generateAnnexeHeader(4, d, bens.length));
  for (const ben of bens) lines.push(generateAnnexe4Record(d, ben));
  lines.push(generateAnnexe4Footer(d, bens));
  return lines.join('\r\n');
}

// ===== ANNEXE V : Acquisitions ≥ 1000 DT =====

/**
 * ANXBEN05 (399 caractères)
 *
 * v2022/v2023: A500-A519 (pas de champ retenue 3% livraison)
 *   A516: Retenue TVA (15N)
 *   A517: Retenues opérées (15N)
 *   A518: Montant net servi (15N)
 *   A519: Zone réservée (56X)
 *
 * v2025: A500-A520 (ajout champ A517 retenue 3% livraison)
 *   A516: Retenue TVA (15N)
 *   A517: Retenue 3% livraison (15N) — NOUVEAU
 *   A518: Retenues opérées (15N)
 *   A519: Montant net servi (15N)
 *   A520: Zone réservée (41X)
 */
function generateAnnexe5Record(d: DeclarantInfo, ben: BeneficiaireAnnexe5, version: CahierVersion): string {
  let record = '';

  record += formatAlpha('L5', 2);
  record += formatDeclarantId(d);
  record += formatBeneficiaireCommon(d, ben);
  record += formatNumeric(toMillimes(ben.montantAcquisitionsIS10 || 0), 15);
  record += formatNumeric(toMillimes(ben.montantAcquisitionsIS15 || 0), 15);
  record += formatNumeric(toMillimes(ben.montantAcquisitionsUnipersonnelles || 0), 15);
  record += formatNumeric(toMillimes(ben.montantAcquisitionsAutres || 0), 15);
  record += formatNumeric(toMillimes(ben.retenueTVAAcquisitions || 0), 15);

  if (version === 'v2025') {
    record += formatNumeric(toMillimes(ben.retenue3PctLivraison || 0), 15);
    record += formatNumeric(toMillimes(ben.montantRetenuesOperees || 0), 15);
    record += formatNumeric(toMillimes(ben.montantNetServi || 0), 15);
    record += zoneReserveeAlpha(41);
  } else {
    // v2022/v2023: pas de champ retenue 3%, zone réservée plus grande
    record += formatNumeric(toMillimes(ben.montantRetenuesOperees || 0), 15);
    record += formatNumeric(toMillimes(ben.montantNetServi || 0), 15);
    record += zoneReserveeAlpha(56);
  }

  validateRecordLength(record, ANNEXE_RECORD_LENGTH);
  return record;
}

function generateAnnexe5Footer(d: DeclarantInfo, bens: BeneficiaireAnnexe5[], version: CahierVersion): string {
  let record = '';
  const totals = {
    is10: 0, is15: 0, unip: 0, autres: 0, tva: 0, livraison: 0, retenues: 0, net: 0,
  };
  for (const b of bens) {
    totals.is10 += b.montantAcquisitionsIS10 || 0;
    totals.is15 += b.montantAcquisitionsIS15 || 0;
    totals.unip += b.montantAcquisitionsUnipersonnelles || 0;
    totals.autres += b.montantAcquisitionsAutres || 0;
    totals.tva += b.retenueTVAAcquisitions || 0;
    totals.livraison += b.retenue3PctLivraison || 0;
    totals.retenues += b.montantRetenuesOperees || 0;
    totals.net += b.montantNetServi || 0;
  }

  record += formatAlpha('T5', 2);
  record += formatDeclarantId(d);
  record += formatAlpha(d.exercice, 4);
  // T506: Zone réservée (220 espaces, pos 19-238)
  record += zoneReserveeAlpha(220);
  record += formatNumeric(toMillimes(totals.is10), 15);
  record += formatNumeric(toMillimes(totals.is15), 15);
  record += formatNumeric(toMillimes(totals.unip), 15);
  record += formatNumeric(toMillimes(totals.autres), 15);
  record += formatNumeric(toMillimes(totals.tva), 15);

  if (version === 'v2025') {
    record += formatNumeric(toMillimes(totals.livraison), 15);
    record += formatNumeric(toMillimes(totals.retenues), 15);
    record += formatNumeric(toMillimes(totals.net), 15);
    record += zoneReserveeAlpha(41);
  } else {
    record += formatNumeric(toMillimes(totals.retenues), 15);
    record += formatNumeric(toMillimes(totals.net), 15);
    record += zoneReserveeAlpha(56);
  }

  validateRecordLength(record, ANNEXE_RECORD_LENGTH);
  return record;
}

export function generateAnnexe5File(d: DeclarantInfo, bens: BeneficiaireAnnexe5[]): string {
  const version = getCahierVersion(d.exercice);
  const lines: string[] = [];
  lines.push(generateAnnexeHeader(5, d, bens.length));
  for (const ben of bens) lines.push(generateAnnexe5Record(d, ben, version));
  lines.push(generateAnnexe5Footer(d, bens, version));
  return lines.join('\r\n');
}

// ===== ANNEXE VI : Ristournes, jeux, ventes forfaitaires =====

/**
 * ANXBEN06 (399 caractères)
 *
 * v2022: A600-A621 (pas de champs ventes alcool)
 *   ...A620: Montants perçus espèces (15N)
 *   A621: Zone réservée (40X)
 *
 * v2023/v2025: A600-A623 (ajout ventes alcool)
 *   ...A620: Montants perçus espèces (15N)
 *   A621: Montant ventes alcool (15N)
 *   A622: Montant avance ventes alcool (15N)
 *   A623: Zone réservée (10X)
 */
function generateAnnexe6Record(d: DeclarantInfo, ben: BeneficiaireAnnexe6, version: CahierVersion): string {
  let record = '';

  record += formatAlpha('L6', 2);
  record += formatDeclarantId(d);
  record += formatBeneficiaireCommon(d, ben);
  record += formatNumeric(ben.typeRistournes, 1);
  record += formatNumeric(toMillimes(ben.montantRistournes || 0), 15);
  record += formatNumeric(toMillimes(ben.montantVentesForfaitaires || 0), 15);
  record += formatNumeric(toMillimes(ben.montantAvanceVentesForfaitaires || 0), 15);
  record += formatNumeric(toMillimes(ben.montantRevenusJeux || 0), 15);
  record += formatNumeric(toMillimes(ben.retenueSourceJeux || 0), 15);
  record += formatNumeric(toMillimes(ben.montantVentesDistribution || 0), 15);
  record += formatNumeric(toMillimes(ben.retenueSourceVentesDistribution || 0), 15);
  record += formatNumeric(toMillimes(ben.montantsPercusEspeces || 0), 15);

  if (version === 'v2023' || version === 'v2025') {
    record += formatNumeric(toMillimes(ben.montantVentesAlcool || 0), 15);
    record += formatNumeric(toMillimes(ben.montantAvanceVentesAlcool || 0), 15);
    record += zoneReserveeAlpha(10);
  } else {
    // v2022: pas de champs alcool, zone réservée plus grande
    record += zoneReserveeAlpha(40);
  }

  validateRecordLength(record, ANNEXE_RECORD_LENGTH);
  return record;
}

function generateAnnexe6Footer(d: DeclarantInfo, bens: BeneficiaireAnnexe6[], version: CahierVersion): string {
  let record = '';
  const totals = {
    rist: 0, ventesForf: 0, avanceForf: 0, jeux: 0, retJeux: 0,
    distrib: 0, retDistrib: 0, especes: 0, alcool: 0, avAlcool: 0,
  };
  for (const b of bens) {
    totals.rist += b.montantRistournes || 0;
    totals.ventesForf += b.montantVentesForfaitaires || 0;
    totals.avanceForf += b.montantAvanceVentesForfaitaires || 0;
    totals.jeux += b.montantRevenusJeux || 0;
    totals.retJeux += b.retenueSourceJeux || 0;
    totals.distrib += b.montantVentesDistribution || 0;
    totals.retDistrib += b.retenueSourceVentesDistribution || 0;
    totals.especes += b.montantsPercusEspeces || 0;
    totals.alcool += b.montantVentesAlcool || 0;
    totals.avAlcool += b.montantAvanceVentesAlcool || 0;
  }

  record += formatAlpha('T6', 2);
  record += formatDeclarantId(d);
  record += formatAlpha(d.exercice, 4);
  // T606: Zone réservée (221 espaces, pos 19-239)
  record += zoneReserveeAlpha(221);
  record += formatNumeric(toMillimes(totals.rist), 15);
  record += formatNumeric(toMillimes(totals.ventesForf), 15);
  record += formatNumeric(toMillimes(totals.avanceForf), 15);
  record += formatNumeric(toMillimes(totals.jeux), 15);
  record += formatNumeric(toMillimes(totals.retJeux), 15);
  record += formatNumeric(toMillimes(totals.distrib), 15);
  record += formatNumeric(toMillimes(totals.retDistrib), 15);
  record += formatNumeric(toMillimes(totals.especes), 15);

  if (version === 'v2023' || version === 'v2025') {
    record += formatNumeric(toMillimes(totals.alcool), 15);
    record += formatNumeric(toMillimes(totals.avAlcool), 15);
    record += zoneReserveeAlpha(10);
  } else {
    record += zoneReserveeAlpha(40);
  }

  validateRecordLength(record, ANNEXE_RECORD_LENGTH);
  return record;
}

export function generateAnnexe6File(d: DeclarantInfo, bens: BeneficiaireAnnexe6[]): string {
  const version = getCahierVersion(d.exercice);
  const lines: string[] = [];
  lines.push(generateAnnexeHeader(6, d, bens.length));
  for (const ben of bens) lines.push(generateAnnexe6Record(d, ben, version));
  lines.push(generateAnnexe6Footer(d, bens, version));
  return lines.join('\r\n');
}

// ===== ANNEXE VII : Montants payés pour autrui =====

/**
 * ANXBEN07 (399 caractères)
 *
 * A700: Type "L7" (2X)
 * A701-A711: Identifiant + commun
 * A712: Type montants payés (2N, OBLIGATOIRE 01-29)
 * A713: Montants payés (15N)
 * A714: Retenue source (15N)
 * A715: Montant net servi (15N)
 * A716: Zone réservée (114X)
 */
function generateAnnexe7Record(d: DeclarantInfo, ben: BeneficiaireAnnexe7): string {
  let record = '';

  record += formatAlpha('L7', 2);
  record += formatDeclarantId(d);
  record += formatBeneficiaireCommon(d, ben);
  record += formatNumeric(ben.typeMontantsPayes, 2);
  record += formatNumeric(toMillimes(ben.montantsPayes || 0), 15);
  record += formatNumeric(toMillimes(ben.retenueSource || 0), 15);
  record += formatNumeric(toMillimes(ben.montantNetServi || 0), 15);
  record += zoneReserveeAlpha(114);

  validateRecordLength(record, ANNEXE_RECORD_LENGTH);
  return record;
}

function generateAnnexe7Footer(d: DeclarantInfo, bens: BeneficiaireAnnexe7[]): string {
  let record = '';
  const totals = { montants: 0, retenues: 0, net: 0 };
  for (const b of bens) {
    totals.montants += b.montantsPayes || 0;
    totals.retenues += b.retenueSource || 0;
    totals.net += b.montantNetServi || 0;
  }

  record += formatAlpha('T7', 2);
  record += formatDeclarantId(d);
  record += formatAlpha(d.exercice, 4);
  // T706: Zone réservée (222 espaces, pos 19-240)
  record += zoneReserveeAlpha(222);
  record += formatNumeric(toMillimes(totals.montants), 15);
  record += formatNumeric(toMillimes(totals.retenues), 15);
  record += formatNumeric(toMillimes(totals.net), 15);
  record += zoneReserveeAlpha(114);

  validateRecordLength(record, ANNEXE_RECORD_LENGTH);
  return record;
}

export function generateAnnexe7File(d: DeclarantInfo, bens: BeneficiaireAnnexe7[]): string {
  const lines: string[] = [];
  lines.push(generateAnnexeHeader(7, d, bens.length));
  for (const ben of bens) lines.push(generateAnnexe7Record(d, ben));
  lines.push(generateAnnexe7Footer(d, bens));
  return lines.join('\r\n');
}
