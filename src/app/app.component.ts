import {ChangeDetectorRef, Component, OnChanges, OnDestroy, OnInit} from '@angular/core';
import {AuthenticationService, User} from './auth/authentication.service';
import {MediaMatcher} from '@angular/cdk/layout';
import {Router} from '@angular/router';
import {PreloadService} from './database/preload.service';
import {Subscription} from 'rxjs';
import {ApiService} from './api.service';
import {TranslateService} from '@ngx-translate/core';
import { CookieService } from 'ngx-cookie-service';
import {MatSelectChange} from '@angular/material/select';
import {SelectionChange} from '@angular/cdk/collections';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnChanges, OnDestroy {
  title = 'aqua-viewer';

  user: User;

  loading = false;
  ongekiMenu: Menu[] = [
    {
      id: 0,
      name: 'label_profile',
      url: 'ongeki/profile'
    },
    {
      id: 1,
      name: 'label_battlePoint',
      url: 'ongeki/battle'
    },
    {
      id: 2,
      name: 'label_rating',
      url: 'ongeki/rating'
    },
    {
      id: 3,
      name: 'label_playRecord',
      url: 'ongeki/recent'
    },
    {
      id: 4,
      name: 'label_musicList',
      url: 'ongeki/song'
    },
    {
      id: 5,
      name: 'label_card',
      url: 'ongeki/card'
    },
    {
      id: 6,
      name: 'label_rivalList',
      url: 'ongeki/rival'
    },
    {
      id: 7,
      name: 'label_setting',
      url: 'ongeki/setting'
    }
  ];

  mobileQuery: MediaQueryList;

  dark = 'dark';
  v1Menus: Menu[] = [
    {
      id: 0,
      name: 'label_profile',
      url: 'chuni/v1/profile'
    },
    {
      id: 1,
      name: 'label_rating',
      url: 'chuni/v1/rating'
    },
    {
      id: 2,
      name: 'label_playRecord',
      url: 'chuni/v1/recent'
    },
    {
      id: 3,
      name: 'label_musicList',
      url: 'chuni/v1/song'
    },
    {
      id: 4,
      name: 'label_character',
      url: 'chuni/v1/character'
    },
    {
      id: 5,
      name: 'label_setting',
      url: 'chuni/v1/setting'
    }
  ];

  v2Menus: Menu[] = [
    {
      id: 0,
      name: 'label_profile',
      url: 'chuni/v2/profile'
    },
    {
      id: 1,
      name: 'label_rating',
      url: 'chuni/v2/rating'
    },
    {
      id: 2,
      name: 'label_playRecord',
      url: 'chuni/v2/recent'
    },
    {
      id: 3,
      name: 'label_musicList',
      url: 'chuni/v2/song'
    },
    {
      id: 4,
      name: 'label_character',
      url: 'chuni/v2/character'
    },
    {
      id: 5,
      name: 'label_userBox',
      url: 'chuni/v2/userbox'
    },
    {
      id: 6,
      name: 'label_setting',
      url: 'chuni/v2/setting'
    }
  ];

  mai2Menus: Menu[] = [
    {
      id: 0,
      name: 'label_profile',
      url: 'mai2/profile'
    },
    {
      id: 1,
      name: 'label_setting',
      url: 'mai2/setting'
    }
  ];

  divaMenus: Menu[] = [
    {
      id: 0,
      name: 'label_profile',
      url: 'diva/profile'
    },
    {
      id: 1,
      name: 'label_pvRecord',
      url: 'diva/record'
    },
    {
      id: 2,
      name: 'label_pvList',
      url: 'diva/pv'
    },
    {
      id: 3,
      name: 'label_recentPlay',
      url: 'diva/recent'
    },
    {
      id: 4,
      name: 'label_setting',
      url: 'diva/setting'
    },
    {
      id: 5,
      name: 'label_management',
      url: 'diva/management'
    },
    {
      id: 6,
      name: 'label_modules',
      url: 'diva/modules'
    },
    {
      id: 7,
      name: 'label_customizes',
      url: 'diva/customizes'
    },
  ];
  private subscription: Subscription;

  private _mobileQueryListener: () => void;

  constructor(
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
    translate: TranslateService,
    private cookies: CookieService,
    private authenticationService: AuthenticationService,
    private route: Router,
    private api: ApiService,
    private preLoad: PreloadService,
  ) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
    this.user = authenticationService.currentUserValue;
    translate.addLangs(['zh-Hans', 'en']);
    translate.setDefaultLang('en');
    const selectedLanguage = cookies.get('currentLanguage');
    const targetLanguage = selectedLanguage ?? 'en';
    translate.use(targetLanguage);
  }

  ngOnInit(): void {
    if (this.user !== null) {
      this.preLoad.load();
    }
    this.subscription = this.api.loadingState.subscribe(
      state => this.loading = state.show
    );
  }

  ngOnChanges(): void {
    this.user = this.authenticationService.currentUserValue;
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  logout() {
    this.authenticationService.logout();
    location.reload();
  }

  onLanguageSelectionChanged(targetLanguage: string){
    this.cookies.set('currentLanguage', targetLanguage);
    location.reload();
  }
}

export class Menu {
  id: number;
  name: string;
  url: string;
}
