import 'jest';
import { Request, Response } from 'express';


import { HealthCheckController } from '../../../src/api/controllers/HealthCheckController';


describe('Health Check Controller', () => {
  it('can get server time', async () => {
    const mockFn = jest.fn();
    const responseSpy: unknown = {
      send: mockFn
    }
    
    HealthCheckController.getHealthStatus({} as Request, responseSpy as Response);  
    
    expect(mockFn).toHaveBeenCalledWith('Health OK!');
  });
});