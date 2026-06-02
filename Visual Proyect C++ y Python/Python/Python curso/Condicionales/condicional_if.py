calorias_generadas = 2000
calorias_gastadas = 1800

if calorias_generadas - calorias_gastadas <= 200:
    print("Estas muy bien")
elif calorias_generadas - calorias_gastadas <= 501:
    print("Estas relativamente bien")
elif calorias_generadas - calorias_gastadas <= 701:
    print("Tenes que hacer mas ejercicio o comer menos")
elif calorias_generadas - calorias_gastadas > 700:
    print("Tienes q hacer ejercicio o subiras muy rapido de peso")
else:
    print("Error")