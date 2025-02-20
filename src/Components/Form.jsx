import { useState } from "react"
import ClaudeRecipe from "./ClaudeRecipe"
import IngredientList from "./IngredientsList"
import GeminiAi from "/src/geminiAi"
export default function Form()
{
    const [ingredients,setIngredients]=useState([])
    const [recipeShown,setrecipeShown]=useState(false)
    const [recipe,setRecipe]=useState("")
    const [isLoading,setisLoading]=useState(false)

    
    
    function submit(formData)
    {   
        const newingredient=formData.get("ingredient")
    setIngredients((prev)=>[...prev,newingredient])
    }
   async function  showRecipe()
    {
        setisLoading(true)
        const ingredientsList= await GeminiAi(ingredients)
        setRecipe(ingredientsList)
        setrecipeShown(true)
        setisLoading(false)
    }

   
    return(
        <>
        <form action={submit} className="flex justify-center items-center gap-[10px]   mt-[100px] ">
            <input name="ingredient"  className="border-gray-200  outline-none border-2 ml-[10px] h-[50px] rounded-xl w-[60%] bg-white pl-7 caret-black" autoFocus type="text" placeholder="eg : Egg (atleast 4)" />
            <button  className="bg-black rounded-xl text-2xl text-white px-[29px] py-[10px] ">+ add ingredient</button>
        </form>
        {ingredients.length>0?<IngredientList ingredient={ingredients} showRecipe={showRecipe}/>:null}
       
        {recipeShown?<ClaudeRecipe recipe={recipe} isLoading={isLoading}/>:null}
        </>
    )
}
