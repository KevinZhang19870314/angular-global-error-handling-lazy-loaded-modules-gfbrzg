import { ErrorHandler, Injectable } from "@angular/core";

@Injectable()
export class GlobalErrorHandlerService implements ErrorHandler {
  handleError(error: Error) {
    console.error("Error from global error handler", error);
  }
}
