import json
import sys
print("Hola, bienvenido al sistema de inicio de sesión.")
question = str(input("¿Tienes una cuenta? (Sí/No): ")).lower()
if question == "sí" or question == "Si":
    username = str(input("Por favor, ingresa tu nombre de usuario: "))
    password = str(input("Por favor, ingresa tu contraseña: "))
    print(f"Bienvenido de nuevo, {username}!")
     #Leer datos del archivo JSON
    with open("datos.json", "r", encoding="utf-8") as file:
        usuarios = json.load(file)

    # Verificar si el usuario y la contraseña coinciden
    if username in usuarios and usuarios[username]["Trabajo"] == password:
        print(f"Bienvenido de nuevo, {username}!")
        sys.exit()
    else:
        print("Usuario o contraseña incorrectos.")
elif question == "no" or question == "No":   
    create_account = str(input("¿Te gustaría crear una cuenta? (Sí/No): ")).lower()
    if create_account == "si" or create_account == "Si":
        print("Por favor, ingresa sus datos en el siguiente programa.")
        with open("Encuesta.py", "r") as file:
            exec(file.read())
    else:
        print("No hay problema, puedes volver cuando quieras.")
        exit()    