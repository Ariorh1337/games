var sentences = [
  "the",
  "be",
  "to",
  "of",
  "and",
  "a",
  "in",
  "that",
  "have",
  "it",
  "for",
  "not",
  "on",
  "with",
  "as",
  "you",
  "do",
  "at",
  "this",
  "but",
  "his",
  "by",
  "from",
  "they",
  "we",
  "say",
  "her",
  "she",
  "or",
  "an",
  "will",
  "my",
  "one",
  "all",
  "would",
  "there",
  "their",
  "what",
  "so",
  "up",
  "out",
  "if",
  "about",
  "who",
  "get",
  "which",
  "go",
  "me",
  "when",
  "make",
  "can",
  "like",
  "time",
  "no",
  "just",
  "him",
  "know",
  "take",
  "people",
  "into",
  "year",
  "your",
  "good",
  "some",
  "could",
  "them",
  "see",
  "other",
  "than",
  "then",
  "now",
  "look",
  "only",
  "come",
  "its",
  "over",
  "think",
  "also",
  "back",
  "after",
  "use",
  "two",
  "how",
  "our",
  "work",
  "first",
  "well",
  "way",
  "even",
  "new",
  "want",
  "because",
  "any",
  "these",
  "give",
  "day",
  "most",
  "us",
];

var transcription = {
  "the": "ðəː",
  "be": "biː",
  "to": "to:",
  "of": "of:",
  "and": "and:",
  "a": "a':",
  "in": "in:",
  "that": "ðæt:",
  "have": "həv:",
  "it": "'ɪt:",
  "for": "fə(r)",
  "not": "nɒt",
  "on": "on",
  "with": "w'ɪð",
  "as": "as",
  "you": "ju:",
  "do": "du:",
  "at": "at:",
  "this": "ðɪs",
  "but": "b'ət",
  "his": "h'ɪz",
  "by": "baɪ",
  "from": "frɒm",
  "they": "ðeɪ",
  "we": "wiː",
  "say": "seɪ",
  "her": "h'ɜ(r)",
  "she": "ʃiː",
  "or": "or",
  "an": "an",
  "will": "will",
  "my": "maɪ",
  "one": "w'ʌn",
  "all": "ɔːl",
  "would": "wʊd",
  "there": "ðeə(r)",
  "their": "ðer",
  "what": "wɒt",
  "so": "səʊ",
  "up": "ʌp",
  "out": "aʊt",
  "if": "'ɪf",
  "about": "əˈbaʊt",
  "who": "huː",
  "get": "ɡet",
  "which": "wɪtʃ",
  "go": "ɡəʊ",
  "me": "mɪ",
  "when": "wɛn",
  "make": "meɪk",
  "can": "kæn",
  "like": "laɪk",
  "time": "taɪm",
  "no": "no",
  "just": "dʒʌst",
  "him": "hɪm",
  "know": "nəʊ",
  "take": "teɪk",
  "people": "ˈpiːp(ə)l",
  "into": "ˈɪntə",
  "year": "jɪə",
  "your": "jɔː(r)",
  "good": "ɡʊd",
  "some": "sʌm",
  "could": "kʊd",
  "them": "ðem",
  "see": "siː",
  "other": "'Aðə",
  "than": "ðæn",
  "then": "ð'en",
  "now": "naʊ",
  "look": "lʊk",
  "only": "ˈəʊnlɪ",
  "come": "kʌm",
  "its": "its",
  "over": "ˈəʊvər",
  "think": "'θɪŋk",
  "also": "ˈɔːlsəʊ",
  "back": "bæk",
  "after": "ˈɑːftə",
  "use": "j'uːz",
  "two": "tuː",
  "how": "haʊ",
  "our": "ˈaʊə",
  "work": "wɜːk",
  "first": "fɜːst",
  "well": "wel",
  "way": "w'eɪ",
  "even": "ˈiːvən",
  "new": "njuː",
  "want": "wɒnt",
  "because": "bɪˈkəz",
  "any": "ˈenɪ",
  "these": "ðiːz",
  "give": "ɡ'ɪv",
  "day": "deɪ",
  "most": "m'əʊst",
  "us": "ʌs"
};

const words = {
  "sentences": sentences,
  "transcription": transcription
}

export default words;
