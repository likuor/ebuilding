import axios from 'axios';
import { createUser } from '../../helper/api';

jest.mock('axios');

describe('createUser', () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  it('should create a new user successfully', async () => {
    const mockUser = {
      username: 'testuser',
      email: 'testuser@example.com',
      password: 'password123',
    };
    const mockResponse = {
      data: {
        message: 'Successed to signup',
        created: true,
      },
    };
    (axios.post as jest.Mock).mockResolvedValueOnce(mockResponse);
    const response = await createUser(mockUser);

    expect(axios.post).toHaveBeenCalledWith(`${process.env.NEXT_PUBLIC_API_FRONT_BASE_URL}/api/auth/signup`, {
      username: mockUser.username,
      email: mockUser.email,
      password: mockUser.password,
    }, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    expect(response).toEqual(mockResponse);
  });

  it('should return an error message if signup failed', async () => {
    const mockUser = {
      username: 'testuser',
      email: 'testuser@example.com',
      password: 'password123',
    };
    const mockErrorResponse = {
      response: {
        data: {
          message: 'Failed to signup',
        },
      },
    };
    (axios.post as jest.MockedFunction<typeof axios.post>).mockRejectedValueOnce(mockErrorResponse);

    try {
      await createUser(mockUser);
    } catch (error) {
      expect(axios.post).toHaveBeenCalledWith(`${process.env.NEXT_PUBLIC_API_FRONT_BASE_URL}/api/auth/signup`, {
        username: mockUser.username,
        email: mockUser.email,
        password: mockUser.password,
      }, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (axios.isAxiosError(error)) {
        expect(error.response?.data).toEqual(mockErrorResponse.response.data);
      }
    }
  });
});
