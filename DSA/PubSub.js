const PubSub = {
  subscriber: {},
  subscribe: function (topic, callback) {
    if (!this.subscriber[topic]) {
      this.subscriber[topic] = [];
    }
    this.subscriber[topic].push(callback);
  },

  publish: function (topic, message) {
    if (!this.subscriber[topic]) {
      return;
    }
    this.subscriber[topic].forEach((callback) => {
      callback(message);
    });
  },
};

PubSub.subscribe("game.start", function (message) {
  console.log("Let's have a fun", message);
});

PubSub.subscribe("game.start", function (message) {
  console.log("Game Started", message);
});

PubSub.publish("game.start", "The game is begining");
