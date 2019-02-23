
import{Pipe, PipeTransform} from "@angular/core";

@Pipe({name: 'initcap'})
export class InitCapPipe implements PipeTransform {
    transform(value: string): string {
        let output=value.charAt(0).toUpperCase() + value.slice(1);
        return output;
    }
}