const state = {
  weights: [
    {
      date: new Date("2020-12-01").toLocaleDateString(),
      stone: 12,
      pound: 1
    }
  ]
};

const getters = {
  allWeights: state => state.weights
};

const actions = {
  addNewWeight({ commit }, newWeight) {
    commit("createWeight", newWeight);
  }
};

const mutations = {
  createWeight: (state, newWeight) =>
    state.weights.unshift({
      ...newWeight,
      date: new Date().toLocaleDateString()
    })
};

export default {
  state,
  getters,
  actions,
  mutations
};
