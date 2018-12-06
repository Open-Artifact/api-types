import Card from "./Card";
import SetInfo from "./SetInfo";
export default interface CardSet {
  version: number;
  set_info: SetInfo;
  card_list: Card[];
}
