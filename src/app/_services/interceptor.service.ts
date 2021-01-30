import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent
  } from "@angular/common/http";
  import { Observable } from "rxjs";
  import { Injectable } from "@angular/core";
  import { environment } from "../../environments/environment";
  @Injectable()
  export class InterceptorService implements HttpInterceptor {
  intercept(
  req: HttpRequest<any>,
  next: HttpHandler
  ): Observable<HttpEvent<any>> {
  let reqUrl = environment.production;
  req = req.clone({
  headers: req.headers.set(
  "Authorization",
  "Bearer " + localStorage.getItem("token")
  ),
  url: reqUrl +""+ req.url
  });
  return next.handle(req);
  }
  }
