var islands = [];
islands.push({name: "island 1", spots: [{name: "fishing spot 11"}, {name: "fishing spot 12"}, ]});
islands.push({name: "island 2", spots: [{name: "fishing spot 21"} ]});
islands.push({name: "island 3", spots: [{name: "fishing spot 31"}, {name: "fishing spot 32"}, {name: "fishing spot 33"},]});

class DbFishing {

  getAllIslands() {
    return islands;
  }
}
export let dbFishing = new DbFishing();
