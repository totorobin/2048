# 2048

Le principe est simple. Sur une grille de 4 cases par 4, une tuile aléatoire (un 2 ou un 4 plus rarement) va apparaître sur une des cases vides. Le joueur pourra alors déplacer toutes les tuiles existantes dans une direction (haut bas gauche droite), et lorsque deux tuiles de même valeur entreront en contact, elle s’additionneront. Si une de ses tuiles vaut 2048, il gagne.


## Règles du jeu
Les règles sont les suivantes :
- à chaque tour, le joueur doit choisir une direction (haut, bas, gauche ou droite).
- Toutes les tuiles se déplacent autant que possible dans cette direction, certaines plus que d'autres.
- Deux tuiles adjacentes (dans ce sens uniquement) portant des nombres identiques se combinent pour former une seule tuile dont le numéro correspond à la somme de ces nombres.
- Un mouvement est valide lorsqu'au moins une tuile peut être déplacée, y compris par combinaison.
- Une nouvelle tuile apparaît à la fin de chaque tour sur une case vide choisie au hasard (s'il y en a une).
- La plupart du temps, un nouveau 2 doit être ajouté, mais occasionnellement ( 10 % du temps), un 4 .
- Pour gagner, le joueur doit créer une tuile avec le numéro 2048 .
- Le joueur perd si aucun coup valide n'est possible.

## Exigences

### Déplacement « non gourmand ».
Les tuiles créées par la combinaison d'autres tuiles ne doivent pas être combinées à nouveau lors du même tour (déplacement).
Autrement dit, déplacer la rangée de tuiles de :
[2][2][2][2]
à droite devrait donner :
......[4][4]
et non :
.........[8]

###  « Priorité du sens de déplacement ».
Si plusieurs combinaisons sont possibles, le sens de déplacement indique celle qui sera appliquée.
Par exemple, déplacer la rangée de tuiles de :
...[2][2][2]
à droite devrait donner :
......[2][4]
et non :
......[4][2]


###  Vérifiez la validité des coups.

Le joueur ne devrait pas pouvoir gagner de nouvelle tuile en tentant un coup qui ne modifie pas le plateau.

###  Vérifier les conditions de victoire.

###  Vérifier l'absence de jeu.

## Ce que l'on peux découvrir via ce projet

- vueJs
- la création d'un PWA [nouveau projet en PWA](https://vite-pwa-org.netlify.app/guide/#scaffolding-your-first-vite-pwa-project)
- la Web API viewTransition
- utilisation du TouchEvent (ou de vueUse)
- utilisation de KeyboardEvent