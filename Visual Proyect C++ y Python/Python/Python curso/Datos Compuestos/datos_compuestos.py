#Una lista de tipo arrat (o dato compuesto) se puede modificar, eliminar, o meter mas datos
lista = ["Pedro", "Luis", "Felipe", "Derek"]
if (lista [0] == "Pedro" ):
    print(True)
else:
    print(False);
lista [3] = "Kevin"
print(lista[3])
#Mientras q una lista normal se estara estatica durante todo el tiempo
list = ("Forma", "Triangulo", "Circulo", "Cuadrado")
print(list[0])
#Un conjunto no se puede modificar cada dato pero se puede modificar toda la lista (osea en general creando otra lista con el mismo nombre de la variable), tambien de q no muestra datos duplicaados, junto q no muestra elemento por elemento
conjunto = {"Manzana", "Platano", "mandarina", "Naranja"}
#print(conjunto[3]) => No
print(conjunto)
conjunto = {"Nothing"}
print(conjunto)
#El diccionario funciona como un sistema .json, osea, puede tener datos asociados con nombres y se separa con comas (si hay mas de uno, siendo el ultimo el q no lleva coma)
diccionario = {
    'nombre' : "Hugo",
    'proyecto' : "Alerta Orfeo",
    'Edad' : "16 años"
}
print(diccionario['Edad'])
