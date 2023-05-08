import { render, fireEvent, waitFor } from "@testing-library/react";
import { useRouter } from "next/router";
import { getUser } from "../../../helper/api";
import Login from "../../../components/pages/login/Login";

jest.mock("../../../helper/api");
jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

describe("Login", () => {
  const mockRouter = { push: jest.fn() };
  (useRouter as jest.Mock).mockReturnValue(mockRouter);

  const mockGetUser = getUser as jest.MockedFunction<typeof getUser>;

  beforeEach(() => {
    mockGetUser.mockReset();
    mockRouter.push.mockReset();
  });

  it("submits the form and logs in the user on success", async () => {
    mockGetUser.mockResolvedValueOnce({
      status: 200,
      statusText: "OK",
      headers: {
        "Content-Type": "application/json"
      },
      config: {},
      data: { token: "abc123" },
    });


    const { getByLabelText, getByText } = render(<Login />);

    fireEvent.change(getByLabelText("Email"), { target: { value: "test@example.com" } });
    fireEvent.change(getByLabelText("Password"), { target: { value: "password123" } });
    fireEvent.submit(getByText("Login"));

    await waitFor(() => expect(mockGetUser).toHaveBeenCalledTimes(1));

    expect(mockRouter.push).toHaveBeenCalledWith("/");
  });
});
