export function controller(...seletores) {
  const elements = seletores.map(seletor =>
    document.querySelector(seletor));
  return function (constructor) {
    const constructorOriginal = constructor;
    const constructorNovo = function () {
      //	guardando	uma	referência	para	a	instânci
      const instance = new constructorOriginal(...elements);
      //	varre	cada	propriedade	da	classe
      Object
        .getOwnPropertyNames(constructorOriginal.prototype)
        .forEach(property => {
          if (Reflect.hasMetadata('bindEvent', instance, property)) {
            //	precisa	fazer	a	associação	do	evento	com	o	método
          }
        });
    }
    constructorNovo.prototype = constructorOriginal.prototype;
    return constructorNovo;
  }
}
function associaEvento(instance, metadado) {
  document
    .querySelector(metadado.selector)
    .addEventListener(metadado.event, event => {
      if (metadado.prevent) event.preventDefault();
      instance[metadado.propertyKey](event);
    });
}
