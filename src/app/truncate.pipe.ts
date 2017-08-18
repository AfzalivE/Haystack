import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'truncate'})
export class TruncatePipe implements PipeTransform {
    transform(value: string, chars: number): string {
        const words = value.split(' ');
        let truncatedWords = [];
        let charCount = 0;
        for (var word of words) {
            if (charCount + word.length > chars) {
                break;
            }

            charCount += word.length;
            truncatedWords.push(word);
        }

        return truncatedWords.join(' ');
    }
  }
  
