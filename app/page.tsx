import Image from 'next/image';
import goblinImage from '../public/goblin.png';
import mimicImage from '../public/mimic.png';
import owlbearImage from '../public/owlbear.png';
import { MonsterFrame } from '@/components/Monster';
import { IMonster } from '@/interfaces/IMonster';
import { Type } from '@/enums/Type';
import { Size } from '@/enums/Size';
import { Alignment } from '@/enums/Alignment';
import { Language } from '@/enums/Language';
import SearchBar from '@/components/searchbar';
import Header from '@/components/header';
import Footer from '@/components/footer';

const goblin: IMonster = {
  index: "1",
  name: "Goblin",
  description: "A small, vicious humanoid. It appears as a hairless, warty-skinned goblinoid with a large, toothy maw and a pair of beady, black eyes.",
  size: Size.Small,
  type: Type.Humanoid,
  subtype: "goblinoid",
  alignment: Alignment.NeutralEvil,
  armorClass: 15,
  hitPoints: 7,
  hitDice: { diceCount: 2, diceSides: 6 },
  speed: [
    { type: "walk", speed: 30 }
  ],
  abilityScores: {
    strength: 8,
    dexterity: 14,
    constitution: 10,
    intelligence: 10,
    wisdom: 8,
    charisma: 8
  },
  proficiencies: [
    { value: 2, proficiency: { index: "light-armor", name: "Light Armor", url: "https://www.dnd5eapi.co/api/proficiencies/light-armor" } },
    { value: 2, proficiency: { index: "simple-weapons", name: "Simple Weapons", url: "https://www.dnd5eapi.co/api/proficiencies/simple-weapons" } },
    { value: 2, proficiency: { index: "martial-weapons", name: "Martial Weapons", url: "https://www.dnd5eapi.co/api/proficiencies/martial-weapons" } },
    { value: 2, proficiency: { index: "hand-crossbow", name: "Hand Crossbow", url: "https://www.dnd5eapi.co/api/proficiencies/hand-crossbow" } },
    { value: 2, proficiency: { index: "shortsword", name: "Shortsword", url: "https://www.dnd5eapi.co/api/proficiencies/shortsword" } },
  ],
  damageVulnerabilities: [],
  damageResistances: [],
  damageImmunities: [],
  conditionImmunities: [],
  senses: [
    { type: "darkvision", value: 60 }
  ],
  languages: [
    Language.Common,
    Language.Goblin
  ],
  challengeRating: { value: 1 / 4, experience: 50 },
  specialAbilities: [
    {
      name: "Nimble Escape",
      description: "The goblin can take the Disengage or Hide action as a bonus action on each of its turns."
    }
  ],
  actions: [
    {
      name: "Scimitar",
      description: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6 + 2) slashing damage.",
      attackBonus: 4,
      damage: {
        damageDice: { diceCount: 1, diceSides: 6 },
        damageType: { index: "slashing", name: "Slashing", url: "https://www.dnd5eapi.co/api/damage-types/slashing" }
      }
    },
    {
      name: "Shortbow",
      description: "Ranged Weapon Attack: +4 to hit, range 80/320 ft., one target. Hit: 5 (1d6 + 2) piercing damage.",
      attackBonus: 4,
      damage: {
        damageDice: { diceCount: 1, diceSides: 6 },
        damageType: { index: "piercing", name: "Piercing", url: "https://www.dnd5eapi.co/api/damage-types/piercing" }
      }
    }
  ],
  legendaryActions: [],
  url: "https://www.dnd5eapi.co/api/monsters/1"
};

