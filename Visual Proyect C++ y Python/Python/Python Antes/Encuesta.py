import os
import sys
import json

print("Hola, como te llamas?")
name=str(input("Nombre: "))
print("Hola, " + name + ", encantado de conocerte.")
print("¿Cuántos años tienes?")
age=int(input("Edad: "))
if age < 18:
    print("Eres menor de edad.")
    print("Disculpa, no puedes acceder al programa.")
else:
    print("Eres mayor de edad.")
    print("Puedes acceder al programa.")
    color = str(input("¿Cuál es tu color favorito? "))
    print("Entonces, tu color favorito es " + color + ".")
    print(color + " es un color muy bonito.")
    job = str(input("¿A qué te dedicas? "))
    if job == "Estudiante" or job == "Estudios" or job == "estudios ":
        print("¡Genial! Estudiar es muy importante.")
        study = str(input("¿Qué estás estudiando? "))
        if study == "Programacion" or study == "Informatica" or study == "Mecatronica":
            print("¡Eso suena interesante! La programación es una habilidad muy valiosa.")
            print("¿Te gustaría trabajar en el campo de la tecnología?")
            tech_interest = str(input("Sí/No: "))
            if tech_interest.lower() == "sí" or tech_interest.lower() == "si":
                print("interesante, tenemos una propuesta para ti :D.")
                print("¿Te gustaría trabajar en desarrollo de software, inteligencia artificial o ciberseguridad?")
                job_interest = str(input("Sí/No: "))
                if job_interest.lower() == "sí" or job_interest.lower() == "si":
                    tech_field = str(input("Desarrollo de software/Inteligencia artificial/Ciberseguridad: "))
                    if tech_field.lower() == "desarrollo de software":
                        num = int(input("Por favor, ingresa tu número de teléfono: "))
                        if bool(num) == True:
                            print("¡Perfecto! Nos pondremos en contacto contigo pronto.")
                            sys.exit()
                    elif tech_field.lower() == "inteligencia artificial":
                        num = int(input("Por favor, ingresa tu número de teléfono: "))
                        if bool(num) == True:
                            print("¡Perfecto! Nos pondremos en contacto contigo pronto.")
                            sys.exit()
                    elif tech_field.lower() == "ciberseguridad":
                        num = int(input("Por favor, ingresa tu número de teléfono: "))
                        if bool(num) == True:
                            print("¡Perfecto! Nos pondremos en contacto contigo pronto.")     
                            sys.exit()
                else:
                    print("No hay problema, hay muchas otras áreas interesantes.")
                    sys.exit()
            else:
                print("No hay problema, hay muchas otras áreas interesantes.")
        elif study == "Ciencias" or study == "Matemáticas":
            print("¡Excelente! Las ciencias y las matemáticas son fundamentales para muchas carreras.") 
        elif study == "Artes" or study == "Diseño":
            print("¡Maravilloso! Las artes y el diseño son campos creativos muy importantes.")
        else:
            print("¡Eso suena interesante! Cada campo de estudio tiene su propio valor.")
        print("Y te gustan tus estudios, ¿verdad?")
        if str(input("Sí/No: ")).lower() == "sí" or str(input("Sí/No: ")).lower() == "si":
            print("¡Genial! Es importante disfrutar lo que estudias.")
            print("Gracias por compartirlo conmigo.")
            print("Hasta luego, " + name + ":D.")
            sys.exit()
        else:
            print("Lo siento, espero que encuentres algo que te guste más.")
            print("Gracias por compartirlo conmigo.")
            print("Hasta luego, " + name + ":D.")
            sys.exit()    
    else:
                
        print("Entonces, trabajas como " + job + ".")
        feel= str(input("Y te gusta tu trabajo? (Sí/No): "))
        if feel == "sí" or feel.lower() == "Si":
            print("¡Qué bien! Me alegra que te guste tu trabajo.")
        elif feel.lower() == "no":
            print("Lo siento, espero que encuentres algo que te guste más.")
        else:
            print("Respuesta no válida. Por favor, responde con 'Sí' o 'No'.")
        print("Nos gustaria si nos podrias dar tu número de teléfono para contactarte en caso de que necesitemos más información :D .")
        num = input("Por favor, ingresa tu número de teléfono (opcional): ")
        if num:
            print("Gracias por proporcionar tu número de teléfono.")
        else:
            print("No hay problema, puedes omitirlo si lo prefieres.")
        print("Gracias por compartir un poco sobre ti, " + name + ".")
        # Cargar usuarios existentes o crear un diccionario vacío
if os.path.exists("datos.json"):
    with open("datos.json", "r", encoding="utf-8") as file:
        usuarios = json.load(file)
else:
    usuarios = {}

# Agregar o actualizar el usuario actual
usuarios[name] = {
    "Nombre": name,
    "Edad": age,
    "Trabajo": job,
    "Num. de teléfono": num if 'num' in locals() else "No proporcionado",
}

print("Aquí están los datos que compartiste:")
for key, value in usuarios[name].items():
    print(f"{key}: {value}")

print("Hasta luego, " + name + ":D.")

# Guardar todos los usuarios en el archivo
with open("datos.json", "w", encoding="utf-8") as file:
    json.dump(usuarios, file, ensure_ascii=False, indent=4)
sys.exit()