import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = "App";

  constructor() { }

 
  public loadJsFile(url: string) {
    let node = document.createElement('script');
    node.src = url;
    node.type = 'text/javascript';
    document.getElementsByTagName('head')[0].appendChild(node);
  }

  ngOnInit() {
    this.loadJsFile("./src/assets/js/breakpoints.min.js"),
      this.loadJsFile("./src/assets/js/browser.min.js"),
      this.loadJsFile("./src/assets/js/jquery.dropotron.min.js"),
      this.loadJsFile("./src/assets/js/jquery.min.js"),
      this.loadJsFile("./src/assets/js/jquery.scrollex.min.js"),
      this.loadJsFile("./src/assets/js/main.js"),
      this.loadJsFile("./src/assets/js/util.js")
      ;
  }

}
  

