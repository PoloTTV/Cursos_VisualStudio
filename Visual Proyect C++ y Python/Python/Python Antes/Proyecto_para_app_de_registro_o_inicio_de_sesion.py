import json
import sys
import os
import tkinter as tk
from tkinter import messagebox
class App:
    def __init__(self, root):
        self.root = root

    def guardar_usuario(self):
        usuario = self.entry_usuario.get()
        contrasena = self.entry_contrasena.get()
        email = self.entry_email.get()
        telefono = self.entry_telefono.get()
        
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
        self.entry_usuario.delete(0, tk.END)
        self.entry_contrasena.delete(0, tk.END)
        self.entry_email.delete(0, tk.END)
        self.entry_telefono.delete(0, tk.END)

    def i_s(self):
        usuario = self.entry_usuario_login.get()
        contrasena = self.entry_contrasena_login.get()
        
        if not usuario or not contrasena:
            messagebox.showerror("Error", "Usuario y contraseña son obligatorios")
            return
        
        with open("usuarios.json", "r", encoding="utf-8") as f:
            for line in f:
                datos = json.loads(line)
                if datos["usuario"] == usuario and datos["contrasena"] == contrasena:
                    messagebox.showinfo("Éxito", f"Bienvenido {usuario}!")
                    return
        
        messagebox.showerror("Error", "Usuario o contraseña incorrectos")

    def registro(self):
        register = tk.Toplevel(self.root)
        register.title("Registro de Usuario")
        register.geometry("500x500")
        tk.Label(text="Bienvenido al Registro de Usuario", bg="lightblue").pack(pady=20)
        register.configure(bg="lightblue")
        tk.Label(register, text="Usuario:", bg="lightblue").pack()
        self.entry_usuario = tk.Entry(register)
        self.entry_usuario.pack()
        tk.Label(register, text="Contraseña:",bg="lightblue").pack()
        self.entry_contrasena = tk.Entry(register)
        self.entry_contrasena.pack()
        tk.Label(register, text="Confirme su contraseña", bg="lightblue").pack()
        self.entry_contrasena_confirm = tk.Entry(register)
        self.entry_contrasena_confirm.pack()
        tk.Label(register, text="(Opcional) E-mail:", bg="lightblue").pack()
        self.entry_email = tk.Entry(register)
        self.entry_email.pack()
        tk.Label(register, text="(Opcional) Teléfono:", bg="lightblue").pack()
        self.entry_telefono = tk.Entry(register)
        self.entry_telefono.pack()
        tk.Button(register, text="Registrar", bg="lightblue",command=self.guardar_usuario).pack(pady=20)
        tk.Button(register, text="Cerrar", bg="lightblue",command=register.destroy).pack(pady=20)
        
def inicio_de_sesion(app):
    sesion = tk.Toplevel()
    sesion.title("Inicio de sesion")
    sesion.geometry("500x700")
    tk.Label(sesion, text="Usuario:").pack()
    app.entry_usuario_login = tk.Entry(sesion)
    app.entry_usuario_login.pack()
    tk.Label(sesion, text="Contraseña:").pack()
    app.entry_contrasena_login = tk.Entry(sesion, show="*")
    app.entry_contrasena_login.pack()
    tk.Button(sesion, text="Iniciar Sesión", command=app.i_s).pack()
    tk.Button(sesion, text="Cerrar", command=sesion.destroy).pack(pady=20)
def main():
    root = tk.Tk()
    root.title("Registro y Inicio de sesion")
    root.geometry("200x300")
    root.configure(bg="lightblue")
    app = App(root)

    tk.Label(root, text="Bienvenido a la App de Registro e Inicio de Sesión", bg="lightblue").pack(pady=20)
    group = tk.LabelFrame(root, text="Opciones", padx=10, pady=10, bg="lightblue")
    group.pack(padx=20, pady=20)

    tk.Button(group, text="Registro :D", background="grey", command=app.registro).pack(pady=20)
    tk.Button(group, text="Inicio de Sesión :U", bg="green",command=lambda: inicio_de_sesion(app)).pack(pady=20)
    tk.Button(group, text="Salir >:3", bg="brown", command=sys.exit).pack(pady=20)
    tk.Label(root, text="Desarrollado por: Hugo", bg="lightblue").pack(pady=20)
    tk.Label(root, text="Version 1.0", bg="lightblue").pack(pady=20)
    tk.Label(root, text="Fecha: 2023-10-01", bg="lightblue").pack(pady=20)
    root.mainloop()

if __name__ == "__main__":
    main()
