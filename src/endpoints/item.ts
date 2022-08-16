import { BaseApi, HttpMethod, Region } from './base-api';

export class Item {
  getItemCategories(region: Region, version: number): Promise<any> {
    const baseApi = new BaseApi();

    return baseApi.makeHttpCall(HttpMethod.GET, [
      region.toString(),
      String(version),
      'item',
      'category',
    ]);
  }
}
