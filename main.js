document
  .getElementById("quadraticForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const a = parseFloat(document.getElementById("a").value);
    const b = parseFloat(document.getElementById("b").value);
    const c = parseFloat(document.getElementById("c").value);

    if (isNaN(a)) {
      document.getElementById("result").innerText =
        "Vui lòng nhập vào một giá trị số hợp lệ cho a.";
      return;
    }

    if (isNaN(b)) {
      document.getElementById("result").innerText =
        "Vui lòng nhập vào một giá trị số hợp lệ cho b.";
      return;
    }

    if (isNaN(c)) {
      document.getElementById("result").innerText =
        "Vui lòng nhập vào một giá trị số hợp lệ cho c.";
      return;
    }

    if (a === 0) {
      document.getElementById("result").innerText =
        "Đây không phải là phương trình bậc hai.";
      return;
    }

    const delta = b * b - 4 * a * c;
    let result;

    if (delta > 0) {
      const x1 = (-b + Math.sqrt(delta)) / (2 * a);
      const x2 = (-b - Math.sqrt(delta)) / (2 * a);
      result = `Phương trình có hai nghiệm phân biệt: x1 = ${x1}, x2 = ${x2}`;
    } else if (delta === 0) {
      const x = -b / (2 * a);
      result = `Phương trình có nghiệm kép: x = ${x}`;
    } else {
      result = "Phương trình vô nghiệm";
    }

    document.getElementById("result").innerText = result;
  });
