import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ApiService} from '../../../../api.service';
import {MessageService} from '../../../../message.service';
import {AuthenticationService} from '../../../../auth/authentication.service';

@Component({
  selector: 'app-diva-news',
  templateUrl: './diva-news.component.html',
  styleUrls: ['./diva-news.component.css']
})
export class DivaNewsComponent implements OnInit {

  newsForm: FormGroup;
  warningForm: FormGroup;

  constructor(
    private api: ApiService,
    private messageService: MessageService,
    private fb: FormBuilder,
    private auth: AuthenticationService
  ) {
  }

  ngOnInit() {
    this.api.get('api/manage/diva/news').subscribe(
      data => this.createNews(data),
      error => this.messageService.notice(error)
    );
    this.api.get('api/manage/diva/warning').subscribe(
      data => this.createWarning(data),
      error => this.messageService.notice(error)
    );
  }

  createNews(data) {
    this.newsForm = this.fb.group({
      propertyKey: [data.propertyKey, Validators.required],
      propertyValue: [data.propertyValue, Validators.required],
    });
  }

  createWarning(data) {
    this.warningForm = this.fb.group({
      propertyKey: [data.propertyKey, Validators.required],
      propertyValue: [data.propertyValue, Validators.required],
    });
  }

  submitNews() {
    this.api.put('api/manage/diva/news/' + this.auth.currentAccessCodeValue, this.newsForm.value).subscribe(
      data => this.createNews(data),
      error => this.messageService.notice(error)
    );
  }

  submitWarning() {
    this.api.put('api/manage/diva/warning/' + this.auth.currentAccessCodeValue, this.newsForm.value).subscribe(
      data => this.createWarning(data),
      error => this.messageService.notice(error)
    );
  }

}
