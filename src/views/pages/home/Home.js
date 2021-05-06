let Home = {
  is_private: false,

  render: async () => {
      let view = `
          <div>
            <h1>Home</div>
          </div>
      `;

      return view
  },

  after_render: async () => {}
}

export default Home;