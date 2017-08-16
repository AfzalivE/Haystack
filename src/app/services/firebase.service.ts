import { Injectable } from '@angular/core';
import { Link } from '../models/link';
import { LINKS } from './mockfirebase.service';

@Injectable()
export class FirebaseService {
    getLinks(): Promise<Link[]> {
        console.log(LINKS);
        return Promise.resolve(LINKS);
    }

    addLink(link: Link) {
        LINKS.push(link);
    }
}
