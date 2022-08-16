import axios from 'axios';

export enum HttpMethod {
  GET,
}

export enum Region {
  GMS,
}

export class BaseApi {
  static readonly API_BASE_URL = 'https://maplestory.io/api/';

  makeHttpCall(httpMethod: HttpMethod, urlPaths: string[]): Promise<any> {
    const url = this.buildUrl(urlPaths);

    if (httpMethod == HttpMethod.GET) {
      return this.makeHttpGetCall(url);
    } else {
      return Promise.resolve();
    }
  }

  private makeHttpGetCall(url: string): Promise<any> {
    return axios.get(url);
  }

  private buildUrl(urlPaths: string[]): string {
    let url = BaseApi.API_BASE_URL;

    let subpaths: string = '';

    urlPaths
      .map(urlPath => {
        return String(urlPath);
      })
      .forEach((urlPathString, pathIndex) => {
        subpaths = subpaths.concat(urlPathString);

        if (pathIndex + 1 != urlPaths.length) {
          subpaths = subpaths.concat('/');
        }
      });

    return url.concat(subpaths);
  }
}
