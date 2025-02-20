import { GoogleGenerativeAI } from "@google/generative-ai";

export default async function GeminiAi(ingredients)
{
    

        const genAI = new GoogleGenerativeAI("AIzaSyCDNwDEVs2H5MAy8iif368xPNsQBo1ijqs");
                const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
                
                const prompt = `
                  
                Give me a recipe based on the ingredients: ${ingredients}.  
The recipe should be in markdown format with a heading, paragraphs, lists, etc.  
For example:

# Simple Apple & Banana Smoothie

This recipe makes a quick and refreshing smoothie using just apples, bananas, honey, and water. Adjust the honey to your preferred sweetness.

**Yields:** 1 serving  
**Prep time:** 5 minutes

## Ingredients

- 1 medium apple, cored and roughly chopped  
- 1 medium banana, peeled and sliced  
- 1 tablespoon honey (or to taste)  
- 1/2 cup water (or more, for desired consistency)

## Equipment

- Blender

## Instructions

1. Combine ingredients: Add the chopped apple, banana slices, honey, and water to a blender.  
2. Blend: Blend on high speed until completely smooth. If the mixture is too thick, add more water one tablespoon at a time until desired consistency is reached.  
3. Taste and adjust: Add more honey if needed for extra sweetness.  
4. Serve: Pour into a glass and enjoy immediately.

              
                `;
                
                const result = await model.generateContent(prompt);
               
                
    return   result.response.text();
}