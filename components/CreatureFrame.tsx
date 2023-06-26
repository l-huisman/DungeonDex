import { useContext, useState } from "react";
import { CreatureContext } from "./context/CreatureContext";
import { API_URL } from "@/constants";
import axios from "axios";
import { useSession } from "next-auth/react";

export const CreatureFrame = () => {
    const creature = useContext(CreatureContext);
    const [error, setError] = useState<any>(null);
    const { data: session } = useSession();
    const id = creature.creature?.id;
    const handleDelete = async (id: number) => {
        try {
            await axios.delete(`${API_URL}/creatures/${id}`, {
                headers: {
                    Authorization: `Bearer ${session?.user.token}`,
                },
            });
            creature.setCreature(undefined);
        } catch (error: any) {
            setError(error.data);
        }
    }

    return (
        <>
            {creature.creature ? (
                <div>
                    <div className="Creature-frame m-3">
                        <h2>{creature.creature.name}</h2>
                        <p>{creature.creature.description}</p>
                        <div className="Creature-stats">
                            <div className="Creature-stat">
                                <span>Armor Class: </span>
                                <span>{creature.creature.armorClass}</span>
                            </div>
                            <div className="Creature-stat">
                                <span>Hit Points: </span>
                                <span>{creature.creature.hitPoints}</span>
                            </div>
                            <div className="Creature-stat">
                                <span>Speed: </span>
                                {/* {creature.creature.speed.map((speed, index) => (
                                    <div key={index} className="bg-red-600 p-4 rounded-lg mb-4">
                                        <h4 className="text-white font-medium mb-2">{speed.type}</h4>
                                        <p className="text-white">{speed.speed}ft</p>
                                    </div>
                                ))} */}
                            </div>
                            <div className="Creature-stat">
                                <span>Challenge Rating: </span>
                                <span>{creature.creature.challengeRating.value}</span>
                                <span> Xp: </span>
                                <span>{creature.creature.challengeRating.experience}</span>
                            </div>
                        </div>
                        <div className="Creature-abilities m-3">
                            <h3 className="text-lg font-medium mb-2">Abilities</h3>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="flex items-center justify-between bg-red-600 p-2 rounded-lg">
                                    <span className="text-white font-medium">STR</span>
                                    <span className="text-white font-bold">{creature.creature.abilityScores.strength}</span>
                                </div>
                                <div className="flex items-center justify-between bg-red-600 p-2 rounded-lg">
                                    <span className="text-white font-medium">DEX</span>
                                    <span className="text-white font-bold">{creature.creature.abilityScores.dexterity}</span>
                                </div>
                                <div className="flex items-center justify-between bg-red-600 p-2 rounded-lg">
                                    <span className="text-white font-medium">CON</span>
                                    <span className="text-white font-bold">{creature.creature.abilityScores.constitution}</span>
                                </div>
                                <div className="flex items-center justify-between bg-red-600 p-2 rounded-lg">
                                    <span className="text-white font-medium">INT</span>
                                    <span className="text-white font-bold">{creature.creature.abilityScores.intelligence}</span>
                                </div>
                                <div className="flex items-center justify-between bg-red-600 p-2 rounded-lg">
                                    <span className="text-white font-medium">WIS</span>
                                    <span className="text-white font-bold">{creature.creature.abilityScores.wisdom}</span>
                                </div>
                                <div className="flex items-center justify-between bg-red-600 p-2 rounded-lg">
                                    <span className="text-white font-medium">CHA</span>
                                    <span className="text-white font-bold">{creature.creature.abilityScores.charisma}</span>
                                </div>
                            </div>
                        </div>
                        <div className="Creature-actions m-3">
                            <h3 className="text-lg font-medium mb-2">Actions</h3>
                            {creature.creature.actions.map((action, index) => (
                                <div key={index} className="bg-red-600 p-4 rounded-lg mb-4">
                                    <h4 className="text-white font-medium mb-2">{action.name}</h4>
                                    <p className="text-white">{action.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    {session?.user.token ? (
                        <button className="bg-red-600 p-2 rounded-lg mb-4" onClick={() =>
                            id ? handleDelete(id) : null
                        }> Delete</button>
                    ) : (
                        <div>
                            <button className="bg-red-800 p-2 rounded-lg mb-4" disabled>
                                Delete
                            </button>
                            <p className="text-red-600">You must be logged in to delete a creature.</p>
                        </div>
                    )}
                </div>
            ) : (
                <div>
                    <h1 className="text-4xl text-center">No creature selected yet!</h1>
                </div>
            )}
            {/* Error */}
            {
                error && (
                    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                        <span className="block sm:inline">{JSON.stringify(error)}</span>
                    </div>
                )
            }
        </>
    );
}