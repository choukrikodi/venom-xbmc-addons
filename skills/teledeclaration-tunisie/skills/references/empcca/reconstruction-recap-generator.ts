// Générateur du fichier récapitulatif DECEMP — multi-version
// v2022: 49 enregistrements (1 header + 47 data + 1 footer)
// v2023: 50 enregistrements (1 header + 48 data + 1 footer)
// v2025: 51 enregistrements (1 header + 49 data + 1 footer)
// Chaque enregistrement = 38 caractères exactement

import { DeclarantInfo, AnnexeData, DecempRecord, getCahierVersion } from '../types';
import { DECEMP_RECORD_LENGTH, getDecempLines } from '../constants';
import {
  formatNumeric,
  formatAlpha,
  zoneReserveeAlpha,
  zoneReserveeNum,
  validateRecordLength,
} from '../formatters';

/**
 * Générer l'en-tête DECEMP00 (38 caractères)
 * Toutes les zones sont OBLIGATOIRES sauf D013 (zone réservée)
 *
 * D000: Type enregistrement "000" (3X, pos 1-3, OBLIGATOIRE)
 * D001: Matricule fiscal (7N, pos 4-10, OBLIGATOIRE)
 * D002: Clé matricule (1X, pos 11, OBLIGATOIRE)
 * D003: Catégorie contribuable (1X, pos 12, OBLIGATOIRE, ≠ E)
 * D004: N° établissement (3N, pos 13-15, OBLIGATOIRE = 000)
 * D005: Exercice (4X, pos 16-19, OBLIGATOIRE)
 * D006: Annexe I présente (1N, pos 20, OBLIGATOIRE 0/1)
 * D007: Annexe II présente (1N, pos 21, OBLIGATOIRE 0/1)
 * D008: Annexe III présente (1N, pos 22, OBLIGATOIRE 0/1)
 * D009: Annexe IV présente (1N, pos 23, OBLIGATOIRE 0/1)
 * D010: Annexe V présente (1N, pos 24, OBLIGATOIRE 0/1)
 * D011: Annexe VI présente (1N, pos 25, OBLIGATOIRE 0/1)
 * D012: Annexe VII présente (1N, pos 26, OBLIGATOIRE 0/1)
 * D013: Zone réservée (12X, pos 27-38)
 */
function generateDecempHeader(declarant: DeclarantInfo, annexes: AnnexeData): string {
  let record = '';

  // D000: Type enregistrement
  record += formatAlpha('000', 3);
  // D001: Matricule fiscal
  record += formatNumeric(declarant.matriculeFiscal, 7);
  // D002: Clé matricule
  record += formatAlpha(declarant.cleMatricule, 1);
  // D003: Catégorie contribuable (OBLIGATOIRE, ≠ E)
  record += formatAlpha(declarant.categorieContribuable || ' ', 1);
  // D004: N° établissement secondaire
  record += formatNumeric(declarant.numEtablissement, 3);
  // D005: Exercice
  record += formatAlpha(declarant.exercice, 4);
  // D006-D012: Flags de présence des annexes (OBLIGATOIRE)
  // 0 = Annexe déposé (présent), 1 = Annexe non déposé (absent)
  record += annexes.annexe1.length > 0 ? '0' : '1';
  record += annexes.annexe2.length > 0 ? '0' : '1';
  record += annexes.annexe3.length > 0 ? '0' : '1';
  record += annexes.annexe4.length > 0 ? '0' : '1';
  record += annexes.annexe5.length > 0 ? '0' : '1';
  record += annexes.annexe6.length > 0 ? '0' : '1';
  record += annexes.annexe7.length > 0 ? '0' : '1';
  // D013: Zone réservée (espaces)
  record += zoneReserveeAlpha(12);

  validateRecordLength(record, DECEMP_RECORD_LENGTH);
  return record;
}

/**
 * Générer une ligne DECEMP data (38 caractères)
 *
 * Dx0: Code type (3X, pos 1-3, OBLIGATOIRE)
 * Dx1: Total assiette (15N, pos 4-18, millimes)
 * Dx2: Taux (5N, pos 19-23, format 999V99, OBLIGATOIRE)
 * Dx3: Total retenues (15N, pos 24-38, millimes)
 *
 * Cas spécial DECEMP03 (code 300, CSS):
 *   D031: Zone réservée (15N, pos 4-18, initialisée à zéros)
 *   D032: Zone réservée (5N, pos 19-23, = 00000)
 *   D033: Total retenues CSS (15N, pos 24-38)
 */
