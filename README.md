# The Simpsons Story Builder - Mixed Messages

## Overview

This is a simple `node.js` app that will generate a random combination of five messages based on embedded data inside of the application. It was inspired by the quirky events from The Simpsons, and includes many characters from the show. It will generate random messages involving these characters that could be used to inspire a new episode's premise.

## How It Works

The app is set up to initialize with a set of arrays that identify separate parts of speech, including:
- Subjects
- Verbs
- Adjectives
- Predicates
- Punctuation

Once these arrays are populated in the app, it will generate a random combination of subjects who star as the characters for each story premise. This is designed to expect at least 4 subjects/characters and will format them properly based on how many are randomly selected by the app.

Finally, once the subjects are finalized, the app will build the premises by concatenating the different parts of speech defined above in the following way:
- Subject(s) + Verb + Predicate + Punctuation.

Notice how multiple subjects can be chosen, but only one verb, predicate, and punctuation are allowed currently. Adjectives have not been added into the app at this time, however that would add a lot more complexity and nuance to the premises that can be created. Just think: "Bart, Lisa, and the scary tree!" Who wouldn't want to watch an episode like that? Though I suppose the Treehouse of horrors is along those same lines, but look how successful those episodes are! Some of the best in cartoon history!

## Future Development

If you would like to expand on this project, feel free to share your suggestions and contribute a pull request for me to review. If time allows, I would enjoy expanding on this to implement the adjectives into the mix, add more parts of speech, and create a more fluid message builder depending on which words are selected.

In addition, I think it would be cool to populate the verbs and predicates from a larger randomized set of options to really throw some quirks into the mix. Happy coding!