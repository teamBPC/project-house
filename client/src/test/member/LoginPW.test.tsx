import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import LoginPW from "../../pages/member/LoginPW";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useLocation: () => ({
    state: { userEmail: "qwer@qwer.com" },
  }),
}));

describe("LoginPW 테스트", () => {
  test("LoginPW 컴포넌트들이 제대로 렌더링 되었는지 확인", () => {
    render(
      <BrowserRouter>
        <LoginPW />
      </BrowserRouter>
    );

    expect(screen.getByText("PROJECT HOUSE")).toBeInTheDocument();
    expect(screen.getByLabelText("비밀번호")).toBeInTheDocument();
    expect(screen.getByText("로그인")).toBeInTheDocument();
  });

  test("password입력 후 로그인버튼 클릭이 가능해야 한다", () => {
    render(
      <BrowserRouter>
        <LoginPW />
      </BrowserRouter>
    );

    const passwordInput = screen.getByLabelText("비밀번호") as HTMLInputElement;
    fireEvent.change(passwordInput, { target: { value: "qwerqwer123" } });
    expect(passwordInput.value).toBe("qwerqwer123");
    const submitButton = screen.getByText("로그인") as HTMLButtonElement;
    fireEvent.click(submitButton);
  });
});
