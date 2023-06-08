let recipeDataV2 = [
    // Saver Recipes
    {
      RecipeName: "Spaghetti Bolognese",
      RecipeID: "1001",
      RecipeType: "Saver",
      HouseholdNo: "4",
      PrepTime: "15 minutes",
      CookingTime: "30 minutes",
      Price: [3.00, 4.50, 6.00, 7.50],
      Photo: "spaghettiBolognese",
      PhotoAlt: "Description of PHOTOURL",
      Vegetarian: "False",
      GlutenFree: "False",
      Ingredients: [
        {
          Name: "Ground beef",
          IngredientId: "1",
          Amount: ["500g", "600g", "700g", "800g"],
          Price: [2.00, 3.00, 4.00, 5.00]
        },
        {
          Name: "Onion",
          IngredientId: "2",
          Amount: ["1", "1", "2", "2"],
          Price: [1.00, 1.00, 2.00, 2.00]
        }
      ],
      Instructions: [
        "1. Cook the ground beef in a pan until browned.",
        "2. Add the chopped onions and cook until softened.",
        "3. Pour in the tomato sauce and simmer for 20 minutes.",
        "4. Cook the spaghetti according to the package instructions.",
        "5. Serve the Bolognese sauce over the cooked spaghetti and enjoy."
      ]
    },
    {
      RecipeName: "Chicken Stir-Fry",
      RecipeID: "1002",
      RecipeType: "Saver",
      HouseholdNo: "2",
      PrepTime: "10 minutes",
      CookingTime: "15 minutes",
      Price: [4.00, 6.00, 8.00, 10.00],
      Photo: "chickenStirFry",
      PhotoAlt: "Description of PHOTOURL",
      Vegetarian: "False",
      GlutenFree: "True",
      Ingredients: [
        {
          Name: "Chicken breast",
          IngredientId: "3",
          Amount: ["300g", "400g", "500g", "600g"],
          Price: [2.00, 3.00, 4.00, 5.00]
        },
        {
          Name: "Mixed vegetables",
          IngredientId: "4",
          Amount: ["200g", "300g", "400g", "500g"],
          Price: [2.00, 3.00, 4.00, 5.00]
        }
      ],
      Instructions: [
        "1. Heat oil in a wok or large skillet over high heat.",
        "2. Add the chicken and cook until browned.",
        "3. Add the mixed vegetables and stir-fry for a few minutes.",
        "4. Mix in the sauce and cook for another minute.",
        "5. Serve hot with steamed rice or noodles."
      ]
    },
    {
      RecipeName: "Tuna Salad",
      RecipeID: "1003",
      RecipeType: "Saver",
      HouseholdNo: "2",
      PrepTime: "10 minutes",
      CookingTime: "0 minutes",
      Price: [2.50, 3.50, 4.50, 5.50],
      Photo: "tunaSalad",
      PhotoAlt: "Description of PHOTOURL",
      Vegetarian: "False",
      GlutenFree: "True",
      Ingredients: [
        {
          Name: "Canned tuna",
          IngredientId: "5",
          Amount: ["1 can", "1 can", "1 can", "2 cans"],
          Price: [1.50, 2.50, 3.50, 4.50]
        },
        {
          Name: "Lettuce",
          IngredientId: "6",
          Amount: ["1 head", "1 head", "1 head", "2 heads"],
          Price: [1.00, 1.00, 2.00, 2.00]
        }
      ],
      Instructions: [
        "1. Drain the canned tuna and flake it into a bowl.",
        "2. Wash and tear the lettuce into bite-sized pieces.",
        "3. Mix the tuna and lettuce together in a large bowl.",
        "4. Add your favorite dressing and toss well.",
        "5. Serve immediately as a refreshing salad."
      ]
    },
    {
      RecipeName: "Vegetable Curry",
      RecipeID: "1004",
      RecipeType: "Saver",
      HouseholdNo: "4",
      PrepTime: "15 minutes",
      CookingTime: "25 minutes",
      Price: [4.50, 6.00, 8.00, 9.50],
      Photo: "vegetableCurry",
      PhotoAlt: "Description of PHOTOURL",
      Vegetarian: "True",
      GlutenFree: "True",
      Ingredients: [
        {
          Name: "Mixed vegetables",
          IngredientId: "7",
          Amount: ["500g", "600g", "700g", "800g"],
          Price: [2.50, 3.50, 4.50, 5.50]
        },
        {
          Name: "Coconut milk",
          IngredientId: "8",
          Amount: ["400ml", "400ml", "600ml", "600ml"],
          Price: [2.00, 2.50, 3.00, 3.50]
        }
      ],
      Instructions: [
        "1. Heat oil in a large pan over medium heat.",
        "2. Add the mixed vegetables and cook until tender.",
        "3. Pour in the coconut milk and bring to a simmer.",
        "4. Add the curry paste and stir well to combine.",
        "5. Simmer for 10 minutes, then serve with rice or naan bread."
      ]
    },
    {
      RecipeName: "Egg Fried Rice",
      RecipeID: "1005",
      RecipeType: "Saver",
      HouseholdNo: "2",
      PrepTime: "5 minutes",
      CookingTime: "10 minutes",
      Price: [3.00, 4.50, 5.50, 6.50],
      Photo: "eggFriedRice",
      PhotoAlt: "Description of PHOTOURL",
      Vegetarian: "True",
      GlutenFree: "False",
      Ingredients: [
        {
          Name: "Cooked rice",
          IngredientId: "9",
          Amount: ["2 cups", "2 cups", "3 cups", "3 cups"],
          Price: [2.00, 3.00, 4.00, 5.00]
        },
        {
          Name: "Eggs",
          IngredientId: "10",
          Amount: ["2", "3", "3", "4"],
          Price: [1.00, 1.50, 2.00, 2.50]
        }
      ],
      Instructions: [
        "1. Heat oil in a large skillet or wok over medium heat.",
        "2. Beat the eggs in a small bowl and set aside.",
        "3. Add the cooked rice to the skillet and stir-fry for a few minutes.",
        "4. Push the rice to one side and pour the beaten eggs into the empty space.",
        "5. Scramble the eggs until cooked, then mix with the rice.",
        "6. Season with soy sauce or other seasonings of your choice.",
        "7. Serve hot as a main dish or side dish."
      ]
    },
    {
      RecipeName: "Ham and Cheese Sandwich",
      RecipeID: "1006",
      RecipeType: "Saver",
      HouseholdNo: "1",
      PrepTime: "5 minutes",
      CookingTime: "0 minutes",
      Price: [2.00, 2.50, 3.00, 3.50],
      Photo: "hamCheeseSandwich",
      PhotoAlt: "Description of PHOTOURL",
      Vegetarian: "False",
      GlutenFree: "False",
      Ingredients: [
        {
          Name: "Ham slices",
          IngredientId: "11",
          Amount: ["4", "6", "6", "8"],
          Price: [1.50, 2.00, 2.50, 3.00]
        },
        {
          Name: "Cheese slices",
          IngredientId: "12",
          Amount: ["2", "3", "3", "4"],
          Price: [0.50, 0.50, 0.50, 0.50]
        },
        {
          Name: "Bread slices",
          IngredientId: "13",
          Amount: ["2", "3", "4", "4"],
          Price: [0.50, 1.00, 1.50, 2.00]
        }
      ],
      Instructions: [
        "1. Lay the bread slices on a clean surface.",
        "2. Place ham and cheese slices on one slice of bread.",
        "3. Top with the other bread slice to form a sandwich.",
        "4. Cut the sandwich in half if desired.",
        "5. Serve immediately or pack for a quick meal on the go."
      ]
    },
    {
      RecipeName: "Pasta Primavera",
      RecipeID: "1007",
      RecipeType: "Saver",
      HouseholdNo: "2",
      PrepTime: "10 minutes",
      CookingTime: "20 minutes",
      Price: [3.50, 4.50, 5.50, 6.50],
      Photo: "pastaPrimavera",
      PhotoAlt: "Description of PHOTOURL",
      Vegetarian: "True",
      GlutenFree: "False",
      Ingredients: [
        {
          Name: "Pasta",
          IngredientId: "14",
          Amount: ["200g", "250g", "300g", "350g"],
          Price: [2.00, 2.50, 3.00, 3.50]
        },
        {
          Name: "Assorted vegetables",
          IngredientId: "15",
          Amount: ["2 cups", "3 cups", "3 cups", "4 cups"],
          Price: [1.50, 2.00, 2.50, 3.00]
        }
      ],
      Instructions: [
        "1. Cook the pasta according to the package instructions.",
        "2. In a separate pan, sauté the assorted vegetables until tender.",
        "3. Drain the cooked pasta and add it to the vegetables.",
        "4. Toss well and season with salt and pepper.",
        "5. Serve hot as a light and flavorful pasta dish."
      ]
    },
    // Classic Recipes
    {
      RecipeName: "Beef Stroganoff",
      RecipeID: "2001",
      RecipeType: "Classic",
      HouseholdNo: "4",
      PrepTime: "15 minutes",
      CookingTime: "45 minutes",
      Price: [8.00, 10.00, 12.00, 14.00],
      Photo: "beefStroganoff",
      PhotoAlt: "Description of PHOTOURL",
      Vegetarian: "False",
      GlutenFree: "False",
      Ingredients: [
        {
          Name: "Beef tenderloin",
          IngredientId: "16",
          Amount: ["500g", "600g", "700g", "800g"],
          Price: [6.00, 7.50, 9.00, 10.50]
        },
        {
          Name: "Onion",
          IngredientId: "2",
          Amount: ["1", "1", "2", "2"],
          Price: [1.00, 1.00, 2.00, 2.00]
        },
        {
          Name: "Sour cream",
          IngredientId: "17",
          Amount: ["200g", "200g", "300g", "300g"],
          Price: [1.00, 1.50, 1.50, 2.00]
        }
      ],
      Instructions: [
        "1. Cut the beef tenderloin into thin strips.",
        "2. In a large pan, cook the beef until browned.",
        "3. Add the chopped onions and cook until softened.",
        "4. Stir in the sour cream and simmer for 30 minutes.",
        "5. Serve over cooked rice or egg noodles."
      ]
    },
    {
      RecipeName: "Roast Chicken",
      RecipeID: "2002",
      RecipeType: "Classic",
      HouseholdNo: "4",
      PrepTime: "10 minutes",
      CookingTime: "1 hour 30 minutes",
      Price: [12.00, 15.00, 18.00, 21.00],
      Photo: "roastChicken",
      PhotoAlt: "Description of PHOTOURL",
      Vegetarian: "False",
      GlutenFree: "True",
      Ingredients: [
        {
          Name: "Whole chicken",
          IngredientId: "18",
          Amount: ["1", "1", "1", "1"],
          Price: [10.00, 12.00, 14.00, 16.00]
        },
        {
          Name: "Potatoes",
          IngredientId: "19",
          Amount: ["4", "6", "8", "10"],
          Price: [2.00, 2.50, 3.00, 3.50]
        },
        {
          Name: "Carrots",
          IngredientId: "20",
          Amount: ["4", "6", "8", "10"],
          Price: [1.50, 2.00, 2.50, 3.00]
        }
      ],
      Instructions: [
        "1. Preheat the oven to 180°C (350°F).",
        "2. Place the whole chicken in a roasting pan.",
        "3. Season the chicken with salt, pepper, and herbs.",
        "4. Arrange the potatoes and carrots around the chicken.",
        "5. Roast in the oven for 1 hour and 30 minutes, or until the chicken is cooked through.",
        "6. Serve hot with the roasted vegetables."
      ]
    },
    {
      RecipeName: "Lasagna",
      RecipeID: "2003",
      RecipeType: "Classic",
      HouseholdNo: "6",
      PrepTime: "30 minutes",
      CookingTime: "1 hour",
      Price: [15.00, 18.00, 21.00, 24.00],
      Photo: "lasagna",
      PhotoAlt: "Description of PHOTOURL",
      Vegetarian: "False",
      GlutenFree: "False",
      Ingredients: [
        {
          Name: "Ground beef",
          IngredientId: "1",
          Amount: ["500g", "600g", "700g", "800g"],
          Price: [6.00, 7.50, 9.00, 10.50]
        },
        {
          Name: "Lasagna noodles",
          IngredientId: "21",
          Amount: ["12", "16", "20", "24"],
          Price: [2.00, 3.00, 4.00, 5.00]
        },
        {
          Name: "Tomato sauce",
          IngredientId: "22",
          Amount: ["500g", "600g", "700g", "800g"],
          Price: [2.00, 2.50, 3.00, 3.50]
        }
      ],
      Instructions: [
        "1. Cook the ground beef in a pan until browned.",
        "2. Add the tomato sauce and simmer for 10 minutes.",
        "3. Cook the lasagna noodles according to the package instructions.",
        "4. In a baking dish, layer the noodles, meat sauce, and cheese.",
        "5. Repeat the layers until all ingredients are used.",
        "6. Bake in the oven at 180°C (350°F) for 45 minutes to 1 hour.",
        "7. Let it cool for a few minutes before serving."
      ]
    },
    {
      RecipeName: "Beef Wellington",
      RecipeID: "2004",
      RecipeType: "Classic",
      HouseholdNo: "2",
      PrepTime: "30 minutes",
      CookingTime: "45 minutes",
      Price: [20.00, 25.00, 30.00, 35.00],
      Photo: "beefWellington",
      PhotoAlt: "Description of PHOTOURL",
      Vegetarian: "False",
      GlutenFree: "False",
      Ingredients: [
        {
          Name: "Beef fillet",
          IngredientId: "23",
          Amount: ["500g", "600g", "700g", "800g"],
          Price: [18.00, 21.00, 24.00, 27.00]
        },
        {
          Name: "Puff pastry",
          IngredientId: "24",
          Amount: ["1 sheet", "1 sheet", "2 sheets", "2 sheets"],
          Price: [2.00, 2.50, 4.00, 4.50]
        },
        {
          Name: "Mushrooms",
          IngredientId: "25",
          Amount: ["200g", "250g", "300g", "350g"],
          Price: [1.00, 1.50, 2.00, 2.50]
        }
      ],
      Instructions: [
        "1. Season the beef fillet with salt and pepper.",
        "2. Sear the beef in a hot pan until browned on all sides.",
        "3. In a separate pan, sauté the mushrooms until golden.",
        "4. Roll out the puff pastry and place the beef in the center.",
        "5. Top the beef with the sautéed mushrooms.",
        "6. Wrap the puff pastry around the beef, sealing the edges.",
        "7. Bake in the oven at 200°C (400°F) for 25-30 minutes.",
        "8. Let it rest for a few minutes before slicing."
      ]
    },
    {
      RecipeName: "Chicken Parmesan",
      RecipeID: "2005",
      RecipeType: "Classic",
      HouseholdNo: "4",
      PrepTime: "20 minutes",
      CookingTime: "25 minutes",
      Price: [14.00, 16.00, 18.00, 20.00],
      Photo: "chickenParmesan",
      PhotoAlt: "Description of PHOTOURL",
      Vegetarian: "False",
      GlutenFree: "False",
      Ingredients: [
        {
          Name: "Chicken breasts",
          IngredientId: "26",
          Amount: ["4", "6", "6", "8"],
          Price: [8.00, 10.00, 10.00, 12.00]
        },
        {
          Name: "Breadcrumbs",
          IngredientId: "27",
          Amount: ["1 cup", "1 cup", "1 cup", "1 cup"],
          Price: [1.00, 1.00, 1.00, 1.00]
        },
        {
          Name: "Tomato sauce",
          IngredientId: "22",
          Amount: ["500g", "600g", "700g", "800g"],
          Price: [2.00, 2.50, 3.00, 3.50]
        },
        {
          Name: "Mozzarella cheese",
          IngredientId: "28",
          Amount: ["200g", "200g", "300g", "300g"],
          Price: [3.00, 3.00, 4.00, 4.00]
        }
      ],
      Instructions: [
        "1. Preheat the oven to 200°C (400°F).",
        "2. Flatten the chicken breasts to an even thickness.",
        "3. Coat the chicken with breadcrumbs.",
        "4. In a pan, cook the chicken until browned on both sides.",
        "5. Place the cooked chicken in a baking dish.",
        "6. Pour tomato sauce over the chicken and top with mozzarella cheese.",
        "7. Bake in the oven for 15-20 minutes, or until the cheese is melted and bubbly.",
        "8. Serve hot with spaghetti or garlic bread."
      ]
    },
    // Exclusive Recipes
    {
      RecipeName: "Grilled Salmon",
      RecipeID: "3001",
      RecipeType: "Exclusive",
      HouseholdNo: "2",
      PrepTime: "10 minutes",
      CookingTime: "15 minutes",
      Price: [18.00, 20.00, 22.00, 24.00],
      Photo: "grilledSalmon",
      PhotoAlt: "Description of PHOTOURL",
      Vegetarian: "False",
      GlutenFree: "True",
      Ingredients: [
        {
          Name: "Salmon fillets",
          IngredientId: "29",
          Amount: ["2", "2", "3", "3"],
          Price: [14.00, 16.00, 16.00, 18.00]
        },
        {
          Name: "Lemon",
          IngredientId: "30",
          Amount: ["1", "1", "1", "1"],
          Price: [1.00, 1.00, 1.00, 1.00]
        },
        {
          Name: "Fresh dill",
          IngredientId: "31",
          Amount: ["1 tablespoon", "1 tablespoon", "2 tablespoons", "2 tablespoons"],
          Price: [3.00, 3.00, 3.00, 3.00]
        }
      ],
      Instructions: [
        "1. Preheat the grill to medium-high heat.",
        "2. Season the salmon fillets with salt and pepper.",
        "3. Place the salmon on the grill, skin-side down.",
        "4. Cook for 4-5 minutes on each side, or until the salmon is cooked through.",
        "5. Squeeze fresh lemon juice over the cooked salmon.",
        "6. Sprinkle with chopped dill.",
        "7. Serve hot with a side of steamed vegetables or a salad."
      ]
    },
    {
      RecipeName: "Lobster Thermidor",
      RecipeID: "3002",
      RecipeType: "Exclusive",
      HouseholdNo: "2",
      PrepTime: "20 minutes",
      CookingTime: "30 minutes",
      Price: [30.00, 35.00, 40.00, 45.00],
      Photo: "lobsterThermidor",
      PhotoAlt: "Description of PHOTOURL",
      Vegetarian: "False",
      GlutenFree: "True",
      Ingredients: [
        {
          Name: "Lobster tails",
          IngredientId: "32",
          Amount: ["2", "2", "2", "2"],
          Price: [25.00, 30.00, 30.00, 35.00]
        },
        {
          Name: "Butter",
          IngredientId: "33",
          Amount: ["4 tablespoons", "4 tablespoons", "6 tablespoons", "6 tablespoons"],
          Price: [2.00, 2.00, 3.00, 3.00]
        },
        {
          Name: "White wine",
          IngredientId: "34",
          Amount: ["1/4 cup", "1/4 cup", "1/2 cup", "1/2 cup"],
          Price: [3.00, 3.00, 6.00, 6.00]
        },
        {
          Name: "Dijon mustard",
          IngredientId: "35",
          Amount: ["1 tablespoon", "1 tablespoon", "2 tablespoons", "2 tablespoons"],
          Price: [2.00, 2.00, 4.00, 4.00]
        }
      ],
      Instructions: [
        "1. Preheat the oven to 200°C (400°F).",
        "2. Cut the lobster tails in half lengthwise.",
        "3. In a pan, melt the butter over medium heat.",
        "4. Add the lobster tails and cook until the meat is opaque.",
        "5. Remove the lobster meat from the shells and set aside.",
        "6. In the same pan, add white wine and dijon mustard.",
        "7. Cook until the sauce is thickened.",
        "8. Place the lobster meat back in the shells and spoon the sauce over the top.",
        "9. Bake in the oven for 15 minutes, or until the lobster is heated through and golden on top.",
        "10. Serve hot as a luxurious seafood dish."
      ]
    },
    {
      RecipeName: "Truffle Risotto",
      RecipeID: "3003",
      RecipeType: "Exclusive",
      HouseholdNo: "4",
      PrepTime: "10 minutes",
      CookingTime: "30 minutes",
      Price: [25.00, 30.00, 35.00, 40.00],
      Photo: "truffleRisotto",
      PhotoAlt: "Description of PHOTOURL",
      Vegetarian: "True",
      GlutenFree: "True",
      Ingredients: [
        {
          Name: "Arborio rice",
          IngredientId: "36",
          Amount: ["1 cup", "1 cup", "2 cups", "2 cups"],
          Price: [8.00, 8.00, 16.00, 16.00]
        },
        {
          Name: "Vegetable broth",
          IngredientId: "37",
          Amount: ["4 cups", "4 cups", "6 cups", "6 cups"],
          Price: [4.00, 4.00, 6.00, 6.00]
        },
        {
          Name: "Truffle oil",
          IngredientId: "38",
          Amount: ["2 tablespoons", "2 tablespoons", "3 tablespoons", "3 tablespoons"],
          Price: [10.00, 10.00, 15.00, 15.00]
        }
      ],
      Instructions: [
        "1. In a large saucepan, heat the vegetable broth.",
        "2. In a separate pan, sauté the arborio rice in a bit of olive oil.",
        "3. Add a ladleful of the hot broth to the rice and stir until absorbed.",
        "4. Continue adding the broth, one ladleful at a time, stirring constantly.",
        "5. Cook until the rice is al dente and creamy.",
        "6. Stir in the truffle oil and season with salt and pepper.",
        "7. Let the risotto rest for a few minutes before serving.",
        "8. Serve hot as a decadent vegetarian dish."
      ]
    },
    {
      RecipeName: "Creme Brulee",
      RecipeID: "3004",
      RecipeType: "Exclusive",
      HouseholdNo: "4",
      PrepTime: "15 minutes",
      CookingTime: "1 hour",
      Price: [12.00, 15.00, 18.00, 21.00],
      Photo: "cremeBrulee",
      PhotoAlt: "Description of PHOTOURL",
      Vegetarian: "True",
      GlutenFree: "True",
      Ingredients: [
        {
          Name: "Heavy cream",
          IngredientId: "39",
          Amount: ["2 cups", "2 cups", "3 cups", "3 cups"],
          Price: [6.00, 6.00, 9.00, 9.00]
        },
        {
          Name: "Egg yolks",
          IngredientId: "40",
          Amount: ["6", "6", "8", "8"],
          Price: [3.00, 3.00, 4.00, 4.00]
        },
        {
          Name: "Granulated sugar",
          IngredientId: "41",
          Amount: ["1/2 cup", "1/2 cup", "3/4 cup", "3/4 cup"],
          Price: [3.00, 3.00, 4.00, 4.00]
        },
        {
          Name: "Vanilla extract",
          IngredientId: "42",
          Amount: ["1 teaspoon", "1 teaspoon", "2 teaspoons", "2 teaspoons"],
          Price: [2.00, 2.00, 4.00, 4.00]
        }
      ],
      Instructions: [
        "1. Preheat the oven to 150°C (300°F).",
        "2. In a saucepan, heat the heavy cream until simmering.",
        "3. In a bowl, whisk together the egg yolks, granulated sugar, and vanilla extract.",
        "4. Slowly pour the hot cream into the egg mixture, whisking constantly.",
        "5. Strain the mixture through a fine-mesh sieve.",
        "6. Divide the custard into ramekins or a baking dish.",
        "7. Place the ramekins or dish in a larger baking pan filled with hot water.",
        "8. Bake for 45-60 minutes, or until the custard is set but still jiggly in the center.",
        "9. Remove from the water bath and let the creme brulee cool.",
        "10. Sprinkle a thin layer of granulated sugar over the custard.",
        "11. Caramelize the sugar using a kitchen torch or broil in the oven.",
        "12. Let the caramelized sugar harden before serving.",
        "13. Serve chilled as a classic French dessert."
      ]
    },
    {
      RecipeName: "Beef Wellington with Truffle",
      RecipeID: "3005",
      RecipeType: "Exclusive",
      HouseholdNo: "4",
      PrepTime: "30 minutes",
      CookingTime: "45 minutes",
      Price: [40.00, 45.00, 50.00, 55.00],
      Photo: "beefWellingtonTruffle",
      PhotoAlt: "Description of PHOTOURL",
      Vegetarian: "False",
      GlutenFree: "False",
      Ingredients: [
        {
          Name: "Beef tenderloin",
          IngredientId: "43",
          Amount: ["1.5 kg", "1.5 kg", "2 kg", "2 kg"],
          Price: [35.00, 35.00, 40.00, 40.00]
        },
        {
          Name: "Puff pastry",
          IngredientId: "24",
          Amount: ["2 sheets", "2 sheets", "3 sheets", "3 sheets"],
          Price: [4.00, 4.00, 6.00, 6.00]
        },
        {
          Name: "Mushrooms",
          IngredientId: "25",
          Amount: ["300g", "300g", "400g", "400g"],
          Price: [2.00, 2.00, 3.00, 3.00]
        },
        {
          Name: "Truffle paste",
          IngredientId: "44",
          Amount: ["2 tablespoons", "2 tablespoons", "3 tablespoons", "3 tablespoons"],
          Price: [15.00, 15.00, 20.00, 20.00]
        }
      ],
      Instructions: [
        "1. Season the beef tenderloin with salt and pepper.",
        "2. Sear the beef in a hot pan until browned on all sides.",
        "3. In a separate pan, sauté the mushrooms until golden.",
        "4. Roll out the puff pastry and spread truffle paste on it.",
        "5. Place the seared beef on top of the truffle paste.",
        "6. Spread the sautéed mushrooms over the beef.",
        "7. Wrap the puff pastry around the beef, sealing the edges.",
        "8. Bake in the oven at 200°C (400°F) for 35-40 minutes, or until the pastry is golden brown.",
        "9. Let the beef wellington rest for a few minutes before slicing.",
        "10. Serve hot as a luxurious and flavorful main dish."
      ]
    }
  ];

  export default recipeDataV2;
  

