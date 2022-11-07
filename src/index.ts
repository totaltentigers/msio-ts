import { Region } from './endpoints/base-api';
import { Item } from './endpoints/item';

const item = new Item();
item.getItemCategories(Region.GMS, 234).then(data => {
  console.log(data);
});