const mimic: IMonster = {
  index: "2",
  name: "Mimic",
  description: "A shapeshifting monster that disguises itself as an inanimate object, such as a chest or a door. Its adhesive exterior allows it to cling to stone surfaces.",
  size: Size.Medium,
  type: Type.Aberration,
  subtype: "",
  alignment: Alignment.Neutral,
  armorClass: 12,
  hitPoints: 58,
  hitDice: { diceCount: 9, diceSides: 8 },
  speed: [
    { type: "walk", speed: 15 }
  ],
  abilityScores: {
    strength: 17,
    dexterity: 12,
    constitution: 15,
    intelligence: 5,
    wisdom: 13,
    charisma: 8
  },
  proficiencies: [
    { value: 2, proficiency: { index: "stealth", name: "Stealth", url: "https://www.dnd5eapi.co/api/proficiencies/stealth" } },
    { value: 2, proficiency: { index: "deception", name: "Deception", url: "https://www.dnd5eapi.co/api/proficiencies/deception" } },
    { value: 2, proficiency: { index: "perception", name: "Perception", url: "https://www.dnd5eapi.co/api/proficiencies/perception" } },
  ],
  damageVulnerabilities: [],
  damageResistances: [
    { index: "acid", name: "Acid", url: "https://www.dnd5eapi.co/api/damage-types/acid" },
    { index: "cold", name: "Cold", url: "https://www.dnd5eapi.co/api/damage-types/cold" },
    { index: "fire", name: "Fire", url: "https://www.dnd5eapi.co/api/damage-types/fire" },
  ],
  damageImmunities: [
    { index: "bludgeoning", name: "Bludgeoning", url: "https://www.dnd5eapi.co/api/damage-types/bludgeoning" },
    { index: "piercing", name: "Piercing", url: "https://www.dnd5eapi.co/api/damage-types/piercing" },
    { index: "slashing", name: "Slashing", url: "https://www.dnd5eapi.co/api/damage-types/slashing" },
  ],
  conditionImmunities: [
    { index: "prone", name: "Prone", url: "https://www.dnd5eapi.co/api/conditions/prone" },
  ],
  senses: [
    { type: "darkvision", value: 60 }
  ],
  languages: [
    Language.Common
  ],
  challengeRating: { value: 2, experience: 450 },
  specialAbilities: [
    {
      name: "Shapechanger",
      description: "The mimic can use its action to polymorph into an object or back into its true, amorphous form. Its statistics are the same in each form. Any equipment it is wearing or carrying isn't transformed. It reverts to its true form if it dies."
    },
    {
      name: "Adhesive",
      description: "The mimic adheres to anything that touches it. A Huge or smaller creature adhered to the mimic is also grappled by it (escape DC 13). Ability checks made to escape this grapple have disadvantage."
    },
    {
      name: "False Appearance",
      description: "While the mimic remains motionless, it is indistinguishable from an ordinary object."
    }
  ],
  actions: [
    {
      name: "Pseudopod",
      description: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 7 (1d8 + 3) bludgeoning damage. If the mimic is in object form, the target takes damage from the acid it secretes.",
      attackBonus: 5,
      damage: {
        damageDice: { diceCount: 1, diceSides: 8 },
        damageType: { index: "bludgeoning", name: "Bludgeoning", url: "https://www.dnd5eapi.co/api/damage-types/bludgeoning" }
      }
    }
  ],
  legendaryActions: [],
  url: "https://www.dnd5eapi.co/api/monsters/2"
};

const owlbear: IMonster = {
  index: "3",
  name: "Owlbear",
  description: "A large, ferocious creature with the head of an owl and the body of a bear. It is capable of standing on its hind legs and has large, sharp beak.",
  size: Size.Large,
  type: Type.Monstrosity,
  subtype: "",
  alignment: Alignment.Unaligned,
  armorClass: 13,
  hitPoints: 59,
  hitDice: { diceCount: 7, diceSides: 10 },
  speed: [
    { type: "walk", speed: 40 }
  ],
  abilityScores: {
    strength: 20,
    dexterity: 12,
    constitution: 17,
    intelligence: 3,
    wisdom: 12,
    charisma: 7
  },
  proficiencies: [
    { value: 2, proficiency: { index: "perception", name: "Perception", url: "https://www.dnd5eapi.co/api/proficiencies/perception" } },
  ],
  damageVulnerabilities: [],
  damageResistances: [],
  damageImmunities: [],
  conditionImmunities: [],
  senses: [
    { type: "darkvision", value: 60 },
    { type: "passive perception", value: 11 }
  ],
  languages: [],
  challengeRating: { value: 3, experience: 700 },
  specialAbilities: [],
  actions: [
    {
      name: "Multiattack",
      description: "The owlbear makes two attacks: one with its beak and one with its claws.",
      attackBonus: 0,
      damage: {
        damageDice: { diceCount: 0, diceSides: 0 },
        damageType: { index: "", name: "", url: "" }
      }
    },
    {
      name: "Beak",
      description: "Melee Weapon Attack: +7 to hit, reach 5 ft., one creature. Hit: 10 (1d10 + 5) piercing damage.",
      attackBonus: 7,
      damage: {
        damageDice: { diceCount: 1, diceSides: 10 },
        damageType: { index: "piercing", name: "Piercing", url: "https://www.dnd5eapi.co/api/damage-types/piercing" }
      },
    },
    {
      name: "Claws",
      description: "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 14 (2d8 + 5) slashing damage.",
      attackBonus: 7,
      damage: {
        damageDice: { diceCount: 2, diceSides: 8 },
        damageType: { index: "slashing", name: "Slashing", url: "https://www.dnd5eapi.co/api/damage-types/slashing" }
      }
    }
  ],
  legendaryActions: [],
  url: "https://www.dnd5eapi.co/api/monsters/3"
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Header />
      <SearchBar />
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-6xl font-bold text-center">Goblin</h1>
        <Image src={goblinImage} alt="Goblin" width={192} height={288} />
        <MonsterFrame monster={goblin} />
        <h1 className="text-6xl font-bold text-center">Mimic</h1>
        <Image src={mimicImage} alt="Mimic" width={192} height={288} />
        <MonsterFrame monster={mimic} />
        <h1 className="text-6xl font-bold text-center">Owlbear</h1>
        <Image src={owlbearImage} alt="Owlbear" width={192} height={288} />

        <MonsterFrame monster={owlbear} />
      </div>
      <Footer />
    </main>
  );
}
