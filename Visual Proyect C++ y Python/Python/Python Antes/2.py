import tkinter as tk

root = tk.Tk()
root.title("Ejemplo de LabelFrame")

grupo = tk.LabelFrame(root, text="Datos del usuario", padx=10, pady=10)
grupo.pack(padx=20, pady=20)

tk.Label(grupo, text="Nombre:").pack()
tk.Entry(grupo).pack()
tk.Label(grupo, text="Edad:").pack()
tk.Entry(grupo).pack()

root.mainloop()
#         self.entry_usuario.pack()
#         tk.Label(register, text="Contraseña:", bg="lightblue").pack()#         self.entry_contrasena = tk.Entry(register, show="*")
#         self.entry_contrasena.pack()  