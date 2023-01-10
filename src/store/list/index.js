import getters from "./getters";
import mutations from "./mutations";
import actions from "./actions";

const list = {
    state: {
        animals: [
            'Aardvark',
            'Albatross',
            'Mole',
            'Mongoose',
            'Monkey',
            'Moose',
            'Mosquito',
            'Mouse',
            'Mule',
            'Narwhal',
            'Nightingale',
            'Octopus',
            'Wallaby',
            'Walrus',
            'Wasp',
            'Weasel',
            'Whale',
            'Wildcat',
            'Wolf',
            'Wolverine',
            'Wombat',
            'Woodcock',
            'Woodpecker',
            'Worm',
            'Wren',
            'Yak',
            'Zebra',
        ],
    },
    getters : getters,
    mutations : mutations,
    actions : actions,
}

export default list;
