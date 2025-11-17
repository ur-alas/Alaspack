ServerEvents.recipes((event) => {

  const cartridgeTransitional = "kubejs:incomplete_cartridge"; // Making a constant to store the transitional item makes the code more readable

  event.recipes.create.mechanical_crafting( //craft beam
    "4x kubejs:yttrium_beam",
    [" A ", " B ", " B "],
    {
      A: "kubejs:yttrium_rod",
      B: "minecraft:blaze_powder",
    }
  );

  event.recipes.create.pressing( //craft empty cartridge

    cartridgeTransitional,
    "kubejs:yttrium_plate"
  );


  event.recipes.create //craft beam cartridge
    .sequenced_assembly(
      [
        Item.of("kubejs:beam_cartridge"),
      ],
      cartridgeTransitional,
      [
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
    .transitionalItem(cartridgeTransitional)
    .loops(8);

  event.recipes.create.deploying( //craft beam ammo can
    Item.of("yttr:ammo_can", { Shots: 1024, Mode: "DAMAGE" }),
    ["kubejs:beam_cartridge", "yttr:empty_ammo_can"]
  );

  event.recipes.create.deploying( //craft explosive beam
    "kubejs:explode_yttrium_beam",
    ["minecraft:tnt", "kubejs:yttrium_beam"]
  );


  event.recipes.create //craft explode cartridge
    .sequenced_assembly(
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

  event.recipes.create.deploying( //craft explode ammo can
    Item.of("yttr:ammo_can", { Shots: 1024, Mode: "EXPLODE" }),
    ["kubejs:explode_cartridge", "yttr:empty_ammo_can"]
  );

  event.recipes.create.deploying( //craft fire beam
    "kubejs:fire_yttrium_beam",
    ["minecraft:fire_charge", "kubejs:yttrium_beam"]
  );


  event.recipes.create //craft fire cartridge
    .sequenced_assembly(
      [
        Item.of("kubejs:fire_cartridge"),
      ],
      cartridgeTransitional,
      [
        event.recipes.create.deploying(cartridgeTransitional, [
          cartridgeTransitional,
          "kubejs:fire_yttrium_beam",
        ]),
        event.recipes.create.deploying(cartridgeTransitional, [
          cartridgeTransitional,
          "kubejs:fire_yttrium_beam",
        ]),
        event.recipes.create.deploying(cartridgeTransitional, [
          cartridgeTransitional,
          "kubejs:fire_yttrium_beam",
        ]),
        event.recipes.create.deploying(cartridgeTransitional, [
          cartridgeTransitional,
          "kubejs:fire_yttrium_beam",
        ]),
      ]
    )
    .transitionalItem(cartridgeTransitional)
    .loops(8);

  event.recipes.create.deploying( //craft fire ammo can
    Item.of("yttr:ammo_can", { Shots: 1024, Mode: "FIRE" }),
    ["kubejs:fire_cartridge", "yttr:empty_ammo_can"]
  );

  event.recipes.create.deploying( //craft teleport beam
    "kubejs:teleport_yttrium_beam",
    ["minecraft:ender_pearl", "kubejs:yttrium_beam"]
  );


  event.recipes.create //craft teleport cartridge
    .sequenced_assembly(
      [
        Item.of("kubejs:teleport_cartridge"),
      ],
      cartridgeTransitional,
      [
        event.recipes.create.deploying(cartridgeTransitional, [
          cartridgeTransitional,
          "kubejs:teleport_yttrium_beam",
        ]),
        event.recipes.create.deploying(cartridgeTransitional, [
          cartridgeTransitional,
          "kubejs:teleport_yttrium_beam",
        ]),
        event.recipes.create.deploying(cartridgeTransitional, [
          cartridgeTransitional,
          "kubejs:teleport_yttrium_beam",
        ]),
        event.recipes.create.deploying(cartridgeTransitional, [
          cartridgeTransitional,
          "kubejs:teleport_yttrium_beam",
        ]),
      ]
    )
    .transitionalItem(cartridgeTransitional)
    .loops(8);

  event.recipes.create.deploying( //craft teleport ammo can
    Item.of("yttr:ammo_can", { Shots: 1024, Mode: "TELEPORT" }),
    ["kubejs:teleport_cartridge", "yttr:empty_ammo_can"]
  );

  event.recipes.create.deploying( //craft light beam
    "kubejs:light_yttrium_beam",
    ["minecraft:glowstone", "kubejs:yttrium_beam"]
  );


  event.recipes.create //craft light cartridge
    .sequenced_assembly(
      [
        Item.of("kubejs:illumination_cartridge"),
      ],
      cartridgeTransitional,
      [
        event.recipes.create.deploying(cartridgeTransitional, [
          cartridgeTransitional,
          "kubejs:light_yttrium_beam",
        ]),
        event.recipes.create.deploying(cartridgeTransitional, [
          cartridgeTransitional,
          "kubejs:light_yttrium_beam",
        ]),
        event.recipes.create.deploying(cartridgeTransitional, [
          cartridgeTransitional,
          "kubejs:light_yttrium_beam",
        ]),
        event.recipes.create.deploying(cartridgeTransitional, [
          cartridgeTransitional,
          "kubejs:light_yttrium_beam",
        ]),
      ]
    )
    .transitionalItem(cartridgeTransitional)
    .loops(8);

  event.recipes.create.deploying( //craft light ammo can
    Item.of("yttr:ammo_can", { Shots: 1024, Mode: "LIGHT" }),
    ["kubejs:illumination_cartridge", "yttr:empty_ammo_can"]
  );

  event.recipes.create //craft uncured void cartridge
    .sequenced_assembly(
      [
        Item.of("kubejs:uncured_void_cartridge"),
      ],
      cartridgeTransitional,
      [
        event.recipes.create.deploying(cartridgeTransitional, [
          cartridgeTransitional,
          "kubejs:beam_cartridge",
        ]),
        event.recipes.create.deploying(cartridgeTransitional, [
          cartridgeTransitional,
          "kubejs:explode_cartridge",
        ]),
        event.recipes.create.deploying(cartridgeTransitional, [
          cartridgeTransitional,
          "kubejs:fire_cartridge",
        ]),
        event.recipes.create.deploying(cartridgeTransitional, [
          cartridgeTransitional,
          "kubejs:teleport_cartridge",
        ]),
        event.recipes.create.deploying(cartridgeTransitional, [
          cartridgeTransitional,
          "kubejs:illumination_cartridge",
        ]),
        event.recipes.create.filling(
          "kubejs:void_cartridge",
          [Fluid.of("yttr:void"), cartridgeTransitional]
        )
      ]
    )
    .transitionalItem(cartridgeTransitional)
    .loops(1);

  event.recipes.create.compacting( //craft void cartridge
    ["kubejs:void_cartridge"],
    [Fluid.of("yttr:void"), "kubejs:uncured_void_cartridge"]
  ).superheated();

  event.recipes.create.deploying( //craft void ammo can
    Item.of("yttr:ammo_can", { Shots: 1024, Mode: "VOID" }),
    ["kubejs:void_cartridge", "yttr:empty_ammo_can"]
  );

});
//ctrl alt c for fancymenu bar
// disabled all logistics blocks from yttr
