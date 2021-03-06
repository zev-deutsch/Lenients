export class Recipes {
    label: string;
    image: string;
    source: string;
    ingredientLines: [];
    calories: number;
    totalTime: number;
    totalWeight: number;

    constructor(args?) {
        this.label = args.recipe.label;
        this.image = args.recipe.image;
        this.source = args.recipe.source;
        this.ingredientLines = args.recipe.ingredientLines;
        this.calories = Math.round(args.recipe.calories);
        this.totalTime = args.recipe.totalTime;
        this.totalWeight = Math.round(args.recipe.totalWeight);
    }
}
