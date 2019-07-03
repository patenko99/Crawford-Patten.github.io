console.log("LOL why are you inspecting my website?")

class Link {

  constructor(link) {
    this.link = link;
  }

  goTo() {
    window.open(this.link);
  }

}

let myGit = new Link("https://github.com/Crawford-Patten")

Link.goTo(myGit)
