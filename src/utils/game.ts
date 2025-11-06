import {ref} from "vue";

interface Game {
    grille: number[][]
}

const insertUn2OuUn4 = (grille : number[][] ) => {
    //todo
    // check si non == 0
    var casePlace = getRandomInt(16)
    var flatGrille = grille.flat()
    while(flatGrille[casePlace] != 0) {
        casePlace = getRandomInt(16)
    }
    if(getRandomInt(10) == 9)
    {
        flatGrille[casePlace] = 4
    }
    else
    {
        flatGrille[casePlace] = 2
    }
    return [flatGrille.slice(0,4), flatGrille.slice(4,8), flatGrille.slice(8,12), flatGrille.slice(12,16)]

}

function getRandomInt(max : number) {
    return Math.floor(Math.random() * max);
}

const moveRight = (grille: number[][]) => {
    grille = rotate(grille)
    grille = rotate(grille)
    grille = moveLeft(grille)
    grille = rotate(grille)
    grille = rotate(grille)
    return grille
}
const moveUp = (grille: number[][]) => {
    grille = rotate(grille)
    grille = moveLeft(grille)
    grille = rotate(grille)
    grille = rotate(grille)
    grille = rotate(grille)
    return grille }
const moveDown = (grille: number[][]) => {
    grille = rotate(grille)
    grille = rotate(grille)
    grille = rotate(grille)
    grille = moveLeft(grille)
    grille = rotate(grille)
    return grille}
const moveLeft = (grille: number[][]) => {
    for(var ligne = 0; ligne < grille.length; ligne++) {
        let fused = false
        grille[ligne] = (grille[ligne] as number[]).reduce((acc : number[], value : number) => {
            if(value !== 0) {
                if(fused || acc.length == 0 || value != acc[acc.length - 1]) {
                    acc.push(value)
                    fused = false
                } else if(acc.length > 0){
                    acc[acc.length - 1] = value * 2
                    fused = true
                }
            }
            return acc
        }, []).concat(0,0,0,0).slice(0,4)
    }
    return grille
}

const rotate = (grid : number[][]) =>
    grid[0]?.map(
        (_,c) => grid.map(
            row => row[3 - c]
        )
    ) as number[][]

const newGrid = () => [[0,0,0,0],
    [0,0,0,0],
    [0,0,0,0],
    [0,0,0,0]]

export const useGame = () => {
    const theGame = ref<Game>({grille: newGrid()})

    const newGame = () => {
        //initie la grille
        theGame.value = { grille: newGrid()}
        //2 insert un 2 ou un 4
        theGame.value.grille = insertUn2OuUn4(theGame.value?.grille)
        theGame.value.grille = insertUn2OuUn4(theGame.value?.grille)
    }

    const move = (direction : 'up' | 'down' | 'left' | 'right') => {
        // déplace et fusionne les cellules
        const origine = theGame.value?.grille.flat().join()
        switch (direction) {
            case 'up': theGame.value.grille = moveUp(theGame.value?.grille); break;
            case "down": theGame.value.grille = moveDown(theGame.value?.grille); break;
            case "left": theGame.value.grille = moveLeft(theGame.value?.grille); break;
            case "right": theGame.value.grille = moveRight(theGame.value?.grille); break;
        }
        if(theGame.value?.grille.flat().join() != origine) {
            // on insert un 2 ou un 4
            theGame.value.grille =  insertUn2OuUn4(theGame.value?.grille)
        }
    }

    return {
        theGame,
        newGame,
        move
    }
}