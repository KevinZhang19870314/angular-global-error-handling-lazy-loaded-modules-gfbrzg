import { NgModule } from "@angular/core";
import { LazyloadedComponent } from "./lazyloaded.component";
import { RouterModule, Routes } from "@angular/router";

export const ROUTES = [
  {
    path: "",
    component: LazyloadedComponent
  }
] as Routes;

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule]
})
export class LazyloadedRoutingModule {}
