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
            height: 100vh;
            background-color: #f4f4f4;
        }

        .option-container {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 10px;
            margin-top: 20px;
        }

        .option-box {
            width: 200px;
            height: 100px;
            padding: 20px;
            box-sizing: border-box;
            background-color: #3498db;
            color: #fff;
            text-align: center;
            cursor: pointer;
        }

        /* Add the table styles */
        table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 20px;
        }

        tr {
            display: flex;
            justify-content: space-evenly;
        }
    </style>
</head>
<body>

<h2>Instructions:</h2>
<ul>
    <li>Complete all challenges in the allotted time</li>
    <li>The first correct submission within the timeframe wins the CTF, other submissions will be checked as well</li>
    <li>The target address for the challenges not hosted here will be provided and should be used by everyone</li>
    <li>For every challenge solved, have a walkthrough which contains the steps and methods used to solve the challenge and screenshots to backup your steps</li>
    <li>Submit your results to Miracle, copying Tega</li>
</ul>


<table>
    <tr>
        <td>
            <div class="option-box" onclick="redirectToPage('wheels.html')">
                The Wheels on the Bus
            </div>
        </td>
        <td>
            <div class="option-box" onclick="redirectToPage('home.html')">
                Go Hard or Go Green
            </div>
        </td>
        <td>
            <div class="option-box" onclick="redirectToPage('host.html')">
                The Host
            </div>
        </td>
    </tr>
    <tr>
        <td>
            <div class="option-box" onclick="redirectToPage('juice1.html')">
                Juice Shop 1
            </div>
        </td>
        <td>
            <div class="option-box" onclick="redirectToPage('juice2.html')">
                Juice Shop 2
            </div>
        </td>
        
    </tr>
</table>

<script>
    function redirectToPage(pageUrl) {
        window.location.href = pageUrl;
    }
</script>

</body>
</html>
