/* Este trecho de código é a definição de um interceptor no Nest.js. 
Um interceptor é um recurso do Nest.js que permite interceptar e 
modificar o fluxo de uma solicitação antes que ela alcance seu destino final.
*/
import { Injectable, NestInterceptor, CallHandler, ExecutionContext } from "@nestjs/common";
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Response<T>{
  data: T;
}

@Injectable()
export class TransformaInterceptor<T> implements NestInterceptor<T, Response<T>> {
  intercept(context: ExecutionContext, next: CallHandler<T>): Observable<Response<T>> {
    return next.handle().pipe(map((data) => ({ data })));
  }
}
