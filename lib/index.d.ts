import { LanguageOptionLargeImage, LanguageOptionText } from "./LanguageOptions";
export * from "./LanguageOptions";
export interface SetInfo {
    set_id: number;
    pack_item_def: number;
    name: LanguageOptionText;
}
export interface MiniImage {
    default: string;
}
export interface IngameImage {
    default: string;
}
export interface Reference {
    card_id: number;
    ref_type: string;
    count: number;
}
export interface Card {
    card_id: number;
    base_card_id: number;
    card_type: string;
    card_name: LanguageOptionText;
    card_text: LanguageOptionText;
    mini_image: MiniImage;
    large_image: LanguageOptionLargeImage;
    ingame_image: IngameImage;
    hit_points: number;
    references: Reference[];
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
export interface CardSet {
    version: number;
    set_info: SetInfo;
    card_list: Card[];
}
export interface CardAPIObject {
    card_set: CardSet;
}
//# sourceMappingURL=index.d.ts.map