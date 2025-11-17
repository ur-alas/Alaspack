ServerEvents.recipes((event) => {

  event.recipes.create.crushing(
    [
      "yttrCreate:crushed_raw_yttrium",
      Item.of("create:crushed_raw_iron").withChance(0.25),
      Item.of("create:experience_nugget").withChance(0.75),
    ],
    "yttr:raw_gadolinite"
  );
  event.recipes.create.crushing(
    [
      "yttrCreate:crushed_raw_yttrium",
      Item.of("yttrCreate:crushed_raw_yttrium").withChance(0.75),
      Item.of("create:crushed_raw_iron").withChance(0.5),
      Item.of("create:experience_nugget").withChance(0.75),
      Item.of("minecraft:cobblestone").withChance(0.12),
    ],
    "yttr:gadolinite"
  );
  event.recipes.create.crushing(
    [
      "2x yttrCreate:crushed_raw_yttrium",
      Item.of("yttrCreate:crushed_raw_yttrium").withChance(0.25),
      Item.of("create:crushed_raw_iron").withChance(0.5),
      Item.of("create:experience_nugget").withChance(0.75),
      Item.of("minecraft:deepslate").withChance(0.12),
    ],
    "yttr:deepslate_gadolinite"
  );
  event.recipes.create.crushing(
    [
      "9x yttrCreate:crushed_raw_yttrium",
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
    "yttrCreate:crushed_raw_yttrium"
  );
  event
    .smelting("yttr:yttrium_ingot", "yttrCreate:crushed_raw_yttrium")
    .xp(0.7)
    .cookingTime(200);
  event
    .blasting("yttr:yttrium_ingot", "yttrCreate:crushed_raw_yttrium")
    .xp(0.7)
    .cookingTime(100);

  //yttrium parts
  event.recipes.create.pressing("yttrCreate:yttrium_plate", "yttr:yttrium_ingot");
  event.custom({
    type: "createaddition:rolling",
    ingredients: [{ item: "yttr:yttrium_ingot" }],
    result: { item: "yttrCreate:yttrium_rod", count: 2 },
  });
  // bedrock breaker spike = diamond + yttrium + lava + superheated
  event.recipes.create
    .mixing("yttrCreate:hardened_diamond_spike", [
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
      B: "yttrCreate:hardened_diamond_spike",
      C: "yttrCreate:yttrium_rod",
    }
  );

})