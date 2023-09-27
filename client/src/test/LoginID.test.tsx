import { render, screen, fireEvent } from "@testing-library/react";
import LoginID from "../pages/member/LoginID";
import { BrowserRouter } from "react-router-dom";

describe("LoginID 테스트", () => {
  test("LoginID 컴포넌트들이 제대로 렌더링 되었는지 확인", () => {
    render(
      <BrowserRouter>
        <LoginID />
      </BrowserRouter>
    );

    expect(screen.getByText("PROJECT HOUSE")).toBeInTheDocument();
    expect(screen.getByLabelText("이메일")).toBeInTheDocument();
    expect(screen.getByText("계정 만들기")).toBeInTheDocument();
    expect(screen.getByText("다음")).toBeInTheDocument();
  });

  test("email입력 후 다음버튼 클릭이 가능해야 한다", () => {
    render(
      <BrowserRouter>
        <LoginID />
      </BrowserRouter>
    );

    const emailInput = screen.getByLabelText("이메일") as HTMLInputElement;
    fireEvent.change(emailInput, { target: { value: "qwer@qwer.com" } });
    const submitButton = screen.getByText("다음") as HTMLButtonElement;
    fireEvent.click(submitButton);
  });
});
