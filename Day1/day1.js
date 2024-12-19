function day1Part1(text) {
    const array = text.split('\n');

    let list1 = [];
    let list2 = [];
    array.forEach(element => {
        const lineValues = element.split("   ");
        if(lineValues.length != 2)
            return;

        list1.push(Number(lineValues[0]));
        list2.push(Number(lineValues[1]));
    });

    list1.sort();
    list2.sort();

    let totalDistance = 0;
    for (let i = 0; i < list1.length; i++) {
        totalDistance += Math.abs(list1[i] - list2[i]);
    }

    alert(totalDistance);
}

fetch("Day1Input.txt")
    .then((res) => res.text())
    .then((text) => {
        day1Part1(text);
    })
    .catch((e) => console.error(e));