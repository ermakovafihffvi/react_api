import React from "react";

function AnimalFacts({facts}) {
    //console.log(facts);
    return (
        <>
        {facts.map((fact) => (
                <div key={fact.id}>
                    <b>{fact.name}</b>
                </div>
        ))}
        </>
    );
}

export default AnimalFacts;