function generateDecempLine(code: string, assiette: number, taux: string, retenues: number, isSpecial?: boolean): string {
  let record = '';

  // Code type
  record += formatAlpha(code, 3);

  if (isSpecial) {
    // DECEMP03 (CSS): zone réservée 20X (espaces) + retenues 15N
    // Conforme au cahier des charges: D031 = zone réservée (20X, pos 4-23) = espaces
    record += zoneReserveeAlpha(20);
  } else {
    // Standard: assiette 15N + taux 5N + retenues 15N
    record += formatNumeric(assiette, 15);
    record += taux;
  }

  // Total retenues (D013 / Dx3 / D032 pour CSS)
  record += formatNumeric(retenues, 15);

  validateRecordLength(record, DECEMP_RECORD_LENGTH);
  return record;
}

/**
 * Générer le pied de fichier DECEMP50 (38 caractères)
 *
 * D500: Code "999" (3X, pos 1-3, OBLIGATOIRE)
 * D501: Zone réservée (20X, pos 4-23)
 * D502: Total général des retenues opérées (15N, pos 24-38, OBLIGATOIRE)
 */
function generateDecempFooter(totalGeneralRetenues: number): string {
  let record = '';

  // D500: Code fin de fichier
  record += formatAlpha('999', 3);
  // D501: Zone réservée (20 espaces)
  record += zoneReserveeAlpha(20);
  // D502: Total général des retenues
  record += formatNumeric(totalGeneralRetenues, 15);

  validateRecordLength(record, DECEMP_RECORD_LENGTH);
  return record;
}

/**
 * Calculer les totaux par code DECEMP à partir des données des annexes
 */
