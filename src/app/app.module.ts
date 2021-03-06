import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { CoreModule } from "./core/core.module";
import { AppRoutingModule } from "./app.routing.module";

@NgModule({
  imports: [BrowserModule, FormsModule, AppRoutingModule, CoreModule],
  declarations: [AppComponent, HelloComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
