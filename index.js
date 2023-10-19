function logTwoValues(value1, value2) {
    console.log(`The two values are ${value1} and ${value2}.`);
  }
  function introduction(name) {
    return `Hi, my name is ${name}.`
  }
  function introductionWithLanguage(name, _language) {
    return `Hi, my name is ${name} and I am learning to program in ${_language}.`
  }
  function introductionWithLanguageOptional(name, _language="JavaScript") {
    return `Hi, my name is ${name} and I am learning to program in ${_language}.`
  }