// you can use this file to develop mods ^-^

/*
@name ExampleMod
@version 1.0.0
@author Albi
*/

txml.register(txml.events.sceneChanged, (scene) => {
    if (scene == "ConvenienceStore") {
        txml.debug("ig u are in the store");
    }
});

txml.registerScene("CustomSceneIG", () => {
    return "hi test \n\n{To Pub (45m)|Pub|45}";
});