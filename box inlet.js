document.getElementById("spillwayForm").addEventListener("submit", function(event) {
    event.preventDefault();
    let Qg = parseFloat(document.getElementById("Qg").value);
    let B = parseFloat(document.getElementById("B").value);
    let W = parseFloat(document.getElementById("W").value);
    let We = parseFloat(document.getElementById("We").value);

    const g = 9.81;
    // critical depth at straight section
    let x1 = Qg / W;
    let x2 = Math.pow(x1, 2);
    let x3 = x2 / g;
    let Dc = Math.sqrt(x3);
    let DcUnits = "m";

    // critical depth at end sill
    let y1 = Qg / We;
    let y2 = Math.pow(y1, 2);
    let y3 = y2 / g;
    let Dce = Math.sqrt(y3);
    let DceUnits = "m";

    // Length of straight section
    let Ls = ((0.2 / (B / W)) + 1) * Dc;
    let LsUnits = "m";

    // Length of basin section
    let Lb = ((W + 2 * B) / (2 * B / W));
    let LbUnits = "m";

    // Tail water depth
    let D2;
    if (Lb > 11.5 * Dce) {
        D2 = (Dce + (0.052 * We));
    } else {
        D2 = 1.6 * Dce;
    }
    let D2Units = "m";

    // Height of end sill and longitudinal sill
    let F = D2 / 6;
    let FUnits = "m";

    // Number of longitudinal sills
    let N = We < 2.5 * W ? 2 : 4;

    // Space between longitudinal sills
    let P1 = W / 6;
    let P2 = W / 4;
    let PUnits = "m";

    // Height of side wall above tail water Depth
    let t = D2 / 3;
    let tUnits = "m";

    document.getElementById("Dc").innerText = Dc.toFixed(2) + " " + DcUnits;
    document.getElementById("Dce").innerText = Dce.toFixed(2) + " " + DceUnits;
    document.getElementById("Ls").innerText = Ls.toFixed(2) + " " + LsUnits;
    document.getElementById("Lb").innerText = Lb.toFixed(2) + " " + LbUnits;
    document.getElementById("d2").innerText = D2.toFixed(2) + " " + D2Units;
    document.getElementById("F").innerText = F.toFixed(2) + " " + FUnits;
    document.getElementById("numSills").innerText = N;
    document.getElementById("P").innerText = P1.toFixed(2) + " to " + P2.toFixed(2) + " " + PUnits;
    document.getElementById("t").innerText = t.toFixed(2) + " " + tUnits;

    document.getElementById("result").style.display = "block";
});
