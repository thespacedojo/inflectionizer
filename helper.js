if (typeof Handlebars !== 'undefined') {
  Handlebars.registerHelper("pluralize", function(number, word) {
    if (number === 0) { number = 'No' }
    if (number === 1) {
      string = number + " " + InflectionJS.apply_rules(word, InflectionJS.singular_rules, InflectionJS.uncountable_words);
    } else {
      string = number + " " + InflectionJS.apply_rules(word, InflectionJS.plural_rules, InflectionJS.uncountable_words);
    }
    return string;
  });
}
