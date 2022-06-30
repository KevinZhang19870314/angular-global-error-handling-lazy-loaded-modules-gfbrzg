import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ErrorHandlingModule } from "./error-handling/error-handling.module";

@NgModule({
  imports: [CommonModule, ErrorHandlingModule],
  declarations: []
})
export class CoreModule {}
