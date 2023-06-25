import { Size } from "../enums/Size";
import { Alignment } from "../enums/Alignment";
import { ICreatureSpeed } from "./ICreatureSpeed";
import { IAbilityScore } from "./IAbilityScore";
import { ICondition } from "./ICondition";
import { IDamageType } from "./IDamageType";
import { IProficiency } from "./IProficiency";
import { ISense } from "./ISense";
import { Language } from "../enums/Language";
import { IChallengeRating } from "./IChallengeRating";
import { Type } from "../enums/Type";
import { ISpecialAbility } from "./ISpecialAbility";
import { IAttack } from "./IAttack";
import { IDice } from "./IDice";

export interface ICreature {
  id: number;
  index: string;
  name: string;
  description: string;
  size: Size;
  type: Type;
  subtype?: Type;
  alignment: Alignment;
  armorClass: number;
  hitPoints: number;
  hitDice: IDice;
  speed: ICreatureSpeed[];
  abilityScores: IAbilityScore;
  proficiencies?: IProficiency[];
  damageVulnerabilities?: IDamageType[];
  damageResistances?: IDamageType[];
  damageImmunities?: IDamageType[];
  conditionImmunities?: ICondition[];
  senses: ISense[];
  language: Language;
  challengeRating: IChallengeRating;
  specialAbilities: ISpecialAbility[];
  actions: IAttack[];
  legendaryActions?: IAttack[];
  url: string;
  [key: string]: any;
}

export const mapToCreature = (data: any): ICreature => {
  console.log("data:", data);
  try {
    const creature: ICreature = {
      id: data.id,
      index: data.index,
      name: data.name,
      description: data.description,
      size: data.size,
      type: data.type,
      subtype: data.subtype,
      alignment: data.alignment,
      armorClass: data.armorClass,
      hitPoints: data.hitPoints,
      hitDice: data.hitDice,
      speed: data.speed,
      abilityScores: data.abilityScores,
      proficiencies: data.proficiencies ? data.proficiencies : undefined,
      damageVulnerabilities: data.damageVulnerabilities ? data.damageVulnerabilities : undefined,
      damageResistances: data.damageResistances ? data.damageResistances : undefined,
      damageImmunities: data.damageImmunities ? data.damageImmunities : undefined,
      conditionImmunities: data.conditionImmunities,
      senses: data.senses,
      language: data.language,
      challengeRating: data.challengeRating,
      specialAbilities: data.specialAbilities,
      actions: data.actions,
      legendaryActions: data.legendaryActions ? data.legendaryActions : undefined,
      url: data.url
    };
    console.log("creature:", creature);
    return creature;
  } catch (error) {
    console.log("error:", error);
    throw error;
  }
}