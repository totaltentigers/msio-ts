import { Region } from '../src/endpoints/base-api';
import { Item } from '../src/endpoints/item';

describe('Test test', () => {
  it('works', () => {
    const item = new Item();
    item.getItemCategories(Region.GMS, 234).then(data => {
      console.log(data);
    });
  });
});
