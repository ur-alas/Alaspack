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
