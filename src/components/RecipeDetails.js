import React, { useEffect, useState } from "react"
import { v4 as uuidv4 } from "uuid";

const RecipeDetails = ({ sum }) => {
    const [summary, setUsers] = useState([])

    const fetchData = async () => {
        const response = await fetch(sum)
        const data = await response.json()
        setUsers(data)
    }

    useEffect(() => {
        fetchData()
    }, [])

    const htmlPart= summary.summary; //from json to html

        return (
            <ul key={uuidv4()} className="sum-list">
                <li className="sum-text" dangerouslySetInnerHTML={ {__html: htmlPart} }></li>
            </ul>
        );
};

export default RecipeDetails;