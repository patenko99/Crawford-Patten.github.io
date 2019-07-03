console.log("LOL why are you inspecting my website?")

class Link {

  constructor(link) {
    this.link = link;
  }

  goTo() {
    window.open(this.link);
  }

}

let myGit = Link("https://github.com/Crawford-Patten")
goTo(myGit)
