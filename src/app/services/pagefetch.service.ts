import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import * as Read from 'readability-from-string';

@Injectable()
export class PagefetchService {

  constructor(private http: Http) { }

  fetchPage(url: string) {
    // console.log(url);
    const newurl = `http://anyorigin.com/go?url=${url}`;
    this.http.get(newurl).subscribe(data => {
      const headers = data.headers;
      console.log(headers);
      // const content = JSON.stringify(JSON.parse(data.text())['contents']);
      // console.log('test');
      // const article = new Read(content, {
      //   href: newurl
      // });
      // console.log(article);
    });
  }

}
