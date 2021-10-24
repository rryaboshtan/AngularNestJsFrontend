import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanLoad,
  Route,
  Router,
  RouterStateSnapshot,
  UrlSegment,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { first, map } from 'rxjs/operators';
import { AdminAuthService } from 'src/app/store/admin-auth-store/services/admin-auth.service';

@Injectable()
export class AdminAuthGuard implements CanActivate, CanLoad {
  constructor(
    private router: Router,
    private adminAuthService: AdminAuthService
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.getIsAuth();
  }
  canLoad(
    route: Route,
    segments: UrlSegment[]
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.getIsAuth();
  }

  private getIsAuth(): Observable<boolean> {
    return this.adminAuthService.isAuth$.pipe(
      first(),
      map((isAuth) => {
        if (!isAuth) {
          //Redirect
          this.router.navigateByUrl('/admin/auth/login');
        }

        return isAuth;
      })
    );
  }
}
