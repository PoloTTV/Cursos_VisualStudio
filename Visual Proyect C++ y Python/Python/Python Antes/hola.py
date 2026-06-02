import sys
import os

def suma():
    print("Bienvenido a la calculadora de suma")
    num_1 = int(input("Ingrese el primer numero: "))
    num_2 = int(input("Ingrese el segundo numero: "))
    resultado = num_1 + num_2
    print(f"{num_1} + {num_2} = {resultado}")

def resta():
    print("Bienvenido a la calculadora de resta")
    num_1 = int(input("Ingrese el primer numero: "))
    num_2 = int(input("Ingrese el segundo numero: "))
    resultado = num_1 - num_2
    print(f"{num_1} - {num_2} = {resultado}")

def multiplicacion():
    print("Bienvenido a la calculadora de multiplicacion")
    num_1 = int(input("Ingrese el primer numero: "))
    num_2 = int(input("Ingrese el segundo numero: "))
    resultado = num_1 * num_2
    print(f"{num_1} x {num_2} = {resultado}")

# ...puedes agregar las funciones para division, potencia y raiz cuadrada aquí...

def main():
    print("Bienvenidos a la Calculadora")
    calc = int(input("Ingrese su opcion:\n 1.Suma \n 2.Resta \n 3.Multiplicacion \n 4.Division \n 5.Potencia \n 6.Raiz Cuadrada \n"))
    if calc == 1:
        suma()
    elif calc == 2:
        resta()
    elif calc == 3:
        multiplicacion()
    # ...agrega elif para las otras opciones...
    else:
        print("Opcion no valida")

if __name__ == "__main__":
    main()
