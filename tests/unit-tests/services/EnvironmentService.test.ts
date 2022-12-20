import 'jest';

import EnvironmentService from '../../../src/api/services/EnvironmentService';

describe('EnvironmentService', () => {
  it('works fine', () => {
    const value = EnvironmentService.getEnvironmentVariable("BASE_URL");

    expect(value).toBe("http://localhost");
  })
})