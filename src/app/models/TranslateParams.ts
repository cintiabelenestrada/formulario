export class TranslateParams {
    source: string;
    target: string;
    q: string;
  
    constructor(source: string = ' ', target: string = '', q: string = '') {
      this.source = source;
      this.target = target;
      this.q = q;
    }
}