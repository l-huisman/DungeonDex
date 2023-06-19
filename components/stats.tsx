import React from 'react';

interface Props {
    monster: {
        armorClass: number;
        hitPoints: number;
        speed: string[];
        strength: number;
        dexterity: number;
        constitution: number;
        intelligence: number;
        wisdom: number;
        charisma: number;
        skills: string[];
        senses: string[];
        languages: string[];
        challenge: string;
        experience: number;
    };

}

const Stats: React.FC<Props> = ({ monster }) => {
    return (
        <div className="flex flex-col items-center justify-center">
            <div className="flex flex-row items-center justify-center">
                <div className="flex flex-col items-center justify-center">
                    <p className="text-2xl text-center">Armor Class: {monster.armorClass}</p>
                    <p className="text-2xl text-center">Hit Points: {monster.hitPoints}</p>
                    <p className="text-2xl text-center">Speed: {monster.speed}</p>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <p className="text-2xl text-center">Strength: {monster.strength}</p>
                    <p className="text-2xl text-center">Dexterity: {monster.dexterity}</p>
                    <p className="text-2xl text-center">Constitution: {monster.constitution}</p>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <p className="text-2xl text-center">Intelligence: {monster.intelligence}</p>
                    <p className="text-2xl text-center">Wisdom: {monster.wisdom}</p>
                    <p className="text-2xl text-center">Charisma: {monster.charisma}</p>
                </div>
            </div>
            <div className="flex flex-row items-center justify-center">
                <div className="flex flex-col items-center justify-center">
                    <p className="text-2xl text-center">Skills: {monster.skills}</p>
                    <p className="text-2xl text-center">Senses: {monster.senses}</p>
                    <p className="text-2xl text-center">Languages: {monster.languages}</p>
                    <p className="text-2xl text-center">Challenge: {monster.challenge}</p>
                    <p className="text-2xl text-center">Experience: {monster.experience} xp</p>
                </div>
            </div>
        </div>
    );
}

export default Stats;