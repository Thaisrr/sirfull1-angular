import {Observable} from "rxjs";

export interface IsReady {
  isReady(): boolean | Observable<boolean> | Promise<boolean>;
}
