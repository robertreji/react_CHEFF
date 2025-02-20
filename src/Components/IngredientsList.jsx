export default function IngredientList({ingredient,showRecipe})
{
    const IngredientList=ingredient.map((ingredient,index)=><li key={index}>{ingredient}</li>)
    return(

        <section>
            <h1 className="text-3xl font-bold font-serif mt-4 ml-[40px]">Ingredeints on Hand :</h1>
        <div className="w-full pl-14 pt-10 text-2xl font-bold font-serif">
            {IngredientList}
        </div>
        {IngredientList.length>3?<div className="flex justify-evenly w-[90%] h-[150px] bg-gray-200 rounded-4xl mt-6 ml-[40px]">
            <div className="">
            <h1 className="text-2xl font-bold font-serif mt-10">Ready for a recipe ?</h1>
            <p className="text-gray-400">Generate a recipe from your Ingredeints List ..</p>
            </div>
            <div className="mt-10">
                <button  onClick={showRecipe} className="bg-orange-500 text-2xl text-white font-semibold font-serif px-[20px] py-[10px] rounded-xl">Get recipe</button>
            </div>

        </div>:null}
        </section>
    

        
    )
}