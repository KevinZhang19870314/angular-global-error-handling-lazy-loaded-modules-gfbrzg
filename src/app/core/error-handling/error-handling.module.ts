import { ErrorHandler, NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { GlobalErrorHandlerService } from "./global-error-handler.service";

@NgModule({
  imports: [CommonModule],
  providers: [
    {
      provide: ErrorHandler,
      useClass: GlobalErrorHandlerService
    }
  ]
})
export class ErrorHandlingModule {}
