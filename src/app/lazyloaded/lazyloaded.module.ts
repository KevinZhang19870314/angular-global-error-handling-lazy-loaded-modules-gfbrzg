import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LazyloadedComponent } from "./lazyloaded.component";
import { LazyloadedRoutingModule } from "./lazyloaded-routing.module";

@NgModule({
  imports: [CommonModule, LazyloadedRoutingModule],
  declarations: [LazyloadedComponent]
})
export class LazyloadedModule {}
