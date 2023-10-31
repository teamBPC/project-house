import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Join from "../../pages/join/Join";

jest.mock("../libs/sendData");
describe("Join 테스트", () => {
  test("Join 컴포넌트들이 제대로 렌더링 되었는지 확인", () => {
    render(
      <BrowserRouter>
        <Join />
      </BrowserRouter>
    );

    expect(screen.getByText("PROJECT HOUSE")).toBeInTheDocument();
    expect(screen.getByLabelText("이메일")).toBeInTheDocument();
    expect(screen.getByLabelText("이름")).toBeInTheDocument();
    expect(screen.getByLabelText("비밀번호")).toBeInTheDocument();
    expect(screen.getByLabelText("개인 블로그 및 사이트")).toBeInTheDocument();
    expect(screen.getByText("가입하기")).toBeInTheDocument();
  });

  test("유효하지 않은 이메일 형식을 입력한 경우 오류 메시지가 표시되어야 한다", async () => {
    render(
      <BrowserRouter>
        <Join />
      </BrowserRouter>
    );
    const emailInput = screen.getByLabelText("이메일") as HTMLInputElement;
    const nameInput = screen.getByLabelText("이름") as HTMLInputElement;
    const passwordInput = screen.getByLabelText("비밀번호") as HTMLInputElement;
    const submitButton = screen.getByText("가입하기") as HTMLButtonElement;
    fireEvent.change(emailInput, { target: { value: "qwerqwer" } });
    fireEvent.change(nameInput, { target: { value: "아무개" } });
    fireEvent.change(passwordInput, { target: { value: "q1234w" } });
    fireEvent.click(submitButton);
    await waitFor(() => {
      expect(
        screen.getByText("올바른 이메일 형식이 아닙니다.")
      ).toBeInTheDocument();
    });
  });

  test("유효하지 않은 이름 형식을 입력한 경우 오류 메시지가 표시되어야 한다", async () => {
    render(
      <BrowserRouter>
        <Join />
      </BrowserRouter>
    );
    const emailInput = screen.getByLabelText("이메일") as HTMLInputElement;
    const nameInput = screen.getByLabelText("이름") as HTMLInputElement;
    const passwordInput = screen.getByLabelText("비밀번호") as HTMLInputElement;
    const submitButton = screen.getByText("가입하기") as HTMLButtonElement;
    fireEvent.change(emailInput, { target: { value: "qwer@qwer.com" } });
    fireEvent.change(nameInput, { target: { value: "~!@123" } });
    fireEvent.change(passwordInput, { target: { value: "q1234w" } });

    fireEvent.click(submitButton);
    await waitFor(() => {
      expect(
        screen.getByText("이름에는 특수 문자나 공백을 포함할 수 없습니다.")
      ).toBeInTheDocument();
    });
  });

  test("유효하지 않은 비밀번호 형식을 입력한 경우 오류 메시지가 표시되어야 한다", async () => {
    render(
      <BrowserRouter>
        <Join />
      </BrowserRouter>
    );
    const emailInput = screen.getByLabelText("이메일") as HTMLInputElement;
    const nameInput = screen.getByLabelText("이름") as HTMLInputElement;
    const passwordInput = screen.getByLabelText("비밀번호") as HTMLInputElement;
    const submitButton = screen.getByText("가입하기") as HTMLButtonElement;
    fireEvent.change(emailInput, { target: { value: "qwer@qwer.com" } });
    fireEvent.change(nameInput, { target: { value: "아무개" } });
    fireEvent.change(passwordInput, { target: { value: "abc" } });

    fireEvent.click(submitButton);
    await waitFor(() => {
      expect(
        screen.getByText(
          "비밀번호는 영문 2개 이상과 숫자 4개 이상을 포함해야 합니다."
        )
      ).toBeInTheDocument();
    });
  });

  test("모두 유효한 형식을 입력한 경우 가입하기 버튼이 클릭 되어야 한다", async () => {
    render(
      <BrowserRouter>
        <Join />
      </BrowserRouter>
    );
    const emailInput = screen.getByLabelText("이메일") as HTMLInputElement;
    const nameInput = screen.getByLabelText("이름") as HTMLInputElement;
    const passwordInput = screen.getByLabelText("비밀번호") as HTMLInputElement;
    const submitButton = screen.getByText("가입하기") as HTMLButtonElement;
    const alertSpy = jest.spyOn(window, "alert");
    const mockSendData = require("../libs/sendData");

    fireEvent.change(emailInput, { target: { value: "qwer@qwer.com" } });
    fireEvent.change(nameInput, { target: { value: "아무개" } });
    fireEvent.change(passwordInput, { target: { value: "q1234w" } });
    fireEvent.click(submitButton);
    mockSendData.default.mockResolvedValue(true);
    await waitFor(() => {
      expect(alertSpy).toHaveBeenCalledWith("가입이 완료되었습니다.");
    });
    alertSpy.mockRestore();
  });
});
