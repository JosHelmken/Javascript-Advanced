const huiswerkMaken = (vak, callback) => {
  setTimeout(() => {
    console.log(`Ik ga nu mijn ${vak} huiswerk maken.`);
    callback();
  }, 1000);

  
}

const klaarMetHuiswerk = () => {
  console.log('Kijk Paps/Mams, ik ben klaar met mijn huiswerk!');
}

huiswerkMaken('Wiskunde', klaarMetHuiswerk);