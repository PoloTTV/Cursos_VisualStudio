#esta parte son variables (la variable a y b) y concatenacion de texto (como se observa en el nombre)#
a=20;
b=30;
c= a + b + 1
print (c)
name = "Hugo "
apellido = "Leyton"
Name = "Alejandro "
#este tipo de definicion de variable se llama Snake_case
#Aunque hay otra fomra llamada cameCase
nombre_completo = name + Name + apellido
bienvenida = "!Hola¡ " + nombre_completo + " ¿Como estas?"
print(bienvenida)
#Esto es otra forma de concatenar texto (con f-strings)
bienvenida_2 = f"Espero estes muy bien! {name}Que haces?"
print(bienvenida_2)
#Asi es como se elimina un dato/variable
name_2 = "Alejandro"
print(name_2)
del name_2
#Esta es una forma de llamar una parte de un texto o varaible y saber si esta o no en el
print("Esp" in bienvenida_2) #Estara en True (verdadero)
print("higo" in name) #Estara en False (falso)
print("Leyton" not in apellido) #Estara en False ya que este es "si no esta" (si fuera al contrario seria verdadero)
