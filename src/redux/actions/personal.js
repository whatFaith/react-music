export const PERSONAL_CONFIG = 'PERSONAL_CONFIG';
export const PERSONAL_CONFIG_SUCCESS = 'PERSONAL_CONFIG_SUCCESS';
export const PERSONAL_CONFIG_FAIL = 'PERSONAL_CONFIG_FAIL';

export function personal() {
  return {
    actionType: PERSONAL_CONFIG,
    'API': {
      url: 'personalized',
      types: [PERSONAL_CONFIG, PERSONAL_CONFIG_SUCCESS, PERSONAL_CONFIG_FAIL],
      methods: 'get'
    }
  }
}
