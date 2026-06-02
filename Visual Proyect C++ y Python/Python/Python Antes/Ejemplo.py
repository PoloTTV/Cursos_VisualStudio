import tkinter as tk
from tkinter import messagebox
import json
import os

def guardar_usuario():
    usuario = entry_usuario.get()
    contrasena = entry_contrasena.get()
    email = entry_email.get()
    telefono = entry_telefono.get()
    if not usuario or not contrasena:
        messagebox.showerror("Error", "Usuario y contraseña son obligatorios")
        return
    datos = {
        "usuario": usuario,
        "contrasena": contrasena,
        "email": email,
        "telefono": telefono,
    }
    with open("usuarios.json", "a", encoding="utf-8") as f:
        f.write(json.dumps(datos) + "\n")
    messagebox.showinfo("Éxito", "Usuario registrado correctamente")
    entry_usuario.delete(0, tk.END)
    entry_contrasena.delete(0, tk.END)
    entry_email.delete(0, tk.END)
    entry_telefono.delete(0, tk.END)

root = tk.Tk()
root.title("Registro de Usuario")

tk.Label(root, text="Usuario:").grid(row=0, column=0)
entry_usuario = tk.Entry(root)
entry_usuario.grid(row=0, column=1)

tk.Label(root, text="Contraseña:").grid(row=1, column=0)
entry_contrasena = tk.Entry(root, show="*")
entry_contrasena.grid(row=1, column=1)

tk.Label(root, text="Email:").grid(row=2, column=0)
entry_email = tk.Entry(root)
entry_email.grid(row=2, column=1)

tk.Label(root, text="Teléfono:").grid(row=3, column=0)
entry_telefono = tk.Entry(root)
entry_telefono.grid(row=3, column=1)

tk.Button(root, text="Registrar", command=guardar_usuario).grid(row=4, column=0, columnspan=2)

root.mainloop()