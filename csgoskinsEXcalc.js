//IT ONLY WORKS FOR PL LANGUAGE AND PLN RIGHT NOW


//get skin pool "table"
var sectionListElement = document.querySelector('.section_list');

if (sectionListElement) {
    var listItems = sectionListElement.querySelectorAll('.table_row'); //get values table of skin
    var casePrice = parseFloat(prompt("Input case price cost"))
    var listItemContents = Array.from(listItems).map(li => li.textContent.trim()); //put them into array
    var expectedValueFinal = -casePrice
    var expectedValue = 0


    for(var i = 0;i<listItemContents.length;i++)
        {
            var splittedItem = listItemContents[i].split('\n')
            var odds = (parseFloat(splittedItem[3].substring(splittedItem[3].length - 1, splittedItem[3].lastIndexOf(' ')))/100).toFixed(5)
            //console.log(odds)
            var price = parseFloat(splittedItem[2])
            //console.log(price)
            expectedValue += odds*price
        }
        expectedValueFinal += expectedValue
    console.log("expected value: "+ expectedValue.toFixed(2))
    console.log("Average ROI percentage:" + ((casePrice/(casePrice-expectedValueFinal))*100).toFixed(2)+"%")
} else {
    console.error('<ul> element with class "section_list" not found.');
}
