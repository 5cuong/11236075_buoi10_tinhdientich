function showInputs() {
    // Ẩn tất cả các input
    document.getElementById("triangle-inputs").style.display = "none";
    document.getElementById("rectangle-inputs").style.display = "none";
    document.getElementById("circle-inputs").style.display = "none";

    // Hiển thị các input dựa trên lựa chọn
    const selectedShape = document.getElementById("choose").value;
    if (selectedShape === "tam") {
        document.getElementById("triangle-inputs").style.display = "block";
    } else if (selectedShape === "cn") {
        document.getElementById("rectangle-inputs").style.display = "block";
    } else if (selectedShape === "tron") {
        document.getElementById("circle-inputs").style.display = "block";
    }
}

function calculate() {
    // Lấy giá trị từ các input
    const selectedShape = document.getElementById("choose").value;
    let area = 0;
    let perimeter = 0;

    if (selectedShape === "tam") {
        const side1 = parseFloat(document.getElementById("side1").value);
        const side2 = parseFloat(document.getElementById("side2").value);
        const side3 = parseFloat(document.getElementById("side3").value);

        if (side1 > 0 && side2 > 0 && side3 > 0 && (side1 + side2 > side3) && (side1 + side3 > side2) && (side2 + side3 > side1)) {
            perimeter = side1 + side2 + side3;
            const s = perimeter / 2;
            area = Math.sqrt(s * (s - side1) * (s - side2) * (s - side3));
        } else {
            alert("Dữ liệu không hợp lệ cho hình tam giác.");
            return;
        }
    } else if (selectedShape === "cn") {
        const length = parseFloat(document.getElementById("length").value);
        const width = parseFloat(document.getElementById("width").value);

        if (length > 0 && width > 0) {
            area = length * width;
            perimeter = 2 * (length + width);
        } else {
            alert("Vui lòng nhập số hợp lệ cho chiều dài và chiều rộng.");
            return;
        }
    } else if (selectedShape === "tron") {
        const radius = parseFloat(document.getElementById("radius").value);

        if (radius > 0) {
            area = Math.PI * radius * radius;
            perimeter = 2 * Math.PI * radius;
        } else {
            alert("Vui lòng nhập bán kính hợp lệ.");
            return;
        }
    }

    // Hiển thị kết quả
    document.getElementById("area").innerText = `Diện tích: ${area.toFixed(2)}`;
    document.getElementById("perimeter").innerText = `Chu vi: ${perimeter.toFixed(2)}`;
}

function resetForm() {
    // Reset tất cả các kết quả
    document.getElementById("choose").value = "none";
    document.getElementById("triangle-inputs").style.display = "none";
    document.getElementById("rectangle-inputs").style.display = "none";
    document.getElementById("circle-inputs").style.display = "none";

    document.getElementById("area").innerText = "Diện tích: ";
    document.getElementById("perimeter").innerText = "Chu vi: ";
}
