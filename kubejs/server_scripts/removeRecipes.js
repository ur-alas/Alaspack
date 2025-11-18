ServerEvents.recipes((event) => {
  event.remove({ mod: "yttr" }); //remove yttr recipes
  //restore yttrium pressure plate recipes
  event.remove({ output: "#yttr:antler_potion" }); //not working for some godforsaken reason
  event.remove({ mod: "createvintageimprovements" }); //remove create vintage additions recipes
})