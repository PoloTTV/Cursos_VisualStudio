import os
import sys
import json
def main():
    while True :
        print("Ingresa tu opcion: ")
        opc=int(input("1. Registrarse\n2. Iniciar sesion\n3. Salir de la aplicacion\n"))
        if opc == 1:
            registrar()
        elif opc == 2:
            iniciar_sesion()
        elif opc == 3:
            salir()
def registrar():
    print("Registrese Por Favor")
    n = input("Ingrese Su Usuario: ")
    p = input("Ingrese Su Contraseña: ")
    em = input("Ingrese Su Email: ")
    number = input("Ingrese Su Numero de Telefono: ")
    datos = {
        "usuario": n,
        "contrasena": p,
        "email": em,
        "telefono": number,
    }
    with open("usuarios.json", "a") as f:
        f.write(json.dumps(datos) + "\n")
        print("Registro exitoso, estos datos se guardaron en usuarios.json")
def iniciar_sesion():

    print("Inicie Sesion Por Favor")
    n = input("Ingrese Su Usuario: ")
    p = input("Ingrese Su Contraseña: ")
    number = input("Ingrese Su Numero de Telefono: ")
    with open("usuarios.json", "r") as f:
        for line in f:
            datos = json.loads(line)
            if datos["usuario"] == n and datos["contrasena"] == p and datos["telefono"] == number:
                print("Inicio de sesion exitoso")
                print(f"Bienvenido {n} !")
                print(f"Tu email es: {datos["email"]}\nTu numero de telefono es: {datos["telefono"]}\nTu usuario es: {datos["usuario"]}\nTu contrasena es: {datos["contrasena"]}")
                print("le interesa hacer algun cambio?, o desea cerrar sesion?")
                mon = int(input("1- Cerrar sesion\n2- Cambiar datos\n"))
                if mon == 1:
                    return(main())
                elif mon == 2:
                    Ch_d = input("Desea cambiar sus datos? (si/no): ")
                    if Ch_d.lower() == "si":
                        cambiar_datos()
                    elif Ch_d.lower() == "no":
                        print("No se han realizado cambios en sus datos")
                        return(main())
    print("Usuario o contraseña incorrectos")
def salir():
    print("Saliendo de la aplicacion...")
    sys.exit(0)
    main()
def cambiar_datos():
    print("Cambiar Datos")
    n = input("Ingrese Su Usuario: ")
    p = input("Ingrese Su Contraseña: ")
    em = input("Ingrese Su Email: ")
    number = input("Ingrese Su Numero de Telefono: ")
    
    updated_data = {
        "usuario": n,
        "contrasena": p,
        "email": em,
        "telefono": number,
    }
    
    with open("usuarios.json", "r") as f:
        lines = f.readlines()
    with open("usuarios.json", "w") as f:
        for line in lines:
            datos = json.loads(line)
            if datos["usuario"] == n:
                f.write(json.dumps(updated_data) + "\n")
                print("Datos actualizados exitosamente")
                return(main())
            else:
                f.write(line)
                print("Usuario no encontrado, no se han realizado cambios en sus datos")
                return(main())
if __name__ == "__main__":
    main()