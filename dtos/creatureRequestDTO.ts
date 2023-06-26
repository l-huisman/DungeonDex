import { Size } from "../enums/Size";
import { Alignment } from "../enums/Alignment";
import { ICreatureSpeed } from "../interfaces/ICreatureSpeed";
import { IAbilityScore } from "../interfaces/IAbilityScore";
import { ICondition } from "../interfaces/ICondition";
import { IDamageType } from "../interfaces/IDamageType";
import { IProficiency } from "../interfaces/IProficiency";
import { ISense } from "../interfaces/ISense";
import { Language } from "../enums/Language";
import { IChallengeRating } from "../interfaces/IChallengeRating";
import { Type } from "../enums/Type";
import { ISpecialAbility } from "../interfaces/ISpecialAbility";
import { IAttack } from "../interfaces/IAttack";
import { IDice } from "../interfaces/IDice";

export interface CreatureRequestDTO {
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
}