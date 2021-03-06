import { Component } from '@angular/core';
import { Config, ConfigService } from './config.service';
import { MessageService } from '../message.service';

@Component({
    selector: 'app-config',
  templateUrl: './config.component.html',
    providers: [ ConfigService ],
//   styleUrls: ['./home.component.css']
})

export class ConfigComponent {
    error: any;
    config!: any;
    headers!: string[];

  constructor(private configService: ConfigService) { 
  }

  clear() {
    this.config = undefined!;
    this.error = "";
    this.headers = [];
  }

  showConfig() {
    this.configService.getConfig()
      .subscribe((data: Config) => this.config = {
          heroesUrl: data.heroesUrl,
          textfile:  data.textfile
      });
  }
  

  showConfig_v2() {
    this.configService.getConfig()
      // clone the data object, using its known Config shape
      .subscribe((data: Config) => this.config = { ...data });
  }

  showConfigResponse() {
    this.configService.getConfigResponse()
      // resp is of type `HttpResponse<Config>`
      .subscribe(resp => {
        // display its headers
        const keys = resp.headers.keys();
        this.headers = keys.map(key =>
          `${key}: ${resp.headers.get(key)}`);

        // access the body directly, which is typed as `Config`.
        this.config = { ... resp.body };
      });
  }
  makeError() {
    this.configService.makeIntentionalError().subscribe(null, error => this.error = error );
  }
}
