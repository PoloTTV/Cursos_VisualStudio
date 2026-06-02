from flask import Flask, request, redirect
import json
import os

app = Flask(__name__)

def cargar_usuarios():
    if os.path.exists("datos.json"):
        with open("datos.json", "r", encoding="utf-8") as file:
            return json.load(file)
    return {}

def guardar_usuarios(usuarios):
    with open("datos.json", "w", encoding="utf-8") as file:
        json.dump(usuarios, file, ensure_ascii=False, indent=4)

@app.route("/", methods=["GET", "POST"])
def registro():
    if request.method == "POST":
        name = request.form["nombre"]
        edad = request.form["edad"]
        trabajo = request.form["trabajo"]
        telefono = request.form["telefono"]
        usuarios = cargar_usuarios()
        usuarios[name] = {
            "Nombre": name,
            "Edad": edad,
            "Trabajo": trabajo,
            "Num. de teléfono": telefono
        }
        guardar_usuarios(usuarios)
        return redirect("/")
    usuarios = cargar_usuarios()
    html = """
    <h1>Registro de usuario</h1>
    <form method="post">
        Nombre: <input name="nombre"><br>
        Edad: <input name="edad"><br>
        Trabajo: <input name="trabajo"><br>
        Teléfono: <input name="telefono"><br>
        <input type="submit" value="Registrar">
    </form>
    <h2>Usuarios registrados</h2>
    """
    for nombre, datos in usuarios.items():
        html += f"<h3>{nombre}</h3><ul>"
        for clave, valor in datos.items():
            html += f"<li>{clave}: {valor}</li>"
        html += "</ul>"
    return html

if __name__ == "__main__":
    app.run(debug=True)
    