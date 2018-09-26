<<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Page Title</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" type="text/css" media="screen" href="main.css" />
    <script src="calculator.js"></script>
</head>
<body>
    <h1>Years Ago Calulator</h1>

    <form name="myForm" onsubmit="ageCalc()" action="/answer.php">
        Element Name:<br>
        <input name="Isotope" list="isotope" name="Isotope" value="<?php echo $isotope;?>">
            <datalist id="isotope">
                <option value="Uranium-235 --> Lead">
                <option value="Carbon-14">
                <option value="Potassium-40">
                <option value="Samarium-147">
                <option value="Uranium-238">
                <option value="Rubidium-87">
                <option value="Uranium-234">
                <option value="Uranium-235 --> Protactinium">
                <option value="Chlorine-36">
            </datalist><br><br>
        Number of Daughter Atoms:<br><input type="number" name="DaughterAtoms" id="daughterAtoms" value="<?php echo $daughterAtoms;?>"><br><br>
        Sample Size:<br><input type="number" name="SampleSize" id="sampleSize" value="<?php echo $sampleSize;?>"><br><br>
        <input type="submit" value="Sumbit">
    </form>

    <?php
    float $age = (float log(float $sampleSize) - float log(float $daughterAtoms)) / float $lambda;
    echo "Age is ";
    echo $age;
    ?>
</body>
</html>