function solveQuadratic() {
    const a = parseFloat(document.getElementById('a').value);
    const b = parseFloat(document.getElementById('b').value);
    const c = parseFloat(document.getElementById('c').value);
    const discriminant = b * b - 4 * a * c;
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '';
    if (discriminant > 0) {
        const root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        const root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
        resultDiv.innerHTML = `x1 = ${root1}<br>x2 = ${root2}`;
    } else if (discriminant === 0) {
        const root = -b / (2 * a);
        resultDiv.innerHTML = `x = ${root}`;
    } else {
        const realPart = -b / (2 * a);
        const imaginaryPart = Math.sqrt(-discriminant) / (2 * a);
        const root1 = `${realPart}+${imaginaryPart}i`;
        const root2 = `${realPart}-${imaginaryPart}i`;
        resultDiv.innerHTML = `x1 = ${root1}<br>x2 = ${root2}`;
    }
}