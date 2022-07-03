import AnimalFacts from "./AnimalFacts";
import {useSelector, useDispatch} from "react-redux";
import {getFacts} from "../redux/reducers/animalReducer/animalSelector";
import { useEffect, useState } from "react";
import {loadFacts} from "../redux/reducers/animalReducer/animalReducer";

function AnimalFactsContainer() {
    const facts = useSelector(getFacts);
    const [number, setNumber] = useState(5);
    const dispatch = useDispatch();
    useEffect(() => {
        //console.log(number);
        dispatch(loadFacts(number));
    }, [number]);


    return (
        <>
            <AnimalFacts
            facts = {facts}
            />
        </>
    );
}

export default AnimalFactsContainer;