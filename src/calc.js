import { types } from './types'

const calc = (type1, type2) => {
    let damage = {
        Neutral: 1,
        Fire: 1,
        Water: 1,
        Nature: 1,
        Electric: 1,
        Earth: 1,
        Mental: 1,
        Wind: 1,
        Digital: 1,
        Melee: 1,
        Crystal: 1,
        Toxic: 1
    }
    Array.from([type1, type2]).forEach(t => {
        if (t) Object.keys(types[t]).forEach(type => damage[type] *= types[t][type])
    })
    return damage
}

export { calc }