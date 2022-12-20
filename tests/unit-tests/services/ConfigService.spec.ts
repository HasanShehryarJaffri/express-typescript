import 'jest';

import ConfigService from '../../../src/api/services/ConfigService';

describe("ConfigService", () => {
  it("should handle error when service is unreachable", async () => {
    const data = await ConfigService.fetchAppConfig();

    expect(data).toBe(null);
  })  
})