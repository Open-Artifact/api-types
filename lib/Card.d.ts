import IngameImage from "./IngameImage";
import { LanguageOptionLargeImage, LanguageOptionText } from "./LanguageOptions";
import MiniImage from "./MiniImage";
import Reference from "./Reference";
export default interface Card {
    card_id: number;
    base_card_id: number;
    card_type: string;
    rarity: string;
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
    is_quick?: boolean;
    is_crosslane?: boolean;
    sub_type: string;
    gold_cost?: number;
    is_green?: boolean;
    is_red?: boolean;
    armor?: number;
    is_blue?: boolean;
}
//# sourceMappingURL=Card.d.ts.map