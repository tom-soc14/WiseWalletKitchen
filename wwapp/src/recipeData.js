import chickenRice from "./img/chicken_rice.jpeg";
import spaghettiBol from "./img/Spaghetti_Bolognese.jpeg";
import salmonSauce from "./img/Salmon_Sauce.jpeg";
import vegetableStir from "./img/Vegetable_Stir_Fry.jpeg";
import mangoSalsa from "./img/mango_salsa.jpeg";
import beanRice from "./img/beanRiceBurrito.jpeg";
import tunaPasta from "./img/Tuna_Pasta.jpeg";

//DATA PLAN
// Get more data with the following credientials:
// Establish 3 different Recipe Types: Saver, Classic, Premium
// Min - Max: Saver: (£3-£5), Classic:
// + 7 days of each Recipe plan
// + set a minimum and maximum cost per day for each plan

// STRETCH GOALS
// Remove - HouseholdNo => per person quanitity/cost
// + Add prices for individual items in the ingredients array PER PERSON
// + Have the ingredients prices, dayly cost and weekly cost update

let recipeData = [
  {
    RecipeName: "Chicken and rice",
    RecipeID: "12345",
    RecipeType: "Saver",
    HouseholdNo: "4",
    PrepTime: "10 minutes",
    CookingTime: "45 minutes",
    Price: 3.51,
    Photo: chickenRice,
    PhotoAlt: "Description of PHOTOURL",
    Vegetarian: "False",
    GlutenFree: "True",
    Ingredients: [
      {
        Name: "Chicken",
        IngredientId: "1",
        Amount: "500g",
      },
      {
        Name: "Rice",
        IngredientId: "2",
        Amount: "350g",
      },
    ],
    Instructions: [
      "1. Cook the chicken in the oven until golden brown, this can take around 45 minutes at gas 200C",
      "2. The rice can be boiled for 20 minutes, server together and enjoy.",
    ],
  },
  {
    RecipeName: "Spaghetti Bolognese",
    RecipeID: "67890",
    RecipeType: "Saver",
    HouseholdNo: "4",
    PrepTime: "15 minutes",
    CookingTime: "30 minutes",
    Price: 5.05,
    Photo: spaghettiBol,
    PhotoAlt: "Description of PHOTOURL",
    Vegetarian: "False",
    GlutenFree: "False",
    Ingredients: [
      {
        Name: "Ground beef",
        IngredientId: "3",
        Amount: "500g",
      },
      {
        Name: "Spaghetti",
        IngredientId: "4",
        Amount: "300g",
      },
      {
        Name: "Tomato sauce",
        IngredientId: "5",
        Amount: "400g",
      },
      {
        Name: "Onion",
        IngredientId: "6",
        Amount: "1",
      },
      {
        Name: "Garlic",
        IngredientId: "7",
        Amount: "2 cloves",
      },
    ],
    Instructions: [
      "1. Heat oil in a pan and sauté chopped onions and garlic.",
      "2. Add ground beef and cook until browned.",
      "3. Pour in tomato sauce, simmer for 20 minutes.",
      "4. Cook spaghetti in boiling water until al dente, then serve with the Bolognese sauce.",
    ],
  },
  {
    RecipeName: "Vegetable Stir-Fry",
    RecipeID: "13579",
    RecipeType: "Saver",
    HouseholdNo: "2",
    PrepTime: "10 minutes",
    CookingTime: "15 minutes",
    Price: 4.5,
    Photo: vegetableStir,
    PhotoAlt: "Description of PHOTOURL",
    Vegetarian: "True",
    GlutenFree: "True",
    Ingredients: [
      {
        Name: "Broccoli",
        IngredientId: "8",
        Amount: "1 head",
      },
      {
        Name: "Carrots",
        IngredientId: "9",
        Amount: "2",
      },
      {
        Name: "Bell peppers",
        IngredientId: "10",
        Amount: "2",
      },
      {
        Name: "Mushrooms",
        IngredientId: "11",
        Amount: "200g",
      },
      {
        Name: "Soy sauce",
        IngredientId: "12",
        Amount: "2 tablespoons",
      },
    ],
    Instructions: [
      "1. Heat oil in a pan and stir-fry chopped vegetables until tender-crisp.",
      "2. Add soy sauce and cook for a few more minutes.",
      "3. Serve hot with steamed rice or noodles.",
    ],
  },
  {
    RecipeName: "Salmon with Lemon Butter Sauce",
    RecipeID: "24680",
    RecipeType: "Saver",
    HouseholdNo: "2",
    PrepTime: "5 minutes",
    CookingTime: "15 minutes",
    Price: 8.0,
    Photo: salmonSauce,
    PhotoAlt: "Description of PHOTOURL",
    Vegetarian: "False",
    GlutenFree: "True",
    Ingredients: [
      {
        Name: "Salmon fillets",
        IngredientId: "13",
        Amount: "2",
      },
      {
        Name: "Lemon",
        IngredientId: "14",
        Amount: "1",
      },
      {
        Name: "Butter",
        IngredientId: "15",
        Amount: "2 tablespoons",
      },
      {
        Name: "Salt",
        IngredientId: "16",
        Amount: "1/2 teaspoon",
      },
      {
        Name: "Black pepper",
        IngredientId: "17",
        Amount: "1/4 teaspoon",
      },
    ],
    Instructions: [
      "1. Preheat the oven to 200°C. Season salmon fillets with salt and pepper.",
      "2. Melt butter in a pan and squeeze lemon juice into it.",
      "3. Place salmon in a baking dish, pour lemon butter sauce over it.",
      "4. Bake for about 12-15 minutes until salmon is cooked through.",
      "5. Serve with a side of vegetables or salad.",
    ],
  },
  {
    RecipeName: "Mango Salsa",
    RecipeID: "97531",
    RecipeType: "Saver",
    HouseholdNo: "4",
    PrepTime: "15 minutes",
    CookingTime: "0 minutes",
    Price: 3.0,
    Photo: mangoSalsa,
    PhotoAlt: "Description of PHOTOURL",
    Vegetarian: "True",
    GlutenFree: "True",
    Ingredients: [
      {
        Name: "Mango",
        IngredientId: "18",
        Amount: "2",
      },
      {
        Name: "Red bell pepper",
        IngredientId: "19",
        Amount: "1",
      },
      {
        Name: "Red onion",
        IngredientId: "20",
        Amount: "1/4",
      },
      {
        Name: "Cilantro",
        IngredientId: "21",
        Amount: "1/4 cup",
      },
      {
        Name: "Lime",
        IngredientId: "22",
        Amount: "1",
      },
    ],
    Instructions: [
      "1. Peel and dice mangoes, bell pepper, and red onion.",
      "2. Chop cilantro and squeeze lime juice.",
      "3. Mix all ingredients in a bowl and refrigerate for 30 minutes.",
      "4. Serve as a refreshing salsa with tortilla chips or as a topping for grilled meats.",
    ],
  },
  {
    RecipeName: "Tuna Pasta Salad",
    RecipeID: "24681",
    RecipeType: "Saver",
    HouseholdNo: "4",
    PrepTime: "10 minutes",
    CookingTime: "15 minutes",
    Price: 4.5,
    Photo: tunaPasta,
    PhotoAlt: "Description of PHOTOURL",
    Vegetarian: "False",
    GlutenFree: "False",
    Ingredients: [
      {
        Name: "Pasta",
        IngredientId: "23",
        Amount: "250g",
      },
      {
        Name: "Canned tuna",
        IngredientId: "24",
        Amount: "1 can",
      },
      {
        Name: "Cherry tomatoes",
        IngredientId: "25",
        Amount: "1 cup",
      },
      {
        Name: "Cucumber",
        IngredientId: "26",
        Amount: "1",
      },
      {
        Name: "Red onion",
        IngredientId: "27",
        Amount: "1/4",
      },
      {
        Name: "Mayonnaise",
        IngredientId: "28",
        Amount: "3 tablespoons",
      },
      {
        Name: "Lemon juice",
        IngredientId: "29",
        Amount: "1 tablespoon",
      },
      {
        Name: "Salt",
        IngredientId: "30",
        Amount: "1/2 teaspoon",
      },
      {
        Name: "Black pepper",
        IngredientId: "31",
        Amount: "1/4 teaspoon",
      },
    ],
    Instructions: [
      "1. Cook pasta according to package instructions. Drain and let cool.",
      "2. In a large bowl, combine cooked pasta, canned tuna, cherry tomatoes (halved), diced cucumber, and finely chopped red onion.",
      "3. In a separate small bowl, mix mayonnaise, lemon juice, salt, and black pepper to make the dressing.",
      "4. Pour the dressing over the pasta mixture and toss to coat evenly.",
      "5. Chill in the refrigerator for at least 30 minutes before serving.",
    ],
  },
  {
    RecipeName: "Bean and Rice Burritos",
    RecipeID: "97532",
    RecipeType: "Saver",
    HouseholdNo: "4",
    PrepTime: "10 minutes",
    CookingTime: "15 minutes",
    Price: 3.0,
    Photo: beanRice,
    PhotoAlt: "Description of PHOTOURL",
    Vegetarian: "True",
    GlutenFree: "True",
    Ingredients: [
      {
        Name: "Cooked rice",
        IngredientId: "32",
        Amount: "2 cups",
      },
      {
        Name: "Canned black beans",
        IngredientId: "33",
        Amount: "1 can",
      },
      {
        Name: "Tortillas",
        IngredientId: "34",
        Amount: "4",
      },
      {
        Name: "Avocado",
        IngredientId: "35",
        Amount: "1",
      },
      {
        Name: "Lime juice",
        IngredientId: "36",
        Amount: "2 tablespoons",
      },
      {
        Name: "Cilantro",
        IngredientId: "37",
        Amount: "1/4 cup",
      },
      {
        Name: "Salt",
        IngredientId: "38",
        Amount: "1/2 teaspoon",
      },
      {
        Name: "Black pepper",
        IngredientId: "39",
        Amount: "1/4 teaspoon",
      },
    ],
    Instructions: [
      "1. In a bowl, mash the avocado with lime juice, chopped cilantro, salt, and black pepper to make the guacamole.",
      "2. Warm the tortillas in a skillet or microwave.",
      "3. Heat the canned black beans in a saucepan until warmed through.",
      "4. Spread guacamole on each tortilla, then layer with cooked rice and heated black beans.",
      "5. Roll up the tortillas tightly to form burritos. Serve warm.",
    ],
  },
];

export default recipeData;

