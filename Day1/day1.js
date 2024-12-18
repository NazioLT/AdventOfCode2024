function readText(text) {
    const array = text.split(/[\s\n]+/);
    let pair = true;

    let list1, list2;
    array.forEach(element => {
        list2.push(element);
        pair = !pair;
    });

    list1.sort();
    list2.sort();

    let totalDistance = 0;
    for (let i = 0; i < list1.length; i++) {
        const element1 = list1[i];
        const element2 = list2[i];

        totalDistance += Math.abs(element1 - element2);
    }

    alert(totalDistance);
}

fetch("Day1Input.txt")
    .then((res) => res.text())
    .then((text) => {
        readText(text);
    })
    .catch((e) => console.error(e));