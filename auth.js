function login(username, password) {
    // Tài khoản bị khóa
    if (username === "locked") {
        return false;
    }

    // Username rỗng
    if (!username) {
        return false;
    }

    // Mật khẩu chứa ký tự đặc biệt
    if (/[^a-zA-Z0-9]/.test(password)) {
        return false;
    }

    // Kiểm tra tài khoản và mật khẩu
    return username === "admin" && password === "123";
}

module.exports = { login };
// Update login logic
