export const BANNER_CONFIG = 'BANNER_CONFIG';
export const BANNER_CONFIG_SUCCESS = 'BANNER_CONFIG_SUCCESS';
export const BANNER_CONFIG_FAIL = 'BANNER_CONFIG_FAIL';

export function banner() {
  return {
    actionType: BANNER_CONFIG,
    'API': {
      url: 'banner',
      types: [BANNER_CONFIG, BANNER_CONFIG_SUCCESS, BANNER_CONFIG_FAIL],
      methods: 'get'
    }
  }
}
