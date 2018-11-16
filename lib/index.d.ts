export interface IName {
    english: string;
}
export interface ISetInfo {
    set_id: number;
    pack_item_def: number;
    name: IName;
}
export interface ICardName {
    english: string;
}
export interface ICardText {
    english: string;
}
export interface IMiniImage {
    default: string;
}
export interface ILargeImage {
    default: string;
}
export interface IIngameImage {
    default: string;
}
export interface IReference {
    card_id: number;
    ref_type: string;
    count: number;
}
export interface ICard {
    card_id: number;
    base_card_id: number;
    card_type: string;
    card_name: ICardName;
    card_text: ICardText;
    mini_image: IMiniImage;
    large_image: ILargeImage;
    ingame_image: IIngameImage;
    hit_points: number;
    references: IReference[];
    illustrator: string;
    mana_cost?: number;
    attack?: number;
    is_black?: boolean;
    sub_type: string;
    gold_cost?: number;
    is_green?: boolean;
    is_red?: boolean;
    armor?: number;
    is_blue?: boolean;
}
export interface ICardSet {
    version: number;
    set_info: ISetInfo;
    card_list: ICard[];
}
export interface ICardAPIObject {
    card_set: ICardSet;
}
//# sourceMappingURL=index.d.ts.map