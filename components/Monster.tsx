import React from "react";
import { IMonster } from "@/interfaces/IMonster";

interface IMonsterFrameProps {
    monster: IMonster;
}

export const MonsterFrame: React.FC<IMonsterFrameProps> = ({ monster }) => {
    return (
        <div className="monster-frame m-3">
            <h2>{monster.name}</h2>
            <p>{monster.description}</p>
            <div className="monster-stats">
                <div className="monster-stat">
                    <span>Armor Class: </span>
                    <span>{monster.armorClass}</span>
                </div>
                <div className="monster-stat">
                    <span>Hit Points: </span>
                    <span>{monster.hitPoints}</span>
                </div>
                <div className="monster-stat">
                    <span>Speed: </span>
                    <span>{monster.speed[0].type} {monster.speed[0].speed} ft.</span>
                </div>
                <div className="monster-stat">
                    <span>Challenge Rating: </span>
                    <span>{monster.challengeRating.value}</span>
                    <span> Xp: </span>
                    <span>{monster.challengeRating.experience}</span>
                </div>
            </div>
            <div className="monster-abilities m-3">
                <h3 className="text-lg font-medium mb-2">Abilities</h3>
                <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center justify-between bg-red-600 p-2 rounded-lg">
                        <span className="text-white font-medium">STR</span>
                        <span className="text-white font-bold">{monster.abilityScores.strength}</span>
                    </div>
                    <div className="flex items-center justify-between bg-red-600 p-2 rounded-lg">
                        <span className="text-white font-medium">DEX</span>
                        <span className="text-white font-bold">{monster.abilityScores.dexterity}</span>
                    </div>
                    <div className="flex items-center justify-between bg-red-600 p-2 rounded-lg">
                        <span className="text-white font-medium">CON</span>
                        <span className="text-white font-bold">{monster.abilityScores.constitution}</span>
                    </div>
                    <div className="flex items-center justify-between bg-red-600 p-2 rounded-lg">
                        <span className="text-white font-medium">INT</span>
                        <span className="text-white font-bold">{monster.abilityScores.intelligence}</span>
                    </div>
                    <div className="flex items-center justify-between bg-red-600 p-2 rounded-lg">
                        <span className="text-white font-medium">WIS</span>
                        <span className="text-white font-bold">{monster.abilityScores.wisdom}</span>
                    </div>
                    <div className="flex items-center justify-between bg-red-600 p-2 rounded-lg">
                        <span className="text-white font-medium">CHA</span>
                        <span className="text-white font-bold">{monster.abilityScores.charisma}</span>
                    </div>
                </div>
            </div>
            <div className="monster-actions m-3">
                <h3 className="text-lg font-medium mb-2">Actions</h3>
                {monster.actions.map((action, index) => (
                    <div key={index} className="bg-red-600 p-4 rounded-lg mb-4">
                        <h4 className="text-white font-medium mb-2">{action.name}</h4>
                        <p className="text-white">{action.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};