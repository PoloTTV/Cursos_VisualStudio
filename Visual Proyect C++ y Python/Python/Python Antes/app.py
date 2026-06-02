from flask import Flask, request, redirect
import json
import os

app = Flask(__name__)

def cargar_usuarios():
    if os.path.exists("usuarios.json"):
        with open("usuarios.json", "r", encoding="utf-8") as f:
            return [json.loads(line) for line in f if line.strip()]
    return []

def guardar_usuario(datos):
    with open("usuarios.json", "a", encoding="utf-8") as f:
        f.write(json.dumps(datos) + "\n")

@app.route("/", methods=["GET", "POST"])
def registro():
    mensaje = ""
    if request.method == "POST":
        usuario = request.form["usuario"]
        contrasena = request.form["contrasena"]
        email = request.form["email"]
        telefono = request.form["telefono"]
        if not usuario or not contrasena:
            mensaje = "Usuario y contraseña son obligatorios"
        else:
            guardar_usuario({
                "usuario": usuario,
                "contrasena": contrasena,
                "email": email,
                "telefono": telefono
            })
            mensaje = "Usuario registrado correctamente"
    usuarios = cargar_usuarios()
    html = """
    <html>
    <head>
    <title>Registro de Usuario</title>
    <style>
        body {{ font-family: Arial; background: #f0f0f0; }}
        .container {{ background: #fff; padding: 30px; margin: 40px auto; width: 350px; border-radius: 10px; box-shadow: 0 0 10px #aaa; }}
        h1 {{ text-align: center; color: #333; }}
        label {{ display: block; margin-top: 15px; }}
        input[type=text], input[type=password] {{ width: 100%; padding: 8px; margin-top: 5px; border-radius: 5px; border: 1px solid #ccc; }}
        .btn {{ width: 100%; padding: 10px; background: #4CAF50; color: white; border: none; border-radius: 5px; margin-top: 20px; font-size: 16px; }}
        .msg {{ color: green; text-align: center; margin-top: 10px; }}
        .usuarios {{ margin-top: 30px; }}
        .usuario {{ background: #e9e9e9; padding: 10px; border-radius: 5px; margin-bottom: 10px; }}
    </style>
    </head>
    <body>
¿    <div class="container">
        <h1>Registro de Usuario</h1>
        <form method="post">
            <label>Usuario:</label>
            <input name="usuario" type="text" required>
            <label>Contraseña:</label>
            <input name="contrasena" type="password" required>
            <label>Email:</label>
            <input name="email" type="text">
            <label>Teléfono:</label>
            <input name="telefono" type="text">
            <button class="btn" type="submit">Registrar</button>
        </form>
        <div class="msg">{mensaje}</div>
        <div class="usuarios">
            <h2>Usuarios registrados</h2>
            {usuarios_html}
        </div>
    </div>
    </body>
    </html>
    """
    usuarios_html = ""
    for u in usuarios:
        usuarios_html += f"<div class='usuario'><b>{u['usuario']}</b><br>Email: {u['email']}<br>Teléfono: {u['telefono']}</div>"
    return html.format(mensaje=mensaje, usuarios_html=usuarios_html)

if __name__ == "__main__":
    app.run(debug=True)
            