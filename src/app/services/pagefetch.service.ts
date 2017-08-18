import { Injectable } from '@angular/core';
import Metascraper from 'metascraper';
import { Link } from '../models/link';

@Injectable()
export class PagefetchService {

  constructor() { }

  fetchPage(url: string) {
    const newurl = `${url}`;
    return Metascraper.scrapeUrl(newurl)
                .then((metadata) => {
                  console.log(metadata);
                  const link = new Link();
                  link.setMetadata(metadata);

                  return link;
                });
  }

}
