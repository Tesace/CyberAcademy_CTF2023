<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CTF 2023</title>
    <body>
        <h2>Instructions:</h2>
        <ul>
            <li>Complete all challenges in the allotted time</li>
            <li>The first correct submission within the timeframe wins the CTF, other submissions will be checked as well</li>
            <li>The target address for the challenges not hosted here will be provided and should be used by everyone</li>
            <li>For every challenge solved, have a walkthrough which contains the steps and methods used to solve the challenge and screenshots to backup your steps</li>
            <li>Submit your results to Miracle, copying Tega</li>
        </ul>
    </body>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;
            align-items: center;
            height: 100vh;
            background-color: #f4f4f4;
        }

        .option-box {
            width: 200px;
            height: 100px;
            margin: 10px;
            padding: 20px;
            box-sizing: border-box;
            background-color: #3498db;
            color: #fff;
            text-align: center;
            cursor: pointer;
        }
    </style>
</head>
<body>

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
    The Host
</div>

<script>
    function redirectToPage(pageUrl) {
        window.location.href = pageUrl;
    }
</script>

</body>
</html>
