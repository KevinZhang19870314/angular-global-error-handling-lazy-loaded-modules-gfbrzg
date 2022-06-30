import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-lazyloaded",
  templateUrl: "./lazyloaded.component.html",
  styleUrls: ["./lazyloaded.component.css"]
})
export class LazyloadedComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  public onThrowError(): void {
    throw new Error("This is an lazy loaded error");
  }
}
