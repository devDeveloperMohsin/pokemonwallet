const pokemons = [
  {
    image: require('../assets/images/legendary/kyogre.png'),
    name: 'Kyogre',
    bio: 'Kyogre is a massive, whale-like Pokémon with two big pectoral fins, each with four white square-shaped nails. It has a deep blue body and a white chin area with two small spikes protruding under it. Above each eye are two white, oval-shaped spots. Kyogre has red stripes around its chin, eyes, dorsal fins, and torso. These stripes glow when Kyogre is brimming with power. The tail is tattered with four trailing parts, with the inner ones being smaller than the outer. Its eyes are small, yellow, and shadowed with black.',
  },

  {
    image: require('../assets/images/legendary/groudon.png'),
    name: 'Groudon',
    bio: 'Groudon is a massive, bipedal, dinosaur-like Pokémon covered in red, segmented plates of thick skin that act as armor. It has a gray underside and large white spikes that run along the sides of its head, body, and tail. Groudon has four claws on each hand, four dozer-like blades on the end of its large tail, and three claws on each foot with gray markings under its feet. It also has blue stripes inside the seams of its armor plating which can only be seen when Groudon is glowing with power.',
  },

  {
    image: require('../assets/images/legendary/rayquaza.png'),
    name: 'Rayquaza',
    bio: 'Rayquaza is a large, green, serpentine Pokémon that also resembles a missile. It has red-tipped, rudder-like wings on its shoulders and down its body, and similarly patterned fins on the tip of its tail. Yellow ring-like symbols run across the length of Rayquaza\'s body and it has an additional yellow ring on top of its head. Rayquaza has two limbs with three-clawed hands, and two long, flat, horn-like structures on its head, with two shorter horns along its jawline. It has small, yellow eyes with black pupils, prominent pink gums, and two discernible fangs in its upper jaw.',
  },

  {
    image: require('../assets/images/legendary/dialga.png'),
    name: 'Dialga',
    bio: 'Dialga is a dark-blue, sauropod-like Pokémon with some gray metallic portions and light blue stripes. It has a chest plate on its torso, which has a deep blue diamond-like crystal embedded in the center. Dialga has a fin-like structure on its back, three spines on the back of its neck, and a crest on its head, resembling a dinosaur. It also has two structures on the sides of its head that extend outward and resemble horns and fangs. It has three claws on each foot, of the same metallic look as its chest plate. Faint cracks exist across its body. The fin-like structure on its back can be used to focus the flow of time, as seen in Explorers of Time, Darkness, and Sky.',
  },

  {
    image: require('../assets/images/legendary/palkia.png'),
    name: 'Palkia',
    bio: 'Palkia is a light-purple, theropod-like Pokémon with stripes and markings of a darker shade and gray underarms and waist. It has round purple-striped plates on its shoulder area, where two pink pearl-like crystals lie encrusted with a gray rim encircling them, and fin-like wings on its back. Palkia\'s arms have extended formations resembling gauntlets and a purple band around each wrist. Palkia has a long neck that is normally bent, a pointed white crest on the top of its head that extends to its wings, two strong horn-like tusks on the sides of its jaw, and a powerful tail. It has faint cracks along its legs and tail. As seen in Pokémon Mystery Dungeon: Explorers of Time and Explorers of Darkness, Palkia is capable of travelling by creating a large yellow sphere from its two pearls, then using it to fly very fast.',
  },

  {
    image: require('../assets/images/legendary/giratina.png'),
    name: 'Giratina',
    bio: 'Giratina is a large, gray, draconic Pokémon with three gold half-rings on each side of its long neck. Its head has a gold crown-like object surrounding it with two large horns pointing sideways. A thick black stripe runs vertically along its front with five red horizontal stripes. In its Altered Forme, it has two large black ghostly wings with three red tips on each that can resemble claws. These wings can change shape as if made of a liquid or gas. Its six legs are thick and have golden claws. Two golden half-circles similar to those on its neck are on each side of each leg, resembling shackles. It has a tail. Giratina remains in Altered Forme when outside of its home dimension.',
  },

  {
    image: require('../assets/images/legendary/reshiram.png'),
    name: 'Reshiram',
    bio: 'Reshiram is a white, bipedal Pokémon with draconic, avian, and mammalian traits. A long, voluminous wispy mane streams out from the upper side of the snout and outwards from its head. The top of this mane is adorned with two protrusions, which resemble ears. Reshiram\'s face is fringed with spiky features, and it has a small, pointed extension below the chin. Its eyes have blue irises and black pupils. There are two pairs of pointed teeth visible when its mouth is open, one in the upper jaw and one in the lower.',
  },

  {
    image: require('../assets/images/legendary/zekrom.png'),
    name: 'Zekrom',
    bio: 'Zekrom is a black, bipedal Pokémon resembling a dragon or dinosaur, with dark patches on various portions of its body. It has red sclerae, white irises, and black pupils, as well as a small horn-like protrusion on the tip of its snout. Its head sports a thundercloud-like crest tipped with light-blue coloration. There are six pairs of pointed teeth visible when its mouth is open, two in the upper jaw and four in the lower. At the base of its neck is a black, stud-like feature, and atop its shoulders are similar, larger features resembling armor padding. The bases of its wings also have such padding, and a fanned, splayed, seemingly webbed shape with a small "wing-spike" on one edge. The lower lengths of Zekrom\'s arms extenuate into splayed, seemingly webbed, somewhat baseball-mitt-like formations, with three-clawed, dark-colored hands on the undersides. The front portion of Zekrom\'s waist is black-colored, with its belly and thighs having thin striations down their length. Its knees are black, as are the foremost parts of its three-clawed feet and spiked heels. When its emotions surge, it enters Overdrive mode and its tail lights up with a blue light.',
  },

  {
    image: require('../assets/images/legendary/kyurem.png'),
    name: 'Kyurem',
    bio: 'Kyurem is a gray and blue, bipedal Pokémon of indefinable but seemingly draconic basis. Kyurem has a blue head and snout and has yellow eyes without pupils, has a pair of pointed light bluish horns on its head, and a yellow crest on its skull. Three pointed teeth jut out the bottom of either side of its jaws, which are frozen shut by the ice covering its head. Its long, gray neck has lines running around its whole body, legs, arms, and tail. It has two arms, each with its own claw, and each arm is jointed together from its oddly shaped blue wings, which are believed to be used for flying and storing cold air. Each wing has two spikes of ice. The ice covering the wings can break, revealing gray tendril-like appendages on Kyurem\'s back.',
  },

  {
    image: require('../assets/images/legendary/xerneas.png'),
    name: 'Xerneas',
    bio: 'Xerneas is a quadrupedal, stag-like Pokémon with four pairs of antlers. Its coloration varies slightly depending on whether it is in Active Mode or Neutral Mode. Regardless of mode, its main body is always black with a blue stripe down its back and a short, bushy tail. Starting at its knees there is a blade-like trim around each leg, which forms a point under each hoof. There is an upside-down, V-shaped marking on its chest in the same color as the trim on its legs. Its head and neck are blue, and there are two large, tufts that extend onto its chest and curve upward. Its first pair of antlers extends onto its head and curves around the underside of its eyes. The eyes are black with X-shaped pupils. There is a short marking on top of its snout and an upward curving horn on each side of its head in place of ears.',
  },

  {
    image: require('../assets/images/legendary/yveltal.png'),
    name: 'Yveltal',
    bio: 'Yveltal is a large Pokémon with both avian and draconic traits. The back of its body is black with white spots along the wings and back; its front, head, and neck are bright red with branching, black lines throughout. It has a pointed, beak-like snout, bright blue eyes, a black, forward-curving horn over each eye, and a thin, antenna-like growth behind each eye. A feathery gray ruff encircles its neck and billows out over its back. Yveltal\'s wings each have three spikes along the bottom edge near the body and five large, black claws on the tip. It has small, birdlike legs with gray talons. Each foot has two toes facing forward and one pointing backward. Its tail is similar in structure to its wings, including the five claws on the tip.',
  },

  {
    image: require('../assets/images/legendary/zygarde.png'),
    name: 'Zygarde',
    bio: 'Zygarde is a Pokémon whose form depends on the percentage of its Cores and Cells gathered together. The Zygarde Cores are the brain of the Zygarde, and a Zygarde may contain one or five Cores. A Zygarde Core is a small, green Pokémon with a gelatinous body. It has a large, round head with a beak-shaped protrusion on the front, a thin, hook-shaped tail, and a red hexagon suspended in its body. Within its head is a single eye with a black pupil; beside this eye is another white oval that may be a second eye. As seen in the anime, Zygarde Cores are capable of absorbing sunlight to regain their strength, can speak telepathically, and use the Cells to observe the ecosystem. Zygarde Cells make up every other part of Zygarde and appear nearly identical to the Zygarde Core. Unlike the Core, it has a flat body and head. It has a green pupil, a simpler, unhooked tail, and has a darker green, more elongated hexagon within its midsection.',
  },

  {
    image: require('../assets/images/legendary/solgaleo.png'),
    name: 'Solgaleo',
    bio: 'Solgaleo is a large, white Pokémon resembling a lion. It has a blunt muzzle with a blue-gray nose and pale blue eyes. The top half of its face is a deep blue area that shows a constantly changing starscape. Four yellow spikes frame Solgaleo\'s head like a crown and two more pairs of spikes adorn either side of its lower jaw. Each spike separates large tufts of Solgaleo\'s mane. Solid ridges—red nearest Solgaleo\'s head and yellow farther away—poke out of each tuft along the middle, except on the tufts on its cheeks and chin, with the topmost part wrapping around the tip of the tuft. Overall, its mane creates the impression of a stylized sun. Around each leg is a dark orange band, and there is a black spot on each foot. It has three black toes on each foot with long yellow claws. At the tip of its tail is a large black spot with a thin yellow rim.',
  },

  {
    image: require('../assets/images/legendary/lunala.png'),
    name: 'Lunala',
    bio: 'Lunala is a large Pokémon resembling a skeletal, legless bat. It has a short snout, dark pink eyes with white centers, and a deep blue area on its upper head that shows a constantly changing starscape. A rigid raised hood wraps around its head in a crescent shape and drapes around its neck as well. The outside of the hood is yellow, while the inner part that curves around Lunala\'s head is white with deep blue streaks. Its torso resembles a ribcage with a slightly curved spike on each shoulder and three spikes extending from the bottom toward its tail. Its massive wings resemble a bat\'s wings with the skeleton exposed, except that Lunala\'s wings have a total of seven "finger bones": four running through each wing, one running along the edge to the outermost tip, and two pointing upwards that may act as claws that are more functional. The four "bones" in Lunala\'s wings are only visible in segments. The skin of Lunala\'s wings is an iridescent deep blue and a light blue light source appears to glow from behind its ribcage. A large, pale yellow crescent connects the outermost tip of each wing to the next two inner tips, and the remaining two innermost tips are adorned by yellow, four-pointed stars. The bottom of Lunala\'s tail is also lined by a yellow crescent with a ridge running up the middle of the tail towards the ribcage.',
  },

  {
    image: require('../assets/images/legendary/necrozma.png'),
    name: 'Necrozma',
    bio: 'Necrozma is a vaguely humanoid Pokémon whose body appears to be constructed out of a black crystalline material. The black color is a result of impurities building up within it as a result of its deep slumber. The large protrusion attached to its head is its tail, which has a row of three large spikes along the top and is white in the back with a dark gray symbol resembling a star in the center. Its face is actually a prism-like object known as the brain prism, which possesses a collection of multicolored shapes that resemble eyes. While absorbing light, this brain prism glows white.[1] Its thin arms have disproportionately large hands with three claws. Jutting out of the back of each hand is a whitish crystal that darkens toward the tip, and each elbow has a hook-like spike. Two large spikes jut from each shoulder and there is a row of smaller spikes along each side of its body. Its feet have three hook-like toes each.',
  },

  {
    image: require('../assets/images/legendary/articuno.png'),
    name: 'Articuno',
    bio: 'Articuno is a large avian Pokémon with predominantly sky blue plumage and wings said to be made of ice. On its forehead is a crest that consists of three, darker blue rhombus-shaped feathers. It has circular red eyes, a short gray beak, and long, thin gray legs. Each foot has three forward-facing toes and one that faces backward. On its chest is a mass of pale blue, downy feathers. Its long, streamer-like tail is longer than its body and the same shade of blue as its crest.',
  },

  {
    image: require('../assets/images/legendary/zapdos.png'),
    name: 'Zapdos',
    bio: 'Zapdos is a large, avian Pokémon with predominantly yellow plumage. It has small, triangular eyes with black around them and a long, thin, light orange beak. Its wings and tail are a mass of spiky feathers and there are black feathers covering the back of its wings and inner tail feathers. A large crest of spiked feathers surrounds its head. Its thighs are tan, and it has thin, light orange legs. It has feet with three forward-facing toes and one backward-facing toe; each toe has a short talon.',
  },

  {
    image: require('../assets/images/legendary/moltres.png'),
    name: 'Moltres',
    bio: 'Moltres is a large, avian Pokémon with golden plumage. It has a long, flowing head crest and a billowing tail, both made of reddish-orange and yellow flames. Additionally, its wings are also shrouded in fiery plumage. It has a long, thin neck, a pointed, brown beak, and small, triangular eyes. Its thin, brown legs have feet that have three forward-facing toes and one backward-facing toe. It has short talons.',
  },

  {
    image: require('../assets/images/legendary/raikou.png'),
    name: 'Raikou',
    bio: 'Raikou is a quadrupedal, yellow, tiger-like Pokémon with black stripes and a white underside. It has a thin, light blue tail with sharp angles and a spark-shaped formation at the end. Most of its face consists of thick, white fur and shorter yellow fur around its red eyes. Raikou\'s muzzle is a light blue "X" and it has a black faceplate with two bumps that cover its forehead, nose, and ears. Raikou has two long fangs that make its appearance similar to the saber-toothed cat. Its large claws each converge to form a single point and never retract. Extra fur hangs off its body in front of its thighs. Raikou has a mane across its back that resembles dull purple rain clouds and allows it to shoot bolts of lighting.',
  },

  {
    image: require('../assets/images/legendary/entei.png'),
    name: 'Entei',
    bio: 'Entei is a massive, leonine, quadrupedal Pokémon with some mastiff qualities. It is covered in brown fur and a long, light gray cloud of smoke running along its entire back. It has gray plates on either side of the cloud and a plate beneath the cream belly fur on its chest. Entei has gray paws with brown pads and black cuff-like bands on its legs. Both front paws house three small, white retractable claws, which can be seen in battle or in Pokémon Camp. Its main faceplate is red and shaped like fins or a six-sided star. A gray plate, resembling a horseshoe mustache, covers its muzzle. It also has a yellow crest with three sloped points on its forehead and red eyes. Entei\'s forehead appears to resemble a kabuto.',
  },

  {
    image: require('../assets/images/legendary/suicune.png'),
    name: 'Suicune',
    bio: 'Suicune is a slim, quadrupedal, blue, mammalian Pokémon with white, diamond-shaped markings. Its face and underside are white as well. Suicune has a thick, purple mane that resembles the aurora borealis and two white, streamer-like tails that wave forward. It has a long, white snout. Suicune has a large, hexagonal, cerulean blue crest on its forehead with two prongs on either side of the base. It has red eyes, a small tuft of fur under its chin, and small paws with white paw pads.',
  },

  {
    image: require('../assets/images/legendary/mewtwo.png'),
    name: 'Mewtwo',
    bio: 'Mewtwo was created by a group of scientists funded by Team Rocket boss Giovanni to create an enhanced clone of Mew for his own use. Although Mewtwo is initially a very angry Pokémon, viewing all humans as evil due to the acts of the scientists and Giovanni, after Ash Ketchum sacrifices himself to stop the fighting between Mew and Mewtwo, Mewtwo\'s heart softens, and it learns that some humans do care about their, and all, Pokémon',
  },
];

export default pokemons;