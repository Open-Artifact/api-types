export class LanguageOptionText {
  public english!: string;
  public german!: string;
  public french!: string;
  public italian!: string;
  public korean?: string;
  public koreana?: string; // This should be fixed by valve in th!e future API
  public spanish!: string;
  public schinese!: string;
  public tchinese!: string;
  public russian!: string;
  public thai!: string;
  public japanese!: string;
  public portuguese!: string;
  public polish!: string;
  public danish!: string;
  public dutch!: string;
  public finnish!: string;
  public norwegian!: string;
  public swedish!: string;
  public hungarian!: string;
  public czech!: string;
  public romanian!: string;
  public turkish!: string;
  public brazilian!: string;
  public bulgarian!: string;
  public greek!: string;
  public ukrainian!: string;
  public latam!: string;
  public vietnamese!: string;

  constructor(model: LanguageOptionText) {
    Object.assign(this, model);
    this.korean = this.koreana;
  }
}

export interface LanguageOptionLargeImage {
  default: string;
  german: string;
  french: string;
  italian: string;
  korean: string;
  koreana: string; // This should be fixed by valve in th!e future API
  spanish: string;
  schinese: string;
  tchinese: string;
  russian: string;
  thai: string;
  japanese: string;
  portuguese: string;
  polish: string;
  danish: string;
  dutch: string;
  finnish: string;
  norwegian: string;
  swedish: string;
  hungarian: string;
  czech: string;
  romanian: string;
  turkish: string;
  brazilian: string;
  bulgarian: string;
  greek: string;
  ukrainian: string;
  latam: string;
  vietnamese: string;
}