function computeDecempTotals(annexes: AnnexeData, declarant: DeclarantInfo): Map<string, DecempRecord> {
  const totals = new Map<string, DecempRecord>();
  const version = getCahierVersion(declarant.exercice);
  const decempLines = getDecempLines(version);

  // Initialiser tous les codes avec zéros
  for (const line of decempLines) {
    totals.set(line.code, {
      code: line.code,
      totalAssiette: 0,
      taux: line.taux,
      totalRetenues: 0,
    });
  }

  // Annexe I → codes 010 (salaires), 170 (étrangers), 300 (CSS)
  for (const ben of annexes.annexe1) {
    // Code 010: Salaires régime commun
    const rec010 = totals.get('010')!;
    rec010.totalAssiette += ben.revenuBrutImposable;
    rec010.totalRetenues += ben.retenuesRegimeCommun;

    // Code 170: Retenues étrangers (si applicable)
    if (ben.retenuesEtrangers > 0) {
      const rec170 = totals.get('170')!;
      rec170.totalAssiette += ben.revenuBrutImposable;
      rec170.totalRetenues += ben.retenuesEtrangers;
    }

    // Code 300: CSS
    if (ben.css > 0) {
      const rec300 = totals.get('300')!;
      rec300.totalRetenues += ben.css;
    }
  }

  // Annexe II → codes 021-030, 400, 040, 260, 100, 121, 241, 091
  for (const ben of annexes.annexe2) {
    const totalBrut = ben.montantBrut;
    const retenues = ben.montantRetenuesOperees;

    // Répartir selon le type de montant (A212 du cahier des charges)
    switch (ben.typeMontant) {
      case 0: // Charge à payer → commissions PP résidentes par défaut
        addToTotal(totals, '021', totalBrut, retenues);
        break;
      case 1: // Honoraires
        addToTotal(totals, '027', totalBrut, retenues);
        break;
      case 2: // Commissions
        addToTotal(totals, '021', totalBrut, retenues);
        break;
      case 3: // Courtages
        addToTotal(totals, '021', totalBrut, retenues);
        break;
      case 4: // Loyers
        addToTotal(totals, '021', totalBrut, retenues);
        break;
      case 5: // Rémunérations activités non commerciales
        addToTotal(totals, '021', totalBrut, retenues);
        break;
      case 6: // Performance/prestation services
        addToTotal(totals, '260', totalBrut, retenues);
        break;
    }

    // Honoraires régime réel → code 030
    if (ben.honorairesRegimeReel > 0) {
      addToTotal(totals, '030', ben.honorairesRegimeReel, 0);
    }

    // Artistes/créateurs → code 400
    if (ben.remunerationsArtistes > 0) {
      addToTotal(totals, '400', ben.remunerationsArtistes, 0);
    }

    // Rémunérations conseils / actions parts sociales → code 091 (PP) ou 241
    if (ben.remunerationsConseils > 0) {
      addToTotal(totals, '091', ben.remunerationsConseils, 0);
    }

    // Rémunérations travail occasionnel/accidentel → code 100
    if (ben.remunerationsOccasionnelles > 0) {
      addToTotal(totals, '100', ben.remunerationsOccasionnelles, 0);
    }

    // Loyers hôtels → code 040
    if (ben.loyersHotels > 0) {
      addToTotal(totals, '040', ben.loyersHotels, 0);
    }

    // Plus-value immobilière → code 121 (résidents)
    if (ben.plusValueImmobiliere > 0) {
      addToTotal(totals, '121', ben.plusValueImmobiliere, 0);
    }
  }

  // Annexe III → codes 060, 071-074, 241-242
  for (const ben of annexes.annexe3) {
    if (ben.interetsEpargne > 0) {
      addToTotal(totals, '060', ben.interetsEpargne, 0);
    }
    if (ben.interetsCapitauxMobiliers > 0) {
      // PP résidents par défaut
      addToTotal(totals, '071', ben.interetsCapitauxMobiliers, 0);
    }
    if (ben.interetsPrets > 0) {
      addToTotal(totals, '110', ben.interetsPrets, 0);
    }
    if (ben.montantRetenuesOperees > 0) {
      // Répartir les retenues proportionnellement
      const total = ben.interetsEpargne + ben.interetsCapitauxMobiliers + ben.interetsPrets;
      if (total > 0) {
        if (ben.interetsEpargne > 0) {
          const ratio = ben.interetsEpargne / total;
          addRetenues(totals, '060', Math.round(ben.montantRetenuesOperees * ratio));
        }
        if (ben.interetsCapitauxMobiliers > 0) {
          const ratio = ben.interetsCapitauxMobiliers / total;
          addRetenues(totals, '071', Math.round(ben.montantRetenuesOperees * ratio));
        }
        if (ben.interetsPrets > 0) {
          const ratio = ben.interetsPrets / total;
          addRetenues(totals, '110', Math.round(ben.montantRetenuesOperees * ratio));
        }
      }
    }
  }

  // Annexe IV → non-résidents
  for (const ben of annexes.annexe4) {
    const retenues = ben.montantRetenuesOperees;
    // Honoraires/commissions non-résidents → codes 023 (PP) ou 024 (PM)
    if (ben.montantHonorairesCommissions > 0) {
      addToTotal(totals, '023', ben.montantHonorairesCommissions, 0);
    }
    // Construction/montage ≤ 6 mois → code 160
    if (ben.montantConstruction > 0) {
      addToTotal(totals, '160', ben.montantConstruction, 0);
    }
    // Plus-value immobilière non-résidents → code 122 (PP) ou 123 (PM)
    if (ben.montantPVImmobiliere > 0) {
      addToTotal(totals, '122', ben.montantPVImmobiliere, 0);
    }
    // Plus-value cession actions non-résidents → code 191 (PP) ou 192 (PM)
    if (ben.montantPVCessionActions > 0) {
      addToTotal(totals, '191', ben.montantPVCessionActions, 0);
    }
    // Revenus valeurs mobilières non-résidents → code 073 (PP) ou 074 (PM)
    if (ben.montantRevenusValeursMobilieres > 0) {
      addToTotal(totals, '073', ben.montantRevenusValeursMobilieres, 0);
    }
    // Paradis fiscaux → code 220
    if (ben.montantParadisFiscaux > 0) {
      addToTotal(totals, '220', ben.montantParadisFiscaux, 0);
    }
    // Retenue TVA non établis → code 150
    if (ben.retenueTVANonEtablis > 0) {
      addRetenues(totals, '150', ben.retenueTVANonEtablis);
    }
    if (retenues > 0) {
      // Distribute retenues to the relevant code
      addRetenues(totals, '023', retenues);
    }
  }

  // Annexe V → acquisitions ≥ 1000 DT (codes 132-135, 140, 150, 600)
  for (const ben of annexes.annexe5) {
    // IS 20% → code 132
    if (ben.montantAcquisitionsIS15 > 0) addToTotal(totals, '132', ben.montantAcquisitionsIS15, 0);
    // IS 10% → code 133
    if (ben.montantAcquisitionsIS10 > 0) addToTotal(totals, '133', ben.montantAcquisitionsIS10, 0);
    // Unipersonnelles (déduction 2/3) → code 134
    if (ben.montantAcquisitionsUnipersonnelles > 0) addToTotal(totals, '134', ben.montantAcquisitionsUnipersonnelles, 0);
    // Autres entreprises → code 135
    if (ben.montantAcquisitionsAutres > 0) addToTotal(totals, '135', ben.montantAcquisitionsAutres, 0);
    // Retenue TVA acquisitions → code 140 (État/collectivités)
    if (ben.retenueTVAAcquisitions > 0) addRetenues(totals, '140', ben.retenueTVAAcquisitions);
    // Retenue 3% livraison (v2025) → code 600
    if ((ben.retenue3PctLivraison || 0) > 0) addRetenues(totals, '600', ben.retenue3PctLivraison!);
    if (ben.montantRetenuesOperees > 0) {
      // Distribute across IS codes proportionally
      const totalIS = ben.montantAcquisitionsIS10 + ben.montantAcquisitionsIS15 +
        ben.montantAcquisitionsUnipersonnelles + ben.montantAcquisitionsAutres;
      if (totalIS > 0) {
        if (ben.montantAcquisitionsIS15 > 0) addRetenues(totals, '132', Math.round(ben.montantRetenuesOperees * ben.montantAcquisitionsIS15 / totalIS));
        if (ben.montantAcquisitionsIS10 > 0) addRetenues(totals, '133', Math.round(ben.montantRetenuesOperees * ben.montantAcquisitionsIS10 / totalIS));
        if (ben.montantAcquisitionsUnipersonnelles > 0) addRetenues(totals, '134', Math.round(ben.montantRetenuesOperees * ben.montantAcquisitionsUnipersonnelles / totalIS));
        if (ben.montantAcquisitionsAutres > 0) addRetenues(totals, '135', Math.round(ben.montantRetenuesOperees * ben.montantAcquisitionsAutres / totalIS));
      }
    }
  }

  // Annexe VI → ristournes, jeux, ventes (codes 200, 280, 290, 270, 500)
  for (const ben of annexes.annexe6) {
    // Avance ventes forfaitaires PP → code 200
    if (ben.montantVentesForfaitaires > 0 || ben.montantAvanceVentesForfaitaires > 0) {
      addToTotal(totals, '200', ben.montantVentesForfaitaires, ben.montantAvanceVentesForfaitaires);
    }
    // Revenus jeux de pari/hasard/loterie → code 280
    if (ben.montantRevenusJeux > 0) {
      addToTotal(totals, '280', ben.montantRevenusJeux, ben.retenueSourceJeux);
    }
    // Ventes distribution ≤ 20 000 DT/an → code 290
    if (ben.montantVentesDistribution > 0) {
      addToTotal(totals, '290', ben.montantVentesDistribution, ben.retenueSourceVentesDistribution);
    }
    // Avance ventes alcool (v2023+) → code 500
    if ((ben.montantVentesAlcool || 0) > 0 || (ben.montantAvanceVentesAlcool || 0) > 0) {
      addToTotal(totals, '500', (ben.montantVentesAlcool || 0), (ben.montantAvanceVentesAlcool || 0));
    }
  }

  // Annexe VII → montants payés pour autrui
  // (les retenues sont directement incluses dans les bénéficiaires)

  return totals;
}

