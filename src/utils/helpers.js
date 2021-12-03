export function getRandomInt(min, max) {
   min = Math.ceil(min);
   max = Math.floor(max);
   return Math.floor(Math.random() * (max + 1 - min) + min); //max is normally exclusive, min is inclusive, so +1 allows you to include the max.
}

export function safelyParseJson(str) {
   try {
      JSON.parse(str);
   } catch {
      return str;
   }
   return JSON.parse(str);
}
