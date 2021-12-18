const words = [
  ['production', 'produce', 'product', 'producsion', 'productivity'],
  ['impression', 'impress', 'impressive', 'impressiveness', 'impressivity'],
  ['occupation', 'occupier', 'occupy', 'occupasion', 'occupanity'],
  ['knowledge', 'knowing', 'knowledgeability', 'knowingness', 'know'],
  ['qualification', 'quality', 'qualificator', 'qualifying', 'qualifiness'],
  ['achievement', 'achieve', 'achiever', 'achievability', 'achievation'],
  ['possibility', 'possibilism', 'possible', 'possibleness', 'possibilitate'],
  ['effective', 'effect', 'uneffective', 'effectless', 'effecting'],
  ['famous', 'infamous', 'fame', 'familiar', 'famously'],
  ['criminal', 'crime', 'criminaldom', 'criminality', 'criming'],
  ['disability', 'disablement', 'disable', 'disableness', 'disabling'],
  ['unemployed', 'inemployed', 'employ', 'employer', 'employless'],
  ['savings', 'savior', 'saveness', 'safety', 'savailability'],
  ['guidance', 'guiding', 'guide', 'guidence', 'guideness'],
  ['desirable', 'desiring', 'desirible', 'undesirable', 'desirous'],
  ['commonly', 'common', 'uncommon', 'uncommonly', 'commoner'],
  ['amazing', 'amazed', 'amaze', 'amazingly', 'unamazed'],
  ['illegal', 'nonlegal', 'unlegal', 'unlegally', 'legally'],
  ['careful', 'caring', 'careless', 'care', 'carer'],
  ['tired', 'tiredness', 'tiring', 'tried', 'tire'],
  ['head', 'main', 'teacher', 'best', 'high'],
  ['post', 'card', 'plastic', 'street', 'road'],
  ['heart', 'mind', 'soul', 'mood', 'eye'],
  ['free', 'no', 'less', 'out', 'minus'],
  ['sit', 'stay', 'play', 'go', 'keep'],
  ['rings', 'things', 'golds', 'rounds', 'jewelleries'],
  ['rise', 'up', 'raise', 'rice', 'high'],
  ['sweat', 'warm', 'hoodie', 'long', 'wool'],
  ['case', 'board', 'box', 'chest', 'closet'],
  ['ache', 'pain', 'ill', 'sick', 'illness'],
  ['storm', 'rain', 'think', 'share', 'change'],
  ['sticks', 'forks', 'trees', 'lines', 'chops'],
  ['phones', 'sets', 'sounds', 'systems', 'wires'],
  ['key', 'push', 'button', 'type', 'press'],
  ['packs', 'bags', 'sacks', 'purses', 'trips'],
  ['part', 'some', 'little', 'close', 'good'],
  ['grounds', 'stories', 'times', 'years', 'packs'],
  ['water', 'wet', 'rain', 'storm', 'liquid'],
  ['wear', 'boots', 'shoes', 'clothes', 'protectors'],
  ['work', 'job', 'group', 'time', 'thinking'],
  ['seeing', 'walking', 'looking', 'watching', 'going'],
  ['out', 'in', 'away', 'up', 'on'],
  ['up', 'on', 'in', 'for', 'to'],
  ['for', 'about', 'up', 'around', 'after'],
  ['off', 'on', 'out', 'away', 'back'],
  ['after', 'at', 'to', 'for', 'of'],
  ['along', 'after', 'around', 'by', 'to'],
  ['out', 'after', 'about', 'on', 'down'],
  ['up', 'on', 'to', 'over', 'by'],
  ['up', 'off', 'in', 'down', 'through'],
  ['on', 'up', 'along', 'by', 'in'],
  ['in', 'out', 'to', 'by', 'up'],
  ['try', 'take', 'wear', 'turn', 'see'],
  ['took', 'landed', 'gave', 'turned', 'went'],
  ['goes', 'looks', 'fits', 'likes', 'tries'],
  ['broke', 'brought', 'fought', 'damaged', 'fell'],
  ['looking', 'waiting', 'seeing', 'wanting', 'liking'],
  ['throw', 'waste', 'spend', 'give', 'hand'],
  ['take', 'give', 'bring', 'have', 'carry'],
  ['look', 'see', 'carry', 'take', 'go'],
  ['turn', 'take', 'give', 'put', 'keep'],
  ['in', 'at', 'about', 'of', 'with'],
  ['on', 'about', 'to', 'at', 'in'],
  ['on', 'to', 'at', 'in', 'of'],
  ['at', 'about', 'on', 'of', 'in'],
  ['to', 'at', 'of', 'on', 'in'],
  ['on', 'from', 'in', 'of', 'at'],
  ['from', 'of', 'with', 'at', 'about'],
  ['on', 'in', 'with', 'at', 'to'],
  ['of', 'with', 'to', 'from', 'in'],
  ['for', 'to', 'of', 'in', 'with'],
  ['science', 'construction', 'knowledge', 'building', 'piloting'],
  ['fingers', 'legs', 'toes', 'arms', 'brains'],
  ['ears', 'eyes', 'lips', 'fingers', 'teeth'],
  ['bee', 'bird', 'dog', 'pig', 'bear'],
  ['horse', 'cat', 'worm', 'dinosaur', 'hamster'],
  ['footsteps', 'lifestyle', 'clothes', 'mind', 'ideas'],
  ['dogs', 'kittens', 'cows', 'birds', 'elephants'],
  ['potato', 'carrot', 'pumpkin', 'broccoli', 'onion'],
  ['wolf', 'lion', 'tiger', 'dog', 'snake'],
  ['food', 'bread', 'drink', 'dishes', 'water'],
  ['told', 'spoke', 'asked', 'talked', 'said'],
  ['learning', 'studying', 'remembering', 'revising', 'getting'],
  ['heard', 'listened', 'knew', 'heart', 'tried'],
  ['looked', 'watched', 'seen', 'saw', 'eyed'],
  ['watching', 'looking', 'seeing', 'telling', 'gazing'],
  ['brings', 'carries', 'takes', 'takes', 'fetches'],
  ['offer', 'order', 'request', 'application', 'demand'],
  ['journey', 'trip', 'travel', 'voyage', 'tour'],
  ['do', 'go', 'play', 'come', 'be'],
  ['damaged', 'injured', 'hurt', 'harmed', 'broken'],
  ['receipt', 'reception', 'recipe', 'prescription', 'recent'],
  ['sensitive', 'sensible', 'sense', 'senile', 'seeming'],
  ['lend', 'borrow', 'rent', 'let', 'owe'],
  ['clear', 'clean', 'light', 'tidy', 'cloud'],
  ['space', 'area', 'place', 'floor', 'land'],
  ['embarrassed', 'shy', 'confused', 'disgusted', 'modest'],
  ['story', 'storey', 'history', 'tale', 'telling'],
  ['life', 'love', 'live', 'laugh', 'line'],
  ['anyone', 'someone', 'no-one', 'one', 'somebody'],
];

export default words;