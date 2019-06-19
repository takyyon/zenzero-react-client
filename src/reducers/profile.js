const o = {
  id: 1,
  name: 'Krrish Mittal',
  buyerId: 12,
  isDual: false,
  offers: [

  ],
  questions: [

  ],
  events: [

  ]
}
const profile = (state = { userInfo: o  }, action) => {

    switch (action.type) {
        case 'FIND_BUYER_INFO_ID':
            return { userInfo: state.userInfo };
        
        case 'FIND_OWNER_INFO_ID':
            return { userInfo: state.userInfo };
        default:
            return state;
    }
}

export default profile;