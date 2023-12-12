<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Options Page</title>
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

<script>
    function redirectToPage(pageUrl) {
        window.location.href = pageUrl;
    }
</script>

</body>
</html>
