export const state = () => ({
  authToken: null
});

export const mutations = {
  setAuthToken(state, token) {
    state.authToken = token;
  }
};

export const actions = {
  async nuxtServerInit(store, context) {
    // Isn't Node fun?!
    await new Promise((resolve, reject) => {
      let body = [];
      context.req.on('data', (chunk) => {
        body.push(chunk);
      }).on('end', async () => {
        body = Buffer.concat(body).toString();
        store.commit('setAuthToken', body.split('=')[1]);
        resolve();
      });
    });
  }
};
