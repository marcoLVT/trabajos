<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Mi primer JavaScript</title>
</head>
<body>

    <h1>My First JavaScript</h1>

    <!-- Llamamos a una función separada -->
    <button type="button" onclick="mostrarFecha()">Click me to display Date and Time.</button>

    <p id="demo"></p>

    <script>
        function mostrarFecha() {
            document.getElementById('demo').innerHTML = Date();
        }
    </script>

</body>
</html>