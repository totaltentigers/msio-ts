import axios from 'axios';

export enum HttpMethod {
  GET,
}

export enum Region {
  GMS = 'GMS',
}

export class BaseApi {
  static readonly API_BASE_URL = 'https://maplestory.io/api/';

  makeHttpCall(
    httpMethod: HttpMethod,
    urlPaths: string[],
    queryParams?: { [key: string]: string }
  ): Promise<any> {
    const url = this.buildUrl(urlPaths, queryParams);

    console.log(`MSIO: Making HTTP call with URL: '${url}'`);

    if (httpMethod == HttpMethod.GET) {
      return this.makeHttpGetCall(url);
    } else {
      return Promise.resolve();
    }
  }

  private makeHttpGetCall(url: string): Promise<any> {
    return axios.get(url);
  }

  private buildUrl(
    urlPaths: string[],
    queryParams?: { [key: string]: string }
  ): string {
    let url = BaseApi.API_BASE_URL;

    let subpaths: string = '';

    urlPaths
      .map(urlPath => {
        return String(urlPath);
      })
      .forEach((urlPathString, pathIndex) => {
        subpaths = subpaths + urlPathString;

        if (pathIndex + 1 != urlPaths.length) {
          subpaths = subpaths + '/';
        }
      });

    const urlWithPaths = url + subpaths;

    if (queryParams && Object.keys(queryParams).length > 0) {
      let queryParamString = '';

      Object.keys(queryParams).forEach((queryParamKey, index) => {
        if (index > 0) {
          queryParamString = '&' + queryParamKey + queryParams[queryParamKey];
        } else {
          queryParamString = '?' + queryParamKey + queryParams[queryParamKey];
        }
      });

      return urlWithPaths + queryParamString;
    } else {
      return urlWithPaths;
    }
  }
}