function addToTotal(totals: Map<string, DecempRecord>, code: string, assiette: number, retenues: number): void {
  const rec = totals.get(code);
  if (rec) {
    rec.totalAssiette += assiette;
    rec.totalRetenues += retenues;
  }
}

function addRetenues(totals: Map<string, DecempRecord>, code: string, retenues: number): void {
  const rec = totals.get(code);
  if (rec) {
    rec.totalRetenues += retenues;
  }
}

/**
 * Générer le fichier récapitulatif DECEMP complet
 * Le nombre de lignes varie selon la version du cahier des charges
 */
export function generateRecapFile(declarant: DeclarantInfo, annexes: AnnexeData): string {
  const lines: string[] = [];
  const version = getCahierVersion(declarant.exercice);
  const decempLines = getDecempLines(version);
  const totals = computeDecempTotals(annexes, declarant);

  // DECEMP00: En-tête
  lines.push(generateDecempHeader(declarant, annexes));

  // DECEMP01-N: Lignes de données (47, 48 ou 49 selon version)
  let totalGeneralRetenues = 0;
  for (const lineConfig of decempLines) {
    const rec = totals.get(lineConfig.code)!;
    const assiette = lineConfig.isSpecial ? 0 : rec.totalAssiette;
    lines.push(generateDecempLine(lineConfig.code, assiette, lineConfig.taux, rec.totalRetenues, lineConfig.isSpecial));
    totalGeneralRetenues += rec.totalRetenues;
  }

  // Pied de fichier avec total général des retenues
  lines.push(generateDecempFooter(totalGeneralRetenues));

  return lines.join('\r\n');
}
