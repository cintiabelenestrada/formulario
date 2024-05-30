export class TranslateModel {
  data!: Data;
}

export class Data {
  translations!: Translation[];
}

export class Translation {
  translatedText!: string;
  detectedSourceLanguage!: string;
}