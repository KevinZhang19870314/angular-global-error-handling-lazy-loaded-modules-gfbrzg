import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

const ROUTES = [
  {
    path: "",
    children: [
      {
        path: "lazy",
        loadChildren: () =>
          import("./lazyloaded/lazyloaded.module").then(m => m.LazyloadedModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES, { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
