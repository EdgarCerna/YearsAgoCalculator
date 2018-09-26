// var isotope = document.getElementById(isotope);
// var daughterAtoms = document.getElementById(daughterAtoms);
// var sampleSize = document.getElementById(SampleSize);

// Linking the variables to lambda values
// if ("ElementName" = "Uranium-235 --> Lead") {
//     let lambda = 0.0000000009902;
// } else if ("ElementName" = "Carbon-14") {
//     let lambda = 0.00020968;
// } else if ("ElementName" = "Potassium-40") {
//     let lambda = 0.00000000053319;
// } else if ("ElementName" = "Samarium-147") {
//     let lambda = 0.00000000000653921;
// } else if ("ElementName" = "Uranium-238") {
//     let lambda = 0.000000000154033;
// } else if ("ElementName" = "Rubidium-87") {
//     let lambda = 0.0000000000138629;
// } else if ("ElementName" = "Uranium-234") {
//     let lambda = 0.0000086643390757;
// } else if ("ElementName" = "Uranium-235 --> Protactinium") {
//     let lambda = 0.0000215833884;
// } else if ("ElementName" = "Chlorine-36") {
//     let lambda = 0.000002310490602;
// }

// Calculations and logging data
function ageCalc() {
    var isotope = document.forms["myForm"]["Isotope"].values;
    var daughterAtoms = document.forms["myForm"]["DaughterAtoms"].values;
    var sampleSize = document.forms["myForm"]["SampleSize"].values;

    if (isotope = "Uranium-235 --> Lead") {
        let lambda = 0.0000000009902;
    } else if (isotope = "Carbon-14") {
        let lambda = 0.00020968;
    } else if (isotope = "Potassium-40") {
        let lambda = 0.00000000053319;
    } else if (isotope = "Samarium-147") {
        let lambda = 0.00000000000653921;
    } else if (isotope = "Uranium-238") {
        let lambda = 0.000000000154033;
    } else if (isotope = "Rubidium-87") {
        let lambda = 0.0000000000138629;
    } else if (isotope = "Uranium-234") {
        let lambda = 0.0000086643390757;
    } else if (isotope = "Uranium-235 --> Protactinium") {
        let lambda = 0.0000215833884;
    } else if (isotope = "Chlorine-36") {
        let lambda = 0.000002310490602;
    }

    var age = (Math.log(sampleSize) - Math.log(daughterAtoms)) / lambda;

    console.log(age);
}