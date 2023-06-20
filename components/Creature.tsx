import React from "react";
import { ICreature } from "@/interfaces/ICreature";

interface ICreatureFrameProps {
    Creature: ICreature;
}

export const CreatureFrame: React.FC<ICreatureFrameProps> = ({ Creature }) => {
    return (
        <div className="Creature-frame m-3">
            <h2>{Creature.name}</h2>
            <p>{Creature.description}</p>
            <div className="Creature-stats">
                <div className="Creature-stat">
                    <span>Armor Class: </span>
                    <span>{Creature.armorClass}</span>
                </div>
                <div className="Creature-stat">
                    <span>Hit Points: </span>
                    <span>{Creature.hitPoints}</span>
                </div>
                <div className="Creature-stat">
                    <span>Speed: </span>
                    <span>{Creature.speed[0].type} {Creature.speed[0].speed} ft.</span>
                </div>
                <div className="Creature-stat">
                    <span>Challenge Rating: </span>
                    <span>{Creature.challengeRating.value}</span>
                    <span> Xp: </span>
                    <span>{Creature.challengeRating.experience}</span>
                </div>
            </div>
            <div className="Creature-abilities m-3">
                <h3 className="text-lg font-medium mb-2">Abilities</h3>
                <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center justify-between bg-red-600 p-2 rounded-lg">
                        <span className="text-white font-medium">STR</span>
                        <span className="text-white font-bold">{Creature.abilityScores.strength}</span>
                    </div>
                    <div className="flex items-center justify-between bg-red-600 p-2 rounded-lg">
                        <span className="text-white font-medium">DEX</span>
                        <span className="text-white font-bold">{Creature.abilityScores.dexterity}</span>
                    </div>
                    <div className="flex items-center justify-between bg-red-600 p-2 rounded-lg">
                        <span className="text-white font-medium">CON</span>
                        <span className="text-white font-bold">{Creature.abilityScores.constitution}</span>
                    </div>
                    <div className="flex items-center justify-between bg-red-600 p-2 rounded-lg">
                        <span className="text-white font-medium">INT</span>
                        <span className="text-white font-bold">{Creature.abilityScores.intelligence}</span>
                    </div>
                    <div className="flex items-center justify-between bg-red-600 p-2 rounded-lg">
                        <span className="text-white font-medium">WIS</span>
                        <span className="text-white font-bold">{Creature.abilityScores.wisdom}</span>
                    </div>
                    <div className="flex items-center justify-between bg-red-600 p-2 rounded-lg">
                        <span className="text-white font-medium">CHA</span>
                        <span className="text-white font-bold">{Creature.abilityScores.charisma}</span>
                    </div>
                </div>
            </div>
            <div className="Creature-actions m-3">
                <h3 className="text-lg font-medium mb-2">Actions</h3>
                {Creature.actions.map((action, index) => (
                    <div key={index} className="bg-red-600 p-4 rounded-lg mb-4">
                        <h4 className="text-white font-medium mb-2">{action.name}</h4>
                        <p className="text-white">{action.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};