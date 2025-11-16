ServerEvents.recipes((event) => {
  event.remove({ mod: "yttr" }); //remove yttr recipes
  //restore yttrium pressure plate recipes
  event.remove({ output: "#yttr:antler_potion" }); //not working for some godforsaken reason
  //create recipes
  //gadolinite -> crushed yttrium recipes
  event.recipes.create.crushing(
    [
      "kubejs:crushed_raw_yttrium",
      Item.of("create:crushed_raw_iron").withChance(0.25),
      Item.of("create:experience_nugget").withChance(0.75),
    ],
    "yttr:raw_gadolinite"
  );
  event.recipes.create.crushing(
    [
      "kubejs:crushed_raw_yttrium",
      Item.of("kubejs:crushed_raw_yttrium").withChance(0.75),
      Item.of("create:crushed_raw_iron").withChance(0.5),
      Item.of("create:experience_nugget").withChance(0.75),
      Item.of("minecraft:cobblestone").withChance(0.12),
    ],
    "yttr:gadolinite"
  );
  event.recipes.create.crushing(
    [
      "2x kubejs:crushed_raw_yttrium",
      Item.of("kubejs:crushed_raw_yttrium").withChance(0.25),
      Item.of("create:crushed_raw_iron").withChance(0.5),
      Item.of("create:experience_nugget").withChance(0.75),
      Item.of("minecraft:deepslate").withChance(0.12),
    ],
    "yttr:deepslate_gadolinite"
  );
  event.recipes.create.crushing(
    [
      "9x kubejs:crushed_raw_yttrium",
      Item.of("9x create:crushed_raw_iron").withChance(0.5),
      Item.of("9x create:experience_nugget").withChance(0.75),
    ],
    "yttr:raw_gadolinite_block"
  );

  //crushed yttrium -> ingots recipes
  event.recipes.create.splashing(
    [
      "9x yttr:yttrium_nugget",
      Item.of("4x minecraft:iron_nugget").withChance(0.75),
    ],
    "kubejs:crushed_raw_yttrium"
  );
  event
    .smelting("yttr:yttrium_ingot", "kubejs:crushed_raw_yttrium")
    .xp(0.7)
    .cookingTime(200);
  event
    .blasting("yttr:yttrium_ingot", "kubejs:crushed_raw_yttrium")
    .xp(0.7)
    .cookingTime(100);

  //yttrium parts
  event.recipes.create.pressing("kubejs:yttrium_plate", "yttr:yttrium_ingot");
  event.custom({
    type: "createaddition:rolling",
    ingredients: [{ item: "yttr:yttrium_ingot" }],
    result: { item: "kubejs:yttrium_rod", count: 2 },
  });
  // bedrock breaker spike = diamond + yttrium + lava + superheated
  event.recipes.create
    .mixing("kubejs:hardened_diamond_spike", [
      "minecraft:diamond",
      "2x yttr:yttrium_ingot",
      Fluid.of("minecraft:lava"),
    ])
    .superheated();
  event.recipes.create.mechanical_crafting(
    "yttr:bedrock_smasher",
    ["     ", " AAA ", "AACAA", " BCB ", "  B  "],
    {
      A: "minecraft:obsidian",
      B: "kubejs:hardened_diamond_spike",
      C: "kubejs:yttrium_rod",
    }
  );

  event.recipes.create.deploying(
    Item.of("yttr:ammo_can", { Shots: 1024, Mode: "DAMAGE" }),
    ["kubejs:yttrium_bolts"]
  );

  const cartridgeTransitional = "kubejs:incomplete_cartridge"; // Making a constant to store the transitional item makes the code more readable

  event.recipes.create.mechanical_crafting(
    "4x kubejs:yttrium_beam",
    [" A ", " B ", " B "],
    {
      A: "kubejs:yttrium_rod",
      B: "minecraft:blaze_powder",
    }
  );

  event.recipes.create.pressing(
    "kubejs:yttrium_plate",
    cartridgeTransitional
  );

  event.recipes.create
    .sequenced_assembly(
      // Outputs:
      [
        Item.of("kubejs:beam_cartridge"), // Main output, will appear in JEI as the result
      ],
      // Input:
      cartridgeTransitional,
      // Sequence:
      [
        // The transitional item is a constant, that is 'kubejs:incomplete_spore_blossom' and is used during the intermediate stages of the assembly.
        // Like a normal recipe function, is used as a sequence step in this array. Input and output have the transitional item.
        event.recipes.create.deploying(cartridgeTransitional, [
          cartridgeTransitional,
          "kubejs:yttrium_beam",
        ]),
        event.recipes.create.deploying(cartridgeTransitional, [
          cartridgeTransitional,
          "kubejs:yttrium_beam",
        ]),
        event.recipes.create.deploying(cartridgeTransitional, [
          cartridgeTransitional,
          "kubejs:yttrium_beam",
        ]),
        event.recipes.create.deploying(cartridgeTransitional, [
          cartridgeTransitional,
          "kubejs:yttrium_beam",
        ]),
      ]
    )
    .transitionalItem(cartridgeTransitional) // Set the transitional item
    .loops(8); // Set the number of loops

  event.recipes.create.pressing(
    Item.of("yttr:ammo_can", { Shots: 1024, Mode: "DAMAGE" }),
    ["kubejs:beam_cartridge", "yttr:empty_ammo_can"]
  );

  event.recipes.create.deploying(
    "kubejs:explode_yttrium_beam",
    ["minecraft:tnt", "kubejs:yttrium_beam"]
  );


  event.recipes.create
    .sequenced_assembly( // Set the transitional item
      [
        Item.of("kubejs:explode_cartridge"),
      ],
      cartridgeTransitional,
      [
        event.recipes.create.deploying(cartridgeTransitional, [
          cartridgeTransitional,
          "kubejs:explode_yttrium_beam",
        ]),
        event.recipes.create.deploying(cartridgeTransitional, [
          cartridgeTransitional,
          "kubejs:explode_yttrium_beam",
        ]),
        event.recipes.create.deploying(cartridgeTransitional, [
          cartridgeTransitional,
          "kubejs:explode_yttrium_beam",
        ]),
        event.recipes.create.deploying(cartridgeTransitional, [
          cartridgeTransitional,
          "kubejs:explode_yttrium_beam",
        ]),
      ]
    )
    .transitionalItem(cartridgeTransitional)
    .loops(8);

  event.recipes.create.pressing(
    Item.of("yttr:ammo_can", { Shots: 1024, Mode: "EXPLODE"}),
    ["kubejs:explode_cartridge", "yttr:empty_ammo_can"]
  );

  //rifle canister nbt:
  //Shots: 0-1024
  //Mode: DAMAGE, EXPLODE, FIRE, TELEPORT, LIGHT, VOID
  //empty rifle canister recipe tbd
  //beam rifle canister
  //explode rifle canister
  //fire rifle canister
  //teleport rifle canister
  //illumination rifle canister
  //void rifle canister
  event.shaped(
    Item.of("yttr:ammo_can", { Shots: 1024, Mode: "DAMAGE" }),
    ["A B", " C ", "B A"],
    {
      A: "minecraft:flint",
      B: "minecraft:gunpowder",
      C: Item.of("yttr:empty_ammo_can"),
    }
  );
});
//ctrl alt c for fancymenu bar
// disabled all logistics blocks from yttr
