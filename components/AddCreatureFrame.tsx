import { API_URL } from "@/constants";
import axios from "axios";
import { useSession } from "next-auth/react";
import { CreatureContext } from "./context/CreatureContext";
import { ChangeEvent, useContext, useState } from "react";
import { ICreature } from "@/interfaces/ICreature";
import { Size } from "../enums/Size";
import { Alignment } from "../enums/Alignment";
import { Type } from "../enums/Type";
import { CreatureRequestDTO } from "@/dtos/creatureRequestDTO";

export const AddCreatureFrame = () => {
    const creatureContext = useContext(CreatureContext);
    const [error, setError] = useState<any>(null);
    const { data: session } = useSession();

    return (
        <div className="w-full">
            <h1>Add Creature</h1>
            <form className="bg-red-600 rounded m-3">
                <div className="flex items-center justify-between bg-red-600 p-2 rounded-lg">
                    <label className="text-white font-medium mr-2 w-1/4" htmlFor="name">Name</label>
                    <input
                        placeholder="Goblin"
                        className="bg-transparent w-3/4 placeholder:text-slate-300 border-2 border-solid border-white rounded text-white font-bold p-2"
                        type="text"
                        name="name"
                        id="name"
                        defaultValue={creatureContext.creature?.name}
                    />
                </div>
                <div className="flex items-center justify-between bg-red-600 p-2 rounded-lg">
                    <label className="text-white font-medium mr-2 w-1/4" htmlFor="description">Description</label>
                    <textarea
                        placeholder="A creature's description"
                        className="bg-transparent w-3/4 placeholder:text-slate-300 border-2 border-solid border-white rounded text-white font-bold p-2"
                        name="description"
                        id="description"
                        defaultValue={creatureContext.creature?.description}
                    />
                </div>
                <div className="flex items-center justify-between bg-red-600 p-2 rounded-lg">
                    <label className="text-white font-medium mr-2 w-1/4" htmlFor="size">Size</label>
                    <select
                        className="bg-transparent w-3/4 border-2 border-solid border-white rounded"
                        name="size"
                        id="size"
                        defaultValue={creatureContext.creature?.size}
                    >
                        <option defaultValue={Size.Tiny}>Tiny</option>
                        <option defaultValue={Size.Small}>Small</option>
                        <option defaultValue={Size.Medium}>Medium</option>
                        <option defaultValue={Size.Large}>Large</option>
                        <option defaultValue={Size.Huge}>Huge</option>
                        <option defaultValue={Size.Gargantuan}>Gargantuan</option>
                    </select>
                </div>
                <div className="flex items-center justify-between bg-red-600 p-2 rounded-lg">
                    <label className="text-white font-medium mr-2 w-1/4" htmlFor="type">Type</label>
                    <select
                        className="bg-transparent w-3/4 border-2 border-solid border-white rounded"
                        name="type"
                        id="type"
                        defaultValue={creatureContext.creature?.type}
                    >
                        <option defaultValue={Type.Aberration}>Aberration</option>
                        <option defaultValue={Type.Beast}>Beast</option>
                        <option defaultValue={Type.Celestial}>Celestial</option>
                        <option defaultValue={Type.Construct}>Construct</option>
                        <option defaultValue={Type.Dragon}>Dragon</option>
                        <option defaultValue={Type.Elemental}>Elemental</option>
                        <option defaultValue={Type.Fey}>Fey</option>
                        <option defaultValue={Type.Fiend}>Fiend</option>
                        <option defaultValue={Type.Giant}>Giant</option>
                        <option defaultValue={Type.Humanoid}>Humanoid</option>
                        <option defaultValue={Type.Monstrosity}>Monstrosity</option>
                        <option defaultValue={Type.Ooze}>Ooze</option>
                        <option defaultValue={Type.Plant}>Plant</option>
                        <option defaultValue={Type.Undead}>Undead</option>
                    </select>
                </div>
                <div className="flex items-center justify-between bg-red-600 p-2 rounded-lg">
                    <label className="text-white font-medium mr-2 w-1/4" htmlFor="subtype">Subtype</label>
                    <select
                        className="bg-transparent w-3/4 border-2 border-solid border-white rounded"
                        name="subtype"
                        id="subtype"
                        defaultValue={creatureContext.creature?.subtype}
                    >
                        <option defaultValue={undefined}>None</option>
                        <option defaultValue={Type.Aberration}>Aberration</option>
                        <option defaultValue={Type.Beast}>Beast</option>
                        <option defaultValue={Type.Celestial}>Celestial</option>
                        <option defaultValue={Type.Construct}>Construct</option>
                        <option defaultValue={Type.Dragon}>Dragon</option>
                        <option defaultValue={Type.Elemental}>Elemental</option>
                        <option defaultValue={Type.Fey}>Fey</option>
                        <option defaultValue={Type.Fiend}>Fiend</option>
                        <option defaultValue={Type.Giant}>Giant</option>
                        <option defaultValue={Type.Humanoid}>Humanoid</option>
                        <option defaultValue={Type.Monstrosity}>Monstrosity</option>
                        <option defaultValue={Type.Ooze}>Ooze</option>
                        <option defaultValue={Type.Plant}>Plant</option>
                        <option defaultValue={Type.Undead}>Undead</option>
                    </select>
                </div>
                <div className="flex items-center justify-between bg-red-600 p-2 rounded-lg">
                    <label className="text-white font-medium mr-2 w-1/4" htmlFor="alignment">Alignment</label>
                    <select
                        className="bg-transparent w-3/4 border-2 border-solid border-white rounded"
                        name="alignment"
                        id="alignment"
                        defaultValue={creatureContext.creature?.alignment}
                    >
                        <option defaultValue={Alignment.LawfulGood}>Lawful Good</option>
                        <option defaultValue={Alignment.NeutralGood}>Neutral Good</option>
                        <option defaultValue={Alignment.ChaoticGood}>Chaotic Good</option>
                        <option defaultValue={Alignment.LawfulNeutral}>Lawful Neutral</option>
                        <option defaultValue={Alignment.Neutral}>Neutral</option>
                        <option defaultValue={Alignment.ChaoticNeutral}>Chaotic Neutral</option>
                        <option defaultValue={Alignment.LawfulEvil}>Lawful Evil</option>
                        <option defaultValue={Alignment.NeutralEvil}>Neutral Evil</option>
                        <option defaultValue={Alignment.ChaoticEvil}>Chaotic Evil</option>
                    </select>
                </div>
                <div className="flex items-center justify-between bg-red-600 p-2 rounded-lg">
                    <label className="text-white font-medium mr-2 w-1/4" htmlFor="armorClass">Armor Class</label>
                    <input placeholder="Armor Class (AC)"
                        className="bg-transparent w-3/4 placeholder:text-slate-300 border-2 border-solid border-white rounded text-white font-bold p-2"
                        type="number"
                        name="armorClass"
                        id="armorClass"
                        defaultValue={creatureContext.creature?.armorClass}

                    />
                </div>
                <div className="flex items-center justify-between bg-red-600 p-2 rounded-lg">
                    <label className="text-white font-medium mr-2 w-1/4" htmlFor="hitPoints">Hit Points</label>
                    <input placeholder="Fill in the hitdice for the amount of hitpoints"
                        className="bg-transparent w-3/4 placeholder:text-slate-300 border-2 border-solid border-white rounded text-white font-bold p-2"
                        type="number"
                        name="hitPoints"
                        id="hitPoints"
                        defaultValue={creatureContext.creature?.hitPoints}
                    />
                </div>
                <div className="flex items-center justify-between bg-red-600 p-2 rounded-lg">
                    <label className="text-white font-medium mr-2 w-1/4" htmlFor="hitDice">Hit Dice</label>
                    <div className="w-3/4">
                        <input placeholder="Amount of dice" className="bg-transparent w-2/4 placeholder:text-slate-300 border-2 border-solid border-white rounded text-white font-bold p-2"
                            type="text"
                            name="hitDice"
                            id="hitDice"
                            defaultValue={creatureContext.creature?.hitDice.diceCount}
                        />
                        <input placeholder="Amount of dice sides (4, 6, 8, 10, 12, 20, 100)" className="bg-transparent w-2/4 placeholder:text-slate-300 border-2 border-solid border-white rounded text-white font-bold p-2"
                            type="number"
                            name="hitDice"
                            id="hitDice"
                            defaultValue={creatureContext.creature?.hitDice.diceSides}
                            pattern="^(4|6|8|10|12|20|100)$"
                        />
                    </div>
                </div>
                <div className="flex items-center justify-between bg-red-600 p-2 rounded-lg">
                    <label className="text-white font-medium mr-2 w-1/4" htmlFor="speed">Speed</label>
                    <div className="w-3/4 flex">
                        <div className="flex">
                            <input placeholder="Walk speed (ft)" className="bg-transparent w-1/5 placeholder:text-slate-300 border-2 border-solid border-white rounded text-white font-bold p-2"
                                type="number"
                                name="speed"
                                id="speed"
                                min="0"
                                defaultValue={creatureContext.creature?.speed.walk}
                                step="5"
                            />
                            <input placeholder="Swim speed (ft)" className="bg-transparent w-1/5 placeholder:text-slate-300 border-2 border-solid border-white rounded text-white font-bold p-2"
                                type="number"
                                name="speed"
                                id="speed"
                                min="0"
                                defaultValue={creatureContext.creature?.speed.swim}
                                step="5"
                            />
                            <input placeholder="Fly speed (ft)" className="bg-transparent w-1/5 placeholder:text-slate-300 border-2 border-solid border-white rounded text-white font-bold p-2"
                                type="number"
                                name="speed"
                                id="speed"
                                min="0"
                                defaultValue={creatureContext.creature?.speed.fly}
                                step="5"
                            />
                            <input placeholder="Climb speed (ft)" className="bg-transparent w-1/5 placeholder:text-slate-300 border-2 border-solid border-white rounded text-white font-bold p-2"
                                type="number"
                                name="speed"
                                id="speed"
                                min="0"
                                defaultValue={creatureContext.creature?.speed.climb}
                                step="5"
                            />
                            <input placeholder="Burrow speed (ft)" className="bg-transparent w-1/5 placeholder:text-slate-300 border-2 border-solid border-white rounded text-white font-bold p-2"
                                type="number"
                                name="speed"
                                id="speed"
                                min="0"
                                defaultValue={creatureContext.creature?.speed.burrow}
                                step="5"
                            />
                        </div>
                    </div>
                </div><div className="flex items-center justify-between bg-red-600 p-2 rounded-lg">
                    <label className="text-white font-medium mr-2 w-1/4" htmlFor="strength">Strength</label>
                    <input placeholder="Strength (STR)"
                        className="bg-transparent w-3/4 placeholder:text-slate-300 border-2 border-solid border-white rounded text-white font-bold p-2"
                        type="number"
                        name="strength"
                        id="strength"
                        defaultValue={creatureContext.creature?.strength}
                        min="1"
                        max="20"
                    />
                </div>
                <div className="flex items-center justify-between bg-red-600 p-2 rounded-lg">
                    <label className="text-white font-medium mr-2 w-1/4" htmlFor="dexterity">Dexterity</label>
                    <input placeholder="Dexterity (DEX)"
                        className="bg-transparent w-3/4 placeholder:text-slate-300 border-2 border-solid border-white rounded text-white font-bold p-2"
                        type="number"
                        name="dexterity"
                        id="dexterity"
                        defaultValue={creatureContext.creature?.dexterity}
                        min="1"
                        max="20"
                    />
                </div>
                <div className="flex items-center justify-between bg-red-600 p-2 rounded-lg">
                    <label className="text-white font-medium mr-2 w-1/4" htmlFor="constitution">Constitution</label>
                    <input placeholder="Constitution (CON)"
                        className="bg-transparent w-3/4 placeholder:text-slate-300 border-2 border-solid border-white rounded text-white font-bold p-2"
                        type="number"
                        name="constitution"
                        id="constitution"
                        defaultValue={creatureContext.creature?.constitution}
                        min="1"
                        max="20"
                    />
                </div>
                <div className="flex items-center justify-between bg-red-600 p-2 rounded-lg">
                    <label className="text-white font-medium mr-2 w-1/4" htmlFor="intelligence">Intelligence</label>
                    <input placeholder="Intelligence (INT)"
                        className="bg-transparent w-3/4 placeholder:text-slate-300 border-2 border-solid border-white rounded text-white font-bold p-2"
                        type="number"
                        name="intelligence"
                        id="intelligence"
                        defaultValue={creatureContext.creature?.intelligence}
                        min="1"
                        max="20"
                    />
                </div>
                <div className="flex items-center justify-between bg-red-600 p-2 rounded-lg">
                    <label className="text-white font-medium mr-2 w-1/4" htmlFor="wisdom">Wisdom</label>
                    <input placeholder="Wisdom (WIS)"
                        className="bg-transparent w-3/4 placeholder:text-slate-300 border-2 border-solid border-white rounded text-white font-bold p-2"
                        type="number"
                        name="wisdom"
                        id="wisdom"
                        defaultValue={creatureContext.creature?.wisdom}
                        min="1"
                        max="20"
                    />
                </div>
                <div className="flex items-center justify-between bg-red-600 p-2 rounded-lg">
                    <label className="text-white font-medium mr-2 w-1/4" htmlFor="charisma">Charisma</label>
                    <input placeholder="Charisma (CHA)"
                        className="bg-transparent w-3/4 placeholder:text-slate-300 border-2 border-solid border-white rounded text-white font-bold p-2"
                        type="number"
                        name="charisma"
                        id="charisma"
                        defaultValue={creatureContext.creature?.charisma}
                        min="1"
                        max="20"
                    />
                </div>
                <div className="flex items-center justify-between bg-red-600 p-2 rounded-lg">
                    <label className="text-white font-medium mr-2 w-1/4" htmlFor="proficiencies">Proficiencies</label>
                    <input placeholder="Proficiencies"
                        className="bg-transparent w-3/4 placeholder:text-slate-300 border-2 border-solid border-white rounded text-white font-bold p-2"
                        type="text"
                        name="proficiencies"
                        id="proficiencies"
                    />
                </div>
                <div className="flex items-center justify-between bg-red-600 p-2 rounded-lg">
                    <label className="text-white font-medium mr-2 w-1/4" htmlFor="damageVulnerabilities">Damage Vulnerabilities</label>
                    <input placeholder="Damage Vulnerabilities"
                        className="bg-transparent w-3/4 placeholder:text-slate-300 border-2 border-solid border-white rounded text-white font-bold p-2"
                        type="text"
                        name="damageVulnerabilities"
                        id="damageVulnerabilities"
                    />
                </div>
                <div className="flex items-center justify-between bg-red-600 p-2 rounded-lg">
                    <label className="text-white font-medium mr-2 w-1/4" htmlFor="damageResistances">Damage Resistances</label>
                    <input placeholder="Damage Resistances"
                        className="bg-transparent w-3/4 placeholder:text-slate-300 border-2 border-solid border-white rounded text-white font-bold p-2"
                        type="text"
                        name="damageResistances"
                        id="damageResistances"
                    />
                </div>
                <div className="flex items-center justify-between bg-red-600 p-2 rounded-lg">
                    <label className="text-white font-medium w-1/4 mr-2 w-1/4" htmlFor="damageImmunities">Damage Immunities</label>
                    <input placeholder="Damage Immunities"
                        className="bg-transparent w-3/4 placeholder:text-slate-300 border-2 border-solid border-white rounded text-white font-bold p-2"
                        type="text"
                        name="damageImmunities"
                        id="damageImmunities"
                    />
                </div>
                <div className="flex items-center justify-between bg-red-600 p-2 rounded-lg">
                    <label className="text-white font-medium mr-2 w-1/4" htmlFor="conditionImmunities">Condition Immunities</label>
                    <input placeholder="Condition Immunities"
                        className="bg-transparent w-3/4 placeholder:text-slate-300 border-2 border-solid border-white rounded text-white font-bold p-2"
                        type="text"
                        name="conditionImmunities"
                        id="conditionImmunities"
                    />
                </div>
                <div className="flex items-center justify-between bg-red-600 p-2 rounded-lg">
                    <label className="text-white mr-2 w-1/4" htmlFor="senses">Senses</label>
                    <input placeholder="Senses"
                        className="bg-transparent w-3/4 placeholder:text-slate-300 border-2 border-solid border-white rounded text-white font-bold p-2"
                        type="text"
                        name="senses"
                        id="senses"
                    />
                </div>
                <div className="flex items-center justify-between bg-red-600 p-2 rounded-lg">
                    <label className="text-white mr-2 w-1/4" htmlFor="languages">Languages</label>
                    <input placeholder="Languages"
                        className="bg-transparent w-3/4 placeholder:text-slate-300 border-2 border-solid border-white rounded text-white font-bold p-2"
                        type="text"
                        name="languages"
                        id="languages"
                    />
                </div>
                <div className="flex items-center justify-between bg-red-600 p-2 rounded-lg">
                    <label className="text-white mr-2 w-1/4" htmlFor="challengeRating">Challenge Rating</label>
                    {/* Rating, experience these are tied to eachother 1/4 = 50xp 1/2 = 100xp 1 = 200xp */}
                    {/* A select for all the options */}
                    <select
                        className="bg-transparent w-3/4 placeholder:text-slate-300 border-2 border-solid border-white rounded text-white font-bold p-2"
                        name="challengeRating"
                        id="challengeRating"
                    >
                        <option value="0">0 - 10xp</option>
                        <option value="1/8">1/8 - 25xp</option>
                        <option value="1/4">1/4 - 50xp</option>
                        <option value="1/2">1/2 - 100xp</option>
                        <option value="1">1 - 200xp</option>
                        <option value="2">2 - 450xp</option>
                        <option value="3">3 - 700xp</option>
                        <option value="4">4 - 1,100xp</option>
                        <option value="5">5 - 1,800xp</option>
                        <option value="6">6 - 2,300xp</option>
                        <option value="7">7 - 2,900xp</option>
                        <option value="8">8 - 3,900xp</option>
                        <option value="9">9 - 5,000xp</option>
                        <option value="10">10 - 5,900xp</option>
                        <option value="11">11 - 7,200xp</option>
                        <option value="12">12 - 8,400xp</option>
                        <option value="13">13 - 10,000xp</option>
                        <option value="14">14 - 11,500xp</option>
                        <option value="15">15 - 13,000xp</option>
                        <option value="16">16 - 15,000xp</option>
                        <option value="17">17 - 18,000xp</option>
                        <option value="18">18 - 20,000xp</option>
                        <option value="19">19 - 22,000xp</option>
                        <option value="20">20 - 25,000xp</option>
                        <option value="21">21 - 33,000xp</option>
                        <option value="22">22 - 41,000xp</option>
                        <option value="23">23 - 50,000xp</option>
                        <option value="24">24 - 62,000xp</option>
                        <option value="25">25 - 75,000xp</option>
                        <option value="26">26 - 90,000xp</option>
                        <option value="27">27 - 105,000xp</option>
                        <option value="28">28 - 120,000xp</option>
                        <option value="29">29 - 135,000xp</option>
                        <option value="30">30 - 155,000xp</option>
                    </select>
                </div>
                <div className="flex items-center justify-between bg-red-600 p-2 rounded-lg">
                    <label className="text-white mr-2 w-1/4" htmlFor="traits">Traits</label>
                    <input placeholder="Traits"
                        className="bg-transparent w-3/4 placeholder:text-slate-300 border-2 border-solid border-white rounded text-white font-bold p-2"
                        type="text"
                        name="traits"
                        id="traits"
                    />
                </div>
                <div className="flex items-center justify-between bg-red-600 p-2 rounded-lg">
                    <label className="text-white mr-2 w-1/4" htmlFor="actions">Actions</label>
                    <input placeholder="Actions"
                        className="bg-transparent w-3/4 placeholder:text-slate-300 border-2 border-solid border-white rounded text-white font-bold p-2"
                        type="text"
                        name="actions"
                        id="actions"
                    />
                </div>
                <div className="flex items-center justify-between bg-red-600 p-2 rounded-lg">
                    <label className="text-white mr-2 w-1/4" htmlFor="legendaryActions">Legendary Actions</label>
                    <input placeholder="Legendary Actions"
                        className="bg-transparent w-3/4 placeholder:text-slate-300 border-2 border-solid border-white rounded text-white font-bold p-2"
                        type="text"
                        name="legendaryActions"
                        id="legendaryActions"
                    />
                </div>
                <div className="flex justify-center">
                    <button className="bg-red-600 hover:bg-red-800 w-3/4 text-white font-bold p-2 my-3 rounded-lg">Submit</button>
                </div>
            </form>
        </div>
    );
}

