/* Este trecho de código é a definição de um interceptor no Nest.js. 
Um interceptor é um recurso do Nest.js que permite interceptar e 
modificar o fluxo de uma solicitação antes que ela alcance seu destino final.
*/
import { Injectable, NestInterceptor, CallHandler, ExecutionContext } from "@nestjs/common";
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Response<T> {
  data: T;
}

@Injectable()
export class TransformaInterceptor<T> implements NestInterceptor<T, Response<T>> {
  intercept(context: ExecutionContext, next: CallHandler<T>): Observable<Response<T>> {
    // Intercepta a solicitação antes de ser manipulada pelo controlador
    // Recebe o contexto da execução e o próximo manipulador de chamada

    // Manipula a próxima chamada na cadeia de interceptores
    return next.handle().pipe(
      // Executa uma transformação nos dados retornados pelo próximo manipulador
      map((data) => ({ data }))
    );
  }
}

