var sentences = [
  'alan does not like eggs.',
  'we do not drink tea in the evening.',
  'does your dad go to work by train?',
  'do they sell tomatoes in this shop?',
  'do you pay for the tickets?',
  'when do they meet?',
  'they do not drive to work every day.',
  'i do not eat cereals in the morning.',
  'does she often dance?',
  'you do not drink much coffee.',
  'what do you buy in the supermarket?',
  'how does he carry such a heavy bag?',
  'we do not go to the cinema every Wednesday.',
  'where does Harry study?',
  'he does not want to be an accountant.',
  'do they wear suits to work?',
  'he does not say much.',
  'she does make dinner at the weekends.',
  'i do not leave work on time very often.',
  'why does your brother always get into trouble?',
  'did Claire finish the housework?',
  'did Ronald visit the Tower of London?',
  'did she make the invitation cards herself?',
  'did the girl drop the ketchup bottle?',
  'did they practise karate this morning?',
  'they did not visit a farm two weeks ago.',
  'my mother did not crash into the van.',
  'he did not drink milk at school.',
  'mandy did not tidy up her room on Thursday.',
  'i did not like physics at school.',
  'she did not ask a lot of questions.',
  'did you take photos when you were on holiday?',
  'christian did not buy a new guitar.',
  'did the ladies have a cup of tea in the café?',
  'did Nancy text in the French lesson?',
  'the friends did not get new computers.',
  'did your brother say hello to people in the street?',
  'did the teacher open the windows in your classroom?',
  'did the girls in your class play chess two weeks ago?',
  'did your mother make breakfast yesterday morning?',
  'he is not shouting her name.',
  'we are taking nice photos.',
  'is Phil explaining the exercise?',
  'what are you doing here?',
  'i am not sitting on the sofa.',
  'the cat is not lying on the carpet.',
  'are they listening to radio now?',
  'the eagle is catching the mouse.',
  'why is Ruth asking for money?',
  'the boys are not diving into the pool.',
  'the children are not asking questions.',
  'nick is not going to the gym.',
  'i am not opening the door.',
  'he is not telling jokes.',
  'the baby is not crying now.',
  'we are not visiting a farm.',
  'they are not answering the phone.',
  'my friends are not eating hamburgers.',
  'my teacher is not waiting at the bus stop.',
  'the rabbit is not climbing over the fence.',
  'she was not eating a cheeseburger.',
  'they were not painting pictures.',
  'johnny was not riding his bike.',
  'we were not working on the computer.',
  'doris was not watching the news on TV.',
  'was Ashley working on the computer?',
  'were they repairing the bike?',
  'was Melissa taking out a book?',
  'were you listening to music?',
  'was Nicolas looking at a picture?',
  'we were sitting at the breakfast table when the doorbell rang.',
  'he met a lot of friendly people while he was working in California.',
  'when they left the museum, the sun was shining.',
  'the students were playing cards when the teacher came in.',
  'while the children were sleeping, their parents were watching TV.',
  'it started to rain while she was watering the flowers in her garden.',
  'when I opened the door, it was raining.',
  'while Henry was having a drink at the bar, his wife was swimming in the sea.',
  'he heard a loud bang while he was talking to his friend.',
  'while he was taking a shower, his dogs were eating his steaks.',
  'Alan does not like eggs',
  'we do not drink tea in the evening',
  'does your dad go to work by train ?',
  'do they sell tomatoes in this shop ?',
  'do you pay for the tickets ?',
  'when do they meet ?',
  'they do not drive to work every day',
  'I do not eat cereals in the morning',
  'does she often dance ?',
  'you do not drink much coffee',
  'what do you buy in the supermarket ?',
  'how does he carry such a heavy bag ?',
  'we do not go to the cinema every Wednesday',
  'he does not want to be an accountant',
  'do they wear suits to work ?',
  'he does not say much',
  'she does make dinner at the weekends',
  'I do not leave work on time very often',
  'why does your brother always get into trouble ?',
  'did Claire finish the housework ?',
  'did Ronald visit the Tower of London ?',
  'did she make the invitation cards herself ?',
  'did the girl drop the ketchup bottle ?',
  'did they practise karate this morning ?',
  'they did not visit a farm two weeks ago',
  'my mother did not crash into the van',
  'he did not drink milk at school',
  'Mandy did not tidy up her room on Thursday',
  'I did not like physics at school',
  'he does not feel good',
  "she was training at 6 o'clock",
  'do you want to play ?',
  'did she make a cake ?',
  'we did not want to upset you',
  'is she doing this project with us ?',
  'they are travelling around the world',
  'I did not call you because I was in a hurry',
  'she did not ask a lot of questions',
  'did you take photos when you were on holiday ?',
  'Christian did not buy a new guitar',
  'did the ladies have a cup of tea in the café ?',
  'did Nancy text in the French lesson ?',
  'the friends did not get new computers',
  'did your brother say hello to people in the street ?',
  'did the teacher open the windows in your classroom ?',
  'did the girls in your class play chess two weeks ago ?',
  'did your mother make breakfast yesterday morning ?',
  'he is not shouting her name',
  'we are taking nice photos',
  'is Phil explaining the exercise ?',
  'what are you doing here ?',
  'I am not sitting on the sofa',
  'the cat is not lying on the carpet',
  'are they listening to radio now ?',
  'the eagle is catching the mouse',
  'why is Ruth asking for money ?',
  'the boys are not diving into the pool',
  'the children are not asking questions',
  'Nick is not going to the gym',
  'I am not opening the door',
  'he is not telling jokes',
  'the baby is not crying now',
  'we are not visiting a farm',
  'they are not answering the phone',
  'my friends are not eating hamburgers',
  'my teacher is not waiting at the bus stop',
  'the rabbit is not climbing over the fence',
  'she was not eating a cheeseburger',
  'they were not painting pictures',
  'Johnny was not riding his bike',
  'we were not working on the computer',
  'Doris was not watching the news on TV',
  'was Ashley working on the computer ?',
  'were they repairing the bike ?',
  'was Melissa taking out a book ?',
  'was Nicolas looking at a picture ?',
  'we were sitting at the breakfast table when the doorbell rang',
  "we'll buy the car which is the most economical",
  "it's the film which I've seen more times than any other",
  'where we had that wonderful meal last month ?',
  'I hate dogs which bark for no reason',
  'Napoleon Bonaparte had a problem feeding all his soldiers',
  'the first design was made of metal',
  'freedom of choice is very important for many people',
  'shall I take my shoes off before coming in ?',
  "you'll keep getting bad marks unless you check your work more carefully",
  'Antonio will call us as soon as his plane lands',
  'what type of TV programmes do you like ?',
  'did you study at this school last year ?',
  'are you going to study at home tonight ?',
  'I have a nice group of friends at university',
  "I don't like playing sports very much",
  'how does she describe her current company ?',
  'I knew that we had to make a very important decision',
  'those exercises which I had to do last week were of no use at all',
  'to give you an example',
  'the plane was full of loud college students',
  'what does your friend usually do at the weekend ?',
  'do you want to play?',
  'did she make a cake?',
  'is she doing this project with us?',
];

export default sentences;
