# Minecraft Leaderboard

This repository contains the react-frontend part of a statistic site run on a private Minecraft server. The site allows browsing different statistics, like the amount of each blocks that the users have broken, what they've used and how much, time they've spent on the server etc. The site also ranks players on these categories.

This repository does not contain the data used on the actual website (that's redacted from this readme for a reason) nor does it contain the vanilla minecraft textures used on the site.

# Running

1. Use the [following script](https://gist.github.com/TSkoll/a2664231b790175ffdb43af53366070e) to generate user data.
2. Place the generated files to `scr/data/minecraftstats/`.
3. Run `npm install` on the project.
4. (Optional) Extract textures from the minecraft game jar and place them in `img/`. The textures must be on the root level of the directory.

Running a debug version can be done with `npm start` -command. Building the project can be done with the command `npm run build`.