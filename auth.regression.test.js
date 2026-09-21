const { login } = require("./auth");

test("Mật khẩu sai trả về false", () => {
    expect(login("admin", "456")).toBe(false);
});

test("Username rỗng trả về false", () => {
    expect(login("", "123")).toBe(false);
});

test("Mật khẩu chứa ký tự đặc biệt trả về false", () => {
    expect(login("admin", "12@3")).toBe(false);
});

test("Tài khoản bị khóa trả về false", () => {
    expect(login("locked", "123")).toBe(false);
});

test("Username không tồn tại trả về false", () => {
    expect(login("user123", "123")).toBe(false);
});

test("Mật khẩu rỗng trả về false", () => {
    expect(login("admin", "")).toBe(false);
});
