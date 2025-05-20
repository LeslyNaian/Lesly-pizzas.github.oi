<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Interfaz Principal</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background: linear-gradient(135deg, #78c850, #ffcc00);
            margin: 0;
            padding: 0;
            scroll-behavior: smooth;
        }

        .container {
            text-align: center;
            background: rgba(255, 255, 255, 0.8);
            padding: 20px;
            border-radius: 15px;
            box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
            margin: 50px auto;
            width: 80%;
        }

        h1 {
            color: #444;
        }

        .buttons {
            margin-top: 20px;
            display: flex;
            justify-content: center;
            gap: 20px;
        }

        .btn {
            display: inline-block;
            padding: 15px 40px;
            text-decoration: none;
            font-size: 18px;
            font-weight: bold;
            border-radius: 10px;
            color: #fff;
            transition: 0.3s ease-in-out;
            position: relative;
            overflow: hidden;
        }

        .pizza {
            background: #e63946;
        }

        .pots {
            background: #2a9d8f;
        }

        .btn:hover {
            transform: scale(1.1);
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
        }

        section {
            padding: 50px;
            background: #fff;
            margin: 50px auto;
            width: 80%;
            border-radius: 15px;
            box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Bienvenido</h1>
        <p>Selecciona una opción:</p>
        <div class="buttons">
            <a href="portada.html" class="btn pizza">Pizzería 🍕</a>
            <a href="Macetas.html" class="btn pots">Macetas 🪴</a>
        </div>
    </div>
</body>
</html>
