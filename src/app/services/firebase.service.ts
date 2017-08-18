import { Injectable } from '@angular/core';
import { Link, ILink } from '../models/link';
import { LINKS } from './mockfirebase.service';

@Injectable()
export class FirebaseService {
    getLinks(): Promise<ILink[]> {
        console.log(LINKS);
        return Promise.resolve(LINKS);
    }

    addLink(link: Link) {
        LINKS.push(link);
    }

    removeLink(link: Link) {
        const index = LINKS.indexOf(link);
        if (index > -1) {
            LINKS.splice(index, 1);
        }
    }
}
