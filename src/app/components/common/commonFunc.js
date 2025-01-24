
export function handleInputChange(e, setFunc) {
    setFunc(e.target.value);
}

export function clickAndSetValue(value, setFunc) {
    setFunc(value);
}

export function clickAndSetValueThenCloseDropdown(value, setFunc, setDropdownFunc) {
    setFunc(value);
    setDropdownFunc(false);
}

export function clickAndSetValueToNull(setFunc) {
    setFunc(null);
}

export function getCurrentDate() {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0'); // Tháng bắt đầu từ 0, nên cần +1
    const day = String(today.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}
export function getCurrentDateTimeISO() {
    console.log(new Date().toISOString().slice(0, 19));
    
    return new Date().toISOString().slice(0, 19); // Kết quả: 2025-01-01T12:34:56
}