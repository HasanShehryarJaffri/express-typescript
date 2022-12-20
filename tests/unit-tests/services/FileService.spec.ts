import 'jest';

import FileService from '../../../src/api/services/FileService';

describe('FileService', () => {
  it("should read the local config file correctly", () => {
    const data = FileService.readLocalConfigFile();

    expect(data).toBeTruthy();
  })
})