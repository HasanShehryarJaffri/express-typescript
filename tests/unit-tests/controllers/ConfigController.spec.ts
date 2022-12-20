import 'jest';
import { Request, Response } from 'express';


import { ConfigController } from '../../../src/api/controllers/ConfigController';


describe('Health Check Controller', () => {
  it('can get server time', async () => {
    const mockFn = jest.fn();
    const responseSpy: unknown = {
      send: mockFn
    }
    
    await ConfigController.getAppConfig({} as Request, responseSpy as Response);  
    
    expect(mockFn).toHaveBeenCalledWith({
        allowMobilePayments: true,
        defaultPaymentPerRegion: true
    });
  });
});