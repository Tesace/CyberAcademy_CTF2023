<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CTF 2023</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            display: flex;
            flex-direction: column;
            align-items: center;
            min-height: 100vh;
            background-color: #f4f4f4;
        }

        h2 {
            margin-top: 20px;
        }

         h3 {
            margin-top: 20px;
        }

        ul {
            list-style: disc;
            padding: 0;
            text-align: left;
            margin-bottom: 20px;
        }

        .option-container {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 10px;
            margin-top: 20px;
            border:none;
        }

        .option-box {
            width: calc(33.33% - 20px);
            height: 100px;
            padding: 20px;
            box-sizing: border-box;
            background-color: #3498db;
            color: #fff;
            text-align: center;
            cursor: pointer;
            margin-bottom: 20px;
            border:none;
        }

        table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 20px;
            border:none;
        }

        tr {
            display: flex;
            justify-content: space-evenly;
            flex-wrap: wrap;
        }

        td {
            width: calc(33.33% - 20px);
            box-sizing: border-box;
            padding: 10px;
            margin-bottom: 20px;
            border:none;
        }

        @media only screen and (max-width: 600px) {
            .option-box, 
            td {
                width: 100%;
            }
        }
    </style>
</head>
<body>

<h2>Instructions:</h2>
<h3>Allotted time: 3 hours</h3>
<ul>
    <li>Complete all challenges in the allotted time</li>
    <li>The first correct submission within the timeframe wins the CTF, other submissions will be checked as well</li>
    <li>For every challenge solved, have a walkthrough which contains the steps and methods used to solve the challenge and screenshots to backup your steps</li>
    <li>Submit your results to Miracle, copying Tega</li>
    <li>Link to juice shop: https://juice-shop.herokuapp.com/</li>
    <li>Find the Flag for The wheels on the bus and Go Hard or Go Green</li>
    <li>Flag format XXX{XXXXXXXXXXXXXXX}</li>
    
</ul>

<div class="option-container">
    <div class="option-box" onclick="redirectToPage('wheels.html')">
        The Wheels on the Bus
    </div>
    <div class="option-box" onclick="redirectToPage('home.html')">
        Go Hard or Go Green
    </div>
    <div class="option-box" onclick="redirectToPage('host.html')">
        The Host
    </div>
    <div class="option-box" onclick="redirectToPage('juice1.html')">
        Juice Shop 1
    </div>
    <div class="option-box" onclick="redirectToPage('juice2.html')">
        Juice Shop 2
    </div>
        <div class="option-box" onclick="redirectToPage('juice3.html')">
        Juice Shop 3
    </div>
        <div class="option-box" onclick="redirectToPage('recon.html')">
        Recon
    </div>
     <div class="option-box" onclick="redirectToPage('mysterio.html')">
        Mysterio
    </div>
    <div class="option-box" onclick="redirectToPage('riddle.html')">
        Riddle
    </div>
</div>

<script>
    function redirectToPage(pageUrl) {
        window.location.href = pageUrl;
    }
</script>

</body>
</html>
