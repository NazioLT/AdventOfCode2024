function dayPart1(list1, list2) {
    let totalDistance = 0;
    for (let i = 0; i < list1.length; i++) {
        totalDistance += Math.abs(list1[i] - list2[i]);
    }

    alert(totalDistance);
}

function dayPart2(list1, list2) {
    let score = 0;
    list1.forEach(leftElement => {
        let count = 0;
        list2.forEach(rightElement => {
            if(rightElement == leftElement)
                count++;
        });

        score += count * leftElement;
    });

    alert(score);
}

fetch("Day1Input.txt")
    .then((res) => res.text())
    .then((text) => {
        const array = text.split('\n');

        let list1 = [];
        let list2 = [];
        array.forEach(element => {
            const lineValues = element.split("   ");
            if (lineValues.length != 2)
                return;

            list1.push(Number(lineValues[0]));
            list2.push(Number(lineValues[1]));
        });

        list1.sort();
        list2.sort();

        dayPart1(list1, list2);
        dayPart2(list1, list2);
    })
    .catch((e) => console.error(e));