import './App.css';
import {useState} from "react";
import Axios, * as others from 'axios';  // $ npm install axios
import {v4 as uuidv4} from 'uuid';   // npm install uuid
import Recipe from "./components/Recipe";
import Alert from "./components/Alert";


function App() {
    const [query, setQuery] = useState("");
    const [recipes, setRecipes] = useState([]);
    const [alert, setAlert] = useState("");  // Alert state

    const API_KEY = ""; // ADD YOUR KEY
    const url = `https://api.spoonacular.com/food/products/search?query=${query}&apiKey=${API_KEY}`;


    const getData = async () => {
        if (query !== "") {
            const result = await Axios.get(url);
            if (!result.data.products.length) {
                return setAlert("No food");
            }
            setRecipes(result.data.products);
            setAlert("");
            console.log(result);
            setQuery("");
        } else {
            setAlert("Please enter text");
        }

    }

    const onChange = (e) => {
        setQuery(e.target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        getData();
    }

    return (
        <div className="App">
            <h1 onClick={getData}>Food search</h1>
            <form className="search-form" onSubmit={onSubmit}>
                {alert !== "" && <Alert alert={alert}/>}
                <input
                    type="text"
                    placeholder="Search for Recipes"
                    autoComplete="off"
                    onChange={onChange}
                    value={query}
                ></input>
                <input type="submit" value="search"></input>
            </form>
            <div className="recipes">
                {recipes !== [] && recipes.map(recipe =>
                    <Recipe key={uuidv4()} recipe={recipe}/>)}
            </div>
        </div>
    );
}

export default App;
