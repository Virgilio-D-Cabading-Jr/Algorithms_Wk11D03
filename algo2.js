/////////////////////////////////////////////////////////
//  ALGORITHM TWO JAVASCRIPT
/////////////////////////////////////////////////////////

/*
  Given an array of ailments (illnesses), and an array of medication objects that have a nested array of treatedSymptoms
  return the medication name(s) that treats the most given symptoms
*/

const medications = [
    {
        name: "Sulforaphane",
        treatableSymptoms: [
            "dementia",
            "alzheimer's",
            "inflammation",
            "neuropathy",
        ],
    },
    {
        name: "Longvida Curcumin",
        treatableSymptoms: [
            "pain",
            "inflammation",
            "depression",
            "arthritis",
            "anxiety",
        ],
    },
    {
        name: "Hericium erinaceus",
        treatableSymptoms: [
            "anxiety",
            "cognitive decline",
            "depression"],
    },
    {
        name: "Nicotinamide mononucleotide",
        treatableSymptoms: [
            "ageing",
            "low NAD",
            "obesity",
            "mitochondrial myopathy",
            "diabetes",
        ],
    },
    {
        name: "PainAssassinator",
        treatableSymptoms: [
            "pain",
            "inflammation",
            "cramps",
            "headache",
            "toothache",
            "back pain",
            "fever",
        ],
    },
];


function webMD(ailments, meds) {
    const treatment = [];
    let isTreatment = false;

    for (med of meds) {
        for (const ailment of ailments) {
            if (med.treatableSymptoms.includes(ailment)) {
                isTreatment = true;
            } else {
                isTreatment = false;
                break;
            }
        }
        if (isTreatment) {
            treatment.push(med.name);
        }

    }

    return treatment;
 }

/*
Input: ["pain"], medications
Output: ["PainAssassinator", "Longvida Curcumin"]
*/

console.log(webMD(["pain"], medications));

/*
Input: ["pain", "inflammation", "depression"], medications
Output: ["Longvida Curcumin"]
*/


console.log(webMD(["pain", "inflammation", "depression"], medications));

/*
Input: ["existential dread"], medications
Output: []
*/

console.log(webMD(["existential dread"], medications));